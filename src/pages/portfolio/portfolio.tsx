import { Layout } from '@components/layout';

import { PortfolioList } from './portfolio_list';

const Header = () => <Layout.Header background="opaque" selectedId="portfolio" />;

const Component = () => {
  return (
    <>
      <Portfolio.Header />
      <Portfolio.List />
      <Portfolio.Footer />
    </>
  );
};

export const Portfolio = Object.assign(Component, {
  Header,
  List: PortfolioList,
  Footer: Layout.Footer,
});
