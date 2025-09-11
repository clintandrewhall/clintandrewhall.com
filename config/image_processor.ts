import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

import {
  getImageFileName,
  getImagePath,
  IMAGE_DIR,
  IMAGE_VALUE_LARGE,
  IMAGE_VALUE_MEDIUM,
  type ImageSize,
  SIZE_TO_VALUE,
} from '../src/lib/image_path';

const DIR_SOURCE = path.resolve('src/content/portfolio/images');
const DIR_ASSETS = path.resolve(`dist/assets/${IMAGE_DIR}`);
const DIR_PUBLIC = path.resolve(`public/${IMAGE_DIR}`);
const OUTPUT_DIRS = [DIR_ASSETS, DIR_PUBLIC];
const DIMENSIONS_FILE = 'image_dimensions.json';

const QUALITY = 70;

const sharpen = async (sourcePath: string, assetPath: string, width: number) =>
  sharp(sourcePath)
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality: QUALITY, lossless: false, effort: 6 })
    .toFile(assetPath);

export class ImageProcessor {
  private processingQueue: Set<string> = new Set();
  private dimensionCache: Map<string, { width: number; height: number }> = new Map();

  // TODO - this is super hacky, but it works for now
  get isProcessing(): boolean {
    return this.processingQueue.size > 0;
  }

  get processingCount(): number {
    return this.processingQueue.size;
  }

  private findSourceImage(imageId: string): { sourcePath: string; format: 'jpg' | 'png' } | null {
    const jpgPath = path.join(DIR_SOURCE, `${imageId}.jpg`);
    const pngPath = path.join(DIR_SOURCE, `${imageId}.png`);

    if (fs.existsSync(jpgPath)) {
      return { sourcePath: jpgPath, format: 'jpg' };
    } else if (fs.existsSync(pngPath)) {
      return { sourcePath: pngPath, format: 'png' };
    }
    return null;
  }

  // Assumes a default 4:3 aspect ratio to compute height for the smallest rendition
  // to provide stable dimensions and reduce CLS.
  // If you change source aspect ratios, update this accordingly.
  private getAssumedHeightForWidth(width: number): number {
    return Math.round(width * 0.75);
  }

  constructor() {
    OUTPUT_DIRS.forEach((dir) => fs.mkdirSync(dir, { recursive: true }));
    this.readDimensionsCache();
  }

  private readDimensionsCache(): void {
    try {
      for (const dir of OUTPUT_DIRS) {
        const file = path.join(dir, DIMENSIONS_FILE);
        if (fs.existsSync(file)) {
          const raw = fs.readFileSync(file, 'utf8');
          const json = JSON.parse(raw) as Record<string, { width: number; height: number }>;
          Object.entries(json).forEach(([id, dims]) => {
            if (typeof dims.width === 'number' && typeof dims.height === 'number') {
              this.dimensionCache.set(id, dims);
            }
          });
          break;
        }
      }
    } catch (error) {
      console.warn('[image_processor] Could not read image dimensions cache:', error);
    }
  }

  private async writeDimensionsCache(): Promise<void> {
    try {
      const json = JSON.stringify(Object.fromEntries(this.dimensionCache.entries()));
      await Promise.all(
        OUTPUT_DIRS.map(async (dir) => {
          await fs.promises.mkdir(dir, { recursive: true });
          await fs.promises.writeFile(path.join(dir, DIMENSIONS_FILE), json, 'utf8');
        }),
      );
    } catch (error) {
      console.warn('[image_processor] Could not write image dimensions cache:', error);
    }
  }

  private async generateImage(sourcePath: string, filename: string, width: number): Promise<void> {
    const assetPath = path.join(DIR_ASSETS, filename);
    const publicPath = path.join(DIR_PUBLIC, filename);

    try {
      await Promise.all([
        sharpen(sourcePath, assetPath, width),
        sharpen(sourcePath, publicPath, width),
      ]);
    } catch (error) {
      console.error(
        `[image_processor] Error generating image ${filename} at width ${width}:`,
        error,
      );
    }
  }

  processImage(imageId: string): void {
    if (this.processingQueue.has(imageId)) {
      return;
    }

    this.processingQueue.add(imageId);

    this._processImage(imageId)
      .catch((error) => console.error(`Error processing image ${imageId}:`, error))
      .finally(() => this.processingQueue.delete(imageId));
  }

  private async _processImage(imageId: string): Promise<void> {
    const sourceInfo = this.findSourceImage(imageId);

    if (!sourceInfo) {
      console.warn(`[image_processor] Image not found: ${imageId}`);
      return;
    }

    const processPromises = (Object.keys(SIZE_TO_VALUE) as ImageSize[]).map((size) =>
      this.generateImage(
        sourceInfo.sourcePath,
        getImageFileName(imageId, size),
        SIZE_TO_VALUE[size],
      ),
    );

    await Promise.all(processPromises);
    // Cache original dimensions for stable <img> width/height
    try {
      const meta = await sharp(sourceInfo.sourcePath).metadata();
      if (meta.width && meta.height) {
        this.dimensionCache.set(imageId, { width: meta.width, height: meta.height });
        await this.writeDimensionsCache();
      }
    } catch (error) {
      console.warn(`[image_processor] Could not read metadata for ${imageId}:`, error);
    }
    console.log(`[image_processor] ${imageId}: processing complete`);
  }

  generateResponsiveHtml(
    imageId: string,
    alt: string,
    size: 'small' | 'medium' | 'large' = 'large',
  ): string {
    const sourceInfo = this.findSourceImage(imageId);

    // TODO - replace with "broken" placeholder image
    if (!sourceInfo) {
      return '';
    }

    this.processImage(imageId);

    const widthAttr = SIZE_TO_VALUE.small;
    const cached = this.dimensionCache.get(imageId);
    const ratio = cached && cached.width > 0 ? cached.height / cached.width : undefined;
    const heightAttr = ratio
      ? Math.round(widthAttr * ratio)
      : this.getAssumedHeightForWidth(widthAttr);
    const sizes = `(min-width: ${IMAGE_VALUE_LARGE}px) ${IMAGE_VALUE_LARGE}px, (min-width: ${IMAGE_VALUE_MEDIUM}px) ${IMAGE_VALUE_MEDIUM}px, 100vw`;

    return `
    <picture class="article-image-${size}">
      <source srcSet="${getImagePath(imageId, 'large')}" media="(min-width: ${IMAGE_VALUE_LARGE}px)" />
      <source srcSet="${getImagePath(imageId, 'medium')}" media="(min-width: ${IMAGE_VALUE_MEDIUM}px)" />
      <source srcSet="${getImagePath(imageId, 'small')}" media="(max-width: ${IMAGE_VALUE_MEDIUM - 1}px)" />
      <img src="${getImagePath(imageId, 'small')}" alt="${alt}" ${heightAttr ? `height="${heightAttr}"` : ''} width="${widthAttr}" sizes="${sizes}" loading="lazy" decoding="async"/>
    </picture>
    `.trim();
  }
}
