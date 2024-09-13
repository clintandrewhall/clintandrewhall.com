import { background } from './background';
import { border } from './border';
import { font } from './font';

export const color = {
  vars: {
    font: font.vars,
    background: background.vars,
    border: border.vars,
  },
  decl: {
    font: font.decl,
    background: background.decl,
    border: border.decl,
  },
  definitions: {
    ...font.definitions,
    ...background.definitions,
    ...border.definitions,
  },
};
