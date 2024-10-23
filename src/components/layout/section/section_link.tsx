import { Link } from 'react-router-dom';

import { cx } from '@lib/css';

import styles from './section_link.styles';

export interface SectionLinkProps {
  href: string;
  title: string;
  className?: string;
}

export const SectionLink = ({ href: to, title: children, className }: SectionLinkProps) => (
  <p {...cx(styles.root, className)}>
    <Link
      {...{ ...styles.link, to, children }}
      target={to.startsWith('http') ? '_blank' : '_self'}
    />
  </p>
);
