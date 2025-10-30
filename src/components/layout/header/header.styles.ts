import { css, cx, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = (background: 'clear' | 'opaque') => {
  const base = css`
    display: flex;
    font-size: var(${vars.header['font-size']});
    height: var(${vars.header.height});
    left: 0;
    padding-right: var(${vars.header.height});
    position: fixed;
    right: 0;
    top: 0;
    transition: background-color 1s ease;
    z-index: 1000;
  `;

  const opaque = css`
    ${decl.color.background.dark};
  `;

  return toProps(background === 'opaque' ? cx(base, opaque) : base);
};

export default { root };
