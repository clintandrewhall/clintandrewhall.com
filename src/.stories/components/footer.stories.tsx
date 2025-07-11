import type { Meta, StoryObj } from '@storybook/react-vite';

import { Layout } from '@components/layout';

const meta: Meta<typeof Footer> = {
  title: 'Components/Layout/Footer',
  component: Layout.Footer,
};

export default meta;

export const Footer: StoryObj<typeof Layout.Footer> = {};
