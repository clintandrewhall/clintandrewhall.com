import { Link } from 'react-router-dom';

import styles from './header_logo.styles';

export interface HeaderLogoProps {
  isLocal?: boolean;
}

export const HeaderLogo = ({ isLocal = false }: HeaderLogoProps) => {
  return (
    <h1 {...styles.root}>
      <Link {...styles.link} to={isLocal ? '#' : '/'}>
        Clint Andrew Hall
      </Link>
    </h1>
  );
};
