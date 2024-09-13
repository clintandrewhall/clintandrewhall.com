import { css as csl } from '@linaria/core';
import type { Preview } from '@storybook/react';
import 'ress';
import 'unfonts.css';
import { withRouter } from 'storybook-addon-remix-react-router';

import { css, cx } from '@lib/css';
import { theme } from '@theme';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Pages', 'Home'],
      },
    },
  },

  decorators: [
    withRouter,
    (Story) => (
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
        <Story />
      </div>
    ),
  ],
};

export default preview;
