import { type MouseEventHandler, useCallback, useEffect, useState } from 'react';

import { useCurrentSectionId, useIsHome } from '@home';

import { NavigationLink, type NavigationLinkProps } from '../navigation';

export type SectionLinkProps = Pick<NavigationLinkProps, 'id'>;

export const SectionLink = ({ id }: SectionLinkProps) => {
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
