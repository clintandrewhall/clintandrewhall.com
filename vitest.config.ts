import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true,
  },
  resolve: {
    alias: [
      { find: '@content', replacement: resolve(__dirname, './src/content') },
      { find: '@components', replacement: resolve(__dirname, './src/components') },
      { find: '@lib', replacement: resolve(__dirname, './src/lib') },
      { find: '@pages', replacement: `${resolve(__dirname, './src/site/pages')}` },
      { find: '@state', replacement: resolve(__dirname, './src/state') },
      { find: /@theme\//, replacement: `${resolve(__dirname, './src/theme')}/` },
      { find: /@theme$/, replacement: resolve(__dirname, './src/theme/index') },
      { find: '@', replacement: resolve(__dirname, './src') },
    ],
  },
});
