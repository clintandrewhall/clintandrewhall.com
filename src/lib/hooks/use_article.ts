import { getImagePath } from '@lib/image_path';
import { type TopicId } from '@lib/site';

const DEFAULT_LIMIT = 6;

// Portfolio Articles
const contents = import.meta.glob<ArticleImport>('@content/portfolio/*.md', { eager: true });
const articles = Object.values(contents).sort(
  (a, b) => b.attributes.timestamp - a.attributes.timestamp,
);

const useAllArticleIds = () => articles.map((article) => article.attributes.id as TopicId);

const useAllArticleMetadata = () => articles.map((article) => article.attributes);

export const useArticle = (id: string) => articles.find((article) => article.attributes.id === id);

export const useArticleIds = (limit = DEFAULT_LIMIT) => useAllArticleIds().slice(0, limit);

export const useArticleMetadata = (id: string) =>
  useAllArticleMetadata().find((article) => article.id === id);

export const useArticleImage = getImagePath;
