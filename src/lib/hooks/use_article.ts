import { getImagePath } from '@lib/image_path';

const DEFAULT_LIMIT = 6;

// Portfolio Articles
const contents = import.meta.glob<ArticleImport>('@content/portfolio/*.md', { eager: true });

const articles = Object.values(contents).sort(
  (a, b) => b.attributes.timestamp - a.attributes.timestamp,
);

export const useArticles = (slug?: string) => {
  if (slug) {
    return articles.filter((article) => article.attributes.tags.some((tag) => tag.slug === slug));
  }
  return articles;
};

const useAllArticleIds = () => useArticles().map((article) => article.attributes.id);

const useAllArticleMetadata = () => useArticles().map((article) => article.attributes);

export const useArticleTags = () => useArticles().flatMap((article) => article.attributes.tags);

export const useArticleTag = (slug?: string) => useArticleTags().find((tag) => tag.slug === slug);

export const useArticle = (id: string) =>
  useArticles().find((article) => article.attributes.id === id);

export const useArticleIds = (limit = DEFAULT_LIMIT) => useAllArticleIds().slice(0, limit);

export const useArticleMetadata = (id: string) =>
  useAllArticleMetadata().find((article) => article.id === id);

export const useArticleImage = getImagePath;
