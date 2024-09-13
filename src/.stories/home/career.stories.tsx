import type { Meta, StoryObj } from '@storybook/react';

import { Home } from '@home';

const meta: Meta<typeof Home.Career> = {
  title: 'Home/Career',
  component: Home.Career,
};

export default meta;

export const Career: StoryObj<typeof Home.Career> = {};
