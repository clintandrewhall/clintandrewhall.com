import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.anchor}
  ${decl.font.serif.regular}
  ${decl.font.size.step1}
  ${decl.color.font.text}
  ${decl.grid.area.full}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${decl.font.sansSerif.bold}
    ${decl.font.size.step3}
    ${decl.color.font.dark}
    margin-bottom: var(${vars.spacing.step3});
    margin-top: var(${vars.spacing.step9});
  }

  p {
    line-height: var(${vars.font.size.step4});
    margin-bottom: var(${vars.spacing.step3});
    margin-top: var(${vars.spacing.step3});
  }

  ul,
  ol {
    margin-bottom: var(${vars.spacing.step6});
  }

  li {
    display: list-item;
    line-height: var(${vars.font.size.step4});
    list-style-position: inside;
  }

  a {
    font-weight: normal;
  }
`);

const markdown = toProps(css`
  ${decl.grid.area.byOne}
`);

export default { root, markdown };
