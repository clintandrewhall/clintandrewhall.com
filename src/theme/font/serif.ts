import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_FACE_SERIF as varPrefix } from '@theme/common';

export const SERIF_WEIGHTS = ['regular', 'bold'] as const;
export type SerifWeight = (typeof SERIF_WEIGHTS)[number];

export const SERIF_FAMILIES = ['family'] as const;
export type SerifFamily = (typeof SERIF_FAMILIES)[number];

// Font family values (for CSS custom properties)
const families = {
  family: `'Libre Baskerville', ui-serif, 'Times New Roman', Times, serif`,
};

const weights = {
  regular: 400,
  bold: 700,
};

const {
  vars: familyVars,
  definitions: familyDefinitions,
  decl: familyDecl,
} = buildTheme<SerifFamily, string>(families, varPrefix, 'font-family');

const {
  vars: weightVars,
  definitions: weightDefinitions,
  decl: weightDecl,
} = buildTheme<SerifWeight, number>(weights, varPrefix, 'font-weight');

const combinedStyles = Object.fromEntries(
  Object.entries(weights).map(([weight, value]) => [
    weight,
    `font-family: var(${familyVars.family}); font-weight: ${value};`,
  ]),
) as Record<SerifWeight, string>;

export const serif = {
  vars: { weights: weightVars, ...familyVars },
  definitions: { weights: weightDefinitions, ...familyDefinitions },
  decl: { weights: weightDecl, ...familyDecl, ...combinedStyles },
};
