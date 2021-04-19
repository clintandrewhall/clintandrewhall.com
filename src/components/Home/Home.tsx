import { createRef, useState, useEffect } from 'react';
import Rellax from 'rellax';
import { scroller } from 'react-scroll';

import { Header } from '../Header';
import { Hero } from './Hero';
import { About } from './About';
import { PortfolioSection } from './PortfolioSection';
import { Medium } from './Medium';
import { Work } from './Work';
import { Footer } from '../Footer';

import styles from './index.module.css';

export const Home = () => {
  const [triggerHeight, setTriggerHeight] = useState(0);
  const heroRef = createRef<HTMLElement>();

  useEffect(() => {
    document.title = 'Clint Andrew Hall';
    window.addEventListener('fade-finished', () => {
      if (heroRef.current) {
        setTriggerHeight(heroRef.current.offsetHeight);
      }

      const { hash } = location;
      if (hash) {
        scroller.scrollTo(hash.substring(1), { smooth: true });
      } else {
        scroller.scrollTo('top', {});
      }
    });

    Rellax('.rellax', {
      speed: -6,
    });

    const { hash } = location;
    if (hash) {
      scroller.scrollTo(hash.substring(1), { smooth: true });
    } else {
      scroller.scrollTo('top', {});
    }
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <div className={styles.rellax}>
        <div className={styles.background} />
      </div>
      <Header home triggerHeight={triggerHeight} />
      <Hero ref={heroRef} />
      <About />
      <PortfolioSection />
      <Work />
      <Medium />
      <Footer />
    </div>
  );
};
