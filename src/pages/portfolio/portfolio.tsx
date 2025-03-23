import { Layout } from '@components/layout';
import { Meta } from '@components/meta';

import { PortfolioList } from './portfolio_list';

const Header = () => <Layout.Header background="opaque" selectedId="portfolio" />;

const PortfolioComponent = () => {
  return (
    <>
      <Meta title="Portfolio" />
      <Portfolio.Header />
      <Portfolio.List />
      <Portfolio.Footer />
    </>
  );
};

export const Portfolio = Object.assign(PortfolioComponent, {
  Header,
  List: PortfolioList,
  Footer: Layout.Footer,
});
