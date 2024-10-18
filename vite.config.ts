import react from '@vitejs/plugin-react-swc';
import linaria from '@wyw-in-js/vite';
import { resolve } from 'path';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import { Mode, plugin as markdown } from 'vite-plugin-markdown';

import { unfontConfig } from './config';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [
    markdown({ mode: [Mode.HTML, Mode.REACT, Mode.TOC] }),
    Unfonts(unfontConfig),
    linaria({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react', '@wyw-in-js'],
      },
      tagResolver: (source, tag) => {
        if (source === '@lib/css') {
          if (tag === 'css') {
            return resolve('node_modules/@linaria/atomic/processors/css');
          }

          if (tag === 'css') {
            return resolve('node_modules/@linaria/core/processors/css');
          }

          if (tag === 'styled') {
            return resolve('node_modules/@linaria/atomic/processors/styled');
          }
        }

        return null;
      },
    }),
    imagetools(),
    react(),
  ],
  resolve: {
    alias: [
      { find: '@content', replacement: resolve(__dirname, './src/content') },
      { find: '@components', replacement: resolve(__dirname, './src/components') },
      { find: '@lib', replacement: resolve(__dirname, './src/lib') },
      { find: '@pages', replacement: `${resolve(__dirname, './src/pages')}` },
      { find: '@state', replacement: resolve(__dirname, './src/state') },
      { find: /@theme\//, replacement: `${resolve(__dirname, './src/theme')}/` },
      { find: /@theme$/, replacement: resolve(__dirname, './src/theme/index') },
      {
        find: '@images',
        replacement: resolve(__dirname, './src/content/portfolio/images'),
      },
      { find: '@', replacement: resolve(__dirname, './src') },
    ],
  },
});
