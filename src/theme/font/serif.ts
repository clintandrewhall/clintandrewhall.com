import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_FACE_SERIF as varPrefix } from '@theme/common';

import { type Weight, weight } from './weight';

export const SERIF_FAMILIES = ['family'] as const;
export type SerifFamily = (typeof SERIF_FAMILIES)[number];

const families = {
  family: `'Newsreader', ui-serif, 'Times New Roman', Times, serif`,
};

export type SerifWeight = Extract<Weight, 'regular' | 'bold'>;
const weights = { regular: weight.decl.regular, bold: weight.decl.bold };

const {
  vars: familyVars,
  definitions: familyDefinitions,
  decl: familyDecl,
} = buildTheme<SerifFamily, string>(families, varPrefix, 'font-family');

const TEXT_AXES = `font-variation-settings: "opsz" 14;`;
const DISPLAY_AXES = `font-variation-settings: "opsz" 72;`;

const compose = (w: string, axes: string) => `${familyDecl.family} ${w} ${axes}`;

export const serif = {
  vars: { ...familyVars, weight: weights },
  definitions: { ...familyDefinitions },
  decl: {
    regular: compose(weights.regular, TEXT_AXES),
    bold: compose(weights.bold, TEXT_AXES),
    displayRegular: compose(weights.regular, DISPLAY_AXES),
    displayBold: compose(weights.bold, DISPLAY_AXES),
    ...familyDecl,
  },
};
