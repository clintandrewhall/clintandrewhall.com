import { createRef, useState, useEffect } from 'react';
import Rellax from 'rellax';
import { scroller } from 'react-scroll';

import { Header, Footer, Page } from '../../components';

import { Hero } from './hero';
import { About } from './about';
import { Portfolio } from './portfolio';
import { Medium } from './medium';
import { Career } from './career';

import styles from './home.module.css';

// TODO: async import
import resume from '../../content/resume.json';
import { usePageLoad } from '../../hooks';
import type { Section } from '../../lib';

const { basics, work: works, references } = resume;
const { profiles, label, summary } = basics;

const SCROLL_DEBOUNCE = 30;

export const Home = () => {
  const [isPageLoaded] = usePageLoad();
  const [isLoaded, setIsLoaded] = useState(false);
  const [place, setPlace] = useState<Section | ''>('home');
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
          setPlace(current.id as Section);
        }
      }, SCROLL_DEBOUNCE);
    };

    if (isPageLoaded && !isLoaded) {
      const { hash } = location;

      if (hash) {
        scroller.scrollTo(hash.substring(1), { smooth: true });
      } else {
        scroller.scrollTo('top', {});
      }
      setIsLoaded(true);
    }

    addEventListener('scroll', onScroll);

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
    };
  }, []);

  return (
    <Page>
      <div style={{ height: '100%' }}>
        <div className={styles.rellax}>
          <div className={styles.background} />
        </div>
        <Header navigation="local" selectedId={place} />
        <Hero ref={heroRef} {...{ label, profiles }} />
        <About {...{ summary }} />
        <Portfolio />
        <Career {...{ works, references }} />
        <Medium />
        <Footer {...{ profiles }} />
      </div>
    </Page>
  );
};
