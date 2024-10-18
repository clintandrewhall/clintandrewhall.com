import { cx } from '@lib/css';
import { useResume } from '@lib/hooks';
import type { IconSocial } from '@theme/icons';

import styles from './social_profiles.styles';

interface SocialProfileItemProps {
  profile: Profile;
  showLabel?: boolean;
  showDivider?: boolean;
}

export interface SocialProfilesProps extends Omit<SocialProfileItemProps, 'profile'> {
  className?: string;
}

const SocialProfileItem = ({
  profile,
  showLabel = true,
  showDivider = true,
}: SocialProfileItemProps) => (
  <li key={profile.network} {...styles.item({ showDivider, showLabel })}>
    <a href={profile.url} rel="noopener noreferrer" target="_blank" {...styles.link}>
      <i {...styles.logos[profile.network.toLowerCase() as IconSocial]} aria-hidden="true" />
      {showLabel ? <span>{profile.network}</span> : null}
    </a>
  </li>
);

export const SocialProfiles = ({ className: className, ...props }: SocialProfilesProps) => {
  const profiles = useResume()?.basics.profiles || [];

  if (!profiles.length) {
    return null;
  }

  const items = profiles.map((profile) => (
    <SocialProfileItem key={profile.network} {...{ profile, ...props }} />
  ));

  const { className: c, style } = styles.root;

  return (
    <ul className={cx(c, className)} style={style}>
      {items}
    </ul>
  );
};
