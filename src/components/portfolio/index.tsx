import { useArticleIds, useArticleImage, useArticleMetadata } from '@lib/hooks';

import { PortfolioGrid } from './portfolio_grid';
import { type PortfolioItemProps } from './portfolio_item';

export { PortfolioGrid, type PortfolioGridProps } from './portfolio_grid';
export type { PortfolioItemProps } from './portfolio_item';

export const usePortfolioItemProps = (id: string): PortfolioItemProps | null => {
  const entry = useArticleMetadata(id);
  const imagePath = useArticleImage(entry?.cover, 'small');

  if (!entry || !imagePath) {
    return null;
  }

  const { caption, name: title, tags, website } = entry;

  return {
    title,
    caption,
    href: `/portfolio/${id}`,
    imageSrc: imagePath,
    tags: tags.map((tag) => ({ label: tag.name, href: `/portfolio/tag/${tag.slug}` })),
    website,
  };
};

export const usePortfolioItems = () => {
  const ids = useArticleIds();

  return ids
    .map(usePortfolioItemProps)
    .filter<PortfolioItemProps>((entry) => entry !== null)
    .map((entry) => <PortfolioGrid.Item key={entry.title} {...entry} />);
};
