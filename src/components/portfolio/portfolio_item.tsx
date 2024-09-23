import { Link } from 'react-router-dom';

import styles from './portfolio_item.styles';

export interface PortfolioItemProps {
  title: string;
  caption: string;
  href: string;
  imageSrc: string;
  tags: Array<{
    label: string;
    href: string;
  }>;
  website?: string;
}

export const PortfolioItem = ({
  title,
  caption,
  href,
  imageSrc,
  tags,
  website,
}: PortfolioItemProps) => {
  let websiteLink = null;

  if (website) {
    websiteLink = (
      <a href={website} {...styles.projectLink} title="Link to external website" target="_blank">
        <i {...styles.linkIcon} />
      </a>
    );
  }

  const subtitle = (tags || []).map((tag, index) => (
    <Link {...styles.tags} to={tag.href} key={tag.label}>
      {tag.label + (index < tags.length - 1 ? ', ' : '')}
    </Link>
  ));

  return (
    <article {...styles.root(imageSrc)}>
      <header {...styles.header}>
        <h4 {...styles.title}>{title}</h4>
        <h5 {...styles.tags}>{subtitle}</h5>
      </header>
      <p {...styles.caption}>
        {caption}
        <Link {...styles.details} to={href} title={title}>
          View Details
        </Link>
      </p>
      <footer {...styles.footer}>{websiteLink}</footer>
    </article>
  );
};
