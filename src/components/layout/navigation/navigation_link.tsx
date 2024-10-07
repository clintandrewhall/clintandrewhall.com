import { type MouseEventHandler } from 'react';

import { type SectionId, sectionTitles } from '@lib/site';

import styles from './link.styles';

export interface NavigationLinkProps {
  id: SectionId;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  isCurrent?: boolean;
}

export const NavigationLink = ({
  id,
  href: hrefProp,
  onClick,
  isCurrent = false,
}: NavigationLinkProps) => {
  const href = hrefProp || `/${id}`;

  return (
    <li {...styles.root(isCurrent)}>
      <a {...{ onClick, href, ...styles.link }}>{sectionTitles[id]}</a>
    </li>
  );
};
