import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, decl } = theme;

const root = toProps(css`
  grid-area: auto / 2 / auto / span 10;
  ${decl.color.background.subtlest}
`);

const content = toProps(css`
  display: grid;
  gap: var(${vars.spacing.step9});
  grid-template-columns: repeat(2, 1fr);
  grid-area: auto / 2 / auto / span 10;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, auto);
  }
`);

const link = toProps(css`
  margin-bottom: var(${vars.spacing.sectionBottom});
`);

export default { root, content, link };
