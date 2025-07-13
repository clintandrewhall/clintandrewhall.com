import { Home } from '@pages/home';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from '../decorators';

const meta: Meta<typeof Home.Career> = {
  title: 'Home/Career',
  component: Home.Career,
  decorators,
};

export default meta;

export const Career: StoryObj<typeof Home.Career> = {};
