import { getImagePath } from '@lib/image_path';

const DEFAULT_LIMIT = 6;

// Portfolio Entries
const contents = import.meta.glob<PortfolioEntryImport>('@content/portfolio/*.md', { eager: true });

const entries = Object.values(contents).sort(
  (a, b) => b.attributes.timestamp - a.attributes.timestamp,
);

export const usePortfolioEntries = (slug?: string) => {
  if (slug) {
    return entries.filter((entry) => entry.attributes.tags.some((tag) => tag.slug === slug));
  }
  return entries;
};

const useAllPortfolioEntryIds = () => usePortfolioEntries().map((entry) => entry.attributes.id);

const useAllPortfolioEntryMetadata = () => usePortfolioEntries().map((entry) => entry.attributes);

export const usePortfolioTags = () =>
  usePortfolioEntries().flatMap((entry) => entry.attributes.tags);

export const usePortfolioTag = (slug?: string) =>
  usePortfolioTags().find((tag) => tag.slug === slug);

export const usePortfolioEntry = (id: string) =>
  usePortfolioEntries().find((entry) => entry.attributes.id === id);

export const usePortfolioEntryIds = (limit = DEFAULT_LIMIT) =>
  useAllPortfolioEntryIds().slice(0, limit);

export const usePortfolioEntryMetadata = (id: string) =>
  useAllPortfolioEntryMetadata().find((entry) => entry.id === id);

export const usePortfolioEntryImage = getImagePath;
