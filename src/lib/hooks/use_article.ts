import { type SectionId } from '@lib/site';

// Vite needs this to be a literal, but I need it to be a variable
// to derive the correct key... so it's COPY PASTA TIME
const IMG_PATH_PREFIX = '/src/content/portfolio/images/';

const jpgModules = import.meta.glob<{ default: ImageOutputMetadata[] }>(
  '@content/portfolio/images/*.jpg',
  {
    query: { w: '480;880;1280', as: 'metadata', format: 'webp' },
    eager: true,
  },
);

const pngModules = import.meta.glob<{ default: ImageOutputMetadata[] }>(
  '@content/portfolio/images/*.png',
  {
    query: { w: '480;880;1280', as: 'metadata', format: 'webp' },
    eager: true,
  },
);

const imageModules = { ...jpgModules, ...pngModules };

const categorize = (item: ImageOutputMetadata) => {
  if (item.width > 880) {
    return 'large';
  }
  if (item.width > 480) {
    return 'medium';
  }
  return 'small';
};

const images = Object.fromEntries(
  Object.entries(imageModules).map(([k, v]) => [
    k.replace(IMG_PATH_PREFIX, '').replace('.jpg', '').replace('.png', ''),
    // TODO: Clean up this horrible type cast
    Object.fromEntries(v.default.map((item) => [categorize(item), item])) as Record<
      ImageWidth,
      ImageOutputMetadata
    >,
  ]),
);

const DEFAULT_LIMIT = 6;

// Portfolio Articles
const contents = import.meta.glob<ArticleImport>('@content/portfolio/*.md', { eager: true });
const articles = Object.values(contents).sort(
  (a, b) => b.attributes.timestamp - a.attributes.timestamp,
);

const useAllArticleIds = () => articles.map((article) => article.attributes.id as SectionId);

const useAllArticleMetadata = () => articles.map((article) => article.attributes);

export const useArticle = (id: string) => articles.find((article) => article.attributes.id === id);

export const useArticleIds = (limit = DEFAULT_LIMIT) => useAllArticleIds().slice(0, limit);

export const useArticleMetadata = (id: string) =>
  useAllArticleMetadata().find((article) => article.id === id);

export const useArticleImage = (id: string | undefined, width: ImageWidth = 'large') => {
  if (id && images[id]) {
    const image = images[id][width];

    if (image) {
      return image;
    }
  }

  return null;
};
