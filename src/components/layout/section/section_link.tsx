import { cx } from '@lib/css';

import { Button } from '@components/button';

import styles from './section_link.styles';

export interface SectionLinkProps {
  href: string;
  title: string;
  className?: string;
}

export const SectionLink = ({ href: to, title, className }: SectionLinkProps) => (
  <p {...cx(styles.root, className)}>
    <Button variant="primary" to={to}>
      {title}
    </Button>
  </p>
);
