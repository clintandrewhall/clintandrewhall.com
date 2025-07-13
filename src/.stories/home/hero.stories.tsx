import { Home } from '@pages/home';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from '../decorators';

const meta: Meta<typeof Home.About> = {
  title: 'Home/Hero',
  component: Home.Hero,
  decorators,
};

export default meta;

export const Hero: StoryObj<typeof Home.Hero> = {};
