import { Fragment, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { type TopicId, topicIds } from '@lib/site';
import { BREAKPOINT_NAV } from '@theme/media';

import { NavigationLink, type NavigationLinkProps } from './navigation_link';

import navigationStyles from './navigation.styles';

export interface NavigationProps {
  Link?: (props: NavigationLinkProps) => React.JSX.Element;
  onStateChange?: (state: { isNarrow: boolean; isOpen: boolean }) => void;
  selectedId?: TopicId;
}

export const Navigation = ({
  Link = NavigationLink,
  onStateChange,
  selectedId,
}: NavigationProps) => {
  const menuId = 'site-navigation-menu';
  const mediaQueryMatch = useMediaQuery({
    maxWidth: BREAKPOINT_NAV,
  });

  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isNarrow = isClient && mediaQueryMatch;

  useEffect(() => {
    if (!isNarrow || !isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!ref.current) {
        return;
      }

      if (!(event.target instanceof Node && ref.current.contains(event.target))) {
        setIsOpen(false);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isNarrow, isOpen]);

  useEffect(() => {
    if (!onStateChange) {
      return;
    }

    onStateChange({
      isNarrow,
      isOpen,
    });
  }, [isNarrow, isOpen, onStateChange]);

  const onClick = () => {
    setIsOpen(false);
  };

  const links = topicIds.map((id) => (
    <Fragment key={id}>
      {Link({
        id,
        isSelected: selectedId === id,
        onClick,
        style: id === 'home' ? { display: 'none' } : undefined,
      })}
    </Fragment>
  ));

  const styles = navigationStyles({ isNarrow, isOpen });

  return (
    <nav ref={ref} {...styles.root}>
      <ul id={menuId} aria-hidden={isNarrow && !isOpen} {...styles.list}>
        {links}
      </ul>
      <button
        {...styles.button}
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label="Menu"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span>Menu</span>
      </button>
    </nav>
  );
};
