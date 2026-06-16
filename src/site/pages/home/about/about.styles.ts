import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const root = toProps(css`
  ${decl.anchor}
`);

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
  ${decl.font.size.step2}
  margin-bottom: var(${vars.spacing.step4});
`);

const content = toProps(css`
  ${decl.font.serif.regular}
  ${decl.color.font.text}
  ${decl.font.size.step1}
  line-height: var(${vars.spacing.step8});

  & p {
    margin-bottom: var(${vars.spacing.step8});
  }
`);

const work = toProps(css`
  ${decl.grid.area.full}

  ${decl.media.greaterThan.expanded} {
    ${decl.grid.area.twoColOne}
  }
`);

const code = toProps(css`
  ${decl.grid.area.full}

  ${decl.media.greaterThan.expanded} {
    ${decl.grid.area.twoColTwo}
  }
`);

export default { content, header, title, work, code, summary, root };
