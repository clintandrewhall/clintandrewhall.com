// @flow
import React from 'react';
import { Route, Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './HeaderLink.module.css';
import type { ContextRouter as LinkProps } from 'react-router-dom';

type Props = {
  exact: boolean,
  label: string,
  onClick?: ?Function,
  to: string,
};

const HeaderLink = (props: Props) => {
  const { exact, label, onClick, to } = props;

  return (
    <Route
      path={to}
      exact={exact}
      children={(props: LinkProps) => {
        const { location } = props;
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
            })}
          >
            <Link to={to} title={label} onClick={onClick}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

HeaderLink.defaultProps = { exact: true };

export default HeaderLink;
