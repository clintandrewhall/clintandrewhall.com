import { Layout } from '@components/layout';
import { MarkdownImage } from '@components/markdown';

import styles from './content.styles';

export type PortfolioEntryContentProps = Pick<PortfolioEntry, 'ReactComponent'>;

export const PortfolioEntryContent = ({ ReactComponent }: PortfolioEntryContentProps) => {
  return (
    <Layout {...styles.root}>
      <div {...styles.markdown}>
        <ReactComponent Image={MarkdownImage} />
      </div>
    </Layout>
  );
};
