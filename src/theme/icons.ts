import { css, cx } from '@lib/css';

export const ICONS_SOCIAL = ['github', 'instagram', 'linkedin', 'twitter', 'facebook'] as const;
export const ICONS = ['link', ...ICONS_SOCIAL] as const;

export type Icon = (typeof ICONS)[number];
export type IconSocial = (typeof ICONS_SOCIAL)[number];

export const isIcon = (value: string): value is Icon => ICONS.includes(value as Icon);

const icon = css`
  display: inline-block;
  font-family: 'Iconic';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  text-rendering: auto;
`;

const iconClasses: Record<Icon, string> = {
  link: css`
    &:before {
      content: '\ue04b';
    }
  `,
  github: css`
    &:before {
      content: '\ue0b6';
    }
  `,
  instagram: css`
    &:before {
      content: '\ue0b8';
    }
  `,
  linkedin: css`
    &:before {
      content: '\ue0b9';
    }
  `,
  twitter: css`
    &:before {
      content: '\ue0a7';
    }
  `,
  facebook: css`
    &:before {
      content: '\ue0a5';
    }
  `,
};

const initial = {} as Record<Icon, (className?: string) => string>;

export const icons = Object.keys(iconClasses).reduce((acc, key) => {
  acc[key as Icon] = (className) => cx(iconClasses[key as Icon], cx(icon, className));
  return acc;
}, initial);
