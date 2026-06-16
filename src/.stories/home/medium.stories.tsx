import { Home } from '@pages/home';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from '../decorators';

const meta: Meta<typeof Home.Medium> = {
  title: 'Home/Medium',
  component: Home.Medium,
  decorators,
};

export default meta;

export const Medium: StoryObj<typeof Home.Medium> = {};
