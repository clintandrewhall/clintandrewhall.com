import { useCallback, useEffect, useState } from 'react';

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

const useHeaderBackground = (backgroundProp: NonNullable<HeaderProps['background']>) => {
  const { shouldReduceMotion } = useMotionPreferences();
  const [background, setBackground] = useState<'clear' | 'opaque'>(() =>
    shouldReduceMotion || backgroundProp === 'opaque' ? 'opaque' : 'clear',
  );

  useEffect(() => {
    if (shouldReduceMotion || backgroundProp === 'opaque') {
      setBackground('opaque');
      return;
    }

    const handleScroll = () => {
      setBackground(window.scrollY >= vh(SCROLL_THRESHOLD) ? 'opaque' : 'clear');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [backgroundProp, shouldReduceMotion]);

  return background;
};

const HeaderComponent = ({ background: backgroundProp = 'clear', ...props }: HeaderProps) => {
  const backgroundFromScroll = useHeaderBackground(backgroundProp);
  const [navigationState, setNavigationState] = useState({ isNarrow: false, isOpen: false });

  const onStateChange = (state: { isNarrow: boolean; isOpen: boolean }) => {
    setNavigationState(state);
  };

  const shouldForceOpaque = navigationState.isNarrow && navigationState.isOpen;
  const background = shouldForceOpaque ? 'opaque' : backgroundFromScroll;

  return (
    <header {...styles.root(background)}>
      <Header.Logo />
      <Header.Navigation {...props} onStateChange={onStateChange} />
      <Header.Corner />
    </header>
  );
};

export const Header = Object.assign(HeaderComponent, {
  Logo,
  Navigation,
  Corner,
});
