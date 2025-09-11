import { Layout as LayoutComponent } from '@components/layout';
import type { TopicId } from '@lib/site';

import { PortfolioEntryLayout as PortfolioEntryLayoutComponent } from './portfolio_entry_layout';
import { PortfolioEntryNotFound } from './portfolio_entry_not_found';

export interface PortfolioEntryProps {
  article?: PortfolioEntryImport | null;
  selectedId?: TopicId;
}

const Header = ({ article, selectedId = 'portfolio' }: PortfolioEntryProps) => (
  <LayoutComponent.Header background={!!article ? 'clear' : 'opaque'} {...{ selectedId }} />
);

const Layout = ({ article }: PortfolioEntryProps) =>
  !!article ? <PortfolioEntryLayoutComponent {...{ article }} /> : <PortfolioEntry.NotFound />;

const PortfolioEntryComponent = ({ article }: PortfolioEntryProps) => {
  if (!article) {
    return (
      <>
        <PortfolioEntry.Header />
        <PortfolioEntryNotFound />
        <PortfolioEntry.Footer />
      </>
    );
  }

  return (
    <>
      <PortfolioEntry.Header {...{ article }} />
      <PortfolioEntry.Layout {...{ article }} />
      <PortfolioEntry.Footer />
    </>
  );
};

export const PortfolioEntry = Object.assign(PortfolioEntryComponent, {
  Header,
  Layout,
  Footer: LayoutComponent.Footer,
  NotFound: PortfolioEntryNotFound,
});
