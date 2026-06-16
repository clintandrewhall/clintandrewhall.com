import { forwardRef } from 'react';

import { StaticHero } from './static_hero';

export const Hero = forwardRef<HTMLDivElement>(({}, ref) => {
  // const { shouldReduceMotion } = useMotionPreferences();

  return (
    <div ref={ref} id="home">
      <StaticHero />
    </div>
  );
});
