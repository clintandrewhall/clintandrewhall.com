// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import PortfolioItem from './../Portfolio/PortfolioItem';

import styles from './Portfolio.module.css';

const Portfolio = () => {
  // $FlowFixMe
  const portfolioContext = require.context(
    '!markdown-with-front-matter-loader!./../../_content/portfolio',
    false,
    /.md$/,
  );

  const entries = portfolioContext
    .keys()
    .reduce(
      (memo, fileName) =>
        memo.set(fileName.match(/.\/([^.]+).*/)[1], portfolioContext(fileName)),
      new Map(),
    );

  const items = [...entries.values()]
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(entry => <PortfolioItem item={entry} key={`${entry.title}`} />);

  return [
    <section className={styles.root} id="portfolio" key="root">
      <div className={styles.intro}>
        <div className={styles.introContent}>
          <h2 className={styles.title}>Portfolio</h2>
          <h3 className={styles.subtitle}>Explore My Projects</h3>
          <p className={styles.lead}>
            Here are a few of the things I&apos;ve worked on in my spare time.
          </p>
        </div>
      </div>
      <div className={styles.portfolio}>
        <div className={styles.content}>{items}</div>
      </div>
      <div className={styles.buttonRow}>
        <Link
          to="/portfolio"
          title="View my portfolio"
          className={styles.button}>
          View my portfolio
        </Link>
      </div>
    </section>,
  ];
};

export default Portfolio;
