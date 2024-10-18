import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_FACE_SANS as varPrefix } from '@theme/common';

export const SANS_SERIF = ['regular', 'bold', 'extraBold', 'medium', 'semiBold', 'light'] as const;
export type SansSerif = (typeof SANS_SERIF)[number];

const themeValues: Record<SansSerif, string> = {
  regular: `'Montserrat Regular', sans-serif`,
  bold: `'Montserrat Bold', sans-serif`,
  extraBold: `'Montserrat Extra Bold', sans-serif`,
  medium: `'Montserrat Medium', sans-serif`,
  semiBold: `'Montserrat Semibold', sans-serif`,
  light: `'Montserrat Light', sans-serif`,
};

export const sansSerif = buildTheme<SansSerif>(themeValues, varPrefix, 'font-family');
