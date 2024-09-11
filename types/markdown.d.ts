declare module '*.md' {
  // "unknown" would be more detailed depends on how you structure frontmatter
  const attributes: {
    id: string;
    name?: Section;
    title: string;
    subtitle?: string;
  };

  // When "Mode.TOC" is requested
  const toc: { level: string; content: string }[];

  // When "Mode.HTML" is requested
  const html: string;

  // When "Mode.RAW" is requested
  const raw: string;

  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
  import type React from 'react';
  const ReactComponent: React.VFC;

  // When "Mode.Vue" is requested
  import type { Component, ComponentOptions } from 'vue';
  const VueComponent: ComponentOptions;
  const VueComponentWith: (components: Record<string, Component>) => ComponentOptions;

  // Modify below per your usage
  export { attributes, html, ReactComponent, toc, VueComponent, VueComponentWith };
}
