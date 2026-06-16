import { css, toProps } from '@lib/css';

const root = toProps(css`
  --spacing-sectionTop: 0;
  padding-inline: 0;

  & > article {
    max-width: initial;
  }
`);

export default { root };
