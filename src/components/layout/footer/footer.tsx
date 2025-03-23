import { SocialProfiles } from '@components/social_profiles';

import { SiteCredits } from './site_credits';
import { SiteLogo } from './site_logo';

import styles from './footer.styles';

const FooterComponent = () => (
  <footer {...styles.root}>
    <Footer.SiteLogo />
    <Footer.SocialProfiles {...styles.social} />
    <Footer.SiteCredits />
  </footer>
);

export const Footer = Object.assign(FooterComponent, {
  SocialProfiles,
  SiteLogo,
  SiteCredits,
});
