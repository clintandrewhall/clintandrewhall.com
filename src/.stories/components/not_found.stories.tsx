import { Article as ArticleComponent } from '@pages/article';
import type { Meta, StoryObj } from '@storybook/react';

import { NotFound as Component } from '@components/not_found';

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
};

export default meta;

export const Generic: StoryObj<typeof Component> = {
  render: (args) => <Component {...args} />,
};

export const ArticleNotFound: StoryObj<typeof ArticleComponent> = {
  render: () => <ArticleComponent.NotFound />,
};
