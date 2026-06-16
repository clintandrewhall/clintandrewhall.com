declare module '*.md' {
  const attributes: PortfolioEntryAttributes;

  // When "Mode.TOC" is requested
  const toc: { level: string; content: string }[];

  // When "Mode.HTML" is requested
  const html: string;

  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
  import type React from 'react';
  const ReactComponent: React.FC;

  // Modify below per your usage
  export { attributes, html, ReactComponent, toc };
}

declare module 'virtual:portfolio-index' {
  export interface PortfolioIndexEntry {
    id: string;
    name: string;
    caption: string;
    timestamp: number;
    cover: string;
    tags: { name: string; slug: string }[];
    website?: string;
  }
  export const portfolioIndex: PortfolioIndexEntry[];
}

declare module 'virtual:resume' {
  const resume: Resume;
  export default resume;
}
