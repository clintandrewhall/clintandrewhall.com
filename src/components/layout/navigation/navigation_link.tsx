import { type MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

import { type TopicId, topicTitles } from '@lib/site';

import styles from './navigation_link.styles';

export interface NavigationLinkProps {
  id: TopicId;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  isSelected?: boolean;
}

const getTo = (id: TopicId) => {
  switch (id) {
    case 'home':
      return '/';
    case 'resume':
    case 'portfolio':
      return `/${id}`;
    default:
      return `/#${id}`;
  }
};

export const NavigationLink = ({
  id,
  href: hrefProp,
  onClick,
  isSelected = false,
}: NavigationLinkProps) => {
  const to = hrefProp || getTo(id);

  return (
    <li {...styles.root(isSelected)}>
      <Link {...{ onClick, to, ...styles.link }}>{topicTitles[id]}</Link>
    </li>
  );
};
