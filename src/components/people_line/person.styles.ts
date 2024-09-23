import { css, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, decl } = theme;

const root = toProps(css`
  --person-avatar-size: var(${vars.spacing.avatar});
  --person-avatar-shadow: var(${vars.spacing.step1});
  --person-padding-left: calc(
    var(--person-avatar-size) + var(--person-avatar-shadow) + var(${vars.spacing.step6})
  );
  --person-padding-top: var(${vars.spacing.step9});
  margin-bottom: var(${vars.spacing.step9});
  margin-left: 0 0 var(${vars.spacing.step9});
  margin-right: 0;
  margin-top: 0;
  padding-left: var(--person-padding-left);
  padding-right: var(${vars.spacing.step6});
  padding-top: var(--person-padding-top);

  position: relative;

  &:before {
    background-color: var(${vars.color.border.grid});
    content: '';
    display: block;
    height: var(--person-padding-top);
    left: calc((var(--person-avatar-size) + (var(--person-avatar-shadow) * 2)) / 2);
    position: absolute;
    top: 0;
    width: 1px;
  }
`);

const details = toProps(css`
  ${decl.font.sansSerif.regular};
  ${decl.color.font.dim};

  & > dt {
    position: absolute;
    visibility: hidden;
  }
`);

const avatar = toProps(css`
  border-radius: 100%;
  box-shadow: 0 0 0 var(--person-avatar-shadow) var(${vars.color.border.grid});
  height: var(--person-avatar-size);
  left: var(--person-avatar-shadow);
  outline: none;
  position: absolute;
  top: var(--person-padding-top);
  width: var(--person-avatar-size);
`);

const quote = toProps(css`
  ${decl.font.serif.regular};
  ${decl.color.font.dim};
  ${decl.font.size.step0};
  line-height: var(${vars.font.size.step3});
  margin-bottom: var(${vars.spacing.step5});
`);

const name = toProps(css`
  ${decl.font.sansSerif.semiBold};
  ${decl.font.size.stepN1}
  ${decl.color.font.light}
  letter-spacing: calc(var(${vars.font.size.step1}) * .1);
  margin-bottom: var(${vars.spacing.step1});
  text-transform: uppercase;
`);

const title = toProps(css`
  ${decl.color.font.lightAccent}
  ${decl.font.size.stepN1}
  margin-bottom: var(${vars.spacing.step3});
`);

const subtitle = toProps(css`
  ${decl.font.size.stepN1}
  margin-bottom: var(${vars.spacing.step3});
`);

export default { root, details, avatar, quote, name, title, subtitle };
