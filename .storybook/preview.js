

import React from 'react';

import resume from '../src/content/resume.json';
import { ResumeProvider } from '../src/hooks';

console.log(resume, ResumeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ResumeProvider resume={resume}>
      <Story />
    </ResumeProvider>
  ),
];
