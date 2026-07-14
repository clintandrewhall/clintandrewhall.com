import { forwardRef } from 'react';

import { StaticHero } from './static_hero';

export const Hero = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} id="home">
    <StaticHero />
  </div>
));
