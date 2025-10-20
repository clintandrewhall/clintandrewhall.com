import { Layout } from '@components/layout';
import { useHomeTopics } from '@lib/hooks';

import { About } from './about';
import { Career } from './career';
import { Header } from './header';
import { Hero } from './hero';
import { Medium } from './medium';
import { Portfolio } from './portfolio';

const HomeComponent = () => {
  const { home, about, portfolio, career, medium, currentTopicId } = useHomeTopics();

  return (
    <>
      <Home.Header currentSectionId={currentTopicId} />
      <Home.Hero ref={home.ref} />
      <Home.About ref={about.ref} />
      <Home.Portfolio ref={portfolio.ref} />
      <Home.Career ref={career.ref} />
      <Home.Medium ref={medium.ref} />
      <Home.Footer />
    </>
  );
};

export const Home = Object.assign(HomeComponent, {
  Header,
  Hero,
  About,
  Career,
  Portfolio,
  Medium,
  Footer: Layout.Footer,
});
