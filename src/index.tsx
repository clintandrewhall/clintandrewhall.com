import { StrictMode } from 'react';
import { hydrate } from 'react-dom';
import { createRoot } from 'react-dom/client';

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
} else if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

reportWebVitals(sendToAnalytics);
