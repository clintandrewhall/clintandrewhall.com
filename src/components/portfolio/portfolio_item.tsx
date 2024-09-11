import { Link } from 'react-router-dom';

import { useEntryMetadata, usePortfolioImage } from '@lib/hooks/use_portfolio';

import styles from './portfolio_item.styles';

export interface PortfolioItemProps {
  id: string;
}

export const PortfolioItem = ({ id }: PortfolioItemProps) => {
  const entry = useEntryMetadata(id);
  const image = usePortfolioImage(entry?.cover, 480);

  if (!entry || !image) {
    return null;
  }

  const { caption, name, tags, website } = entry;

  let websiteLink = null;

  if (website) {
    websiteLink = (
      <a href={website} {...styles.projectLink} title="Link to external website" target="_blank">
        <i {...styles.linkIcon} />
      </a>
    );
  }

  const subtitle = (tags || []).map((tag, index) => (
    <Link {...styles.tags} to={`/portfolio/${tag.slug}`} key={tag.slug}>
      {tag.name + (index < tags.length - 1 ? ', ' : '')}
    </Link>
  ));

  return (
    <article {...styles.root(image.src)}>
      <header {...styles.header}>
        <h4 {...styles.title}>{name}</h4>
        <h5 {...styles.tags}>{subtitle}</h5>
      </header>
      <p {...styles.caption}>
        {caption}
        <Link {...styles.details} to={`/portfolio/${id}`} title={name}>
          View Details
        </Link>
      </p>
      <footer {...styles.footer}>{websiteLink}</footer>
    </article>
  );
};
