import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, decl } = theme;

const root = toProps(css`
  ${decl.color.background.subtlest}
  ${decl.color.font.dark}
  ${decl.boxShadow.small}
  border-color: var(${vars.color.border.medium});
  border-radius: var(${vars.spacing.step0});
  border-style: solid;
  border-width: 1px;
  margin-bottom: var(${vars.spacing.step5});
  padding-bottom: var(${vars.spacing.step2});
  padding-left: var(${vars.spacing.step5});
  padding-right: var(${vars.spacing.step5});
  padding-top: var(${vars.spacing.step2});
`);

const list = toProps(css`
  display: grid;
  gap: var(${vars.spacing.step2});

  grid-template-columns: repeat(4, 1fr);

  @media (max-width: pcss_lin1) and (min-width: pcss_lin2), (max-width: .pcss_lin3) {
    grid-template-columns: repeat(2, 1fr);
  }
`);

const item = toProps(css`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  position: relative;
  text-align: center;
`);

const number = toProps(css`
  ${decl.font.serif.bold}
  ${decl.font.size.step3}
  border-bottom: 1px solid var(${vars.color.border.separator});
  flex: 1;
  order: -1;
  padding-bottom: var(${vars.spacing.step1});
  padding-left: var(${vars.spacing.step4});
  padding-right: var(${vars.spacing.step4});
  padding-top: var(${vars.spacing.step6});
  position: relative;
`);

const name = toProps(css`
  ${decl.color.font.medium}
  ${decl.font.sansSerif.medium}
  ${decl.font.size.step0}
  flex: 1;
  padding-bottom: var(${vars.spacing.step4});
  padding-left: var(${vars.spacing.step4});
  padding-right: var(${vars.spacing.step4});
  padding-top: var(${vars.spacing.step1});
`);

export default { root, list, item, number, name };
