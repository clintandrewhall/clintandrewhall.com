import type { IconSocial } from '@theme/icons';

import styles from './social_profiles.styles';

interface SocialProfileItemProps {
  profile: Profile;
}

export interface SocialProfilesProps {
  profiles: Profile[];
}

const SocialProfileItem = ({ profile }: SocialProfileItemProps) => (
  <li key={profile.network} {...styles.item}>
    <a href={profile.url} rel="noopener noreferrer" target="_blank" {...styles.link}>
      <i {...styles.logos[profile.network.toLowerCase() as IconSocial]} aria-hidden="true" />
      <span>{profile.network}</span>
    </a>
  </li>
);

export const SocialProfiles = ({ profiles }: SocialProfilesProps) => {
  const items = profiles.map((profile) => (
    <SocialProfileItem key={profile.network} profile={profile} />
  ));

  return <ul {...styles.root}>{items}</ul>;
};
