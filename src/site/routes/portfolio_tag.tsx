import { PortfolioTag as Component } from '@pages/portfolio';
import { portfolioIndex } from 'virtual:portfolio-index';

import type { Route } from './+types/portfolio_tag';
import { getMeta } from './meta';

export const meta = ({ data }: Route.MetaArgs) => {
  return getMeta({
    title: data?.tag?.name || 'Portfolio',
  })();
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  let articles: PortfolioEntryImport[] = [];
  let tag: PortfolioTag | null = null;

  if (params.tagId && params.tagId !== 'undefined') {
    try {
      // Filter entries that match the tag
      const matching = portfolioIndex.filter((entry) =>
        entry.tags.some((articleTag) => articleTag.slug === params.tagId),
      );

      // shape into PortfolioEntryImport-lite objects for UI reuse
      articles = matching.map((attributes) => ({ attributes }) as PortfolioEntryImport);

      // Find the tag information
      const allTags = portfolioIndex.flatMap((entry) => entry.tags);
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
