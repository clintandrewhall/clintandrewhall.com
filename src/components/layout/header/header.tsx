import { useEffect, useState } from 'react';

import { GithubCorner as Corner } from '@components/github';

import { Navigation, type NavigationProps } from '../navigation';

import { HeaderLogo as Logo } from './header_logo';

import styles from './header.styles';

const SCROLL_THRESHOLD = 80;

export interface HeaderProps extends NavigationProps {
  background?: 'clear' | 'opaque';
}

const vh = (percent: number): number => {
  const {
    document: {
      documentElement: { clientHeight },
    },
    window: { innerHeight },
  } = window;
  return (Math.max(clientHeight, innerHeight || 0) * percent) / 100;
};

const HeaderComponent = ({ background = 'clear', ...props }: HeaderProps) => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY >= vh(SCROLL_THRESHOLD));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header {...styles.root(isFloating, background)}>
      <Header.Logo />
      <Header.Navigation {...props} />
      <Header.Corner />
    </header>
  );
};

export const Header = Object.assign(HeaderComponent, {
  Logo,
  Navigation,
  Corner,
});
