import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/portfolio', 'routes/portfolio.tsx'),
  route('/portfolio/:id', 'routes/portfolio_item.tsx'),
  route('/tag/:tagId', 'routes/article_tag.tsx'),
  route('*', 'routes/not_found.tsx'),
] satisfies RouteConfig;
