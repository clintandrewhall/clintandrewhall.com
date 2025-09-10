import { PortfolioTag as Component } from '@pages/portfolio';

import type { Route } from './+types/portfolio_tag';
import { getMeta } from './meta';

export const meta = ({ data }: Route.MetaArgs) => {
  return getMeta({
    title: data?.tag?.name || 'Portfolio',
  })();
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  let articles: ArticleImport[] = [];
  let tag: ArticleTag | null = null;

  if (params.tagId && params.tagId !== 'undefined') {
    try {
      // Load all portfolio articles
      const contents = import.meta.glob<ArticleImport>('@content/portfolio/*.md', { eager: true });
      const allArticles = Object.values(contents).sort(
        (a, b) => b.attributes.timestamp - a.attributes.timestamp,
      );

      // Filter articles that match the tag
      articles = allArticles.filter((article) =>
        article.attributes.tags.some((articleTag) => articleTag.slug === params.tagId),
      );

      // Find the tag information
      const allTags = allArticles.flatMap((article) => article.attributes.tags);
      tag = allTags.find((articleTag) => articleTag.slug === params.tagId) || null;
    } catch (e) {
      console.error(e);
      articles = [];
      tag = null;
    }
  }

  return { articles, tag };
};

export default function ArticleTag({ loaderData }: Route.ComponentProps) {
  return <Component articles={loaderData?.articles} tag={loaderData?.tag} />;
}
