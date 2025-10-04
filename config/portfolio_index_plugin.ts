import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import type { Plugin } from 'vite';

const VIRTUAL_ID = 'virtual:portfolio-index';
const RESOLVED_VIRTUAL_ID = '\0' + VIRTUAL_ID;

function readPortfolioEntries(): PortfolioEntryAttributes[] {
  const portfolioDir = path.resolve('./src/content/portfolio');
  if (!fs.existsSync(portfolioDir)) {
    return [];
  }

  const files = fs.readdirSync(portfolioDir).filter((f) => f.endsWith('.md'));

  const entries: PortfolioEntryAttributes[] = [];

  for (const file of files) {
    const filePath = path.join(portfolioDir, file);
    try {
      const { data } = matter(fs.readFileSync(filePath, 'utf8'));
      if (!data || typeof data !== 'object') {
        continue;
      }

      const entry = {
        id: String(data.id ?? path.basename(file, '.md')),
        name: String(data.name ?? ''),
        caption: String(data.caption ?? ''),
        timestamp: Number(data.timestamp ?? 0),
        cover: String(data.cover ?? ''),
        tags: Array.isArray(data.tags) ? (data.tags as PortfolioTag[]) : [],
        website: data.website ? String(data.website) : undefined,
      } satisfies PortfolioEntryAttributes;

      entries.push(entry);
    } catch (err) {
      console.warn(`[portfolio_index] Failed to parse ${filePath}:`, err);
    }
  }

  entries.sort((a, b) => b.timestamp - a.timestamp);
  return entries;
}

export function portfolioIndexPlugin(): Plugin {
  let cache: PortfolioEntryAttributes[] | null = null;
  return {
    name: 'portfolio-index-plugin',
    enforce: 'pre',
    resolveId(id) {
      if (id === VIRTUAL_ID) {
        return RESOLVED_VIRTUAL_ID;
      }
    },
    load(id) {
      if (id !== RESOLVED_VIRTUAL_ID) {
        return;
      }
      if (!cache) {
        cache = readPortfolioEntries();
      }

      const code = `export const portfolioIndex = ${JSON.stringify(cache)};`;
      return code;
    },
    configureServer(server) {
      const watchDir = path.resolve('./src/content/portfolio');
      server.watcher.add(watchDir);
      server.watcher.on('all', (_event, filePath) => {
        if (!filePath.endsWith('.md')) {
          return;
        }

        // Invalidate cache and module when any md changes
        cache = null;
        const mod = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_ID);

        if (mod) {
          server.moduleGraph.invalidateModule(mod);
          server.ws.send({ type: 'full-reload' });
        }
      });
    },
    buildStart() {
      // ensure we compute once for build
      cache = readPortfolioEntries();
    },
  };
}
