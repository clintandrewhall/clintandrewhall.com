import { Home } from '@pages/home';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Home.Portfolio> = {
  title: 'Home/Portfolio',
  component: Home.Portfolio,
};

export default meta;

export const Portfolio: StoryObj<typeof Home.Portfolio> = {};
