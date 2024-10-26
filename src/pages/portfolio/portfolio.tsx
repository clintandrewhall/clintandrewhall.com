import { Layout } from '@components/layout';
import { Meta } from '@components/meta';

import { PortfolioList } from './portfolio_list';

const Header = () => <Layout.Header background="opaque" selectedId="portfolio" />;

const Component = () => {
  return (
    <>
      <Meta title="Portfolio | Clint Andrew Hall" />
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
