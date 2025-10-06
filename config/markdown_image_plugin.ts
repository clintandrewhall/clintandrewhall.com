import type MarkdownIt from 'markdown-it';

import { ImageProcessor } from './image_processor';

const imageProcessor = new ImageProcessor();

export function markdownImagePlugin(md: MarkdownIt): void {
  const defaultRender =
    md.renderer.rules.image ||
    function (tokens, idx, options, _env, renderer) {
      return renderer.renderToken(tokens, idx, options);
    };

  // Cover image logic: prepend responsive cover if frontmatter.cover exists
  md.core.ruler.push('cover_image', function (state) {
    const env = state.env || {};
    if (env.frontmatter && env.frontmatter.cover) {
      const coverId = env.frontmatter.cover;
      imageProcessor.processImage(coverId);
    }
  });

  md.renderer.rules.image = function (tokens, idx, options, env, renderer) {
    const token = tokens[idx];
    const srcIndex = token.attrIndex('src');

    if (srcIndex >= 0 && token.attrs) {
      const src = token.attrs[srcIndex][1];
      const alt = token.content || '';
      let imageId = src;
      let size: 'small' | 'medium' | 'large' = 'large';

      // Parse query string for size (e.g., id?small)
      const match = src.match(/^(.*?)(\?(small|medium|large))?$/);

      if (match) {
        imageId = match[1];
        const imageSize = match[3];
        if (imageSize === 'small' || imageSize === 'medium' || imageSize === 'large') {
          size = imageSize;
        }
      }

      if (
        imageId &&
        !imageId.includes('/') &&
        !imageId.includes('http') &&
        !imageId.includes('.')
      ) {
        return imageProcessor.generateResponsiveHtml(imageId, alt, size);
      }
    }

    return defaultRender(tokens, idx, options, env, renderer);
  };
}

export { imageProcessor };
