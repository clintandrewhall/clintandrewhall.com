import { buildTheme } from '@lib/css';
import { VAR_PREFIX_HEADER as varPrefix } from '@theme/common';

import { font } from './font';
import { spacing } from './spacing';

const { vars, definitions } = buildTheme(
  {
    'font-size': `var(${font.vars.size.stepN2})`,
    padding: `var(${spacing.vars.step4})`,
    'content-height': `calc(var(${spacing.vars.step6}) + var(--header-font-size))`,
    height: `calc(var(--header-content-height) + (var(--header-padding) * 2))`,
  },
  varPrefix,
);

export const header = {
  vars,
  definitions,
};
