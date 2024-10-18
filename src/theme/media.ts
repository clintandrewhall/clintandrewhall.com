import { buildTheme } from '@lib/css';
import { VAR_PREFIX_MEDIA as varPrefix } from '@theme/common';

export const BREAKPOINT_NARROW = 400;
export const BREAKPOINT_MEDIUM = 600;
export const BREAKPOINT_WIDE = 975;

const { vars, definitions } = buildTheme(
  {
    narrow: `${BREAKPOINT_NARROW}px`,
    medium: `${BREAKPOINT_MEDIUM}px`,
    wide: `${BREAKPOINT_WIDE}px`,
  },
  varPrefix,
);

const decl = {
  narrow: `@media (max-width: ${BREAKPOINT_NARROW}px)`,
  medium: `@media (max-width: ${BREAKPOINT_MEDIUM}px)`,
  mediumToWide: `@media (max-width: ${BREAKPOINT_WIDE}px) and (min-width: ${BREAKPOINT_MEDIUM}px))`,
  wide: `@media (max-width: ${BREAKPOINT_WIDE}px))`,
  max: `@media (min-width: ${BREAKPOINT_WIDE}px))`,
  wideOrPortrait: `@media (max-width: ${BREAKPOINT_WIDE}px), (orientation: portrait)`,
};

export const media = {
  vars,
  definitions,
  decl,
};
