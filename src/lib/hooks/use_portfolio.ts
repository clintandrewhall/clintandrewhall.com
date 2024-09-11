// Portfolio Images
interface OutputMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}

type Width = 480 | 1280;

// Vite needs this to be a literal, but I need it to be a variable
// to derive the correct key... so it's COPY PASTA TIME
const IMG_PATH_PREFIX = '/src/content/portfolio/images/';

const jpgModules = import.meta.glob<{ default: OutputMetadata[] }>(
  '@content/portfolio/images/*.jpg',
  {
    query: { w: '480;1280', as: 'metadata', format: 'webp' },
    eager: true,
  },
);

const pngModules = import.meta.glob<{ default: OutputMetadata[] }>(
  '@content/portfolio/images/*.png',
  {
    query: { w: '480;1280', as: 'metadata', format: 'webp' },
    eager: true,
  },
);

const imageModules = { ...jpgModules, ...pngModules };

const images = Object.fromEntries(
  Object.entries(imageModules).map(([k, v]) => [
    k.replace(IMG_PATH_PREFIX, '').replace('.jpg', '').replace('.png', ''),
    // TODO: Clean up this horrible type cast
    Object.fromEntries(v.default.map((item) => [item.width as Width, item])) as Record<
      Width,
      OutputMetadata
    >,
  ]),
);

export const usePortfolioImage = (id: string | undefined, width: Width) => {
  if (id && images[id]) {
    const image = images[id][width];

    if (image) {
      return image;
    }
  }

  return null;
};

// Portfolio Entries
const DEFAULT_LIMIT = 6;
const contents = import.meta.glob<PortfolioEntry>('@content/portfolio/*.md', { eager: true });
const entries = Object.values(contents).sort(
  (a, b) => b.attributes.timestamp - a.attributes.timestamp,
);

export const useAllEntries = () => entries;
export const useEntries = (limit = DEFAULT_LIMIT) => useAllEntries().slice(0, limit);
export const useEntry = (id: string) => useAllEntries().find((entry) => entry.attributes.id === id);

export const useAllEntryIds = () => useAllEntries().map((entry) => entry.attributes.id);
export const useEntryIds = (limit = DEFAULT_LIMIT) => useAllEntryIds().slice(0, limit);

export const useAllEntryMetadata = () => entries.map((entry) => entry.attributes);
export const useEntriesMetadata = (limit = DEFAULT_LIMIT) => useAllEntryMetadata().slice(0, limit);
export const useEntryMetadata = (id: string) =>
  useAllEntryMetadata().find((entry) => entry.id === id);
