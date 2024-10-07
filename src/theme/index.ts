// import 'unfonts.css';
import 'ress';

import { color } from '@theme/color';
import { font } from '@theme/font';
import { grid } from '@theme/grid';
import { icons } from '@theme/icons';
import { spacing } from '@theme/spacing';

export const theme = {
  vars: {
    font: font.vars,
    spacing: spacing.vars,
    color: color.vars,
    grid: grid.vars,
  },
  decl: { font: font.decl, color: color.decl, grid: grid.decl },
  definitions: {
    ...font.definitions,
    ...spacing.definitions,
    ...color.definitions,
    ...grid.definitions,
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
