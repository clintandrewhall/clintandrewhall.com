import { Link } from 'react-router';

import { Layout } from '@components/layout';
import { usePortfolioEntryImage } from '@lib/hooks';

import styles from './portfolio_entry_header.styles';

export type PortfolioEntryHeaderProps = PortfolioEntryAttributes;

export const PortfolioEntryHeader = ({
  caption: subtitle,
  cover,
  name: title,
  tags: tagsProp,
  timestamp,
}: PortfolioEntryHeaderProps) => {
  const largeImage = usePortfolioEntryImage(cover, 'large');
  const mediumImage = usePortfolioEntryImage(cover, 'medium');
  const smallImage = usePortfolioEntryImage(cover, 'small');
  const image = largeImage ?? mediumImage ?? smallImage;

  const tags = tagsProp.map((tag) => ({ label: tag.name, href: `/portfolio/tag/${tag.slug}` }));

  const tagList = (tags || []).map((tag, index) => (
    <Link {...styles.tag} to={tag.href} key={tag.label}>
      {tag.label + (index < tags.length - 1 ? ', ' : '')}
    </Link>
  ));

  const dateObj = new Date(timestamp * 1000);
  const month = dateObj.toLocaleString('default', { month: 'long' });
  const day = dateObj.getDate();
  const dayWithOrdinal =
    day + (['th', 'st', 'nd', 'rd'][(((day % 100) >> 3) ^ 1 && day % 10) || 0] || 'th');
  const year = dateObj.getFullYear();
  const date = `${month}, ${dayWithOrdinal}, ${year}`;

  return (
    <header {...styles.root(image)}>
      <Layout>
        <h1 {...styles.title}>{title}</h1>
        <h2 {...styles.subtitle}>{subtitle}</h2>
        <p {...styles.date}>{date}</p>
        <ul {...styles.tagList}>{tagList}</ul>
      </Layout>
    </header>
  );
};
