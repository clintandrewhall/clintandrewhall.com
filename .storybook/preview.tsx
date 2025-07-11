import { StrictMode } from 'react';
import type { Preview } from '@storybook/react-vite';
import 'ress';
import 'unfonts.css';
import { HelmetProvider } from 'react-helmet-async';

// import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import { css } from '@lib/css';
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
        order: ['Pages', 'Home', 'Resume'],
      },
    },
    // reactRouter: reactRouterParameters({
    //   routing: {
    //     path: '/',
    //     handle: 'Home',
    //   },
    // }),
  },

  decorators: [
    (Story) => {
      return (
        <StrictMode>
          <HelmetProvider>
            <div
              className={css`
                ${theme.page.body}
                ${theme.definitions}
              `}
            >
              <Story />
            </div>
          </HelmetProvider>
        </StrictMode>
      );
    },
    // withRouter,
  ],
};

export default preview;
