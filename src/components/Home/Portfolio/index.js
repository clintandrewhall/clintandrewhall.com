// @flow

import React from 'react';
import Masonry from 'react-masonry-component';

import PortfolioItem from './../../Portfolio/PortfolioItem';
import itemStyles from './../../Portfolio/PortfolioItem.module.css';

import styles from './index.module.css';

const masonryOptions = {
  enableResizableChildren: true,
  transitionDuration: 0,
  itemSelector: itemStyles.root,
};

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
      <div className={styles.portfolio}>{items}</div>
    </section>,
  ];
};

export default Portfolio;
