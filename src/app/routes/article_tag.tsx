import { ArticleTag as Component } from '@pages/article';

import type { Route } from './+types/article_tag';

export default function ArticleTag({ params }: Route.ComponentProps) {
  return <Component {...params} />;
}
