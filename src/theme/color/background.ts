import { buildTheme } from '@lib/css';
import { VAR_PREFIX_COLOR as varPrefix } from '@theme/common';

type BackgroundColor = 'dark' | 'light' | 'subtle' | 'subtler' | 'subtlest' | 'shade' | 'accent';

const themeValues: Record<BackgroundColor, string> = {
  dark: '#000',
  subtlest: '#F1F1F1',
  subtler: '#E9E9E9',
  subtle: '#404040',
  shade: '#C9C9C9',
  light: '#FFF',
  accent: '#862121',
};

export const background = buildTheme<BackgroundColor>(themeValues, varPrefix, 'background-color');
