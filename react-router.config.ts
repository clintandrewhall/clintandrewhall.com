import type { Config } from '@react-router/dev/config';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { isPortfolioTag } from './src/lib/site';

export default {
  ssr: false,
  prerender: async () => {
    const portfolioDir = path.resolve('./src/content/portfolio');
    const files = fs.readdirSync(portfolioDir);

    const portfolioRoutes = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => path.basename(file, '.md'))
      .map((id) => `/portfolio/${id}`);

    const tagSlugs = new Set<string>();

    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(portfolioDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data: frontmatter } = matter(fileContent);

        if (frontmatter.tags && Array.isArray(frontmatter.tags)) {
          const tags = (frontmatter.tags as unknown[]).filter(isPortfolioTag);
          tags.forEach((tag) => {
            tagSlugs.add(tag.slug);
          });
        }
      }
    }

    const tagRoutes = Array.from(tagSlugs).map((slug) => `/portfolio/tag/${slug}`);

    return ['/', '/portfolio', ...portfolioRoutes, ...tagRoutes];
  },
  appDirectory: 'src/site',
  buildDirectory: 'dist',
} satisfies Config;
