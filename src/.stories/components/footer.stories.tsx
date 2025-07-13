import type { Meta, StoryObj } from '@storybook/react-vite';

import { Layout } from '@components/layout';

import { decorators } from '../decorators';

const meta: Meta<typeof Footer> = {
  title: 'Components/Layout/Footer',
  component: Layout.Footer,
  decorators,
};

export default meta;

export const Footer: StoryObj<typeof Layout.Footer> = {};
