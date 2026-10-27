import { Link } from 'react-router';

import { Icon } from '@components/icon';
import type { PortfolioItemProps } from '@components/portfolio';

import styles from './daylight_card.styles';

export const DaylightCard = ({
  title,
  caption,
  href,
  imageSrc,
  tags,
  website,
}: PortfolioItemProps) => (
  <article {...styles.root}>
    <figure {...styles.media}>
      <img src={imageSrc} alt={title} loading="lazy" decoding="async" />
    </figure>
    <div {...styles.body}>
      <h4 {...styles.title}>
        <Link to={href} title={title} {...styles.titleLink}>
          {title}
        </Link>
      </h4>
      {tags.length > 0 ? (
        <nav {...styles.tags} aria-label={`${title} tags`}>
          {tags.map((tag) => (
            <Link to={tag.href} key={tag.label}>
              {tag.label}
            </Link>
          ))}
        </nav>
      ) : null}
      <p {...styles.caption}>{caption}</p>
      <footer {...styles.footer}>
        <span {...styles.more}>
          View Details
          <span aria-hidden="true" {...styles.arrow}>
            →
          </span>
        </span>
        {website ? (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} – external link`}
            {...styles.external}
          >
            <Icon name="link" />
          </a>
        ) : null}
      </footer>
    </div>
  </article>
);
