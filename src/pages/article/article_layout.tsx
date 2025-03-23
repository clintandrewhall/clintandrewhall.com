import { Section } from '@components/layout';

import { ArticleHeader } from './article_header';
import { ArticleMarkdown } from './article_markdown';

import styles from './article_layout.styles';

export interface ArticleLayoutProps {
  article: ArticleImport;
}

const ArticleLayoutComponent = ({ article }: ArticleLayoutProps) => (
  <>
    <ArticleLayout.Root {...article.attributes} {...styles.root}>
      <ArticleLayout.Header {...article.attributes} />
      <ArticleLayout.Markdown {...article} />
    </ArticleLayout.Root>
  </>
);

export const ArticleLayout = Object.assign(ArticleLayoutComponent, {
  Root: Section,
  Header: ArticleHeader,
  Markdown: ArticleMarkdown,
});
