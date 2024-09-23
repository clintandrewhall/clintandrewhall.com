import type { Meta, StoryObj } from '@storybook/react';

import { PortfolioItem as Component } from '@components/portfolio/portfolio_item';

const meta: Meta<typeof Component> = {
  title: 'Components/Portfolio Item',
  component: Component,
};

export default meta;

export const PortfolioItem: StoryObj<typeof Component> = {
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
