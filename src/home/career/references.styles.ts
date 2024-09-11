import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { vars } = theme;

const root = toProps(
  csa`
    --spacing-sectionTop: calc(var(${vars.spacing.step8}) * 2);
    --spacing-sectionDivider: var(${vars.spacing.step1});
    background-color: var(${vars.color.background.dark});
  `,
);

const header = toProps(csa`
  color: var(${vars.font.color.light});
  grid-area: auto / 2 / auto / span 10;
`);

const link = toProps(csa`
  border: 2px solid var(${vars.color.background.light});

  & > a {
    &:hover,
    &:focus,
    &:active {
      color: var(${vars.font.color.dark});
      background-color: var(${vars.color.background.light});
    }
  }`);

export default { root, header, link };
