import { css } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

const tintedDarkShadow = {
  rest: 'rgba(0, 0, 0, 0.18) 0px 1px 2px, rgba(0, 0, 0, 0.12) 0px 2px 6px',
  hover:
    'rgba(0, 0, 0, 0.20) 0px 2px 4px, rgba(0, 0, 0, 0.14) 0px 4px 12px, rgba(0, 0, 0, 0.08) 0px 8px 24px',
  active: 'rgba(0, 0, 0, 0.22) 0px 1px 2px',
};

const tintedLightShadow = {
  hover: 'rgba(255, 255, 255, 0.18) 0px 1px 2px, rgba(255, 255, 255, 0.10) 0px 2px 6px',
};

const base = css`
  ${decl.font.sansSerif.semiBold}
  ${decl.font.size.stepN1}

  align-items: center;
  background-color: transparent;
  border: 2px solid transparent;
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-weight: 600;
  justify-content: center;
  letter-spacing: calc(var(${vars.font.size.stepN1}) * 0.25);
  line-height: 1;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background-color var(${vars.motion.duration.base}) var(${vars.motion.easing.standard}),
    border-color var(${vars.motion.duration.base}) var(${vars.motion.easing.standard}),
    box-shadow var(${vars.motion.duration.base}) var(${vars.motion.easing.standard}),
    color var(${vars.motion.duration.base}) var(${vars.motion.easing.standard}),
    transform var(${vars.motion.duration.fast}) var(${vars.motion.easing.standard});
  user-select: none;

  &:focus-visible {
    outline: 2px solid var(${vars.color.background.accent});
    outline-offset: 2px;
  }
`;

const primary = css`
  ${decl.color.background.inverse}

  border-radius: var(${vars.radius.md});
  box-shadow: ${tintedDarkShadow.rest};
  color: var(${vars.color.font.light});
  display: flex;
  line-height: var(${vars.font.size.step3});
  padding: var(${vars.spacing.step4}) var(${vars.spacing.step9});
  width: 100%;

  &:hover,
  &:focus {
    ${decl.color.background.accent}
    box-shadow: ${tintedDarkShadow.hover};
    color: var(${vars.color.font.light});
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: ${tintedDarkShadow.active};
    transform: translateY(0);
  }
`;

const secondary = css`
  border-color: var(${vars.color.font.light});
  border-radius: var(${vars.radius.sm});
  color: var(${vars.color.font.light});
  padding: var(${vars.spacing.step3}) var(${vars.spacing.step4});

  &:hover,
  &:focus {
    background-color: var(${vars.color.background.surface});
    box-shadow: ${tintedLightShadow.hover};
    color: var(${vars.color.font.dark});
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

const icon = css`
  ${decl.color.background.inverse}

  border: 0;
  border-radius: var(${vars.radius.full});
  box-shadow: ${tintedDarkShadow.rest};
  color: var(${vars.color.font.light});
  height: var(${vars.spacing.step7});
  letter-spacing: 0;
  padding: 0;
  width: var(${vars.spacing.step7});

  &:hover,
  &:focus {
    ${decl.color.background.accent}
    box-shadow: ${tintedDarkShadow.hover};
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: ${tintedDarkShadow.active};
    transform: translateY(0);
  }

  &:disabled {
    cursor: default;
    opacity: 0.35;
    transform: none;
  }

  &:disabled:hover,
  &:disabled:focus {
    ${decl.color.background.inverse}
    box-shadow: ${tintedDarkShadow.rest};
    transform: none;
  }
`;

const VARIANTS = { primary, secondary, icon } as const;

export type ButtonVariant = keyof typeof VARIANTS;

export const styles = {
  base,
  variant: VARIANTS,
};
