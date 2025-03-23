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
