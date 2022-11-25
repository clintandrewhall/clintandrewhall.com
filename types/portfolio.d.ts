declare interface PortfolioEntry {
  react: () => any;
  caption: string;
  cover: {
    src: string;
    size: string;
  };
  slug: string;
  tags: Array<{ slug: string; name: string }>;
  timestamp: number;
  title: string;
  website: string;
}
