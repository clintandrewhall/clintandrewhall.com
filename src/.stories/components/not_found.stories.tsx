import { PortfolioEntry as PortfolioEntryComponent } from '@pages/portfolio';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { NotFound as Component } from '@components/not_found';

import { decorators } from '../decorators';

const meta: Meta<typeof Component> = {
  title: 'Components/Not Found',
  component: Component,
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
  decorators,
};

export default meta;

export const Generic: StoryObj<typeof Component> = {
  render: (args) => <Component {...args} />,
};

export const PortfolioEntryNotFound: StoryObj<typeof PortfolioEntryComponent> = {
  render: () => <PortfolioEntryComponent.NotFound />,
};
