import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
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
    margin-top: var(${vars.spacing.step9});
    margin-bottom: var(${vars.spacing.step3});
  }

  p {
    line-height: var(${vars.font.size.step4});
    margin-bottom: var(${vars.spacing.step6});
  }

  ul,
  ol {
    margin-bottom: var(${vars.spacing.step6});
  }

  li {
    display: list-item;
    list-style-position: inside;
    line-height: var(${vars.font.size.step4});
  }

  a {
    font-weight: normal;
  }
`);

const markdown = toProps(css`
  ${decl.grid.area.full}
`);

export default { root, markdown };
