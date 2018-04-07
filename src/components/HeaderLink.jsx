// @flow
import React from 'react';
import { Route, Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './HeaderLink.module.css';
import type { ContextRouter as LinkProps } from 'react-router-dom';

type Props = {
  exact: boolean,
  label: string,
  to: string,
};

const HeaderLink = (props: Props) => {
  const { exact, label, to } = props;

  return (
    <Route
      path={to}
      exact={exact}
      children={(props: LinkProps) => {
        const { location } = props;
        const { hash } = location;
        return (
          <li
            className={classnames(styles.headerLink, {
              [`${styles.current}`]: hash.substr(1) === to.substr(1),
            })}>
            <Link to={to} title={label}>
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
