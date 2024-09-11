import { csa, cx } from '@lib/css';

export const ICONS_SOCIAL = ['github', 'instagram', 'linkedin', 'twitter', 'facebook'] as const;
export const ICONS = ['link', ...ICONS_SOCIAL] as const;

export type Icon = (typeof ICONS)[number];
export type IconSocial = (typeof ICONS_SOCIAL)[number];

export const isIcon = (value: string): value is Icon => ICONS.includes(value as Icon);

const icon = csa`
  display: inline-block;
  font-family: 'Iconic';
  font-weight: normal;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const iconClasses: Record<Icon, string> = {
  link: csa`
    &:before {
      content: '\ue04b';
    }
  `,
  github: csa`
    &:before {
      content: '\ue0b6';
    }
  `,
  instagram: csa`
    &:before {
      content: '\ue0b8';
    }
  `,
  linkedin: csa`
    &:before {
      content: '\ue0b9';
    }
  `,
  twitter: csa`
    &:before {
      content: '\ue0a7';
    }
  `,
  facebook: csa`
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
