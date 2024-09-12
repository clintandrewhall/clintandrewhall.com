import { csa, toProps } from '@/lib/css';
import { theme } from '@/theme';

const { vars, css } = theme;

const root = toProps(csa`
  --person-avatar-size: var(${vars.spacing.avatar});
  --person-avatar-shadow: var(${vars.spacing.step1});
  --person-padding-left: calc(var(--person-avatar-size) + var(--person-avatar-shadow) + var(${vars.spacing.step6}));
  --person-padding-top: var(${vars.spacing.step9});

  position: relative;
  padding-left: var(--person-padding-left);
  padding-top: var(--person-padding-top);
  padding-right: var(${vars.spacing.step6});
  margin: 0 0 var(${vars.spacing.step9});

  & {
  }

  &:before {
    content: '';
    display: block;
    width: 1px;
    height: var(--person-padding-top);
    position: absolute;
    left: calc((var(--person-avatar-size) + (var(--person-avatar-shadow)*2)) / 2);
    top: 0;
    background-color: var(${vars.color.border.grid});
  }
`);

const details = toProps(csa`
  ${css.font.sansSerif.regular};
  ${css.font.color.dim};

  & > dt {
    visibility: hidden;
    position: absolute;
  }
`);

const avatar = toProps(csa`
  box-shadow: 0 0 0 var(--person-avatar-shadow) var(${vars.color.border.grid});
  border-radius: 100%;
  position: absolute;
  left: var(--person-avatar-shadow);
  top: var(--person-padding-top);
  outline: none;
  height: var(--person-avatar-size);
  width: var(--person-avatar-size);
`);

const quote = toProps(csa`
  ${css.font.serif.regular};
  ${css.font.color.dim};
  ${css.font.size.step0};
  line-height: var(${vars.font.size.step3});
  margin-bottom: var(${vars.spacing.step5});
`);

const name = toProps(csa`
  font-family: var(${vars.font.sansSerif.semiBold});
  font-size: var(${vars.font.size.stepN1});
  letter-spacing: calc(var(${vars.font.size.step1}) * .1);
  margin-bottom: var(${vars.spacing.step1});
  ${css.font.color.light}
  text-transform: uppercase;
`);

const title = toProps(csa`
  ${css.font.color.lightAccent}
  font-size: var(${vars.font.size.stepN1});
  margin-bottom: var(${vars.spacing.step3});
`);

const subtitle = toProps(csa`
  font-size: var(${vars.font.size.stepN1});
  margin-bottom: var(${vars.spacing.step3});
`);

export default { root, details, avatar, quote, name, title, subtitle };
