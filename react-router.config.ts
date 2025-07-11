import type { Config } from '@react-router/dev/config';
import fs from 'fs';
import path from 'path';

export default {
  ssr: false,
  prerender: async () => {
    const portfolioDir = path.resolve('./src/content/portfolio');
    const files = fs.readdirSync(portfolioDir);

    return [
      '/',
      ...files
        .filter((file) => file.endsWith('.md'))
        .map((file) => path.basename(file, '.md'))
        .map((id) => `/portfolio/${id}`),
    ];
  },
  appDirectory: 'src/app',
  buildDirectory: 'dist',
} satisfies Config;
