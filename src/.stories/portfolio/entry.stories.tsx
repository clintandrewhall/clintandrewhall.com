import { PortfolioEntry as Component } from '@pages/portfolio';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Component> = {
  title: 'Pages/Portfolio Entry',
  component: Component,
  argTypes: {
    id: {
      options: [
        'backstrokes',
        'event-wall',
        'guess-friends',
        'metaphorically',
        'node-foursquare',
        'web-bootstrapper',
        'not-available',
      ],
      control: { type: 'select' },
    },
  },
};

export default meta;

export const PortfolioEntry: StoryObj<typeof Component> = {};
