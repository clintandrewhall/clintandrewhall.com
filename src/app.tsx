import { css as csl } from '@linaria/core';
import 'ress';
import 'unfonts.css';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import { Meta } from '@components/meta';
import { css, cx } from '@lib/css';
import { theme } from '@theme';

import { router } from './routing';

export const App = () => (
  <HelmetProvider>
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
      <RouterProvider router={router} />
    </div>
  </HelmetProvider>
);
