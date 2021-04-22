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

const SCROLL_DEBOUNCE = 30;

export const Home = () => {
  const [triggerHeight, setTriggerHeight] = useState(0);
  const [place, setPlace] = useState('');
  const heroRef = createRef<HTMLElement>();

  useEffect(() => {
    const location = window.location.toString().split('#')[0];
    history.replaceState(
      null,
      document.title,
      location + (place.length > 0 ? '#' + place : ''),
    );
  }, [place]);

  useEffect(() => {
    document.title = 'Clint Andrew Hall';
    const sections = document.querySelectorAll('section[id].target-section');
    let timeout: number;

    const onScroll = () => {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        const current = Array.from(sections).find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top < 1 && rect.bottom > 1;
        });

        if (!current || current.id === 'home') {
          setPlace('');
        } else if (current.id !== place) {
          setPlace(current.id);
        }
      }, SCROLL_DEBOUNCE);
    };

    const onFadeFinished = () => {
      if (heroRef.current) {
        setTriggerHeight(heroRef.current.offsetHeight);
      }

      const { hash } = location;

      if (hash) {
        scroller.scrollTo(hash.substring(1), { smooth: true });
      } else {
        scroller.scrollTo('top', {});
      }
    };

    addEventListener('scroll', onScroll);
    addEventListener('fade-finished', onFadeFinished);

    Rellax('.rellax', {
      speed: -6,
    });

    const { hash } = location;

    if (hash) {
      scroller.scrollTo(hash.substring(1), { smooth: true });
    } else {
      scroller.scrollTo('top', {});
    }

    return () => {
      clearTimeout(timeout);
      removeEventListener('scroll', onScroll);
      removeEventListener('fade-finished', onFadeFinished);
    };
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <div className={styles.rellax}>
        <div className={styles.background} />
      </div>
      <Header home triggerHeight={triggerHeight} selectedId={place} />
      <Hero ref={heroRef} />
      <About />
      <PortfolioSection />
      <Work />
      <Medium />
      <Footer />
    </div>
  );
};
