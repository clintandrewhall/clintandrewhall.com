import { useEntryIds } from '@lib/hooks/use_portfolio';

import { PortfolioItem } from './portfolio_item';

import styles from './portfolio_grid.styles';

export const PortfolioGrid = () => {
  const ids = useEntryIds();

  return (
    <div {...styles.root}>
      {ids.map((id) => (
        <PortfolioItem id={id} key={id} />
      ))}
    </div>
  );
};
