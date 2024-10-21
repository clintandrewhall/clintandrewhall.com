import type { CSSProperties, ReactNode } from 'react';

import { cx } from '@lib/css';

import { PortfolioItem } from './portfolio_item';

import styles from './portfolio_grid.styles';

export interface PortfolioGridProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const Component = ({ children, className = '', style = {} }: PortfolioGridProps) => {
  const root = cx(styles.root, { style, className });
  return <div {...root}>{children}</div>;
};

export const PortfolioGrid = Object.assign(Component, { Item: PortfolioItem });
