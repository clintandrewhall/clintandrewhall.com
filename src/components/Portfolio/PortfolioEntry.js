// @flow

import React from 'react';
import moment from 'moment';

import ScrollToTopOnMount from '../core/ScrollToTopOnMount';
import Header from './../core/Header';
import Footer from './../core/Footer';

import type { PortfolioItemType } from './PortfolioItem';
import styles from './PortfolioEntry.module.css';

type Props = {
  entry: PortfolioItemType,
};

// $FlowFixMe Webpack require.context not flow-ified
const pathContext = require.context('./../../images/portfolio', true);

const PortfolioEntry = (props: Props) => {
  const { entry } = props;
  const { title, tags, timestamp } = entry;

  document.title = `Clint Andrew Hall - Portfolio - ${title}`;

  const date = moment(timestamp * 1000).format('MMMM Do YYYY');

  const tagList = tags.map(tag => (
    <li className={styles.category} key={tag.name}>
      {tag.name}
    </li>
  ));

  const responsiveImage = pathContext(entry.cover.src);

  return (
    <div className={styles.root}>
      <Header />
      <article>
        <header
          className={styles.header}
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url("${responsiveImage}")`,
          }}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.caption}>{entry.caption}</h2>
            <p className={styles.date}>{date}</p>
            <ul className={styles.categories}>{tagList}</ul>
          </div>
        </header>
        <div className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: entry.__content }} />
        </div>
      </article>
      <Footer />
      <ScrollToTopOnMount />
    </div>
  );
};

export default PortfolioEntry;
