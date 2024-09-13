import { css, toProps } from '@lib/css';
import { theme } from '@theme';

import { BULLET_PADDING, BULLET_SIZE_EQ, TOP_PADDING } from './timeline_item.styles';

const { vars } = theme;

const root = toProps(css`
  grid-area: auto / 1 / auto / span 12;
  column-gap: var(${vars.grid.gutter});
  margin-top: calc(var(${vars.spacing.step7}) * -1);
  column-width: calc(50% - var(${vars.grid.gutter}) / 2);
  column-count: 2;
  position: relative;

  @media (max-width: 975px) {
    column-count: 1;
    column-width: 100%;
  }

  &::before {
    content: '';
    display: block;
    width: 1px;
    background: var(${vars.color.background.subtler});
    position: absolute;
    left: calc((${BULLET_SIZE_EQ}) / 2);
    top: calc(${TOP_PADDING} + 20px);
    bottom: 0;
    z-index: 0;
  }

  @media (min-width: 975px) {
    &::after {
      content: '';
      display: block;
      width: 1px;
      background: var(${vars.color.background.subtler});
      position: absolute;
      left: calc(50% + (${BULLET_PADDING} * 2) + ((${BULLET_SIZE_EQ}) / 2));
      top: ${TOP_PADDING};
      bottom: 0;
      z-index: 0;
    }
  }
`);

export default { root };
