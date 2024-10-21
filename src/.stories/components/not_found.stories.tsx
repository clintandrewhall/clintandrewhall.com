import { PortfolioEntry as EntryComponent } from '@pages/portfolio_entry';
import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from '@components/layout';
import { NotFound as Component } from '@components/not_found';

const meta: Meta<typeof Component> = {
  title: 'Components/Not Found',
  component: Component,
  decorators: [
    (Story) => (
      <Layout id="not_found">
        <Story />
      </Layout>
    ),
  ],

  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      defaultValue: null,
    },
    subtitle: {
      control: {
        type: 'text',
      },
      defaultValue: null,
    },
    name: {
      control: {
        type: 'text',
      },
      defaultValue: null,
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Component> = {
  render: (args) => <Component {...args} />,
};

export const PortfolioEntry: StoryObj<typeof EntryComponent> = {
  render: () => <EntryComponent id="not-found" />,
};
