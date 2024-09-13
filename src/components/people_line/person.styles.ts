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

  position: relative;
  padding-left: var(--person-padding-left);
  padding-top: var(--person-padding-top);
  padding-right: var(${vars.spacing.step6});
  margin: 0 0 var(${vars.spacing.step9});
  margin: 0 0 var(${vars.spacing.step9});

  & {
  }

  &:before {
    content: '';
    display: block;
    width: 1px;
    height: var(--person-padding-top);
    position: absolute;
    left: calc((var(--person-avatar-size) + (var(--person-avatar-shadow) * 2)) / 2);
    top: 0;
    background-color: var(${vars.color.border.grid});
  }
`);

const details = toProps(css`
  ${decl.font.sansSerif.regular};
  ${decl.color.font.dim};

  & > dt {
    visibility: hidden;
    position: absolute;
  }
`);

const avatar = toProps(css`
  box-shadow: 0 0 0 var(--person-avatar-shadow) var(${vars.color.border.grid});
  border-radius: 100%;
  position: absolute;
  left: var(--person-avatar-shadow);
  top: var(--person-padding-top);
  outline: none;
  height: var(--person-avatar-size);
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
