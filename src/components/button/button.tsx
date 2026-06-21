import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router';

import { cx } from '@lib/css';

import { styles, type ButtonVariant } from './button.styles';

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type RouterLinkProps = BaseProps &
  Omit<LinkProps, 'children' | 'className' | 'to'> & {
    to: LinkProps['to'];
    href?: never;
  };

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'href'> & {
    href: string;
    to?: never;
  };

type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    to?: never;
    href?: never;
  };

export type ButtonProps = RouterLinkProps | AnchorProps | NativeButtonProps;

const isExternal = (to: LinkProps['to']) => typeof to === 'string' && /^https?:/i.test(to);

export const Button = ({ variant = 'primary', className, children, ...rest }: ButtonProps) => {
  const classes = cx(styles.base, styles.variant[variant], className);

  if ('to' in rest && rest.to !== undefined) {
    const { to, target, ...linkRest } = rest as RouterLinkProps;
    return (
      <Link
        {...linkRest}
        to={to}
        target={target ?? (isExternal(to) ? '_blank' : undefined)}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes}>
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...buttonRest} type={type} className={classes}>
      {children}
    </button>
  );
};
