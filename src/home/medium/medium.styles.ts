import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { vars } = theme;

const root = toProps(csa`
  grid-area: auto / 2 / auto / span 10;
  background-color: var(${vars.color.background.subtlest});
`);

const content = toProps(csa`
  display: grid;
  gap: var(${vars.spacing.step9});
  grid-template-columns: repeat(2, 1fr);
  grid-area: auto / 2 / auto / span 10;
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, auto);
  }
`);

const link = toProps(csa`
  margin-bottom: var(${vars.spacing.sectionBottom});
`);

export default { root, content, link };
