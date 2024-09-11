import type { Meta, StoryObj } from '@storybook/react';

import { Footer as Component } from '@components/layout';

const meta: Meta<typeof Component> = {
  title: 'Components/Layout/Footer',
  component: Component,
};

export default meta;

export const Footer: StoryObj<typeof Component> = {};
