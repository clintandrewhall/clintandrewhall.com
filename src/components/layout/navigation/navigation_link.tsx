import { type MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

import { type SectionId, sectionTitles } from '@lib/site';

import styles from './link.styles';

export interface NavigationLinkProps {
  id: SectionId;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  isCurrent?: boolean;
}

const getTo = (id: SectionId) => {
  switch (id) {
    case 'resume':
      return '/resume';
    case 'portfolio':
      return '/portfolio';
    default:
      return `/#${id}`;
  }
};

export const NavigationLink = ({
  id,
  href: hrefProp,
  onClick,
  isCurrent = false,
}: NavigationLinkProps) => {
  const to = hrefProp || getTo(id);

  return (
    <li {...styles.root(isCurrent)}>
      <Link {...{ onClick, to, ...styles.link }}>{sectionTitles[id]}</Link>
    </li>
  );
};
