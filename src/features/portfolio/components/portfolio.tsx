import { PropsWithChildren, useEffect } from 'react';
import { scroller } from 'react-scroll';

import { Header, Footer } from '../../../components';

import styles from './portfolio.module.css';

export const Portfolio = ({ children }: PropsWithChildren) => {
  document.title = 'Clint Andrew Hall - Portfolio';
  useEffect(() => scroller.scrollTo('top', {}), []);

  return (
    <div className={styles.root}>
      <Header />
      <article>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>My Portfolio</h1>
            <h2 className={styles.caption}>
              A collection of things I&apos;ve worked on in my spare time.
            </h2>
          </div>
        </header>
        <div className={styles.portfolio}>
          <ul className={styles.content}>{children}</ul>
        </div>
      </article>
      <Footer />
    </div>
  );
};
