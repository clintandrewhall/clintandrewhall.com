import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';

import { SocialProfiles } from '@components/social_profiles';
import { useHomeTopic } from '@lib/hooks';

// @ts-expect-error - required for loading the logo
import hero from '../content/images/hero.jpg?w=2500&format=webp';

import styles from './hero.styles';

export const Hero = () => {
  const { ref } = useHomeTopic('home');

  return (
    <div ref={ref} id="home">
      <ParallaxProvider>
        <ParallaxBanner {...styles.root}>
          <ParallaxBannerLayer image={hero} speed={-20} expanded={false} {...styles.imageLayer} />
          <ParallaxBannerLayer speed={-10} expanded={false} {...styles.headerLayer}>
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
                  <a href="#portfolio">Latest Projects</a>
                </li>
                <li {...styles.link}>
                  <a href="#about">More About Me</a>
                </li>
              </ul>
              <SocialProfiles showDivider={false} showLabel={false} {...styles.profiles} />
            </header>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
};
