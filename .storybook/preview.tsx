import { StrictMode } from 'react';
import type { Preview } from '@storybook/react-vite';
import 'ress';
import 'unfonts.css';
import { HelmetProvider } from 'react-helmet-async';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

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
    reactRouter: reactRouterParameters({
      routing: {
        path: '/',
        handle: 'Home',
      },
    }),
  },

  decorators: [
    (Story) => {
      return (
        <StrictMode>
          <HelmetProvider>
            {/* 
            This is commented out because, for some reason, linaria is not taking effect
            at top-level storybook objects.  The decorator has to be in the actual
            _story_ to avoid issues.
            
            <div
              className={css`
                ${theme.page.body}
                ${theme.definitions}
              `}
            > */}
            <Story />
            {/* </div> */}
          </HelmetProvider>
        </StrictMode>
      );
    },
    withRouter,
  ],
};

export default preview;
