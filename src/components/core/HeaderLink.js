// @flow
import React from "react";
import { Route } from "react-router-dom";
import classnames from "classnames";

import styles from "./HeaderLink.module.css";
import type { ContextRouter as LinkProps } from "react-router-dom";

type Props = {
  exact: boolean,
  label: string,
  to: string
};

const HeaderLink = (props: Props) => {
  const { exact, label, to } = props;

  return (
    <Route
      path={to}
      exact={exact}
      children={(props: LinkProps) => {
        const { location } = props;
        const { hash, pathname } = location;

        const pathMatch = pathname.substr(0, to.length) === to && to.length > 1;

        // FIXME: ugh, this is ugly.
        const hashMatch =
          !pathMatch &&
          (hash.length > 0 || (hash.length === 0 && to === "#")) &&
          hash.substr(1) === to.substr(1);
        debugger;
        const selected = pathMatch || hashMatch;
        console.log(pathname, to);

        return (
          <li
            className={classnames(styles.headerLink, {
              [`${styles.current}`]: selected
            })}
          >
            <a href={to} title={label}>
              {label}
            </a>
          </li>
        );
      }}
    />
  );
};

HeaderLink.defaultProps = { exact: true };

export default HeaderLink;
