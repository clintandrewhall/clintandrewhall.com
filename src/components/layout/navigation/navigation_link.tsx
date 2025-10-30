import { type MouseEventHandler } from 'react';
import { Link } from 'react-router';

import { type TopicId, topicTitles } from '@lib/site';

import styles from './navigation_link.styles';

export interface NavigationLinkProps {
  id: TopicId;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  isSelected?: boolean;
  style?: React.CSSProperties;
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
  style,
}: NavigationLinkProps) => {
  const to = hrefProp || getTo(id);
  const { style: linkStyle, ...rest } = styles.link(isSelected);

  return (
    <li {...styles.root}>
      <Link {...{ onClick, to, ...rest, style: { ...linkStyle, ...style } }}>
        {topicTitles[id]}
      </Link>
    </li>
  );
};
