import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_FACE_SANS as varPrefix } from '@theme/common';

export const SANS_SERIF = ['regular', 'bold', 'extraBold', 'medium', 'semiBold', 'light'] as const;
export type SansSerif = (typeof SANS_SERIF)[number];

const themeValues = {
  regular: `'Montserrat Regular', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
  bold: `'Montserrat Bold', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
  extraBold: `'Montserrat Extra Bold', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
  medium: `'Montserrat Medium', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
  semiBold: `'Montserrat Semibold', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
  light: `'Montserrat Light', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
};

export const sansSerif = buildTheme<SansSerif>(themeValues, varPrefix, 'font-family');
