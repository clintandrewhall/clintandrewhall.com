import { buildTheme } from '@lib/css';
import { VAR_PREFIX_BOX_SHADOW, VAR_PREFIX_DROP_SHADOW } from '@theme/common';

const layer = (y: number, blur: number, alpha: number): string =>
  `rgba(0, 0, 0, ${alpha}) 0px ${y}px ${blur}px`;

const shadows = {
  xs: [layer(1, 2, 0.08)],
  sm: [layer(1, 2, 0.08), layer(2, 6, 0.06)],
  md: [layer(2, 4, 0.08), layer(4, 12, 0.06), layer(8, 24, 0.04)],
  lg: [layer(4, 8, 0.08), layer(8, 16, 0.06), layer(16, 32, 0.05), layer(24, 48, 0.04)],
};

type ShadowKey = keyof typeof shadows;
const keys = Object.keys(shadows) as ShadowKey[];

const boxValues = keys.reduce(
  (acc, key) => ((acc[key] = shadows[key].join(', ')), acc),
  {} as Record<ShadowKey, string>,
);

const dropValues = keys.reduce(
  (acc, key) => ((acc[key] = shadows[key].map((s) => `drop-shadow(${s})`).join(' ')), acc),
  {} as Record<ShadowKey, string>,
);

export const boxShadow = buildTheme(boxValues, VAR_PREFIX_BOX_SHADOW, 'box-shadow');
export const dropShadow = buildTheme(dropValues, VAR_PREFIX_DROP_SHADOW, 'filter');
