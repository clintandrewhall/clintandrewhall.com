import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGE_SMALL = 480;
const IMAGE_MEDIUM = 880;
const IMAGE_LARGE = 1280;
const SIZES = [IMAGE_SMALL, IMAGE_MEDIUM, IMAGE_LARGE];

const DIR = 'webp';
const DIR_SOURCE = path.resolve('src/content/portfolio/images');
const DIR_ASSETS = path.resolve(`dist/assets/${DIR}`);
const DIR_PUBLIC = path.resolve(`public/${DIR}`);
const OUTPUT_DIRS = [DIR_ASSETS, DIR_PUBLIC];

const QUALITY = 85;

const sharpen = async (sourcePath: string, assetPath: string, width: number) =>
  sharp(sourcePath)
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(assetPath);

export class ImageProcessor {
  private processingQueue: Set<string> = new Set();

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

  constructor() {
    OUTPUT_DIRS.forEach((dir) => fs.mkdirSync(dir, { recursive: true }));
  }

  private async generateImage(sourcePath: string, filename: string, width: number): Promise<void> {
    const assetPath = path.join(DIR_ASSETS, filename);
    const publicPath = path.join(DIR_PUBLIC, filename);

    try {
      await Promise.all([
        sharpen(sourcePath, assetPath, width),
        sharpen(sourcePath, publicPath, width),
      ]);
      console.log(`Generated ${filename}`);
    } catch (error) {
      console.error(`Error generating image ${filename} at width ${width}:`, error);
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
      console.warn(`Image not found: ${imageId}`);
      return;
    }

    const processPromises = SIZES.map((size) => {
      const filename = `${imageId}-${size}.webp`;
      return this.generateImage(sourceInfo.sourcePath, filename, size);
    });

    await Promise.all(processPromises);
    console.log(`Completed processing all sizes for ${imageId}`);
  }

  generateResponsiveHtml(imageId: string, alt: string): string {
    const sourceInfo = this.findSourceImage(imageId);

    // TODO - replace with "broken" placeholder image
    if (!sourceInfo) {
      return '';
    }

    this.processImage(imageId);

    return `
    <picture>
      <source srcSet="${getImagePath(imageId, 'large')}" media="(min-width: ${IMAGE_LARGE}px)" />
      <source srcSet="${getImagePath(imageId, 'medium')}" media="(min-width: ${IMAGE_MEDIUM}px)" />
      <source srcSet="${getImagePath(imageId, 'small')}" media="(max-width: ${IMAGE_MEDIUM - 1}px)" />
      <img src="${getImagePath(imageId, 'small')}" alt="${alt}"  loading="lazy" decoding="async"/>
    </picture>
    `.trim();
  }
}

export const getImagePath = (imageId: string, size: 'small' | 'medium' | 'large'): string => {
  const sizeMap: Record<string, number> = {
    small: IMAGE_SMALL,
    medium: IMAGE_MEDIUM,
    large: IMAGE_LARGE,
  };

  const width = sizeMap[size];
  return `/${DIR}/${imageId}-${width}.webp`;
};
