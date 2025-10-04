import { useEffect, useState } from 'react';

import { GithubCorner as Corner } from '@components/github';
import { useMotionPreferences } from '@lib/hooks';

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

const HeaderComponent = ({ background: backgroundProp = 'clear', ...props }: HeaderProps) => {
  const { shouldReduceMotion } = useMotionPreferences();
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsFloating(false);
      return;
    }

    const handleScroll = () => {
      setIsFloating(window.scrollY >= vh(SCROLL_THRESHOLD));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldReduceMotion]);

  const background = shouldReduceMotion ? 'opaque' : backgroundProp;

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
