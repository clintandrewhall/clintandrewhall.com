import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const header = toProps(css`
  ${decl.grid.area.byOne}
`);

const summary = toProps(css`
  ${decl.font.serif.regular}
  ${decl.font.size.step1}
  ${decl.grid.area.byOne}
  line-height: var(${vars.spacing.step8});
  text-align: center;

  & p {
    margin-bottom: var(${vars.spacing.step4});
  }
`);

const title = toProps(css`
  ${decl.font.sansSerif.medium}
  ${decl.font.weight.normal}
  ${decl.font.size.step2}
  margin-bottom: var(${vars.spacing.step4});
`);

const content = toProps(css`
  ${decl.font.serif.regular}
  ${decl.color.font.text}
  line-height: var(${vars.spacing.step6});

  & p {
    margin-bottom: var(${vars.spacing.step6});
  }
`);

const work = toProps(css`
  ${decl.grid.area.twoColOne}

  ${decl.media.medium} {
    ${decl.grid.area.full}
  }
`);

const code = toProps(css`
  ${decl.grid.area.twoColTwo}

  ${decl.media.medium} {
    ${decl.grid.area.full}
  }
`);

export default { content, header, title, work, code, summary };
