import { buildTheme } from '@lib/css';
import { VAR_PREFIX_COLOR as varPrefix } from '@theme/common';

type BackgroundColor =
  | 'surface'
  | 'surfaceMuted'
  | 'surfaceMutedStrong'
  | 'inverse'
  | 'inverseMuted'
  | 'shade'
  | 'accent';

const themeValues: Record<BackgroundColor, string> = {
  surface: '#FFF',
  surfaceMuted: '#F1F1F1',
  surfaceMutedStrong: '#E9E9E9',
  inverse: '#000',
  inverseMuted: '#404040',
  shade: '#C9C9C9',
  accent: '#862121',
};

export const background = buildTheme<BackgroundColor>(themeValues, varPrefix, 'background-color');
