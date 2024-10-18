import { Home } from '@pages/home';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Home.About> = {
  title: 'Home/Hero',
  component: Home.Hero,
};

export default meta;

export const Hero: StoryObj<typeof Home.Hero> = {};
