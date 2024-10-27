import { css as csl } from '@linaria/core';
import 'ress';
import 'unfonts.css';

import { Meta } from '@components/meta';
import { css, cx } from '@lib/css';
import { theme } from '@theme';

import { Routes } from './routing';

export const App = () => (
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
      <Routes />
    </div>
  </>
);
