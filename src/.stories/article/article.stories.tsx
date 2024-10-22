import { Article as Component } from '@pages/article';
import type { Meta, StoryObj } from '@storybook/react';

const contents = import.meta.glob<ArticleImport>('@content/portfolio/*.md', { eager: true });
const entries = Object.values(contents).sort(
  (a, b) => b.attributes.timestamp - a.attributes.timestamp,
);

const meta: Meta<typeof Component> = {
  title: 'Pages/Article',
  component: Component,
  argTypes: {
    id: {
      options: ['not-found', ...entries.map((entry) => entry.attributes.id)],
      control: { type: 'select' },
    },
  },
};

export default meta;

export const Article: StoryObj<typeof Component> = {};
