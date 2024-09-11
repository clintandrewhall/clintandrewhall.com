import { buildTheme } from '@/lib/css';
import { VAR_PREFIX_FONT_WEIGHT as varPrefix } from '@/theme/common';

const WEIGHTS = ['extraBold', 'bold', 'semiBold', 'normal', 'light'] as const;
type Weight = (typeof WEIGHTS)[number];

const themeValues: Record<Weight, number> = {
  extraBold: 800,
  bold: 600,
  semiBold: 500,
  normal: 400,
  light: 300,
};

export const weight = buildTheme<Weight, number>(themeValues, varPrefix, 'font-weight');
