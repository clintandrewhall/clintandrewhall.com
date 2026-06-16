import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  align-self: center;
  padding-left: var(${vars.spacing.step7});
  text-shadow: 1px 1px 3px var(${vars.color.font.dropShadow});
`);

const link = toProps(css`
  ${decl.font.serif.bold}
  ${decl.color.font.light}
  ${decl.font.size.step3}
  letter-spacing: -1px;

  ${decl.media.between.comfortableAndExpanded} {
    ${decl.font.size.step1}
  }

  ${decl.media.lessThan.comfortable} {
    ${decl.font.size.step3}
  }
`);

export default { root, link };
