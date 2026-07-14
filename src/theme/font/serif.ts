import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_FACE_SERIF as varPrefix } from '@theme/common';

import { weight } from './weight';

export const SERIF_FAMILIES = ['family'] as const;
export type SerifFamily = (typeof SERIF_FAMILIES)[number];

const families = {
  family: `'Hedvig Letters Serif', ui-serif, 'Times New Roman', Times, serif`,
};

// Hedvig Letters Serif ships a single weight (400); serif hierarchy comes
// from size, color, and the optical size axis (12–24) — never faux bold.
const weights = { regular: weight.decl.regular };

const {
  vars: familyVars,
  definitions: familyDefinitions,
  decl: familyDecl,
} = buildTheme<SerifFamily, string>(families, varPrefix, 'font-family');

const TEXT_AXES = `font-variation-settings: "opsz" 12;`;
const DISPLAY_AXES = `font-variation-settings: "opsz" 24;`;

const compose = (w: string, axes: string) => `${familyDecl.family} ${w} ${axes}`;

export const serif = {
  vars: { ...familyVars, weight: weights },
  definitions: { ...familyDefinitions },
  decl: {
    regular: compose(weights.regular, TEXT_AXES),
    display: compose(weights.regular, DISPLAY_AXES),
    ...familyDecl,
  },
};
