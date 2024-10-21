import { Layout } from '@components/layout';
import { useEntry } from '@lib/hooks';

import { PortfolioEntryArticle } from './article';
import { PortfolioEntryNotFound } from './entry_not_found';

export interface PortfolioEntryProps {
  id: string;
}

const Component = ({ id }: PortfolioEntryProps) => {
  const entry = useEntry(id);
  const hasEntry = !!entry;

  return (
    <>
      <PortfolioEntry.Header background={hasEntry ? 'clear' : 'opaque'} selectedId="portfolio" />
      {hasEntry ? <PortfolioEntry.Article entry={entry} /> : <PortfolioEntry.NotFound />}
      <PortfolioEntry.Footer />
    </>
  );
};

export const PortfolioEntry = Object.assign(Component, {
  Header: Layout.Header,
  Article: PortfolioEntryArticle,
  Footer: Layout.Footer,
  NotFound: PortfolioEntryNotFound,
});
