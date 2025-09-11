import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import type { Plugin } from 'vite';

import { imageProcessor, markdownImagePlugin } from './markdown_image_plugin';

// Basic Vite plugin for markdown processing
export const markdownPlugin = (): Plugin => {
  let hasLogged = false;
  return {
    name: 'custom-markdown-plugin',
    enforce: 'pre' as const,
    async transform(src: string, id: string) {
      if (!id.endsWith('.md')) {
        return;
      }

      const { content, data: attributes } = matter(src);

      // Process cover image in frontmatter
      if (attributes.cover) {
        imageProcessor.processImage(attributes.cover);
      }

      const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
      // Incorporate markdownImagePlugin logic for responsive images
      markdownImagePlugin(md);
      const html = md.render(content, { frontmatter: attributes });

      return {
        code: `export const attributes = ${JSON.stringify(attributes)}; export const html = ${JSON.stringify(html)}; export const raw = ${JSON.stringify(content)};`,
        map: null,
      };
    },

    async buildStart() {
      if (!hasLogged) {
        console.log(`[markdown] Starting image processing...`);
        hasLogged = true;
      }
    },

    async generateBundle() {
      await new Promise<void>((resolve) => {
        const checkProcessing = () => {
          if (!imageProcessor.isProcessing) {
            console.log('[markdown]All images processed successfully');
            resolve();
          } else {
            setTimeout(checkProcessing, 100);
          }
        };
        checkProcessing();
      });
    },
  };
};
