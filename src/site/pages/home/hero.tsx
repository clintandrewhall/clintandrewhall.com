import { forwardRef } from 'react';
import { Link } from 'react-router';
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';

import { SocialProfiles } from '@components/social_profiles';
import { useMotionPreferences } from '@lib/hooks';

// @ts-expect-error - required for loading the logo
import hero from '../../../content/images/hero.jpg?w=2500&format=webp';

import styles from './hero.styles';

const HeroHeader = () => (
  <header {...styles.header}>
    <hgroup {...styles.headerGroup}>
      <h1 {...styles.intro}>
        I&apos;m Clint Andrew Hall. <br />
        I&apos;m a Technical Lead <br />
        and User Interface Engineer.
      </h1>
      <h2 {...styles.greeting}>Hello There...!</h2>
    </hgroup>
    <ul {...styles.links}>
      <li {...styles.link}>
        <Link to="/#portfolio">Latest Projects</Link>
      </li>
      <li {...styles.link}>
        <Link to="/#about">More About Me</Link>
      </li>
    </ul>
    <SocialProfiles showDivider={false} showLabel={false} {...styles.profiles} />
  </header>
);

const StaticHero = () => (
  <div {...styles.root}>
    <div
      {...styles.imageLayer}
      style={{
        ...(styles.imageLayer.style || {}),
        backgroundImage: `url(${hero.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
      }}
    />
    <div
      {...styles.headerLayer}
      style={{
        ...(styles.headerLayer.style || {}),
        position: 'absolute',
        bottom: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      <HeroHeader />
    </div>
  </div>
);

const ParallaxHero = () => (
  <ParallaxProvider>
    <ParallaxBanner {...styles.root}>
      <ParallaxBannerLayer image={hero.src} speed={-20} expanded={false} {...styles.imageLayer} />
      <ParallaxBannerLayer speed={-10} expanded={false} {...styles.headerLayer}>
        <HeroHeader />
      </ParallaxBannerLayer>
    </ParallaxBanner>
  </ParallaxProvider>
);

export const Hero = forwardRef<HTMLDivElement>(({}, ref) => {
  const { shouldReduceMotion } = useMotionPreferences();

  return (
    <div ref={ref} id="home">
      {shouldReduceMotion ? <StaticHero /> : <ParallaxHero />}
    </div>
  );
});
