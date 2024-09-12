import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { vars, css } = theme;

const root = toProps(
  csa`
    --spacing-sectionTop: calc(var(${vars.spacing.step8}) * 2);
    --spacing-sectionDivider: var(${vars.spacing.step1});
    ${css.color.background.dark}
  `,
);

const header = toProps(csa`
  ${css.font.color.light}
  grid-area: auto / 2 / auto / span 10;
`);

const link = toProps(csa`
  border: 2px solid var(${vars.color.background.light});

  & > a {
    &:hover,
    &:focus,
    &:active {
      ${css.font.color.dark}
      ${css.color.background.light}
    }
  }`);

export default { root, header, link };
