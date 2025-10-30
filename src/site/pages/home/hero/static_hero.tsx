import { SocialProfiles } from '@components/social_profiles';

// @ts-expect-error - required for loading the hero image
import hero from '../../../../content/images/hero.jpg?w=2500&format=webp';

import { HeroHeader } from './hero_header';

import styles from './static_hero.styles';

export const StaticHero = () => {
  return (
    <div {...styles.root}>
      <div
        {...styles.imageLayer}
        style={{ ...styles.imageLayer.style, backgroundImage: `url(${hero.src})` }}
      />
      <div {...styles.content}>
        <HeroHeader />
        <SocialProfiles showLabel={false} showDivider={false} {...styles.socialProfiles} />
      </div>
    </div>
  );
};
