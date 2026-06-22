import { buildTheme } from '@lib/css';
import { VAR_PREFIX_RADIUS as varPrefix } from '@theme/common';

const themeValues = {
  sm: '4px',
  md: '8px',
  pill: '999px',
  full: '50%',
};

export const radius = buildTheme(themeValues, varPrefix, 'border-radius');
