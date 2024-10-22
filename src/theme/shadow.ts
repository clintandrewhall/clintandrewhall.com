import { buildTheme } from '@lib/css';
import { VAR_PREFIX_BOX_SHADOW as varPrefix } from '@theme/common';

const { vars, definitions, decl } = buildTheme(
  {
    large: `rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;`,
    medium: `rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px;`,
    small: `rgba(0, 0, 0, 0.45) 0px 12px 10px -15px;`,
  },
  varPrefix,
  'box-shadow',
);

export const shadow = {
  vars,
  definitions,
  decl,
};
