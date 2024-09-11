import { Home } from '@/home';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Home.About> = {
  title: 'Home/About',
  component: Home.About,
};

export default meta;

export const About: StoryObj<typeof Home.About> = {};
