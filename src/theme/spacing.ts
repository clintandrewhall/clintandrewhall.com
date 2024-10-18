/**
 * Reference: https://utopia.fyi/space/calculator
 *
 * https://utopia.fyi/space/calculator/?c=320,10,1.2,1240,16,1.25,5,2,&s=0.75|0.5|0.25,1.25|1.5|1.75|2|2.25|2.5|4|5.75|9.75|18.75|25|40,s-m&g=m,l,2xl,12
 *
 */

import { calculateSpaceScale } from 'utopia-core';

import { buildTheme } from '@lib/css';
import {
  FONT_SIZE_MAX,
  FONT_SIZE_MIN,
  VAR_PREFIX_SPACING as varPrefix,
  WIDTH_MAX,
  WIDTH_MIN,
} from '@theme/common';

export const UTOPIA_SIZES = [
  'step0',
  'step1',
  'step2',
  'step3',
  'step4',
  'step5',
  'step6',
  'step7',
  'step8',
  'step9',
  'avatar',
  'sectionBottom',
  'sectionTop',
  'portfolioItemHeight',
  'portfolioItemWidth',
  'articleHeaderHeight',
] as const;

export const SIZES = [...UTOPIA_SIZES, 'sectionDivider'] as const;

// const DRAMATIC_SIZES = [
// 'step0-step1',
// 'step1-regular',
// 'regular-medium',
// 'medium-large',
// 'large-larger',
// 'larger-xlarge',
// 'xlarge-xxlarge',
// 'xxlarge-largest',
// 'largest-big',
// 'big-bigger',
// 'bigger-biggest',`
// ] as const;

// export type DramaticSize = (typeof DRAMATIC_SIZES)[number];

export type UtopiaSize = (typeof UTOPIA_SIZES)[number];
export type Size = (typeof SIZES)[number];

export const scale = calculateSpaceScale({
  minWidth: WIDTH_MIN,
  minSize: FONT_SIZE_MIN,
  maxWidth: WIDTH_MAX,
  maxSize: FONT_SIZE_MAX,
  negativeSteps: [0.25, 0.5, 0.75],
  positiveSteps: [1.25, 1.5, 1.75, 2, 2.25, 2.5, 4, 5.75, 9.75, 18.75, 25, 40],
});

const { sizes /*, oneUpPairs: dramaticSizes */ } = scale;

export const utopiaValues = UTOPIA_SIZES.reduce(
  (acc, size, index) => ((acc[size] = sizes[index].clamp), acc),
  {} as Record<UtopiaSize, string>,
);

export const themeValues: Record<Size, string> = {
  ...utopiaValues,
  sectionDivider: utopiaValues.step8,
};

export const spacing = buildTheme(themeValues, varPrefix);
