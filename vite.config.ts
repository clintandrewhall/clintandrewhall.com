import { reactRouter } from '@react-router/dev/vite';
import wyw from '@wyw-in-js/vite';
import MarkdownIt from 'markdown-it';
import path, { resolve } from 'path';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import { Mode, plugin as markdown } from 'vite-plugin-markdown';
import tsconfigPaths from 'vite-tsconfig-paths';

import { markdownImagePlugin, unfontConfig, viteImagePlugin } from './config';

const isStorybook = process.argv[1]?.includes('storybook');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [
    viteImagePlugin(),
    imagetools({
      defaultDirectives: (url) => {
        const extname = path.extname(url.pathname);
        if (
          // formats supported by Sharp (https://sharp.pixelplumbing.com/#formats)
          ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif', '.tiff', '.tif', '.svg'].includes(
            extname,
          )
        ) {
          return new URLSearchParams([
            ['as', 'metadata'],
            ['format', 'webp'],
            ['w', '480;880;1280'],
            ...url.searchParams.entries(),
          ]);
        } else return url.searchParams;
      },
    }),
    markdown({
      mode: [Mode.HTML, Mode.TOC, Mode.REACT],
      markdownIt: (() => {
        const md = new MarkdownIt({
          html: true,
          linkify: true,
          typographer: true,
        });
        // Apply custom image processing
        markdownImagePlugin(md);
        return md;
      })(),
    }),
    !isStorybook && reactRouter(),
    Unfonts(unfontConfig),
    wyw({
      include: ['src/**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
      tagResolver: (source, tag) => {
        if (source === '@lib/css') {
          if (tag === 'css') {
            return resolve('node_modules/@linaria/atomic/processors/css');
          }

          // if (tag === 'css') {
          //   return resolve('node_modules/@linaria/core/processors/css');
          // }

          if (tag === 'styled') {
            return resolve('node_modules/@linaria/atomic/processors/styled');
          }
        }

        return null;
      },
    }),
    tsconfigPaths(),
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
      { find: '@', replacement: resolve(__dirname, './src') },
    ],
  },
});
