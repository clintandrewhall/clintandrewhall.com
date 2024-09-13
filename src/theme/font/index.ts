import { sansSerif } from './sans_serif';
import { serif } from './serif';
import { lineHeight, size } from './size';
import { weight } from './weight';

export const font = {
  vars: {
    size: size.vars,
    lineHeight: lineHeight.vars,
    weight: weight.vars,
    serif: serif.vars,
    sansSerif: sansSerif.vars,
  },
  decl: {
    size: size.decl,
    lineHeight: lineHeight.decl,
    weight: weight.decl,
    serif: serif.decl,
    sansSerif: sansSerif.decl,
  },
  definitions: {
    ...lineHeight.definitions,
    ...size.definitions,
    ...weight.definitions,
    ...serif.definitions,
    ...sansSerif.definitions,
  },
};
