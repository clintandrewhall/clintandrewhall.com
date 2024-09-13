import { buildTheme } from '@/lib/css';
import { VAR_PREFIX_COLOR as varPrefix } from '@/theme/common';

type Color = 'dark' |
  'light' |
  'subtle' |
  'subtler' |
  'subtlest' |
  'shade' |
  'separator' |
  'outline' |
  'accent' |
  'grid';
  
const themeValues: Record<Color, string> = {
  dark: '#000',
  subtlest: '#F1F1F1',
  subtler: '#E9E9E9',
  subtle: 'rgba(255, 255, 255, 0.25)',
  shade: '#C9C9C9',
  light: '#FFF',
  separator: 'rgba(0,0,0,.1)',
  outline: 'rgba(0,0,0,.25)',
  grid: '#333',
  accent: '#862121',
};

type BackgroundColor = Exclude<Color, 'separator' | 'grid'>;

const background = buildTheme<BackgroundColor>(themeValues, varPrefix, 'background-color');

type BorderColor = Extract<Color, 'separator' | 'outline' | 'grid'>;

const border = buildTheme<BorderColor>(themeValues, varPrefix, 'border-color');

export const color = {
  vars: { background: background.vars, border: border.vars },
  decl: { background: background.decl, border: border.decl },
  definitions: { ...background.definitions, ...border.definitions },
};
