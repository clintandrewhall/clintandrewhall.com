import { Portfolio as Component } from '@pages/portfolio';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from '../decorators';

const meta: Meta<typeof Portfolio> = {
  title: 'Pages/Portfolio',
  component: Component,
  decorators,
};

export default meta;

export const Portfolio: StoryObj<typeof Component> = {};
