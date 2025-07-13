import { Home as Component } from '@pages/home';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from '../decorators';

const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Component,
  decorators,
};

export default meta;

export const Home: StoryObj<typeof Component> = {};
