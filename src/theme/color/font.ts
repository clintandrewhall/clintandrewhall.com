import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_COLOR as varPrefix } from '@theme/common';

type FontColor =
  | 'dark'
  | 'light'
  | 'lightAccent'
  | 'medium'
  | 'shaded'
  | 'dim'
  | 'text'
  | 'accent'
  | 'link';

const themeValues: Record<FontColor, string> = {
  dark: '#0D0A0B',
  shaded: 'rgba(0, 0, 0, .5)',
  medium: 'rgba(0, 0, 0, .4)',
  text: '#5f5f5f',
  dim: 'rgba(255, 255, 255, 0.5)',
  light: '#FFF',
  lightAccent: '#CCC',
  accent: '#862121',
  link: '#862121',
};

export const font = buildTheme<FontColor>(themeValues, varPrefix, 'color');
