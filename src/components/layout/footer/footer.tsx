import { useResume } from '@/lib/hooks';

import { SiteCredits } from './site_credits';
import { SiteLogo } from './site_logo';
import { SocialProfiles } from './social_profiles';

import styles from './footer.styles';

const Component = () => {
  const profiles = useResume()?.basics.profiles || [];

  return (
    <footer {...styles.root}>
      <Footer.SiteLogo />
      <Footer.SocialProfiles profiles={profiles} />
      <Footer.SiteCredits />
    </footer>
  );
};

export const Footer = Object.assign(Component, {
  SocialProfiles,
  SiteLogo,
  SiteCredits,
});
