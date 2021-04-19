import { Route, Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './HeaderLink.module.css';

type Props = {
  label: string;
  onClick?: () => void;
  to: string;
};

export const HeaderLink = ({ label, onClick, to }: Props) => (
  <Route
    path={to}
    children={({ location }) => {
      const { hash, pathname } = location;

      const pathMatch = pathname.substr(0, to.length) === to && to.length > 1;

      // FIXME: ugh, this is ugly.
      const hashCheck = hash.length > 0 || (hash.length === 0 && to === '#');
      const hashSub = hash.substr(1) === to.substr(1);
      const hashMatch = !pathMatch && hashCheck && hashSub;

      const selected = pathMatch || hashMatch;

      return (
        <li
          className={classnames(styles.headerLink, {
            [`${styles.current}`]: selected,
          })}>
          <Link to={to} title={label} onClick={onClick}>
            {label}
          </Link>
        </li>
      );
    }}
  />
);
