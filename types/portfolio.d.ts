/// <reference types="react" />

declare interface MarkdownImageProps {
  id: string;
  width: 'small' | 'large';
  alt: string;
}

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
  ReactComponent: React.FC<{ Image: React.FC<MarkdownImageProps> }>;
}
