import { NotFound as Component } from '@pages/not_found';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from './decorators';

const meta: Meta<typeof NotFound> = {
  title: 'Pages/Not Found',
  component: Component,
  decorators,
};

export default meta;

export const NotFound: StoryObj<typeof Component> = {};
