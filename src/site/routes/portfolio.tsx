import { Portfolio as Component } from '@pages/portfolio/portfolio';

import type { Route } from './+types/portfolio';
import { getMeta } from './meta';

export const meta = () => {
  return getMeta({
    title: 'Portfolio',
  })();
};

export default function Portfolio(_props: Route.ComponentProps) {
  return <Component />;
}
