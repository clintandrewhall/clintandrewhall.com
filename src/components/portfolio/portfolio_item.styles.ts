import { csa, toProps } from '@lib/css';
import { theme } from '@theme';

const { vars, icons } = theme;

const root = (image: string) =>
  toProps(
    csa`
      font-size: var(${vars.font.size.step0});

      @media (max-width: 975px) and (min-width: 600px) {
        font-size: var(${vars.font.size.step1});
      }

      @media (max-width: 600px) {
        font-size: var(${vars.font.size.step1});
      }

      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-color: var(${vars.color.border.grid});
      border-style: solid;
      border-width: 0 1px 1px 0;
      height: 0;
      padding-bottom: 75%;
      position: relative;

      & {
        a {  
          cursor: pointer;
        }
        > p,
        > footer {
          opacity: 0;
          transition: all 0.3s;
        }
        
        > p {
          top: var(${vars.spacing.step7});
        }
      
        > footer {
          right: var(${vars.spacing.step9});
        }
      }

      &:before, &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &:before {
        opacity: 0;
        background: #000;
        z-index: 2;
        transition: opacity 0.3s;
      }

      &:after {
        opacity: 0.8;
        background: linear-gradient(
          to bottom,
          transparent 0%,
          #000 100%
        );
        z-index: 1;
      }

      &:hover {
        &:before {
          opacity: 0.8;
        }

        > p,
        > footer {
          opacity: 1;
        }

        > p {
          top: var(${vars.spacing.step3});
        }

        > footer {
          right: var(${vars.spacing.step5});
        }
      }
    `,
    {
      backgroundImage: `url(${image})`,
    },
  );

const header = toProps(
  csa`
    bottom: var(${vars.spacing.step3});
    left: var(${vars.spacing.step5});
    position: absolute;
    z-index: 3;
  `,
);

const title = toProps(
  csa`
    font-size: var(${vars.font.size.stepN1});
    letter-spacing: calc(var(${vars.font.size.step1}) * .1);

    @media (max-width: 975px) and (min-width: 600px) {
      font-size: var(${vars.font.size.step0});
      letter-spacing: calc(var(${vars.font.size.step2}) * .1);
    }

    @media (max-width: 600px) {
      font-size: var(${vars.font.size.step1});
      letter-spacing: calc(var(${vars.font.size.step3}) * .1);
    }

    ${theme.css.font.color.light}
    margin-bottom: var(${vars.spacing.step0});
    text-transform: uppercase;
  `,
);

const caption = toProps(
  csa`
    left: var(${vars.spacing.step5});
    line-height: var(${vars.spacing.step5});
    right: var(${vars.spacing.step5});
    top: var(${vars.spacing.step5});

    @media (max-width: 975px) and (min-width: 600px) {
      left: var(${vars.spacing.step6});
      line-height: var(${vars.spacing.step6});
      right: var(${vars.spacing.step6});
      top: var(${vars.spacing.step6});
    }

    @media (max-width: 600px) {
      left: var(${vars.spacing.step9});
      line-height: var(${vars.spacing.step9});
      right: var(${vars.spacing.step9});
      top: var(${vars.spacing.step9});
    }

    ${theme.css.font.color.light}
    ${theme.css.font.sansSerif.regular}
    position: absolute;
    z-index: 3;

    & a {
      ${theme.css.font.color.light}
      border: 2px solid var(${vars.color.background.light});
      background: var(${vars.color.background.dark});
      
      &:hover {
        ${theme.css.font.color.dark}
        background: var(${vars.color.background.light});
      }
    }
  `,
);

const tags = toProps(
  csa`
    font-size: var(${vars.font.size.stepN1});
    letter-spacing: calc(var(${vars.font.size.step1}) * .08);
  
    @media (max-width: 975px) and (min-width: 600px) {
      font-size: var(${vars.font.size.step0});
      letter-spacing: calc(var(${vars.font.size.step2}) * .08);
    }

    @media (max-width: 600px) {
      font-size: var(${vars.font.size.step1});
      letter-spacing: calc(var(${vars.font.size.step3}) * .08);
    }

    & > a {
      ${theme.css.font.color.dim}
      ${theme.css.font.sansSerif.light}

      &:hover {
        ${theme.css.font.color.light}
      }
    }
  `,
);

const details = toProps(
  csa`
    font-size: var(${vars.font.size.stepN1});
    letter-spacing: calc(var(${vars.font.size.step1}) * .08);
  
    @media (max-width: 975px) and (min-width: 600px) {
      font-size: var(${vars.font.size.step0});
      letter-spacing: calc(var(${vars.font.size.step2}) * .08);
    }

    @media (max-width: 600px) {
      font-size: var(${vars.font.size.step1});
      letter-spacing: calc(var(${vars.font.size.step4}) * .08);
    }
    
    ${theme.css.font.sansSerif.regular}
    display: block;
    margin-top: var(${vars.spacing.step3});
    padding: var(${vars.spacing.step2});
    text-align: center;
    text-transform: uppercase;
  `,
);

const footer = toProps(
  csa`
    bottom: var(${vars.spacing.step3});
    position: absolute;
    right: var(${vars.spacing.step5});
    z-index: 3;
  `,
);

const linkIcon = toProps(
  icons.link(
    csa`
      @media (max-width: 975px) and (min-width: 600px) {
        font-size: var(${vars.font.size.step1});
      }

      @media (max-width: 600px) {
        font-size: var(${vars.font.size.step2});
      }
    `,
  ),
);

const projectLink = toProps(csa`
    font-size: var(${vars.font.size.step0});
    height: var(${vars.spacing.step9});
    line-height: calc(var(${vars.spacing.step9}) + var(${vars.spacing.step0}));
    width: var(${vars.spacing.step9});

    @media (max-width: 975px) and (min-width: 600px) {
      font-size: var(${vars.font.size.step0});
      height: calc(var(${vars.spacing.step9}) + var(${vars.spacing.step0}));
      line-height: calc(calc(var(${vars.spacing.step9}) + var(${vars.spacing.step0})) + var(${vars.spacing.step0}));
      width: calc(var(${vars.spacing.step9}) + var(${vars.spacing.step0}));
    }

    @media (max-width: 600px) {
      font-size: var(${vars.font.size.step0});
      height: calc(var(${vars.spacing.step9}) + var(${vars.spacing.step2}));
      line-height: calc(calc(var(${vars.spacing.step9}) + var(${vars.spacing.step2})) + var(${vars.spacing.step0}));
      width: calc(var(${vars.spacing.step9}) + var(${vars.spacing.step2}));
    }

    border-radius: 50%;
    box-shadow: 0 0 0 1px var(${vars.color.background.light});
    color: var(${vars.font.color.light});
    display: block;
    text-align: center;
    
    a& {
      background: var(${vars.color.background.dark});
      color: var(${vars.font.color.light});
    }

    &:hover,
    &:active,
    &:focus {
      background-color: var(${vars.color.background.light});
      color: var(${vars.color.background.dark});
    }
  `);

export default { root, caption, footer, header, title, tags, details, projectLink, linkIcon };
