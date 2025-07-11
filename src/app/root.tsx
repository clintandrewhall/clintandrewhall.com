import { useEffect } from 'react';
import { css as csl } from '@linaria/core';
import 'ress';
import 'unfonts.css';
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, useLocation } from 'react-router';

import { css, cx } from '@lib/css';
import { theme } from '@theme';

import type { Route } from './+types/root';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <meta name="theme-color" content="#000000" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <Links />
        <link rel="manifest" href={`/manifest.json`} />
        <link rel="shortcut icon" href={`/favicon.ico`} />
      </head>
      <body>
        <div
          className={cx(
            csl`
          ${theme.decl.font.size.step0}
          ${theme.decl.font.sansSerif.regular}
        `,
            css`
              ${theme.page.body}
              ${theme.definitions}
            `,
          )}
        >
          {children}
        </div>
        <Scripts />
      </body>
    </html>
  );
};

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

const App = () => {
  return <Outlet />;
};

export default App;
