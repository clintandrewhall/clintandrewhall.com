import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_FACE_SANS as varPrefix } from '@theme/common';

import { type Weight, weight } from './weight';

export const SANS_SERIF_FAMILIES = ['family'] as const;
export type SansSerifFamily = (typeof SANS_SERIF_FAMILIES)[number];

// Font family values (for CSS custom properties)
const families = {
  family: `'Geist', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
};

const {
  vars: familyVars,
  definitions: familyDefinitions,
  decl: familyDecl,
} = buildTheme<SansSerifFamily, string>(families, varPrefix, 'font-family');

const combinedStyles = Object.fromEntries(
  Object.entries(weight.decl).map(([weight, decl]) => [weight, `${familyDecl.family}; ${decl}`]),
) as Record<Weight, string>;

export const sansSerif = {
  vars: { ...familyVars, weight: weight.vars },
  definitions: { ...familyDefinitions },
  decl: {
    ...combinedStyles,
    ...familyDecl,
  },
};
