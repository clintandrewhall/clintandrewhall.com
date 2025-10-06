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

type ClassValue = Parameters<typeof _cx>[number];

export function cx(...args: string[]): string;
export function cx(...args: Array<string | CSSProps>): CSSProps;
export function cx(...args: unknown[]): string | CSSProps {
  const classValues: ClassValue[] = [];
  let mergedStyle: CSSProperties | undefined;
  let dataComponent: string | undefined;
  let hasCSSProps = false;

  for (const arg of args) {
    if (arg === null || arg === undefined) {
      continue;
    }

    if (typeof arg === 'boolean') {
      continue;
    }

    if (isCSSProps(arg)) {
      hasCSSProps = true;

      if (arg.className) {
        classValues.push(arg.className);
      }

      if (arg.style) {
        mergedStyle = {
          ...(mergedStyle ?? {}),
          ...arg.style,
        };
      }

      if (arg['data-component'] !== undefined) {
        dataComponent = arg['data-component'];
      }

      continue;
    }

    if (typeof arg === 'string') {
      if (arg) {
        classValues.push(arg);
      }
      continue;
    }

    classValues.push(arg as ClassValue);
  }

  const className = classValues.length ? _cx(...classValues) : '';

  if (hasCSSProps) {
    const result: CSSProps = { className };

    if (mergedStyle && Object.keys(mergedStyle).length > 0) {
      result.style = mergedStyle;
    }

    if (dataComponent !== undefined) {
      result['data-component'] = dataComponent;
    }

    return result;
  }

  return className;
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
    (acc, name) => {
      acc[`${varPrefix}-${name}`] = themeValues[name] + '';
      return acc;
    },
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
