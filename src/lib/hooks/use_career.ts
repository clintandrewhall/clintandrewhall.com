import { useResume } from './use_resume';

/** A single role held at a company, resolved for the timeline. */
export interface CareerRole {
  position: string;
  start: string;
  end?: string;
  /** City where the role was held (e.g. "Vancouver"). */
  location: string;
  /** One-line summary — the role's `tagline`, or the first sentence of `summary`. */
  tagline: string;
}

/** A company node: one logo + name, with every role held there nested beneath. */
export interface CareerCompany {
  /** Logo key (shared across a company's roles). */
  id: string;
  /** Canonical company name (e.g. "Facebook", not "Facebook NYC"). */
  name: string;
  /**
   * The company's location, set only when every role shares one city (e.g.
   * "Distributed"). When roles span different cities it is left undefined and
   * each role carries its own {@link CareerRole.location} instead.
   */
  location?: string;
  /** Earliest role start across the company. */
  start: string;
  /** Latest role end, or `undefined` when a role is ongoing ("Present"). */
  end?: string;
  /** Roles, newest first. */
  roles: CareerRole[];
}

// JSON Resume stores `location` as "City, Region, Country"; the city is enough
// to summarize where a company's roles happened.
const city = (location: string) => location.split(',')[0]?.trim() ?? location;

// Fallback blurb when a role has no explicit `tagline`: the first sentence of
// its long-form summary, with markdown links flattened to their text so the
// timeline never renders raw `[label](url)`.
const firstSentence = (summary: string) => {
  const text = summary
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  const match = text.match(/^.*?[.!?](?=\s|$)/);
  return (match ? match[0] : text).trim();
};

/**
 * Groups a flat, role-per-entry work history into company nodes, keyed by the
 * shared logo `custom.key`. Roles sort newest-first; company span and locations
 * are derived. Entries flagged `custom.hideFromSite` are dropped.
 */
export const groupWorkByCompany = (work: Work[]): CareerCompany[] => {
  const order: string[] = [];
  const byKey = new Map<string, Work[]>();

  for (const entry of work) {
    const { key, hideFromSite } = entry.custom;

    if (hideFromSite) {
      continue;
    }

    if (!byKey.has(key)) {
      byKey.set(key, []);
      order.push(key);
    }

    byKey.get(key)!.push(entry);
  }

  const companies = order.map((key): CareerCompany => {
    const roles = byKey
      .get(key)!
      .slice()
      .sort((a, b) => b.startDate.localeCompare(a.startDate));

    const starts = roles.map((role) => role.startDate).sort();
    const ends = roles
      .filter((role) => role.endDate)
      .map((role) => role.endDate as string)
      .sort();
    const isPresent = roles.some((role) => !role.endDate);
    const distinctLocations = [...new Set(roles.map((role) => city(role.location)))];

    return {
      id: key,
      name: roles[0].name,
      // A shared city sits on the company line; varied cities move onto each role.
      location: distinctLocations.length === 1 ? distinctLocations[0] : undefined,
      start: starts[0],
      end: isPresent ? undefined : ends[ends.length - 1],
      roles: roles.map((role) => ({
        position: role.position,
        start: role.startDate,
        end: role.endDate,
        location: city(role.location),
        tagline: role.custom.tagline ?? firstSentence(role.summary),
      })),
    };
  });

  // Most recent company first: ongoing roles sort ahead of any dated end.
  return companies.sort((a, b) => {
    const aEnd = a.end ?? '9999';
    const bEnd = b.end ?? '9999';
    return aEnd === bEnd ? b.start.localeCompare(a.start) : bEnd.localeCompare(aEnd);
  });
};

/**
 * Company-grouped work history for the career timeline. Pass `limit` to cap the
 * number of companies (e.g. the home page shows the most recent two).
 */
export const useCareer = (limit?: number): CareerCompany[] => {
  const resume = useResume();

  if (!resume) {
    return [];
  }

  const companies = groupWorkByCompany(resume.work);
  return typeof limit === 'number' ? companies.slice(0, limit) : companies;
};
