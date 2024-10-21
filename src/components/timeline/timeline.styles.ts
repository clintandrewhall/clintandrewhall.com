import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  --image-size: var(${vars.spacing.step5});
  --bullet-padding: var(${vars.spacing.step1});
  --bullet-size: calc(var(--image-size) + (var(--bullet-padding) * 2));

  ${decl.grid.area.full}

  column-count: 2;
  column-gap: var(${vars.grid.gutter});
  column-width: calc(50% - var(${vars.grid.gutter}) / 2);
  position: relative;

  &:before {
    background-color: var(${vars.color.background.subtler});
    bottom: 0;
    content: '';
    display: block;
    left: calc(var(--bullet-size) / 2);
    position: absolute;
    top: calc(var(--bullet-size));
    width: 1px;
    z-index: 0;
  }

  ${decl.media.narrow} {
    column-count: 1;
    column-width: revert;

    &:after {
      display: none;
    }
  }
`);

export default { root };
