import { type MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { useIsHome, useSelectedSectionId } from '@state/home';

import { NavigationLink, type NavigationLinkProps } from './navigation_link';

export type ToSectionLinkProps = Pick<NavigationLinkProps, 'id'>;

export const ToSectionLink = ({ id }: ToSectionLinkProps) => {
  const href = id === 'resume' ? '/resume' : `#${id}`;

  const [isSelected, setIsSelected] = useState(false);
  const { selectedSectionId } = useSelectedSectionId();
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
    setIsSelected(!isHome && selectedSectionId === id);
  }, [selectedSectionId, isHome, id]);

  return <NavigationLink {...{ id, onClick, href, isSelected }} />;
};
