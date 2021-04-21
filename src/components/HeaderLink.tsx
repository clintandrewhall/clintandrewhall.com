import { Route, Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './HeaderLink.module.css';

type Props = {
  label: string;
  onClick?: () => void;
  to: string;
  selected: boolean;
};

export const HeaderLink = ({ label, onClick, to, selected }: Props) => (
  <Route
    path={to}
    children={() => {
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
