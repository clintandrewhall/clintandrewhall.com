import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import preferObjectSpreadPlugin from 'eslint-plugin-prefer-object-spread';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import storybookPlugin from 'eslint-plugin-storybook';
import testingLibraryPlugin from 'eslint-plugin-testing-library';

import localRules from './eslint-local-rules.cjs';

const browserGlobals = {
  document: 'readonly',
  globalThis: 'readonly',
  navigator: 'readonly',
  window: 'readonly',
};

const nodeGlobals = {
  console: 'readonly',
  module: 'readonly',
  process: 'readonly',
  require: 'readonly',
  setTimeout: 'readonly',
  URL: 'readonly',
};

const testGlobals = {
  describe: 'readonly',
  expect: 'readonly',
  it: 'readonly',
  vi: 'readonly',
};

const plugins = {
  '@typescript-eslint': tsPlugin,
  import: importPlugin,
  'jest-dom': jestDomPlugin,
  'jsx-a11y': jsxA11yPlugin,
  'local-rules': {
    rules: localRules,
  },
  prettier: prettierPlugin,
  'prefer-object-spread': preferObjectSpreadPlugin,
  react: reactPlugin,
  'react-hooks': reactHooksPlugin,
  'react-refresh': reactRefreshPlugin,
  'simple-import-sort': simpleImportSortPlugin,
  storybook: storybookPlugin,
  'testing-library': testingLibraryPlugin,
};

const commonRules = {
  'brace-style': [
    'error',
    '1tbs',
    {
      allowSingleLine: false,
    },
  ],
  curly: ['error', 'all'],
  'local-rules/no-multi-value-css-properties': 'error',
  'prettier/prettier': 'error',
  'simple-import-sort/exports': 'error',
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^react', '^(@(?!(components|content|home|lib|theme)).+)(/.*|$)', '^(?!(@|\\.)).+'],
        ['^@(components|content|home|lib|theme)(/.*|$)'],
        ['^\\u0000'],
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$', '(?!(\\.styles))'],
        ['^.+\\.s?css$', '(\\.styles)'],
      ],
    },
  ],
};

const settings = {
  react: {
    version: 'detect',
  },
  'import/resolver': {
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      paths: ['src'],
    },
  },
};

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.vite/**',
      '.react-router/**',
      'storybook-static/**',
      'public/images/portfolio/**',
      'public/image_dimensions.json',
      'env.d.ts',
    ],
  },
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...browserGlobals,
        ...nodeGlobals,
        ...testGlobals,
      },
      sourceType: 'module',
    },
    plugins,
    rules: commonRules,
    settings,
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...browserGlobals,
        ...nodeGlobals,
        ...testGlobals,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins,
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      ...commonRules,
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings,
  },
];
