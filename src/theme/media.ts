import { buildTheme } from '@lib/css';
import { VAR_PREFIX_MEDIA as varPrefix, WIDTH_MAX, WIDTH_MIN } from '@theme/common';

export const BREAKPOINT_COMPACT = WIDTH_MIN;
export const BREAKPOINT_COMFORTABLE = Math.round(Math.sqrt(WIDTH_MIN * WIDTH_MAX));
export const BREAKPOINT_EXPANDED = WIDTH_MAX;

const { vars, definitions } = buildTheme(
  {
    compact: `${BREAKPOINT_COMPACT}px`,
    comfortable: `${BREAKPOINT_COMFORTABLE}px`,
    expanded: `${BREAKPOINT_EXPANDED}px`,
  },
  varPrefix,
);

const decl = {
  lessThan: {
    compact: `@media (max-width: ${BREAKPOINT_COMPACT - 1}px)`,
    comfortable: `@media (max-width: ${BREAKPOINT_COMFORTABLE - 1}px)`,
    expanded: `@media (max-width: ${BREAKPOINT_EXPANDED - 1}px)`,
  },
  greaterThan: {
    compact: `@media (min-width: ${BREAKPOINT_COMPACT}px)`,
    comfortable: `@media (min-width: ${BREAKPOINT_COMFORTABLE}px)`,
    expanded: `@media (min-width: ${BREAKPOINT_EXPANDED}px)`,
  },
  between: {
    compactAndComfortable: `@media (min-width: ${BREAKPOINT_COMPACT}px) and (max-width: ${BREAKPOINT_COMFORTABLE - 1}px)`,
    comfortableAndExpanded: `@media (min-width: ${BREAKPOINT_COMFORTABLE}px) and (max-width: ${BREAKPOINT_EXPANDED - 1}px)`,
  },
};

export const media = {
  vars,
  definitions,
  decl,
};
