import { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { type SectionId, sectionIds } from '@lib/site';

import { NavigationLink } from './navigation_link';
import { ToSectionLink } from './to_section_link';

import styles from './navigation.styles';

export interface NavigationProps {
  isLocal?: boolean;
  selectedId?: SectionId;
}

export const Navigation = ({ isLocal = false, selectedId }: NavigationProps) => {
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

  const link = isLocal ? ToSectionLink : NavigationLink;
  const links = sectionIds.map((id) => (
    <Fragment key={id}>{link({ id, isCurrent: selectedId === id })}</Fragment>
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
