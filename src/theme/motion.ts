import { buildTheme } from '@lib/css';
import { VAR_PREFIX_MOTION_DURATION, VAR_PREFIX_MOTION_EASING } from '@theme/common';

const durations = {
  fast: '0.15s',
  base: '0.25s',
  slow: '0.5s',
  slower: '1s',
};

const easings = {
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  linear: 'ease',
  inOut: 'ease-in-out',
};

const duration = buildTheme(durations, VAR_PREFIX_MOTION_DURATION);
const easing = buildTheme(easings, VAR_PREFIX_MOTION_EASING);

export const motion = {
  vars: { duration: duration.vars, easing: easing.vars },
  definitions: { ...duration.definitions, ...easing.definitions },
};
