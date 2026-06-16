import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_WEIGHT as varPrefix } from '@theme/common';

export const WEIGHTS = ['extraBold', 'bold', 'regular', 'medium', 'semiBold', 'light'] as const;

export type Weight = (typeof WEIGHTS)[number];

export const themeValues: Record<Weight, number> = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

export const weight = buildTheme<Weight, number>(themeValues, varPrefix, 'font-weight');
