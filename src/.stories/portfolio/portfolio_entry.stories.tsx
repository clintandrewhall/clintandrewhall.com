import { PortfolioEntry as Component } from '@pages/portfolio_entry';
import type { Meta, StoryObj } from '@storybook/react';

const contents = import.meta.glob<PortfolioEntry>('@content/portfolio/*.md', { eager: true });
const entries = Object.values(contents).sort(
  (a, b) => b.attributes.timestamp - a.attributes.timestamp,
);

const meta: Meta<typeof Component> = {
  title: 'Pages/Portfolio Entry',
  component: Component,
  argTypes: {
    id: {
      options: ['not-found', ...entries.map((entry) => entry.attributes.id)],
      control: { type: 'select' },
    },
  },
};

export default meta;

export const PortfolioEntry: StoryObj<typeof Component> = {};
