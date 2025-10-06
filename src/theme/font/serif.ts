import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_FACE_SERIF as varPrefix } from '@theme/common';

export const SERIF = ['regular', 'bold'] as const;
export type Serif = (typeof SERIF)[number];

const themeValues = {
  regular: `'Libre Baskerville', ui-serif, 'Times New Roman', Times, serif`,
  bold: `'Libre Baskerville Bold', ui-serif, 'Times New Roman', Times, serif`,
};

export const serif = buildTheme<Serif>(themeValues, varPrefix, 'font-family');
