import { NotFound as Component } from '@pages/not_found';

import type { Route } from './+types/not_found';
import { getMeta } from './meta';

export const meta = getMeta();

export default function NotFound(_props: Route.ComponentProps) {
  return <Component />;
}
