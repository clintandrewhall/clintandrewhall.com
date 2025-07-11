import { Layout } from '@components/layout';

import styles from './article_markdown.styles';

export type ArticleMarkdownProps = Pick<ArticleImport, 'html'>;

export const ArticleMarkdown = ({ html: __html }: ArticleMarkdownProps) => {
  if (!__html) {
    return null;
  }

  return (
    <Layout {...styles.root}>
      <div {...styles.markdown} dangerouslySetInnerHTML={{ __html }} />
    </Layout>
  );
};
