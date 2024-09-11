import React from 'react';

import { cx } from '@lib/css';

import { Footer } from './footer';

import styles from './layout.styles';

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  element?: 'div' | 'main' | 'article';
  id?: string;
}

const Component = ({ children, className, element = 'div', id }: LayoutProps) => {
  return (
    <div {...{ ...cx(styles.outer, className), id }}>
      {React.createElement(element, { ...styles.inner }, children)}
    </div>
  );
};

export const Layout = Object.assign(Component, {
  Footer,
});
