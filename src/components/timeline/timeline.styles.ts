import { css, toProps } from '@lib/css';
import { theme } from '@theme';

import { BULLET_PADDING, BULLET_SIZE_EQ, TOP_PADDING } from './timeline_item.styles';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.grid.area.full}
  column-count: 2;
  column-gap: var(${vars.grid.gutter});
  column-width: calc(50% - var(${vars.grid.gutter}) / 2);
  margin-top: calc(var(${vars.spacing.step7}) * -1);
  position: relative;

  &::before {
    background-color: var(${vars.color.background.subtler});
    bottom: 0;
    content: '';
    display: block;
    left: calc((${BULLET_SIZE_EQ}) / 2);
    position: absolute;
    top: calc(${TOP_PADDING} + 20px);
    width: 1px;
    z-index: 0;
  }

  ${decl.media.wide} {
    column-count: 1;
    column-width: revert;
  }

  ${decl.media.wide} {
    &::after {
      background-color: var(${vars.color.background.subtler});
      bottom: 0;
      content: '';
      display: block;
      left: calc(50% + (${BULLET_PADDING} * 2) + ((${BULLET_SIZE_EQ}) / 2));
      position: absolute;
      top: ${TOP_PADDING};
      width: 1px;
      z-index: 0;
    }
  }
`);

export default { root };
