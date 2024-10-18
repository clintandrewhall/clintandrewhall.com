import { Layout } from '@components/layout';

import { PortfolioEntryArticleHeader } from './article_header';
import { PortfolioEntryContent } from './content';

import styles from './article.styles';

export interface PortfolioEntryLayoutProps {
  entry: PortfolioEntry;
}

const Component = ({ entry }: PortfolioEntryLayoutProps) => {
  return (
    <>
      <PortfolioEntryArticle.Header {...entry.attributes} />
      <PortfolioEntryArticle.Root {...entry.attributes} {...styles.root}>
        <PortfolioEntryArticle.Content {...entry} {...styles.content} />
      </PortfolioEntryArticle.Root>
    </>
  );
};

export const PortfolioEntryArticle = Object.assign(Component, {
  Root: Layout.Section,
  Header: PortfolioEntryArticleHeader,
  Content: PortfolioEntryContent,
});
