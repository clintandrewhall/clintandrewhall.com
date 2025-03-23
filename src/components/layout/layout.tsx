import React, { forwardRef } from 'react';

import { cx } from '@lib/css';

import { Footer } from './footer';
import { Header } from './header';

import styles from './layout.styles';

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  element?: 'div' | 'main' | 'article';
  id?: string;
}

const LayoutComponent = forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, className, element = 'div', id }, ref) => {
    return (
      <div {...{ ref, ...cx(styles.outer, className), id }}>
        {React.createElement(element, { ...styles.inner }, children)}
      </div>
    );
  },
);

export const Layout = Object.assign(LayoutComponent, {
  Header,
  Footer,
});
