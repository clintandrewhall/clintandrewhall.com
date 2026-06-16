/*
  https://utopia.fyi/type/calculator/?c=320,10,1.2,1240,16,1.25,7,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=m,l,2xl,12
*/

import { calculateTypeScale } from 'utopia-core';

import { buildTheme } from '@lib/css';
import {
  FONT_SIZE_MAX,
  FONT_SIZE_MIN,
  TYPE_SCALE_MAX,
  TYPE_SCALE_MIN,
  VAR_PREFIX_FONT_SIZE as varPrefix,
  WIDTH_MAX,
  WIDTH_MIN,
} from '@theme/common';

const STEP_KEY = {
  7: 'step7',
  6: 'step6',
  5: 'step5',
  4: 'step4',
  3: 'step3',
  2: 'step2',
  1: 'step1',
  0: 'step0',
  [-1]: 'stepN1',
  [-2]: 'stepN2',
} as const;

type StepKey = typeof STEP_KEY;
export type Size = StepKey[keyof StepKey];

const scale = calculateTypeScale({
  maxFontSize: FONT_SIZE_MAX,
  maxTypeScale: TYPE_SCALE_MAX,
  maxWidth: WIDTH_MAX,
  minFontSize: FONT_SIZE_MIN,
  minTypeScale: TYPE_SCALE_MIN,
  minWidth: WIDTH_MIN,
  negativeSteps: 2,
  positiveSteps: 7,
});

// TODO: hacky, consider refactoring
const themeValues = scale.reduce(
  (acc, { step, clamp }) => {
    const key = STEP_KEY[step as keyof StepKey];

    if (key) {
      acc[key] = `${clamp}`;
    }

    return acc;
  },
  {} as Record<Size, string>,
);

export const size = buildTheme<Size>(themeValues, varPrefix, 'font-size');

export const lineHeight = buildTheme<Size>(themeValues, varPrefix, 'line-height');
