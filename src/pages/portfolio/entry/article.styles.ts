import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars } = theme;

const root = toProps(css`
  --spacing-sectionTop: 0;
`);

const content = toProps(css``);

export default { root, content };
