import type { Meta, StoryObj } from '@storybook/react';

import { Home } from '@home';

const meta: Meta<typeof Home.About> = {
  title: 'Home/About',
  component: Home.About,
};

export default meta;

export const About: StoryObj<typeof Home.About> = {};
