import { Layout } from '@components/layout';
import { MarkdownImage } from '@components/markdown';

import styles from './article_markdown.styles';

export type ArticleMarkdownProps = Pick<ArticleImport, 'ReactComponent'>;

export const ArticleMarkdown = ({ ReactComponent }: ArticleMarkdownProps) => {
  return (
    <Layout {...styles.root}>
      <div {...styles.markdown}>
        <ReactComponent Image={MarkdownImage} />
      </div>
    </Layout>
  );
};
