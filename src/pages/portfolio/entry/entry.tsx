import { Layout } from '@components/layout';
import { useEntry } from '@lib/hooks/use_portfolio';

import { PortfolioEntryArticle } from './article';

export interface PortfolioEntryProps {
  id: string;
}

const Component = ({ id }: PortfolioEntryProps) => {
  const entry = useEntry(id);
  return (
    <>
      <PortfolioEntry.Header />
      {entry ? <PortfolioEntry.Article entry={entry} /> : null}
      <PortfolioEntry.Footer />
    </>
  );
};

export const PortfolioEntry = Object.assign(Component, {
  Header: Layout.Header,
  Article: PortfolioEntryArticle,
  Footer: Layout.Footer,
});
