import { Home as Component } from '@/home';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Component,
};

export default meta;

export const Home: StoryObj<typeof Component> = {};
