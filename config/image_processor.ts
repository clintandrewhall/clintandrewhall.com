import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

import {
  getImageFileName,
  getImagePath,
  IMAGE_VALUE_LARGE,
  IMAGE_VALUE_MEDIUM,
  SIZE_TO_VALUE,
  TARGET_SIZES,
} from '../src/lib/image_path';

const DIR_SOURCE = path.resolve('src/content/portfolio/images');
const DIR_IMAGES = 'images/portfolio';
const DIR_ASSETS = path.resolve(`dist/assets/${DIR_IMAGES}`);
const DIR_PUBLIC = path.resolve(`public/${DIR_IMAGES}`);
const OUTPUT_DIRS = [DIR_ASSETS, DIR_PUBLIC];

const DIMENSIONS_FILE = 'image_dimensions.json';
const QUALITY = 70;

const sharpen = async (sourcePath: string, assetPath: string, width: number) =>
  sharp(sourcePath)
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality: QUALITY, lossless: false, effort: 6 })
    .toFile(assetPath);

const findSourceImage = (imageId: string): string | null => {
  const jpgPath = path.join(DIR_SOURCE, `${imageId}.jpg`);
  const pngPath = path.join(DIR_SOURCE, `${imageId}.png`);

  if (fs.existsSync(jpgPath)) {
    return jpgPath;
  }

  if (fs.existsSync(pngPath)) {
    return pngPath;
  }

  return null;
};

const isPublicImageStale = (imageId: string, sourceMtimeMs: number): boolean => {
  for (const size of TARGET_SIZES) {
    const filename = getImageFileName(imageId, size);
    const publicPath = path.join(DIR_PUBLIC, filename);

    try {
      const outStat = fs.statSync(publicPath);
      if (outStat.mtimeMs < sourceMtimeMs) {
        return true;
      }
    } catch {
      return true;
    }
  }

  return false;
};

const shouldUseDevCache = (imageId: string, sourcePath: string): boolean => {
  if (!(process.env.NODE_ENV !== 'production')) {
    return false;
  }

  try {
    const sourceStat = fs.statSync(sourcePath);
    return !isPublicImageStale(imageId, sourceStat.mtimeMs);
  } catch (error) {
    console.warn(`[image_processor] Could not stat source image ${imageId}:`, error);
    return false;
  }
};

export class ImageProcessor {
  private processingQueue: Set<string> = new Set();
  private dimensionCache: Map<string, { width: number; height: number }> = new Map();

  constructor() {
    OUTPUT_DIRS.forEach((dir) => fs.mkdirSync(dir, { recursive: true }));
    this.readDimensionsCache();
  }

  // TODO - this is super hacky, but it works for now
  get isProcessing(): boolean {
    return this.processingQueue.size > 0;
  }

  private readDimensionsCache(): void {
    try {
      for (const dir of OUTPUT_DIRS) {
        const file = path.join(dir, DIMENSIONS_FILE);

        if (!fs.existsSync(file)) {
          continue;
        }

        const raw = fs.readFileSync(file, 'utf8');

        // Safe to cast, as this script is the source of the file.
        const json = JSON.parse(raw) as Record<string, { width: number; height: number }>;

        Object.entries(json).forEach(([id, dims]) => {
          this.dimensionCache.set(id, dims);
        });

        break;
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

  private async generateOutputs(imageId: string, sourcePath: string): Promise<void> {
    await Promise.all(
      TARGET_SIZES.map((size) =>
        this.generateImage(sourcePath, getImageFileName(imageId, size), SIZE_TO_VALUE[size]),
      ),
    );
  }

  private async updateDimensionCache(imageId: string, sourcePath: string): Promise<void> {
    try {
      const meta = await sharp(sourcePath).metadata();
      if (!meta.width || !meta.height) {
        return;
      }

      const existing = this.dimensionCache.get(imageId);
      const hasChanged =
        !existing || existing.width !== meta.width || existing.height !== meta.height;

      if (hasChanged) {
        this.dimensionCache.set(imageId, { width: meta.width, height: meta.height });
        await this.writeDimensionsCache();
      }
    } catch (error) {
      console.warn(`[image_processor] Could not read metadata for ${imageId}:`, error);
    }
  }

  async processImage(imageId: string): Promise<void> {
    if (this.processingQueue.has(imageId)) {
      return;
    }

    this.processingQueue.add(imageId);

    try {
      const sourcePath = findSourceImage(imageId);

      if (!sourcePath) {
        console.warn(`[image_processor] Image not found: ${imageId}`);
        return;
      }

      const useDevCache = shouldUseDevCache(imageId, sourcePath);

      if (!useDevCache) {
        await this.generateOutputs(imageId, sourcePath);
        console.log(`[image_processor] ${imageId}: processing complete`);
      }

      await this.updateDimensionCache(imageId, sourcePath);
    } catch (error) {
      console.error(`Error processing image ${imageId}:`, error);
    } finally {
      this.processingQueue.delete(imageId);
    }
  }

  generateResponsiveHtml(
    imageId: string,
    alt: string,
    size: 'small' | 'medium' | 'large' = 'large',
    triggerProcessing: boolean = true,
  ): string {
    const sourcePath = findSourceImage(imageId);

    // TODO - replace with "broken" placeholder image
    if (!sourcePath) {
      return '';
    }

    if (triggerProcessing) {
      this.processImage(imageId);
    }

    const widthAttr = SIZE_TO_VALUE.small;
    const cached = this.dimensionCache.get(imageId);
    const ratio = cached && cached.width > 0 ? cached.height / cached.width : undefined;
    const heightAttr = Math.round(widthAttr * (ratio || 0.75));
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
