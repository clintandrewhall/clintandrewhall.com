import type { Size } from './size';
import { size } from './size';

/**
 * Creates a viewport-based fluid font size that scales more aggressively
 * than Utopia steps. Use for display/hero text that needs to maintain
 * specific proportions to viewport width.
 *
 * @param minRem - Minimum font size in rem
 * @param vw - Viewport width percentage (e.g., 5 for 5vw)
 * @param maxStep - Maximum size capped at a Utopia step
 * @returns CSS clamp declaration
 */
export const fluidSize = (minRem: number, vw: number, maxStep: Size): string => {
  return `clamp(${minRem}rem, ${vw}vw, var(${size.vars[maxStep]}))`;
};
