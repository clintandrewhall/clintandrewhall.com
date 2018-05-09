// @flow

import React from 'react';
import moment from 'moment';

import ScrollToTopOnMount from '../core/ScrollToTopOnMount';
import Header from './../core/Header';

import type { PortfolioItemType } from './PortfolioItem';
import styles from './PortfolioEntry.module.css';

type Props = {
  entry: PortfolioItemType,
};

export default (props: Props) => {
  document.title = 'Clint Andrew Hall - Portfolio';

  const { entry } = props;
  const { title, tags, timestamp } = entry;
  const date = moment(timestamp * 1000).format('MMMM Do YYYY');

  const tagList = tags.map(tag => (
    <li className={styles.category} key={tag.name}>
      {tag.name}
    </li>
  ));

  return (
    <div className={styles.root}>
      <Header />
      <article className={styles.article}>
        <header
          className={styles.header}
          style={{ backgroundImage: 'url(' + entry.cover.src + ')' }}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.caption}>{entry.caption}</h2>
            <p className={styles.date}>{date}</p>
            <ul className={styles.categories}>{tagList}</ul>
          </div>
        </header>
        <div className={styles.content}>
          <div
            className={styles.markdown}
            dangerouslySetInnerHTML={{ __html: entry.__content }}
          />
        </div>
      </article>
      <ScrollToTopOnMount />
    </div>
  );
};
