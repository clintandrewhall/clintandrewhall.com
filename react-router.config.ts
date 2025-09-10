import type { Config } from '@react-router/dev/config';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default {
  ssr: false,
  prerender: async () => {
    const portfolioDir = path.resolve('./src/content/portfolio');
    const files = fs.readdirSync(portfolioDir);

    // Get portfolio item routes
    const portfolioRoutes = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => path.basename(file, '.md'))
      .map((id) => `/portfolio/${id}`);

    // Collect unique tag slugs from portfolio files
    const tagSlugs = new Set<string>();

    for (const file of files) {
      if (file.endsWith('.md')) {
        const filePath = path.join(portfolioDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data: frontmatter } = matter(fileContent);

        if (frontmatter.tags && Array.isArray(frontmatter.tags)) {
          frontmatter.tags.forEach((tag: any) => {
            if (tag && typeof tag === 'object' && tag.slug) {
              tagSlugs.add(tag.slug);
            }
          });
        }
      }
    }

    // Generate tag routes
    const tagRoutes = Array.from(tagSlugs).map((slug) => `/portfolio/tag/${slug}`);

    return ['/', ...portfolioRoutes, ...tagRoutes];
  },
  appDirectory: 'src/app',
  buildDirectory: 'dist',
} satisfies Config;
