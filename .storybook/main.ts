import type { StorybookConfig } from '@storybook/react-vite';
// import { mergeConfig } from 'vite';
// import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../src/.stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
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
