// import 'unfonts.css';
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
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      font-feature-settings: 'liga', 'clig';
      font-variant-ligatures: common-ligatures;
      text-rendering: optimizeLegibility;

      a {
        font-weight: 600;
        text-decoration: none;
        transition: all .3s ease-in-out;
      }
    `,
  },
};
