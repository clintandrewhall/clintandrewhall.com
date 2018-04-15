// @flow

import React from 'react';
import Masonry from 'react-masonry-component';

import PortfolioItem from './PortfolioItem';

import 'react-photoswipe/lib/photoswipe.css';

import styles from './index.module.css';

const masonryOptions = {
  resize: true,
  columnWidth: 400,
  fitWidth: true,
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
    <section className={styles.root} id="works" key="root">
      <div className={styles.intro}>
        <div className={styles.introContent}>
          <h2 className={styles.title}>Portfolio</h2>
          <h3 className={styles.subtitle}>See My Latest Projects</h3>
          <p className={styles.lead}>
            Here are a few of the things I've been working on recently.
          </p>
        </div>
      </div>
      <div className={styles.portfolio}>
        <Masonry className={styles.masonry} options={masonryOptions}>
          {items}
        </Masonry>
      </div>
    </section>,
  ];
};

export default Portfolio;
