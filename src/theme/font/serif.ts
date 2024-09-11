import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_FACE_SERIF as varPrefix } from '@theme/common';

const SERIF = ['regular', 'bold', 'italic'] as const;
export type Serif = (typeof SERIF)[number];

const themeValues: Record<Serif, string> = {
  regular: `'Libre Baskerville', serif`,
  bold: `'Libre Baskerville Bold', serif`,
  italic: `'Libre Baskerville Italic', serif`,
};

export const serif = buildTheme<Serif>(themeValues, varPrefix, 'font-family');
