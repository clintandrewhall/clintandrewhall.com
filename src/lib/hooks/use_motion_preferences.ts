import { useEffect, useState } from 'react';

const MEDIA_QUERY = '(prefers-reduced-motion: reduce)';

export interface MotionPreferences {
  isHydrated: boolean;
  prefersReducedMotion: boolean;
  shouldReduceMotion: boolean;
}

export const useMotionPreferences = (): MotionPreferences => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      setPrefersReducedMotion(false);
      return;
    }

    const mql = window.matchMedia(MEDIA_QUERY);

    const update = () => setPrefersReducedMotion(mql.matches);
    update();

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', update);
      return () => mql.removeEventListener('change', update);
    }

    // Fallback for Safari < 14
    mql.addListener(update);
    return () => mql.removeListener(update);
  }, []);

  return {
    isHydrated,
    prefersReducedMotion,
    shouldReduceMotion: !isHydrated || prefersReducedMotion,
  };
};
