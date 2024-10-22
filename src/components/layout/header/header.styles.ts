import { css, cx, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = (float: boolean, background: 'clear' | 'opaque') => {
  const base = css`
    font-size: var(${vars.header['font-size']});
    height: var(${vars.header.height});
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
