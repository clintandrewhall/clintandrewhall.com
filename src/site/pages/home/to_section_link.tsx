import { type MouseEventHandler, useCallback } from 'react';

import { NavigationLink, type NavigationLinkProps } from '@components/layout';

export type ToSectionLinkProps = Pick<NavigationLinkProps, 'id' | 'isSelected'>;

export const ToSectionLink = ({ id, isSelected }: ToSectionLinkProps) => {
  const href = id === 'resume' ? '/resume' : `#${id}`;

  const onClick: MouseEventHandler<HTMLAnchorElement> = useCallback((event) => {
    const target = event.target as HTMLAnchorElement;
    const element = document.getElementById(target.hash.slice(1));

    if (element) {
      event.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }

    target.blur();
  }, []);

  return <NavigationLink {...{ id, onClick, href, isSelected }} />;
};
