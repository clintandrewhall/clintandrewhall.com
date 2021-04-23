declare interface MediumPost {
  categories: string[];
  link: string;
  timestamp: number;
  title: string;
  summary: string;
}

declare interface MediumResponse {
  posts: MediumPost[];
}
