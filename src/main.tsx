import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';

const root = document.getElementById('root');

if (root?.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    root,
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  ReactDOM.createRoot(root!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
