import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

import routerConfig from '../react-router.config';
import { DEFAULT_SITE_URL } from '../src/app/routes/meta';

const toXml = (rootUrl: string, routes: string[]): string => {
  const urls = Array.from(new Set(routes.map((r) => new URL(r, rootUrl).toString())));
  const body = urls
    .map(
      (u) => `  <url>
    <loc>${u}</loc>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
};

export function sitemapPlugin(): Plugin {
  return {
    name: 'sitemap-plugin',
    apply: 'build',
    async generateBundle() {
      try {
        const prerender = routerConfig.prerender;
        const routes = (await prerender?.()) ?? ['/'];
        const siteUrl = process.env.SITE_URL || DEFAULT_SITE_URL;

        const xml = toXml(siteUrl, routes);
        const outDir = path.resolve('dist/client');
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml);
        // eslint-disable-next-line no-console
        console.log(`[sitemap] Wrote ${routes.length} routes to dist/client/sitemap.xml`);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('[sitemap] Failed to generate sitemap:', err);
      }
    },
  };
}
