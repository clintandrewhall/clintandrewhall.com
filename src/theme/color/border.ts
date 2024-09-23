import { buildTheme } from '@lib/css';
import { VAR_PREFIX_COLOR as varPrefix } from '@theme/common';

type BorderColor = 'separator' | 'outline' | 'grid' | 'light';

const themeValues: Record<BorderColor, string> = {
  separator: 'rgba(0,0,0,.1)',
  outline: 'rgba(0,0,0,.25)',
  grid: '#333',
  light: '#FFF',
};

export const border = buildTheme<BorderColor>(themeValues, varPrefix, 'border-color');
