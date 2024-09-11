import { Footer } from '@/components/layout';

import { About } from './about';
import { Career } from './career';
import { Medium } from './medium';
import { Portfolio } from './portfolio';

const Component = () => {
  return (
    <>
      <Home.About />
      <Home.Portfolio />
      <Home.Career />
      <Home.Medium />
      <Home.Footer />
    </>
  );
};

export const Home = Object.assign(Component, {
  About,
  Career,
  Portfolio,
  Medium,
  Footer,
});
