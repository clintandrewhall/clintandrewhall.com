import { type MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { useCurrentSectionId, useIsHome } from '@state/home';

import { NavigationLink, type NavigationLinkProps } from './navigation_link';

export type ToSectionLinkProps = Pick<NavigationLinkProps, 'id'>;

export const ToSectionLink = ({ id }: ToSectionLinkProps) => {
  const href = `#${id}`;
  const [isCurrent, setIsCurrent] = useState(false);
  const { currentSectionId } = useCurrentSectionId();
  const isHome = useIsHome();

  const onClick: MouseEventHandler<HTMLAnchorElement> = useCallback((event) => {
    const target = event.target as HTMLAnchorElement;
    const element = document.getElementById(target.hash.slice(1));

    if (element) {
      event.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
    target.blur();
  }, []);

  useEffect(() => {
    setIsCurrent(!isHome && currentSectionId === id);
  }, [currentSectionId, isHome, id]);

  return <NavigationLink {...{ id, onClick, href, isCurrent }} />;
};
