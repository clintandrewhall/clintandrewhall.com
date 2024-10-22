// import 'unfonts.css';
import 'ress';

import { color } from './color';
import { font } from './font';
import { grid } from './grid';
import { header } from './header';
import { icons } from './icons';
import { media } from './media';
import { shadow } from './shadow';
import { spacing } from './spacing';

export const theme = {
  vars: {
    color: color.vars,
    font: font.vars,
    grid: grid.vars,
    header: header.vars,
    media: media.vars,
    shadow: shadow.vars,
    spacing: spacing.vars,
  },
  decl: {
    color: color.decl,
    font: font.decl,
    grid: grid.decl,
    media: media.decl,
    shadow: shadow.decl,
  },
  definitions: {
    ...color.definitions,
    ...font.definitions,
    ...grid.definitions,
    ...header.definitions,
    ...media.definitions,
    ...shadow.definitions,
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
