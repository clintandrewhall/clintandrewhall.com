// Avatars
interface OutputMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}

// Vite needs this to be a literal, but I need it to be a variable
// to derive the correct key... so it's COPY PASTA TIME
const IMG_PATH_PREFIX = '/src/content/people/';

const imageModules = import.meta.glob<{ default: OutputMetadata }>('@/content/people/*.jpg', {
  query: { w: '75', as: 'metadata', format: 'webp' },
  eager: true,
});

const images: Record<string, OutputMetadata> = {};

Object.entries(imageModules).forEach(([k, v]) => {
  images[k.replace(IMG_PATH_PREFIX, '').replace('.jpg', '')] = v.default;
});

export const useAvatar = (id: string | undefined) => {
  if (id && images[id]) {
    const image = images[id];

    if (image) {
      return image;
    }
  }

  return null;
};
