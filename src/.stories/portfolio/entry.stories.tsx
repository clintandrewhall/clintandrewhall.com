import { PortfolioEntry as Component } from '@pages/portfolio';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Component> = {
  title: 'Pages/Portfolio Entry',
  component: Component,
};

export default meta;

export const PortfolioEntry: StoryObj<typeof Component> = {
  args: {
    id: 'backstrokes',
  },
};
