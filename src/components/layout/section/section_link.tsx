import { cx } from '@lib/css';

import styles from './section_link.styles';

export interface SectionLinkProps {
  href: string;
  title: string;
  className?: string;
}

export const SectionLink = ({ href, title: children, className }: SectionLinkProps) => (
  <p {...cx(styles.root, className)}>
    <a
      {...{ ...styles.link, href, children }}
      target={href.startsWith('http') ? '_blank' : '_self'}
    />
  </p>
);
