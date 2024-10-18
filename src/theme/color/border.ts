import { buildTheme } from '@lib/css';
import { VAR_PREFIX_COLOR as varPrefix } from '@theme/common';

type BorderColor = 'separator' | 'outline' | 'grid' | 'light' | 'subtle';

const themeValues: Record<BorderColor, string> = {
  separator: '#E5E5E5',
  outline: '#7F7F7F',
  subtle: '#404040',
  grid: '#333',
  light: '#FFF',
};

export const border = buildTheme<BorderColor>(themeValues, varPrefix, 'border-color');
