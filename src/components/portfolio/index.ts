import { useEntryMetadata, usePortfolioImage } from '@lib/hooks/use_portfolio';

import { type PortfolioItemProps } from './portfolio_item';

export { PortfolioGrid, type PortfolioGridProps } from './portfolio_grid';
export type { PortfolioItemProps } from './portfolio_item';

export const usePortfolioItemProps = (id: string): PortfolioItemProps | null => {
  const entry = useEntryMetadata(id);
  const image = usePortfolioImage(entry?.cover, 'small');

  if (!entry || !image) {
    return null;
  }

  const { caption, name: title, tags, website } = entry;

  return {
    title,
    caption,
    href: `/portfolio/${id}`,
    imageSrc: image.src,
    tags: tags.map((tag) => ({ label: tag.name, href: `/portfolio/tag/${tag.slug}` })),
    website,
  };
};
