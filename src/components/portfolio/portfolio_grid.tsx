import type { ReactNode } from 'react';

import styles from './portfolio_grid.styles';

export interface PortfolioGridProps {
  children: ReactNode;
}

export const PortfolioGrid = ({ children }: PortfolioGridProps) => {
  return <div {...styles.root}>{children}</div>;
};
