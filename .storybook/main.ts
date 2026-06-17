import type { StorybookConfig } from '@storybook/react-vite';
import type { UserConfig } from 'vite';

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
  async viteFinal(config: UserConfig) {
    // Define chunk splitting rules
    const chunkRules = [
      {
        chunk: 'vendor-react',
        patterns: ['node_modules/react/', 'node_modules/react-dom/', 'node_modules/scheduler/'],
      },
      { chunk: 'vendor-react-router', patterns: ['node_modules/react-router'] },
      { chunk: 'vendor-icons', patterns: ['node_modules/react-icons/'] },
      { chunk: 'vendor-swiper', patterns: ['node_modules/swiper/'] },
      {
        chunk: 'vendor-markdown',
        patterns: ['node_modules/react-markdown/', 'node_modules/markdown-it/'],
      },
      { chunk: 'vendor-styling', patterns: ['node_modules/@linaria/', 'node_modules/@wyw-in-js/'] },
      { chunk: 'vendor-common', patterns: ['node_modules/'] }, // Catch-all for other vendors
    ];

    return {
      ...config,
      resolve: {
        ...config.resolve,
        dedupe: [...(config.resolve?.dedupe || []), 'react', 'react-dom'],
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [...(config.optimizeDeps?.include || []), 'react-icons'],
        esbuildOptions: {
          ...config.optimizeDeps?.esbuildOptions,
          treeShaking: true,
        },
      },
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          treeshake: false,
          output: {
            manualChunks: (id: string) => {
              // Find the first matching chunk rule
              for (const { chunk, patterns } of chunkRules) {
                if (patterns.some((pattern) => id.includes(pattern))) {
                  return chunk;
                }
              }
            },
          },
          onwarn(warning, warn) {
            if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
              return;
            }
            warn(warning);
          },
        },
      },
    };
  },
};

export default config;
