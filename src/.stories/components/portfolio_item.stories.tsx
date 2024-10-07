import type { Meta, StoryObj } from '@storybook/react';

import { PortfolioGrid } from '@components/portfolio';

const meta: Meta<typeof PortfolioGrid.Item> = {
  title: 'Components/Portfolio Item',
  component: PortfolioGrid.Item,
};

export default meta;

export const PortfolioItem: StoryObj<typeof PortfolioGrid.Item> = {
  args: {
    caption: 'Some caption',
    href: '/portfolio/some-project',
    imageSrc: 'https://via.placeholder.com/480',
    tags: [
      { label: 'React', href: '/portfolio/tag/react' },
      { label: 'TypeScript', href: '/portfolio/tag/typescript' },
    ],
    title: 'Some Project',
    website: 'https://example.com',
  },
};
