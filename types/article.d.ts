/// <reference types="react" />

declare interface MarkdownImageProps {
  id: string;
  width: 'small' | 'large';
  alt: string;
}

declare interface ArticleTag {
  name: string;
  slug: string;
}

declare interface ArticleAttributes {
  id: string;
  name: string;
  caption: string;
  timestamp: number;
  cover: string;
  tags: ArticleTag[];
  website?: string;
}
declare interface ArticleImport {
  attributes: ArticleAttributes;
  toc: { level: string; content: string }[];
  html: string;
  ReactComponent: React.FC<{ Image: React.FC<MarkdownImageProps> }>;
}
