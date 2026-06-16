import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_FACE_SERIF as varPrefix } from '@theme/common';

import { type Weight, weight } from './weight';

export const SERIF_FAMILIES = ['family'] as const;
export type SerifFamily = (typeof SERIF_FAMILIES)[number];

// Font family values (for CSS custom properties)
const families = {
  family: `'Libre Baskerville', ui-serif, 'Times New Roman', Times, serif`,
};

export type SerifWeight = Extract<Weight, 'regular' | 'bold'>;
const weights = { regular: weight.decl.regular, bold: weight.decl.bold };

const {
  vars: familyVars,
  definitions: familyDefinitions,
  decl: familyDecl,
} = buildTheme<SerifFamily, string>(families, varPrefix, 'font-family');

const combinedStyles = Object.fromEntries(
  Object.entries(weights).map(([weight, decl]) => [weight, `${familyDecl.family} ${decl}`]),
) as Record<SerifWeight, string>;

export const serif = {
  vars: { ...familyVars, weight: weights },
  definitions: { ...familyDefinitions },
  decl: { ...combinedStyles, ...familyDecl },
};
