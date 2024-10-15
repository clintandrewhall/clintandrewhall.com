import { HomeContextProvider } from '@state/home';

import { Footer, Header } from '@components/layout';

// import { useHistoryReplaceEvent } from '@lib/hooks/use_history_replace';
import { About } from './about';
import { Career } from './career';
import { Hero } from './hero';
import { Medium } from './medium';
import { Portfolio } from './portfolio';

const Component = () => {
  // useHistoryReplaceEvent();

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
  Header,
  Hero,
  About,
  Career,
  Portfolio,
  Medium,
  Footer,
});
