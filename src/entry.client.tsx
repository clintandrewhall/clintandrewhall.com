import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

// if (!Object.hasOwn) {
//   Object.hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
// }
import { App } from './app';

const root = document.getElementById('root');

if (root?.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    root,
    <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode>,
  );
} else {
  ReactDOM.createRoot(root!).render(
    <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
