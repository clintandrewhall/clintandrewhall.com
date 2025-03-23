import { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { type TopicId, topicIds } from '@lib/site';

import { NavigationLink, type NavigationLinkProps } from './navigation_link';

import styles from './navigation.styles';

export interface NavigationProps {
  Link?: (props: NavigationLinkProps) => JSX.Element;
  selectedId?: TopicId;
}

export const Navigation = ({ Link = NavigationLink, selectedId }: NavigationProps) => {
  const isNarrow = useMediaQuery({
    maxDeviceWidth: 750,
  });

  const [isOpen, setIsOpen] = useState(!isNarrow);
  const [listStyle, setListStyle] = useState(styles.list);

  useEffect(() => {
    if (isNarrow) {
      setListStyle(styles.narrowList(isOpen));
    } else {
      setListStyle(styles.list);
    }
  }, [isNarrow, isOpen]);

  const links = topicIds.map((id) => (
    <Fragment key={id}>{Link({ id, isSelected: selectedId === id })}</Fragment>
  ));

  const button = isNarrow ? (
    <button {...styles.menuButton(isOpen)} onClick={() => setIsOpen(!isOpen)}>
      <span>Menu</span>
    </button>
  ) : null;

  return (
    <>
      <nav {...styles.root(isNarrow)}>
        <ul {...listStyle}>{links}</ul>
      </nav>
      {button}
    </>
  );
};
