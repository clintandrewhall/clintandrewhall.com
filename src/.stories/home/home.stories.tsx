import type { Meta, StoryObj } from '@storybook/react';

import { Home as Component } from '@home';

const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Component,
};

export default meta;

export const Home: StoryObj<typeof Component> = {};
