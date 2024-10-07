import { background } from './background';
import { border } from './border';
import { font } from './font';
import { github } from './github';

export const color = {
  vars: {
    background: background.vars,
    border: border.vars,
    font: font.vars,
    github: github.vars,
  },
  decl: {
    background: background.decl,
    border: border.decl,
    font: font.decl,
  },
  definitions: {
    ...background.definitions,
    ...border.definitions,
    ...font.definitions,
    ...github.definitions,
  },
};
