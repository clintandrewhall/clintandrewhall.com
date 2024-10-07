import type { ReactNode } from 'react';

import { PortfolioItem } from './portfolio_item';

import styles from './portfolio_grid.styles';

export interface PortfolioGridProps {
  children: ReactNode;
}

const Component = ({ children }: PortfolioGridProps) => {
  return <div {...styles.root}>{children}</div>;
};

export const PortfolioGrid = Object.assign(Component, { Item: PortfolioItem });
