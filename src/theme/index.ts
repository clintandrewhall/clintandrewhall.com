import 'ress';

import { color } from './color';
import { font } from './font';
import { grid } from './grid';
import { header } from './header';
import { media } from './media';
import { motion } from './motion';
import { radius } from './radius';
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
    motion: motion.vars,
    radius: radius.vars,
    spacing: spacing.vars,
  },
  decl: {
    boxShadow: boxShadow.decl,
    color: color.decl,
    dropShadow: dropShadow.decl,
    font: font.decl,
    grid: grid.decl,
    media: media.decl,
    radius: radius.decl,
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
    ...motion.definitions,
    ...radius.definitions,
    ...spacing.definitions,
  },
  util: {
    font: font.util,
  },
  page: {
    body: `
      font-synthesis: none;
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-feature-settings: 'liga', 'clig', 'kern';
      font-variant-ligatures: common-ligatures;
      text-rendering: optimizeLegibility;
      font-family: var(${font.vars.sansSerif.family});
      font-size: var(${font.vars.size.step0});
      
      /* Additional font smoothing for Google Fonts */
      font-display: swap;
      font-optical-sizing: auto;

      a {
        text-decoration: none;
        /* transition: text-decoration 0.3s ease-in-out; */
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
