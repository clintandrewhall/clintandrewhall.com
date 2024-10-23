import { Link } from 'react-router-dom';

// @ts-expect-error - required for loading the logo
import logo from '../../../content/images/logo.png?w=130&format=webp';

import styles from './site_logo.styles';

export const SiteLogo = () => (
  <p {...styles.root}>
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  </p>
);
