import { Home } from '@pages/home';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Home.Medium> = {
  title: 'Home/Medium',
  component: Home.Medium,
};

export default meta;

export const Medium: StoryObj<typeof Home.Medium> = {};
