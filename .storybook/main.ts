import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/.stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    'storybook-addon-remix-react-router',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {},
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen',
  },
};

export default config;
