import { Home } from '@pages/home';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from '../decorators';

const meta: Meta<typeof Home.Portfolio> = {
  title: 'Home/Portfolio',
  component: Home.Portfolio,
  decorators,
};

export default meta;

export const Portfolio: StoryObj<typeof Home.Portfolio> = {};
