export const IMAGE_VALUE_SMALL = 480;
export const IMAGE_VALUE_MEDIUM = 880;
export const IMAGE_VALUE_LARGE = 1280;
export const SIZES = [IMAGE_VALUE_SMALL, IMAGE_VALUE_MEDIUM, IMAGE_VALUE_LARGE];
export const DIR_IMAGES = 'images/portfolio';

const SOURCE_ROOT_PREFIX = '/';

export type ImageSize = 'small' | 'medium' | 'large';

export const SIZE_TO_VALUE: Record<ImageSize, (typeof SIZES)[number]> = {
  small: IMAGE_VALUE_SMALL,
  medium: IMAGE_VALUE_MEDIUM,
  large: IMAGE_VALUE_LARGE,
};

export const TARGET_SIZES = Object.keys(SIZE_TO_VALUE) as ImageSize[];

export const getImageFileName = (imageId: string, size: ImageSize): string => {
  const width = SIZE_TO_VALUE[size];
  return `${imageId}-${width}.webp`;
};

export const getImagePath = (imageId?: string, size: ImageSize = 'large'): string | null => {
  if (!imageId) {
    return null;
  }
  return `${SOURCE_ROOT_PREFIX}${DIR_IMAGES}/${getImageFileName(imageId, size)}`;
};
