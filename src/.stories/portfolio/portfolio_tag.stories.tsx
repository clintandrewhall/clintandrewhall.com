import { PortfolioTag as Component } from '@pages/portfolio';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from '../decorators';

const contents = import.meta.glob<PortfolioEntryImport>('@content/portfolio/*.md', { eager: true });

const tagsBySlug: Record<string, PortfolioTag> = {};
const articlesByTag: Record<string, PortfolioEntryImport[]> = {};

Object.values(contents).forEach((article) => {
  const { tags = [] } = article.attributes;
  tags.forEach((tag) => {
    tagsBySlug[tag.slug] = tag;

    if (!articlesByTag[tag.slug]) {
      articlesByTag[tag.slug] = [];
    }

    articlesByTag[tag.slug].push(article);
  });
});

const tagSlugs = Object.values(tagsBySlug)
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((t) => t.slug);

type Args = { tag: string };

const meta: Meta<Args> = {
  title: 'Pages/Portfolio Tag',
  argTypes: {
    tag: {
      options: ['not-found', ...tagSlugs],
      control: { type: 'select' },
    },
  },
  decorators,
  args: {
    tag: tagSlugs[0] ?? 'not-found',
  },
};

export default meta;

export const PortfolioTag: StoryObj<Args> = {
  render: (args) => {
    const selectedSlug = args.tag;

    if (!selectedSlug || selectedSlug === 'not-found') {
      return <Component articles={[]} tag={null} />;
    }

    const tag = tagsBySlug[selectedSlug];
    const articles = articlesByTag[selectedSlug] || [];

    return <Component articles={articles} tag={tag} />;
  },
};
