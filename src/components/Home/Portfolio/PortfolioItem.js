// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PortfolioItem.module.css';

export type PortfolioItemType = {
  caption: string,
  cover: {
    src: string,
    size: string,
  },
  slug: string,
  tags: Array<{ slug: string, name: string }>,
  timestamp: number,
  title: string,
};

type Props = {
  item: PortfolioItemType,
  onClick: Function,
};

const PortfolioItem = (props: Props) => {
  const { item, onClick } = props;
  const { caption, cover, slug, tags, timestamp, title } = item;
  const { src, size } = cover;

  const subtitle = tags.map((tag, index) => (
    <Link
      className={styles.slugLink}
      to={'/portfolio/' + tag.slug}
      key={tag.slug}>
      {tag.name + (index < tags.length - 1 ? ', ' : '')}
    </Link>
  ));

  return (
    <div className={styles.masonryBrick} key={timestamp}>
      <div className={styles.root}>
        <div className={styles.thumb}>
          <a
            href={'/portfolio/' + slug}
            className="thumb-link"
            onClick={(e: Event) => {
              onClick();
              e.preventDefault();
              return false;
            }}
            title={title}
            data-size={size}>
            <img src={src} alt="" />
            <span className={styles.shadow} />
          </a>
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.category}>{subtitle}</p>
        </div>
        <Link
          to={'/portfolio/' + slug}
          className={styles.projectLink}
          title={title}>
          <i className="im im-link" />
        </Link>
        <div className={styles.caption}>
          <p>{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
