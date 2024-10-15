import { Home } from '@pages/home';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Home.Career> = {
  title: 'Home/Career',
  component: Home.Career,
};

export default meta;

export const Career: StoryObj<typeof Home.Career> = {};
