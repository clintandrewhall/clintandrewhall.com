import { Section } from '@components/layout';

import { PortfolioEntryHeader } from './portfolio_entry_header';
import { PortfolioEntryMarkdown } from './portfolio_entry_markdown';

import styles from './portfolio_entry_layout.styles';

export interface PortfolioEntryLayoutProps {
  article: PortfolioEntryImport;
}

const PortfolioEntryLayoutComponent = ({ article }: PortfolioEntryLayoutProps) => (
  <>
    <PortfolioEntryLayout.Root {...article.attributes} {...styles.root}>
      <PortfolioEntryLayout.Header {...article.attributes} />
      <PortfolioEntryLayout.Markdown {...article} />
    </PortfolioEntryLayout.Root>
  </>
);

export const PortfolioEntryLayout = Object.assign(PortfolioEntryLayoutComponent, {
  Root: Section,
  Header: PortfolioEntryHeader,
  Markdown: PortfolioEntryMarkdown,
});
