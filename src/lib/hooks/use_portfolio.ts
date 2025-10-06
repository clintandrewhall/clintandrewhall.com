import { portfolioIndex } from 'virtual:portfolio-index';

import { getImagePath } from '@lib/image_path';

const DEFAULT_LIMIT = 6;

const entries = [...portfolioIndex].sort((a, b) => b.timestamp - a.timestamp);

const getAllPortfolioEntryIds = () => entries.map((entry) => entry.id);

export const usePortfolioEntryIds = (limit = DEFAULT_LIMIT) =>
  getAllPortfolioEntryIds().slice(0, limit);

export const usePortfolioEntryMetadata = (id: string) => entries.find((entry) => entry.id === id);

export const usePortfolioEntryImage = getImagePath;
