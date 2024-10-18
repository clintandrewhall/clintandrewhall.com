import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, decl } = theme;

const root = toProps(css`
  ${decl.color.background.subtlest}
  ${decl.grid.area.byOne}
`);

const header = toProps(css`
  ${decl.grid.area.byOne}
`);

const content = toProps(css`
  ${decl.grid.area.byOne}
  display: grid;
  gap: var(${vars.spacing.step9});
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, auto);
  }
`);

const link = toProps(css`
  margin-bottom: var(${vars.spacing.sectionBottom});
`);

export default { root, content, header, link };
