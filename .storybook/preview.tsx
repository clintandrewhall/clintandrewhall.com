import { csa, css, cx } from '@/lib/css';
import { theme } from '@/theme';
import type { Preview } from '@storybook/react';
import 'ress';
import 'unfonts.css';
import { withRouter } from 'storybook-addon-remix-react-router';

const preview: Preview = {
  parameters: {
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
          csa`
            ${theme.css.font.size.step0}
            ${theme.css.font.sansSerif.regular}
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
