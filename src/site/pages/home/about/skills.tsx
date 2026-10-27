import { Fragment } from 'react';
import type { CSSProperties } from 'react';

import { useResume } from '@lib/hooks';

import styles from './about.styles';

// WHAT I BUILD WITH — grouped skills from resume.json (`skills`), each group a
// tracked label answered by a neutral, dot-separated keyword run. No bars, no
// counts, no rainbow: the vocabulary, plainly stated.
export const Skills = () => {
  const resume = useResume();
  const skills = resume?.skills;

  if (!skills?.length) {
    return null;
  }

  return (
    <dl {...styles.skills}>
      {skills.map((group, index) => {
        const keywords = group.keywords ?? [];

        if (!group.name || !keywords.length) {
          return null;
        }

        return (
          <div
            key={group.name}
            {...styles.skillGroup}
            style={{ '--reveal-i': index } as CSSProperties}
          >
            <dt {...styles.groupLabel}>{group.name}</dt>
            <dd {...styles.groupItems}>
              {keywords.map((keyword, i) => (
                <Fragment key={keyword}>
                  {/* Real spaces flank the decorative (aria-hidden) dot so the
                      accessible name reads "TypeScript JavaScript …" rather than
                      running the keywords together. */}
                  {i > 0 ? (
                    <>
                      {' '}
                      <span {...styles.separator} aria-hidden="true">
                        ·
                      </span>{' '}
                    </>
                  ) : null}
                  {keyword}
                </Fragment>
              ))}
            </dd>
          </div>
        );
      })}
    </dl>
  );
};
