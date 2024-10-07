export const sectionIds = ['home', 'about', 'portfolio', 'career', 'medium', 'resume'] as const;

export type SectionId = (typeof sectionIds)[number];

export const isSectionId = (value: string): value is SectionId => {
  return typeof value === 'string' && sectionIds.includes(value as SectionId);
};

export const sectionTitles: Record<SectionId, string> = {
  home: 'Home',
  about: 'About',
  portfolio: 'Portfolio',
  career: 'Career',
  medium: 'Medium',
  resume: 'Resume',
} as const;
