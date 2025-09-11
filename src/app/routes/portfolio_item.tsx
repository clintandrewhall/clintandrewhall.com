import { PortfolioEntry } from '@pages/portfolio/entry';

import type { Route } from './+types/portfolio_item';
import { getMeta } from './meta';

export const meta = ({ data }: { data: PortfolioEntryImport | null }) => {
  return getMeta({
    title: `${data?.attributes?.name}`,
  })();
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  let article: PortfolioEntryImport | null = null;

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
  return <PortfolioEntry article={article} />;
}
