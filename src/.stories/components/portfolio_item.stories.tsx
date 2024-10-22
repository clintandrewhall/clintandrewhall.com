import type { Meta, StoryObj } from '@storybook/react';

import { PortfolioGrid } from '@components/portfolio';

const meta: Meta<typeof PortfolioGrid.Item> = {
  title: 'Components/Portfolio Item',
  component: PortfolioGrid.Item,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px', margin: '40px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const PortfolioItem: StoryObj<typeof PortfolioGrid.Item> = {
  args: {
    caption: 'Some caption',
    href: '/portfolio/some-project',
    imageSrc: 'https://placehold.co/600x400?text=An+Article',
    tags: [
      { label: 'React', href: '/portfolio/tag/react' },
      { label: 'TypeScript', href: '/portfolio/tag/typescript' },
    ],
    title: 'Some Project',
    website: 'https://example.com',
  },
};
