import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/portfolio/:id', 'routes/portfolio_item.tsx'),
  route('/assets/:imageId', 'routes/portfolio_asset.tsx'),
] satisfies RouteConfig;
