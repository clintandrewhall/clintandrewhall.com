import { cx as _cx } from '@linaria/core';
import type { CSSProperties } from 'react';
export { css, styled } from '@linaria/atomic';

export interface CSSProps {
  className: string;
  style?: CSSProperties;
  'data-component'?: string;
}

export const toProps = (
  className: string = '',
  style?: CSSProperties | Record<string, string>,
  attr?: string,
): CSSProps => {
  return {
    className,
    style,
    'data-component': attr,
  };
};

function isCSSProps(value: any): value is CSSProps {
  return value && typeof value === 'object' && 'className' in value;
}

export function cx(input: string, append?: string): string;
export function cx(input: string, append?: CSSProps): CSSProps;
export function cx(input: CSSProps, append?: string): CSSProps;
export function cx(input: CSSProps, append?: CSSProps): CSSProps;
export function cx(input: unknown, append?: unknown): unknown {
  if (!append || (!input && !append)) {
    return input;
  }

  if (!input) {
    return append;
  }

  if (isCSSProps(input)) {
    if (isCSSProps(append)) {
      return {
        className: _cx(append.className, input.className),
        style: { ...input.style, ...append.style },
      };
    }

    if (typeof append === 'string') {
      return {
        ...input,
        className: cx(append, input.className),
      };
    }
  }

  if (typeof input === 'string') {
    if (isCSSProps(append)) {
      return {
        ...append,
        className: cx(append.className, input),
      };
    }

    if (typeof append === 'string') {
      return _cx(append, input);
    }
  }

  return input;
}

interface DefinitionParams<T extends string, V extends string | number> {
  themeValues: Record<T, V>;
  varPrefix: string;
}

export const getDefinitions = <T extends string, V extends string | number>({
  themeValues,
  varPrefix,
}: DefinitionParams<T, V>) => {
  const names = Object.keys(themeValues) as T[];

  return names.reduce(
    (acc, name) => ((acc[`${varPrefix}-${name}`] = themeValues[name] + ''), acc),
    {} as Record<string, string>,
  );
};

// TODO: replace this overload.
export function buildTheme<T extends string, V extends string | number = string>(
  themeValues: Record<T, V>,
  varPrefix: string,
  cssProperty?: undefined,
): Pick<ITheme<T>, 'vars' | 'definitions'>;
export function buildTheme<T extends string, V extends string | number = string>(
  themeValues: Record<T, V>,
  varPrefix: string,
  cssProperty: string,
): ITheme<T>;
export function buildTheme<T extends string, V extends string | number = string>(
  themeValues: Record<T, V>,
  varPrefix: string,
  cssProperty: any,
): any {
  const definitions = getDefinitions({ varPrefix, themeValues });
  const names = Object.keys(themeValues) as T[];
  const vars = names.reduce(
    (acc, name) => ((acc[name] = `${varPrefix}-${name}`), acc),
    {} as Record<T, string>,
  );

  if (typeof cssProperty === 'string') {
    const decl = names.reduce(
      (acc, name) => ((acc[name] = `${cssProperty}: var(${vars[name]});`), acc),
      {} as Record<T, string>,
    );

    return { vars, decl, definitions };
  }

  return { vars, definitions };
}
