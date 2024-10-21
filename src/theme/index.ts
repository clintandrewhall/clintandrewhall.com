// import 'unfonts.css';
import 'ress';

import { color } from '@theme/color';
import { font } from '@theme/font';
import { grid } from '@theme/grid';
import { icons } from '@theme/icons';
import { spacing } from '@theme/spacing';

import { media } from './media';

export const theme = {
  vars: {
    media: media.vars,
    font: font.vars,
    spacing: spacing.vars,
    color: color.vars,
    grid: grid.vars,
  },
  decl: { font: font.decl, color: color.decl, grid: grid.decl, media: media.decl },
  definitions: {
    ...media.definitions,
    ...font.definitions,
    ...spacing.definitions,
    ...color.definitions,
    ...grid.definitions,
    '--header-font-size': `var(${font.vars.size.stepN2})`,
    '--header-padding': `var(${spacing.vars.step4})`,
    '--header-content-height': `calc(var(${spacing.vars.step6}) + var(--header-font-size))`,
    '--header-height': `calc(var(--header-content-height) + (var(--header-padding) * 2))`,
  },
  icons,
  page: {
    body: `
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      font-feature-settings: 'liga', 'clig';
      font-variant-ligatures: common-ligatures;
      text-rendering: optimizeLegibility;
      a {
        ${color.decl.font.link}
        font-weight: 600;
        text-decoration: none;
        transition: all .3s ease-in-out;

        &:hover,
        &:active,
        &:focus {
          ${color.decl.font.dark}
        }
      }

    `,
  },
};
