import { css, cx, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = (float: boolean, background: 'clear' | 'opaque') => {
  const base = css`
    --header-font-size: var(${vars.font.size.stepN2});
    --header-padding: var(${vars.spacing.step4});
    --header-content-height: calc(var(${vars.spacing.step6}) + var(--header-font-size));
    --header-height: calc(var(--header-content-height) + (var(--header-padding) * 2));
    font-size: var(--header-font-size);
    height: var(--header-height);
    left: 0;
    padding-right: 50px;
    position: fixed;
    right: 0;
    top: 0;
    transition: background-color 1s;
    z-index: 1000;
  `;

  const floating = css`
    ${decl.color.background.dark};
  `;

  return toProps(float || background === 'opaque' ? cx(base, floating) : base);
};

export default { root };
