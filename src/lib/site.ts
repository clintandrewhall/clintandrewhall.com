export const topicIds = ['home', 'about', 'portfolio', 'career', 'medium', 'resume'] as const;

export type TopicId = (typeof topicIds)[number];

export const isTopicId = (value: string): value is TopicId => {
  return typeof value === 'string' && topicIds.includes(value as TopicId);
};

export const topicTitles: Record<TopicId, string> = {
  home: 'Home',
  about: 'About',
  portfolio: 'Portfolio',
  career: 'Career',
  medium: 'Medium',
  resume: 'Resume',
} as const;

export function isPortfolioTag(value: unknown): value is PortfolioTag {
  if (value === null || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return typeof candidate.name === 'string' && typeof candidate.slug === 'string';
}
