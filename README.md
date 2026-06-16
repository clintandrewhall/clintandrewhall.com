# clintandrewhall.com

This is Clint Andrew Hall's personal site: equal parts portfolio, resume surface, and playground for frontend architecture. The site is intentionally personal in the browser and intentionally inspectable in the repo, showing how content, routing, styling, image generation, and deployment fit together.

## Stack

- React 19 and React Router 7.
- Vite for local development, production builds, and custom content plugins.
- Linaria atomic CSS with a small theme system in `src/theme`.
- Markdown portfolio entries with frontmatter, responsive image generation, and prerendered static routes.
- Storybook and Chromatic for component inspection.
- Vitest, Testing Library, TypeScript, and ESLint for local checks.

## Commands

- `corepack yarn dev` starts the React Router dev server.
- `corepack yarn build` cleans generated output, builds the client, prerenders static pages, and emits generated portfolio images.
- `corepack yarn typecheck` runs React Router type generation and TypeScript.
- `corepack yarn lint` runs ESLint.
- `corepack yarn test:run` runs the test suite once.
- `corepack yarn storybook` starts Storybook.

## Content Pipeline

Portfolio entries live in `src/content/portfolio` as Markdown files. Frontmatter drives the portfolio index, tag pages, metadata, and cover images. Images live in `src/content/portfolio/images`; the build creates WebP variants in `public/images/portfolio` for local reuse and `dist/client/images/portfolio` for deployment.

Generated files are intentionally not hand-edited. If generated images or route data look stale, run `corepack yarn build` and inspect the output in `dist/client`.

## Experiments

This branch is a modernization from the older static/CSS-module version of the site. The interesting experiments are the React Router 7 prerender setup, the Linaria/theme composition, Markdown-to-route integration, Storybook coverage for site sections, and the custom image processor for responsive article media.

The resume page is still being converted and should not be treated as merge-ready until the backing JSON and presentation are complete.
