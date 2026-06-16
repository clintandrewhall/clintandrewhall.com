import { Home } from '@pages/home';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from '../decorators';

const meta: Meta<typeof Home.About> = {
  title: 'Home/About',
  component: Home.About,
  decorators,
};

export default meta;

export const About: StoryObj<typeof Home.About> = {};
