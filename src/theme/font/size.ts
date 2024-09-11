/*
  https://utopia.fyi/type/calculator/?c=320,10,1.2,1240,16,1.25,5,1,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=m,l,2xl,12
*/

import { buildTheme } from '@/lib/css';
import {
  FONT_SIZE_MAX,
  FONT_SIZE_MIN,
  TYPE_SCALE_MAX,
  TYPE_SCALE_MIN,
  VAR_PREFIX_FONT_SIZE as varPrefix,
  WIDTH_MAX,
  WIDTH_MIN,
} from '@/theme/common';
import { calculateTypeScale } from 'utopia-core';

const SIZES = ['step5', 'step4', 'step3', 'step2', 'step1', 'step0', 'stepN1'] as const;
type Size = (typeof SIZES)[number];

const scale = calculateTypeScale({
  maxFontSize: FONT_SIZE_MAX,
  maxTypeScale: TYPE_SCALE_MAX,
  maxWidth: WIDTH_MAX,
  minFontSize: FONT_SIZE_MIN,
  minTypeScale: TYPE_SCALE_MIN,
  minWidth: WIDTH_MIN,
  negativeSteps: 1,
  positiveSteps: 5,
});

// TODO: hacky, consider refactoring
const themeValues = SIZES.reduce(
  (acc, size, index) => ((acc[size] = `${scale[index].clamp}`), acc),
  {} as Record<Size, string>,
);

export const size = buildTheme<Size>(themeValues, varPrefix, 'font-size');

export const lineHeight = buildTheme<Size>(themeValues, varPrefix, 'line-height');
