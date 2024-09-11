import type { Meta, StoryObj } from '@storybook/react';

import { csa } from '@lib/css';
import { theme } from '@theme';

const meta: Meta = {
  title: 'Theme/Font',
};

export default meta;

const { css, vars } = theme;

export const FontSize: StoryObj = {
  render: () => (
    <div
      className={csa`
        ${css.font.sansSerif.regular}
      `}
    >
      <h1
        className={csa`
          ${css.font.size.step5}
        `}
      >
        Header 1
      </h1>
      <h2
        className={csa`
          ${css.font.size.step4}
        `}
      >
        Header 2
      </h2>
      <h3
        className={csa`
          ${css.font.size.step3}
        `}
      >
        Header 3
      </h3>
      <h4
        className={csa`
          ${css.font.size.step2}
        `}
      >
        Header 4
      </h4>
      <h5
        className={csa`
          ${css.font.size.step1}
        `}
      >
        Header 5
      </h5>
      <p
        className={csa`
          ${css.font.size.step5}
        `}
      >
        Step 5
      </p>
      <p
        className={csa`
          ${css.font.size.step4}
        `}
      >
        Step 4
      </p>
      <p
        className={csa`
          ${css.font.size.step3}
        `}
      >
        Step 3
      </p>
      <p
        className={csa`
          ${css.font.size.step2}
        `}
      >
        Step 2
      </p>
      <p
        className={csa`
          ${css.font.size.step1}
        `}
      >
        Step 1
      </p>
      <p
        className={csa`
          ${css.font.size.step0}
        `}
      >
        Step 0
      </p>
      <p
        className={csa`
          ${css.font.size.stepN1}
        `}
      >
        Step -1
      </p>
    </div>
  ),
};

export const FontFamliy: StoryObj = {
  render: () => (
    <div>
      <p
        className={csa`
          ${css.font.size.step0}
          ${css.font.serif.regular}
        `}
      >
        'Libre Baskerville', serif
      </p>
      <p
        className={csa`
          ${css.font.size.step0}
          ${css.font.sansSerif.regular}
        `}
      >
        'Montserrat', sans-serif
      </p>
    </div>
  ),
};

export const FontWeight: StoryObj = {
  render: () => (
    <div
      className={csa`
        ${css.font.size.step1}
        ${css.font.sansSerif.regular}
      `}
    >
      <p
        className={csa`
          font-weight: var(${vars.font.weight.extraBold});
        `}
      >
        Extra bold
      </p>
      <p
        className={csa`
          font-weight: var(${vars.font.weight.bold});
        `}
      >
        Bold
      </p>
      <p
        className={csa`
          font-weight: var(${vars.font.weight.semiBold});
        `}
      >
        Semi-bold
      </p>
      <p
        className={csa`
          font-weight: var(${vars.font.weight.normal});
        `}
      >
        Normal
      </p>
      <p
        className={csa`
          font-weight: var(${vars.font.weight.light});
        `}
      >
        Light
      </p>
    </div>
  ),
};
