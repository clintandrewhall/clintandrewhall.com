import { StrictMode } from 'react';
import { hydrate, render } from 'react-dom';

import './css/base.css';
import './css/fonts.css';
import './css/grid.css';
import './css/main.css';

import { App } from './App';
import { reportWebVitals, sendToAnalytics } from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement?.hasChildNodes()) {
  hydrate(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement,
  );
} else {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement,
  );
}

reportWebVitals(sendToAnalytics);
