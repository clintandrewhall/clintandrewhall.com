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
    // console.log('Processing cover image', state);
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

      if (src && !src.includes('/') && !src.includes('http') && !src.includes('.')) {
        return imageProcessor.generateResponsiveHtml(src, alt);
      }
    }

    return defaultRender(tokens, idx, options, env, renderer);
  };
}

export { imageProcessor };
