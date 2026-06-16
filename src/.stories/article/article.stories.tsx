import { PortfolioEntry as Component } from '@pages/portfolio/entry';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { decorators } from '../decorators';

const contents = import.meta.glob<PortfolioEntryImport>('@content/portfolio/*.md', { eager: true });
const articleIds = Object.values(contents)
  .sort((a, b) => b.attributes.timestamp - a.attributes.timestamp)
  .map((entry) => entry.attributes.id);

const articles = Object.fromEntries(
  Object.values(contents).map((article) => [article.attributes.id, article]),
);

const meta: Meta<{ articleId: string }> = {
  title: 'Pages/Portfolio/Entry',
  argTypes: {
    articleId: {
      options: ['not-found', ...articleIds],
      control: { type: 'select' },
    },
  },
  decorators,
};

export default meta;

export const Article: StoryObj<{ articleId: string }> = {
  render: (args) => {
    let article = null;

    // We have to destructure the import to avoid issues in React with complex props.
    if (args.articleId && args.articleId !== 'not-found') {
      const { ReactComponent, attributes, html, toc } = articles[args.articleId] || {};
      article = {
        ReactComponent,
        attributes,
        html,
        toc,
      };
    }

    return <Component article={article} />;
  },
};
