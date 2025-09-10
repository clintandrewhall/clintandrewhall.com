import { Article } from '@pages/article';

import type { Route } from './+types/portfolio_item';
import { getMeta } from './meta';

export const meta = ({ data }: { data: ArticleImport | null }) => {
  return getMeta({
    title: `${data?.attributes?.name}`,
  })();
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  let article: ArticleImport | null = null;

  if (params.id && params.id !== 'undefined') {
    try {
      article = await import(`@content/portfolio/${params.id}.md`);
    } catch (e) {
      console.error(e);
      article = null;
    }
  }

  return article;
};

export default function PortfolioItem({ loaderData: article }: Route.ComponentProps) {
  return <Article article={article} />;
}
