import { Article } from '@pages/article';

import type { Route } from './+types/portfolio_item';

export const loader = async ({ params }: Route.LoaderArgs) => {
  let article: ArticleImport | null = null;

  console.log('Loading article:', params);

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
  console.log('article', article);
  return <Article article={article} />;
}

// export async function clientLoader({
//   params,
// }: Route.ClientLoaderArgs) {
//   const res = await fetch(`/api/products/${params.pid}`);
//   const product = await res.json();
//   return product;
// }

// const PortfolioItem = {
//   const { id } = useParams();
//   const article = useLoaderData<ArticleImport | undefined>();
//   return <Article article={article} />;
// };

// export default PortfolioItem;
