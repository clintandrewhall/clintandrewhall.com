export const sections = [
  '',
  'home',
  'about',
  'portfolio',
  'career',
  'medium',
  'testimonials',
] as const;

export const menuItems = [
  'home',
  'about',
  'portfolio',
  'career',
  'medium',
  'resume',
] as const;

export const isSection = (section: string): section is Section => {
  return sections.includes(section as Section);
};

export const isMenuItem = (item: string): item is MenuItem => {
  return menuItems.includes(item as MenuItem);
};

export type Section = typeof sections[number];
export type MenuItem = typeof menuItems[number];
