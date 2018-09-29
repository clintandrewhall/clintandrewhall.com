// @flow

import React from 'react';

import MediumPost from './MediumPost';
import styles from './Medium.module.css';

const Medium = () => {
  // $FlowFixMe
  const portfolioContext = require.context(
    '!markdown-with-front-matter-loader!./../../_content/posts',
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
    .map(entry => <MediumPost post={entry} key={`${entry.timestamp}`} />);

  return (
    <section id="medium" className={styles.root}>
      <div className={styles.header}>
        <header className={styles.headerContent}>
          <h2 className={styles.title}>Medium</h2>
          <h3 className={styles.subtitle}>My Drips to The Firehose.</h3>
          <p className={styles.lead}>
            Sometimes I like to post notes or thoughts. Opinions are always my
            own.
          </p>
        </header>
      </div>
      <div className={styles.content}>
        <div className={styles.area}>
          <div className={styles.list}>{items}</div>
        </div>
      </div>
    </section>
  );
};

export default Medium;
