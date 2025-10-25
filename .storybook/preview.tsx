import { StrictMode } from 'react';
import type { Preview } from '@storybook/react-vite';
import 'ress';
import '@fontsource-variable/montserrat';
import '@fontsource/libre-baskerville/400.css';
import '@fontsource/libre-baskerville/700.css';
import { withRouter } from 'storybook-addon-remix-react-router';

const chromatic_viewports = {
  compact: {
    name: 'Compact (320px)',
    styles: {
      width: '320px',
      height: '720px',
    },
  },
  comfortable: {
    name: 'Comfortable (630px)',
    styles: {
      width: '630px',
      height: '800px',
    },
  },
  expanded: {
    name: 'Expanded (1240px)',
    styles: {
      width: '1240px',
      height: '800px',
    },
  },
  expanded_plus: {
    name: 'Expanded+ (1440px)',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
} as const;

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: chromatic_viewports,
      defaultViewport: 'responsive',
    },
    chromatic: {
      viewports: [320, 630, 1240],
    },
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
  },

  decorators: [
    withRouter,
    (Story) => {
      return (
        <StrictMode>
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
        </StrictMode>
      );
    },
  ],
};

export default preview;
