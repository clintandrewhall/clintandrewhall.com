import { HomeContextProvider } from '@state/home';

import { Layout } from '@components/layout';

import { About } from './about';
import { Career } from './career';
import { Hero } from './hero';
import { Medium } from './medium';
import { Portfolio } from './portfolio';

const Component = () => {
  return (
    <HomeContextProvider>
      <Home.Header isLocal={true} />
      <Home.Hero />
      <Home.About />
      <Home.Portfolio />
      <Home.Career />
      <Home.Medium />
      <Home.Footer />
    </HomeContextProvider>
  );
};

export const Home = Object.assign(Component, {
  Header: Layout.Header,
  Hero,
  About,
  Career,
  Portfolio,
  Medium,
  Footer: Layout.Footer,
});
