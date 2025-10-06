import 'ress';

import { color } from './color';
import { font } from './font';
import { grid } from './grid';
import { header } from './header';
import { icons } from './icons';
import { media } from './media';
import { boxShadow, dropShadow } from './shadow';
import { spacing } from './spacing';

export const theme = {
  vars: {
    boxShadow: boxShadow.vars,
    color: color.vars,
    dropShadow: dropShadow.vars,
    font: font.vars,
    grid: grid.vars,
    header: header.vars,
    media: media.vars,
    spacing: spacing.vars,
  },
  decl: {
    boxShadow: boxShadow.decl,
    color: color.decl,
    dropShadow: dropShadow.decl,
    font: font.decl,
    grid: grid.decl,
    media: media.decl,
    anchor: `
      a {
        ${color.decl.font.accent}

        &:hover,
        &:active,
        &:focus {
          ${color.decl.font.dark}
        }
      }
    `,
  },
  definitions: {
    ...boxShadow.definitions,
    ...color.definitions,
    ...dropShadow.definitions,
    ...font.definitions,
    ...grid.definitions,
    ...header.definitions,
    ...media.definitions,
    ...spacing.definitions,
  },
  icons,
  page: {
    body: `
      font-synthesis: none;
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      font-feature-settings: 'liga', 'clig';
      font-variant-ligatures: common-ligatures;
      text-rendering: optimizeLegibility;
      font-family: var(${font.vars.sansSerif.light});
      font-size: var(${font.vars.size.step0});

      a {
        font-weight: 600;
        text-decoration: none;
        transition: all .3s ease-in-out;
      }

      .article-image-large {
        width: 100%;
        display: block;
        margin-top: var(${spacing.vars.step1});
        margin-bottom: var(${spacing.vars.step1});
      }

      .article-image-medium {
        width: calc(50% - 3px - var(${spacing.vars.step1}));
        display: inline-block;
        margin-top: var(${spacing.vars.step1});
        margin-bottom: var(${spacing.vars.step1});
        vertical-align: top;
      }

      .article-image-medium:nth-child(odd) {
        margin-right: calc(var(${spacing.vars.step1}));
        margin-left: 0;
      }

      .article-image-medium:nth-child(even) {
        margin-left: calc(var(${spacing.vars.step1}));
        margin-right: 0;
      }

      .article-image-small {
        width: calc(33.333% - 7px - var(${spacing.vars.step0}));
        display: inline-block;
        margin-top: var(${spacing.vars.step0});
        margin-bottom: var(${spacing.vars.step0});
        vertical-align: top;
      }

      .article-image-small:nth-child(3n+1) {
        margin-left: 0;
        margin-right: calc(var(${spacing.vars.step0}));
      }

      .article-image-small:nth-child(3n+2) {
        margin-left: calc(var(${spacing.vars.step0}));
        margin-right: calc(var(${spacing.vars.step0}));
      }

      .article-image-small:nth-child(3n) {
        margin-left: calc(var(${spacing.vars.step0}));
        margin-right: 0;
      }
    `,
  },
};
