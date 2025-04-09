import { Article as ArticleComponent } from '@pages/article';
import { useParams } from 'react-router';

export const Article = () => {
  const params = useParams<'id'>();
  return <ArticleComponent id={params.id || 'not-found'} />;
};
