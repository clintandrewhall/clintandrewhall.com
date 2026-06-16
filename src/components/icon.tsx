import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { css, cx } from '@lib/css';

export const ICONS_SOCIAL = ['github', 'instagram', 'linkedin', 'twitter', 'facebook'] as const;
export const ICONS = ['link', ...ICONS_SOCIAL] as const;

export type IconType = (typeof ICONS)[number];
export type IconSocial = (typeof ICONS_SOCIAL)[number];

const icons: Record<IconType, React.FC<{ className?: string; size?: number; color?: string }>> = {
  link: FaLink,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  facebook: FaFacebook,
};

interface IconProps {
  name: IconType;
  className?: string;
  color?: string;
}

const iconStyle = css`
  display: inline-block;
  height: 1em;
  vertical-align: middle;
  width: 1em;
`;

export const Icon: React.FC<IconProps> = ({ name, className, color }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={cx(iconStyle, className)} color={color} />;
};

export default Icon;
