import { useEffect } from 'react';
import { css as csl } from '@linaria/core';
import 'ress';
import '@theme/definitions';
import '@fontsource-variable/montserrat';
import '@fontsource/libre-baskerville/400.css';
import '@fontsource/libre-baskerville/700.css';
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, useLocation } from 'react-router';

import { css, cx } from '@lib/css';
import { theme } from '@theme';

import type { Route } from './+types/root';

// Component to handle scroll-to-top behavior inside router context
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <Links />
        <link rel="manifest" href={`/manifest.json`} />
        <link rel="shortcut icon" href={`/favicon.ico`} />
        <noscript>
          {/* Fallback to make Swiper lists horizontally scrollable without JS */}
          <style>{`
            .peopleline .swiper { overflow-x: auto; padding-inline: var(--peopleline-gap, 10px); }
            .peopleline .swiper-wrapper { display: flex; gap: var(--peopleline-gap, 10px); transform: none; }
            .peopleline .swiper-slide { flex: 0 0 var(--peopleline-slide-width, 100%); scroll-snap-align: start; }
            @media (min-width: 975px) { .peopleline .swiper-slide { flex-basis: calc((100% - var(--peopleline-gap, 10px)) / 2); } }
          `}</style>
        </noscript>
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
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default App;
