import { Footer } from '@components/layout';

import { About } from './about';
import { Career } from './career';
import { Hero } from './hero';
import { Medium } from './medium';
import { Portfolio } from './portfolio';

const Component = () => {
  return (
    <>
      <Home.Hero />
      <Home.About />
      <Home.Portfolio />
      <Home.Career />
      <Home.Medium />
      <Home.Footer />
    </>
  );
};

export const Home = Object.assign(Component, {
  Hero,
  About,
  Career,
  Portfolio,
  Medium,
  Footer,
});
