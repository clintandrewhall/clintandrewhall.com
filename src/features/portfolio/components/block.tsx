import { Link } from 'react-router-dom';

import styles from './block.module.css';

const pathContext = require.context(
  '../../../images/responsive/portfolio/',
  true,
);

import image from '../../../images/responsive/portfolio/backstrokes-1.jpg';

console.log(image);

export const PortfolioBlock = ({
  caption,
  cover,
  slug,
  tags,
  timestamp,
  title,
  website,
}: PortfolioEntry) => {
  const subtitle = tags.map((tag, index) => (
    <Link
      className={styles.slugLink}
      to={`/portfolio/${tag.slug}`}
      key={tag.slug}>
      {tag.name + (index < tags.length - 1 ? ', ' : '')}
    </Link>
  ));

  const websiteLink = website ? (
    <a href={website} className={styles.projectLink} title="Website">
      <i className="im im-link" />
    </a>
  ) : null;

  const responsiveImage = cover.src ? pathContext(cover.src) : null;
  console.log(cover.src, responsiveImage);

  const imageStyle = responsiveImage
    ? { backgroundImage: `url(${responsiveImage})` }
    : {};

  return (
    <div className={styles.root} key={timestamp}>
      <div className={styles.inner}>
        <div className={styles.thumb}>
          <img
            className={styles.thumbArea}
            srcSet={responsiveImage.srcSet}
            sizes={responsiveImage.sizes}
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
