import React, { forwardRef, type ReactNode } from 'react';

import { cx } from '@lib/css';
import { slot, useSlots } from '@lib/hooks';

import { Layout } from '../layout';

import { SectionDivider as Divider } from './section_divider';
import { SectionHeader } from './section_header';
import { SectionLink as Link } from './section_link';

import styles from './section.styles';

export interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  style?: React.CSSProperties;
}

const Header = slot(SectionHeader, 'header');

const Component = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, id, className, style }, ref) => {
    const slots = useSlots(children);

    return (
      <Layout element="article" {...{ id, ref, ...cx(styles.root(style), className) }}>
        {slots.header}
        {slots.children}
      </Layout>
    );
  },
);

export const Section = Object.assign(Component, {
  Header,
  Divider,
  Link,
});
