/// <reference types="react" />

declare interface PortfolioEntryTag {
  name: string;
  slug: string;
}

declare interface PortfolioEntry {
  attributes: {
    id: string;
    name: string;
    caption: string;
    timestamp: number;
    cover: string;
    tags: PortfolioEntryTag[];
    website?: string;
  };

  toc: { level: string; content: string }[];
  html: string;
  ReactComponent: React.VFC;
}
