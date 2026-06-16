import { buildTheme } from '@lib/css';
import { VAR_PREFIX_BOX_SHADOW, VAR_PREFIX_DROP_SHADOW } from '@theme/common';

const shadows = {
  large: [
    'rgba(0, 0, 0, 0.07) 0px 1px 1px',
    'rgba(0, 0, 0, 0.07) 0px 2px 2px',
    'rgba(0, 0, 0, 0.07) 0px 4px 4px',
    'rgba(0, 0, 0, 0.07) 0px 8px 8px',
    'rgba(0, 0, 0, 0.07) 0px 16px 16px',
  ],
  medium: [
    'rgba(0, 0, 0, 0.07) 0px 1px 1px',
    'rgba(0, 0, 0, 0.07) 0px 2px 2px',
    'rgba(0, 0, 0, 0.07) 0px 4px 4px',
  ],
  small: ['rgba(0, 0, 0, 0.12) 0px 1px 1px', 'rgba(0, 0, 0, 0.24) 0px 1px 1px'],
};

const {
  vars: boxVars,
  definitions: boxDef,
  decl: boxDecl,
} = buildTheme(
  {
    large: `${shadows.large.join(', ')}`,
    medium: `${shadows.medium.join(', ')}`,
    small: `${shadows.small.join(', ')}`,
  },
  VAR_PREFIX_BOX_SHADOW,
  'box-shadow',
);

const {
  vars: dropShadowVars,
  definitions: dropShadowDef,
  decl: dropShadowDecl,
} = buildTheme(
  {
    large: `${shadows.large.map((s) => `drop-shadow(${s})`).join(' ')}`,
    medium: `${shadows.medium.map((s) => `drop-shadow(${s})`).join(' ')}`,
    small: `${shadows.small.map((s) => `drop-shadow(${s})`).join(' ')}`,
  },
  VAR_PREFIX_DROP_SHADOW,
  'filter',
);

export const boxShadow = {
  vars: boxVars,
  definitions: boxDef,
  decl: boxDecl,
};

export const dropShadow = {
  vars: dropShadowVars,
  definitions: dropShadowDef,
  decl: dropShadowDecl,
};
