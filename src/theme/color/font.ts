import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_COLOR as varPrefix } from '@theme/common';

type FontColor =
  | 'dark'
  | 'light'
  | 'lightAccent'
  | 'muted'
  | 'dropShadow'
  | 'dim'
  | 'accent'
  | 'link';

const themeValues: Record<FontColor, string> = {
  dark: '#0D0A0B',
  dropShadow: 'rgba(0, 0, 0, .5)',
  muted: '#5f5f5f',
  dim: '#999999',
  light: '#FFFFFF',
  lightAccent: '#CCCCCC',
  accent: '#862121',
  link: '#862121',
};

export const font = buildTheme<FontColor>(themeValues, varPrefix, 'color');
