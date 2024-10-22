import { NotFound, type NotFoundProps } from '@components/not_found';
import { PortfolioGrid, usePortfolioItems } from '@components/portfolio';

import styles from './article_not_found.styles';

const args: NotFoundProps = {
  title: 'Article not found.',
  subtitle: 'But you could read about one of these instead.',
};

export const ArticleNotFound = () => {
  const items = usePortfolioItems();

  return (
    <div {...styles.root}>
      <NotFound {...args} {...styles.notFound}>
        <PortfolioGrid {...styles.grid}>{items.slice(0, 3)}</PortfolioGrid>
      </NotFound>
    </div>
  );
};
