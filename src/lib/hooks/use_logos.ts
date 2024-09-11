// Avatars
interface OutputMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}

// Vite needs this to be a literal, but I need it to be a variable
// to derive the correct key... so it's COPY PASTA TIME
const IMG_PATH_PREFIX = '/src/content/logos/';

const imageModules = import.meta.glob<{ default: OutputMetadata }>('@/content/logos/*.png', {
  query: { w: '40', as: 'metadata', format: 'webp' },
  eager: true,
});

const logos: Record<string, OutputMetadata> = {};

Object.entries(imageModules).forEach(([k, v]) => {
  logos[k.replace(IMG_PATH_PREFIX, '').replace('.png', '')] = v.default;
});

export const useLogo = (id: string | undefined) => {
  if (id && logos[id]) {
    const image = logos[id];

    if (image) {
      return image;
    }
  }

  return null;
};