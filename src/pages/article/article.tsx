import { Layout as LayoutComponent } from '@components/layout';
import { useArticle } from '@lib/hooks';

import { ArticleLayout as ArticleLayoutComponent } from './article_layout';
import { ArticleNotFound } from './article_not_found';

interface CommonProps {
  article?: ArticleImport;
}

const Header = ({ article }: CommonProps) => (
  <LayoutComponent.Header
    background={!!article ? 'clear' : 'opaque'}
    selectedId="portfolio"
    isLocal={false}
  />
);

const Layout = ({ article }: CommonProps) =>
  !!article ? <ArticleLayoutComponent {...{ article }} /> : <Article.NotFound />;

export interface ArticleProps {
  id: string;
}

const Component = ({ id }: ArticleProps) => {
  const article = useArticle(id);

  return (
    <>
      <Article.Header {...{ article }} />
      <Article.Layout {...{ article }} />
      <Article.Footer />
    </>
  );
};

export const Article = Object.assign(Component, {
  Header,
  Layout,
  Footer: LayoutComponent.Footer,
  NotFound: ArticleNotFound,
});
