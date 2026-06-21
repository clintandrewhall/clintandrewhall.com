import type { ReactNode } from 'react';

import { cx } from '@lib/css';

import styles from './two_column.styles';

export interface TwoColumnProps {
  children: ReactNode;
  className?: string;
}

export const TwoColumn = ({ children, className }: TwoColumnProps) => (
  <div {...cx(styles.root, className)}>{children}</div>
);
