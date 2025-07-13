import { Layout as LayoutComponent } from '@components/layout';

import { ArticleLayout as ArticleLayoutComponent } from './article_layout';
import { ArticleNotFound } from './article_not_found';

export interface ArticleProps {
  article?: ArticleImport | null;
}

const Header = ({ article }: ArticleProps) => (
  <LayoutComponent.Header background={!!article ? 'clear' : 'opaque'} selectedId="portfolio" />
);

const Layout = ({ article }: ArticleProps) =>
  !!article ? <ArticleLayoutComponent {...{ article }} /> : <Article.NotFound />;

const ArticleComponent = ({ article }: ArticleProps) => {
  if (!article) {
    return (
      <>
        <Article.Header />
        <ArticleNotFound />
        <Article.Footer />
      </>
    );
  }
  console.log('ArticleComponent', article);

  return (
    <>
      <Article.Header {...{ article }} />
      <Article.Layout {...{ article }} />
      <Article.Footer />
    </>
  );
};

export const Article = Object.assign(ArticleComponent, {
  Header,
  Layout,
  Footer: LayoutComponent.Footer,
  NotFound: ArticleNotFound,
});
