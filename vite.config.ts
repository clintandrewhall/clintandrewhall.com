import { reactRouter } from '@react-router/dev/vite';
import wyw from '@wyw-in-js/vite';
import path, { resolve } from 'path';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import devtoolsJson from 'vite-plugin-devtools-json';
import tsconfigPaths from 'vite-tsconfig-paths';

import { portfolioIndexPlugin } from './config/portfolio_index_plugin';
import { sitemapPlugin } from './config/sitemap_plugin';
import { markdownPlugin, unfontConfig } from './config';

const isStorybook = process.argv[1]?.includes('storybook');

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      '@linaria/atomic',
      '@linaria/core',
      '@linaria/react',
      'react-intersection-observer',
      'react-keyed-flatten-children',
      'react-markdown',
      'react-responsive',
      'react-scroll-parallax',
      'swiper/modules',
      'swiper/react',
      'utopia-core',
    ],
    // Exclude native modules and Node.js-only packages from bundling
    exclude: ['fsevents', 'sharp', 'chokidar'],
    // Prevent re-optimization during development
    holdUntilCrawlEnd: true,
  },
  server: {
    // Increase warmup time to allow dependency optimization to complete
    warmup: {
      clientFiles: ['./src/lib/css.ts'],
    },
  },
  build: {
    emptyOutDir: true,
  },
  plugins: [
    devtoolsJson(),
    portfolioIndexPlugin(),
    sitemapPlugin(),
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

          if (tag === 'styled') {
            return resolve('node_modules/@linaria/atomic/processors/styled');
          }
        }

        return null;
      },
    }),
    imagetools({
      exclude: ['./src/content/portfolio/images/**'],
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
        } else {
          return url.searchParams;
        }
      },
    }),
    markdownPlugin(),
    !isStorybook && reactRouter(),
    Unfonts(unfontConfig),
    tsconfigPaths(),
  ],
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
