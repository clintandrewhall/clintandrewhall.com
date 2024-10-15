import { Portfolio as Component } from '@pages/portfolio';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Portfolio> = {
  title: 'Pages/Portfolio',
  component: Component,
};

export default meta;

export const Portfolio: StoryObj<typeof Component> = {};
