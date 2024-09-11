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
  css: {
    size: size.css,
    lineHeight: lineHeight.css,
    color: color.css,
    weight: weight.css,
    serif: serif.css,
    sansSerif: sansSerif.css,
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
