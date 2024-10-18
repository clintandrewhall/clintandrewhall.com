import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_COLOR as varPrefix } from '@theme/common';

type FontColor =
  | 'dark'
  | 'light'
  | 'lightAccent'
  | 'medium'
  | 'dropShadow'
  | 'dim'
  | 'text'
  | 'accent'
  | 'link';

const themeValues: Record<FontColor, string> = {
  dark: '#0D0A0B',
  dropShadow: 'rgba(0, 0, 0, .5)',
  medium: '#666666',
  text: '#5f5f5f',
  dim: '#999999',
  light: '#FFFFFF',
  lightAccent: '#CCCCCC',
  accent: '#862121',
  link: '#862121',
};

export const font = buildTheme<FontColor>(themeValues, varPrefix, 'color');
