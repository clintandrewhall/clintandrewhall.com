import { NotFound, type NotFoundProps } from '@components/not_found';
import { PortfolioGrid, usePortfolioItems } from '@components/portfolio';

import styles from './portfolio_entry_not_found.styles';

export const notFoundProps: NotFoundProps = {
  title: 'Portfolio entry not found.',
  subtitle: 'But you could view one of these projects instead.',
};

export const PortfolioEntryNotFound = () => {
  const items = usePortfolioItems();

  return (
    <div {...styles.root}>
      <NotFound {...notFoundProps} {...styles.notFound}>
        <PortfolioGrid {...styles.grid}>{items.slice(0, 3)}</PortfolioGrid>
      </NotFound>
    </div>
  );
};
