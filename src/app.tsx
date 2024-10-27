import { useEffect } from 'react';
import { css as csl } from '@linaria/core';
import 'ress';
import 'unfonts.css';
import { Outlet, useLocation } from 'react-router-dom';

import { Meta } from '@components/meta';
import { css, cx } from '@lib/css';
import { theme } from '@theme';

export const App = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Meta />
      <div
        className={cx(
          csl`
          ${theme.decl.font.size.step0}
          ${theme.decl.font.sansSerif.regular}
        `,
          css`
            ${theme.page.body}
            ${theme.definitions}
          `,
        )}
      >
        <Outlet />
      </div>
    </>
  );
};
