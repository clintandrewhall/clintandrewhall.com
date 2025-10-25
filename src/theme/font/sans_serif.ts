import { buildTheme } from '@lib/css';
import { VAR_PREFIX_FONT_FACE_SANS as varPrefix } from '@theme/common';

export const SANS_SERIF_WEIGHTS = [
  'regular',
  'bold',
  'extraBold',
  'medium',
  'semiBold',
  'light',
] as const;
export type SansSerifWeight = (typeof SANS_SERIF_WEIGHTS)[number];

export const SANS_SERIF_FAMILIES = ['family'] as const;
export type SansSerifFamily = (typeof SANS_SERIF_FAMILIES)[number];

// Font family values (for CSS custom properties)
const families = {
  family: `'Montserrat Variable', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
};

// Font weight values (for CSS custom properties)
const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

const {
  vars: weightVars,
  definitions: weightDefinitions,
  decl: weightDecl,
} = buildTheme<SansSerifWeight, number>(weights, varPrefix, 'font-weight');

const {
  vars: familyVars,
  definitions: familyDefinitions,
  decl: familyDecl,
} = buildTheme<SansSerifFamily, string>(families, varPrefix, 'font-family');

const combinedStyles = Object.fromEntries(
  Object.entries(weights).map(([weight, value]) => [
    weight,
    `font-family: var(${familyVars.family}); font-weight: ${value};`,
  ]),
) as Record<SansSerifWeight, string>;

export const sansSerif = {
  vars: { weights: weightVars, ...familyVars },
  definitions: { weights: weightDefinitions, ...familyDefinitions },
  decl: {
    weights: weightDecl,
    ...familyDecl,
    ...combinedStyles,
  },
};
