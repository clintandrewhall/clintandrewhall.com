import { css } from '@lib/css';
import { theme } from '@theme';

const { decl, vars } = theme;

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
    background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;

  &:focus-visible {
    outline: 2px solid var(${vars.color.background.accent});
    outline-offset: 2px;
  }
`;

const primary = css`
  ${decl.boxShadow.sm}
  ${decl.color.background.dark}

  border-radius: var(${vars.spacing.step1});
  color: var(${vars.color.font.light});
  display: flex;
  line-height: var(${vars.font.size.step3});
  padding: var(${vars.spacing.step4}) var(${vars.spacing.step9});
  width: 100%;

  &:hover,
  &:focus {
    ${decl.boxShadow.md}
    ${decl.color.background.accent}
    color: var(${vars.color.font.light});
    transform: translateY(-1px);
  }

  &:active {
    ${decl.boxShadow.xs}
    transform: translateY(0);
  }
`;

const secondary = css`
  border-color: var(${vars.color.font.light});
  border-radius: var(${vars.spacing.step0});
  color: var(${vars.color.font.light});
  padding: var(${vars.spacing.step3}) var(${vars.spacing.step4});

  &:hover,
  &:focus {
    ${decl.boxShadow.sm}
    background-color: var(${vars.color.background.light});
    color: var(${vars.color.font.dark});
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

const icon = css`
  ${decl.boxShadow.sm}
  ${decl.color.background.dark}

  border: 0;
  border-radius: 50%;
  color: var(${vars.color.font.light});
  height: var(${vars.spacing.step7});
  letter-spacing: 0;
  padding: 0;
  width: var(${vars.spacing.step7});

  &:hover,
  &:focus {
    ${decl.boxShadow.md}
    ${decl.color.background.accent}
    transform: translateY(-1px);
  }

  &:active {
    ${decl.boxShadow.xs}
    transform: translateY(0);
  }

  &:disabled {
    cursor: default;
    opacity: 0.35;
    transform: none;
  }

  &:disabled:hover,
  &:disabled:focus {
    ${decl.boxShadow.sm}
    ${decl.color.background.dark}
    transform: none;
  }
`;

const VARIANTS = { primary, secondary, icon } as const;

export type ButtonVariant = keyof typeof VARIANTS;

export const styles = {
  base,
  variant: VARIANTS,
};
