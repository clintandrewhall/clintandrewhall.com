import { css, cx } from '@lib/css';
import { useResume } from '@lib/hooks';
import { theme } from '@theme';

import Icon, { type IconType } from './icon';

import styles from './social_profiles.styles';

interface SocialProfileItemProps {
  profile: Profile;
  showLabel?: boolean;
  showDivider?: boolean;
}

const SocialProfileItem = ({
  profile,
  showLabel = true,
  showDivider = true,
}: SocialProfileItemProps) => (
  <li key={profile.network} {...styles.item({ showDivider, showLabel })}>
    <a
      aria-label={showLabel ? undefined : profile.network}
      href={profile.url}
      rel="noopener noreferrer"
      target="_blank"
      {...styles.link}
    >
      <Icon
        name={profile.network.toLowerCase() as IconType}
        className={css`
          ${theme.decl.font.size.step1}
        `}
      />
      {showLabel ? <span>{profile.network}</span> : null}
    </a>
  </li>
);

export interface SocialProfilesProps extends Omit<SocialProfileItemProps, 'profile'> {
  className?: string;
}

export const SocialProfiles = ({ className, ...props }: SocialProfilesProps) => {
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
