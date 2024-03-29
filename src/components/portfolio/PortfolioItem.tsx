import { Link } from 'react-router-dom';

import styles from './PortfolioItem.module.css';

export type PortfolioItemType = {
  __content: string;
  caption: string;
  cover: {
    src: string;
    size: string;
  };
  slug: string;
  tags: Array<{ slug: string; name: string }>;
  timestamp: number;
  title: string;
  website: string;
};

type Props = {
  item: PortfolioItemType;
};

const pathContext = require.context('./../../../public/images/portfolio', true);

export const PortfolioItem = (props: Props) => {
  const { item } = props;
  const { caption, cover, slug, tags, timestamp, title, website } = item;
  const { src } = cover;

  const subtitle = tags.map((tag, index) => (
    <Link
      className={styles.slugLink}
      to={`/portfolio/${tag.slug}`}
      key={tag.slug}>
      {tag.name + (index < tags.length - 1 ? ', ' : '')}
    </Link>
  ));

  const responsiveImage = pathContext(src);

  let websiteLink = null;

  if (website) {
    websiteLink = (
      <a href={website} className={styles.projectLink} title="Website">
        <i className="im im-link" />
      </a>
    );
  }

  return (
    <div className={styles.masonryBrick} key={timestamp}>
      <div className={styles.root}>
        <div className={styles.thumb}>
          <div
            className={styles.thumbArea}
            style={{ backgroundImage: `url(${responsiveImage.default})` }}
          />
          <span className={styles.shadow} />
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <p className={styles.caption}>
          {caption}
          <Link
            to={`/portfolio/${slug}`}
            title={title}
            className={styles.details}>
            View Details
          </Link>
        </p>
        {websiteLink}
      </div>
    </div>
  );
};
