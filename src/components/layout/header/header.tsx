import { useEffect, useState } from 'react';

import { GithubCorner as Corner } from '@components/github';

import { Navigation } from '../navigation';

import { HeaderLogo as Logo } from './header_logo';

import styles from './header.styles';

const SCROLL_THRESHOLD = 80;

export interface HeaderProps {
  isLocal?: boolean;
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

const Component = ({ isLocal }: HeaderProps) => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= vh(SCROLL_THRESHOLD)) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header {...styles.root(isFloating)}>
      <Header.Logo />
      <Header.Navigation {...{ isLocal }} />
      <Header.Corner />
    </header>
  );
};

export const Header = Object.assign(Component, {
  Logo,
  Navigation,
  Corner,
});
