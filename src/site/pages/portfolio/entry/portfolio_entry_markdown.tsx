import { Layout } from '@components/layout';

import styles from './portfolio_entry_markdown.styles';

export type PortfolioEntryMarkdownProps = Pick<PortfolioEntryImport, 'html'>;

export const PortfolioEntryMarkdown = ({ html: __html }: PortfolioEntryMarkdownProps) => {
  if (!__html) {
    return null;
  }

  return (
    <Layout {...styles.root}>
      <div {...styles.markdown} dangerouslySetInnerHTML={{ __html }} />
    </Layout>
  );
};
