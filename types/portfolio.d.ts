/// <reference types="react" />

declare interface MarkdownImageProps {
  id: string;
  width: 'small' | 'large';
  alt: string;
}

declare interface PortfolioTag {
  name: string;
  slug: string;
}

declare interface PortfolioEntryAttributes {
  id: string;
  name: string;
  caption: string;
  timestamp: number;
  cover: string;
  tags: PortfolioTag[];
  website?: string;
}

declare interface PortfolioEntryImport {
  attributes: PortfolioEntryAttributes;
  toc: { level: string; content: string }[];
  html: string;
  ReactComponent: React.FC<{ Image: React.FC<MarkdownImageProps> }> | undefined;
}

// Temporary aliases for backward compatibility during refactor
type ArticleTag = PortfolioTag;
type ArticleAttributes = PortfolioEntryAttributes;
type ArticleImport = PortfolioEntryImport;
