// @flow

import React from 'react';

import ScrollToTopOnMount from '../core/ScrollToTopOnMount';
import Header from './../core/Header';
import Footer from './../core/Footer';

import styles from './index.module.css';

type Props = {
  children: Array<React$Element<any>>,
};

export default (props: Props) => {
  document.title = 'Clint Andrew Hall - Portfolio';

  return (
    <div className={styles.root}>
      <Header />
      <article>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>My Portfolio</h1>
            <h2 className={styles.caption}>
              A collection of things I've worked on in my spare time.
            </h2>
          </div>
        </header>
        <div className={styles.portfolio}>
          <ul className={styles.content}>{props.children}</ul>
        </div>
      </article>
      <Footer />
      <ScrollToTopOnMount />
    </div>
  );
};
