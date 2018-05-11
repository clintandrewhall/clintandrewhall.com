// @flow

import React from 'react';

import PortfolioItem from './../../Portfolio/PortfolioItem';

import styles from './index.module.css';

const Portfolio = () => {
  // $FlowFixMe
  const portfolioContext = require.context(
    '!markdown-with-front-matter-loader!./../../../_content/portfolio',
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
    .sort((a, b) => {
      return b.timestamp - a.timestamp;
    })
    .map((entry, index) => (
      <PortfolioItem item={entry} key={entry.timestamp + '_' + index} />
    ));

  return [
    <section className={styles.root} id="portfolio" key="root">
      <div className={styles.intro}>
        <div className={styles.introContent}>
          <h2 className={styles.title}>Portfolio</h2>
          <h3 className={styles.subtitle}>Explore My Projects</h3>
          <p className={styles.lead}>
            Here are a few of the things I've worked on in my spare time.
          </p>
        </div>
      </div>
      <div className={styles.portfolio}>
        <div className={styles.content}>{items}</div>
      </div>
    </section>,
  ];
};

export default Portfolio;
