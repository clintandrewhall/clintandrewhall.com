import { css, cx, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl } = theme;

const rootBase = css`
  ${decl.color.border.outline}
  border-style: solid;
  border-width: 1px;
`;

const rootLarge = css`
  max-width: 100%;
  width: 100%;
`;

const rootSmall = css`
  margin-bottom: 1.5%;
  margin-top: 1.5%;
  width: 47%;

  &:nth-child(odd) {
    margin-right: 3%;
  }

  &:nth-child(even) {
    margin-left: 3%;
  }
`;

const root = (size: 'large' | 'small') =>
  toProps(cx(rootBase, size === 'large' ? rootLarge : rootSmall));

export default { root };
