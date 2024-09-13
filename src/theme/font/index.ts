import { color } from './color';
import { sansSerif } from './sans_serif';
import { serif } from './serif';
import { lineHeight, size } from './size';
import { weight } from './weight';

export const font = {
  vars: {
    size: size.vars,
    lineHeight: lineHeight.vars,
    color: color.vars,
    weight: weight.vars,
    serif: serif.vars,
    sansSerif: sansSerif.vars,
  },
  decl: {
    size: size.decl,
    lineHeight: lineHeight.decl,
    color: color.decl,
    weight: weight.decl,
    serif: serif.decl,
    sansSerif: sansSerif.decl,
  },
  definitions: {
    ...lineHeight.definitions,
    ...size.definitions,
    ...color.definitions,
    ...weight.definitions,
    ...serif.definitions,
    ...sansSerif.definitions,
  },
};
