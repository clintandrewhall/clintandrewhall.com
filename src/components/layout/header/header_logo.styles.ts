import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars } = theme;

// @ts-expect-error - required for loading the logo
import logo from '../../../content/images/logo.png?h=50&format=webp';

const root = toProps(css`
  padding-bottom: var(${vars.spacing.step4});
  padding-left: var(${vars.spacing.step7});
  padding-top: var(${vars.spacing.step4});
  position: absolute;
`);

const link = toProps(
  css`
    --logo-height: calc(var(${vars.spacing.step6}) + var(${vars.font.size.stepN2}));
    --logo-width: calc(var(--logo-height) * 3);
    background-size: contain;
    display: block;
    height: var(--logo-height);
    margin-top: -2px;
    overflow: hidden;
    text-indent: -1000px;
    width: var(--logo-width);
  `,
  { backgroundImage: `url(${logo})` },
);

export default { root, link };
