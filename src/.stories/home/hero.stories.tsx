import type { Meta, StoryObj } from '@storybook/react';

import { Home } from '@home';

const meta: Meta<typeof Home.About> = {
  title: 'Home/Hero',
  component: Home.Hero,
};

export default meta;

export const Hero: StoryObj<typeof Home.Hero> = {};
