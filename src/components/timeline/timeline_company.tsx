import { cx } from '@lib/css';
import type { CareerCompany } from '@lib/hooks';
import { useLogo } from '@lib/hooks';

import styles from './timeline_company.styles';

export interface TimelineCompanyProps extends CareerCompany {
  /** Stagger index for the first-load reveal. */
  enterIndex?: number;
}

const monthYear = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });
const year = new Intl.DateTimeFormat('en', { year: 'numeric' });

const format = (formatter: Intl.DateTimeFormat, date: string) => formatter.format(new Date(date));

export const TimelineCompany = ({
  id,
  name,
  location,
  start,
  end,
  roles,
  enterIndex = 0,
}: TimelineCompanyProps) => {
  const logo = useLogo(id);
  const isPresent = !end;
  const showRoleDates = roles.length > 1;
  // When the company has no single shared city, each role shows its own.
  const showRoleLocation = !location;

  return (
    <article {...styles.root(enterIndex)}>
      <header {...styles.header}>
        <p {...styles.span}>
          <time dateTime={start}>{format(year, start)}</time> —{' '}
          {isPresent ? <b>Present</b> : <time dateTime={end}>{format(year, end)}</time>}
          {location ? ` · ${location}` : null}
        </p>
        {/* The logo lives inside the name so it stays centered on it, whatever
            the kicker above does. */}
        <h4 {...styles.name}>
          <span {...cx(styles.bullet, isPresent && styles.bulletPresent)}>
            {logo?.src ? (
              <img src={logo.src} alt={`${name} logo`} loading="lazy" decoding="async" />
            ) : null}
          </span>
          {name}
        </h4>
      </header>
      <ol {...styles.roles}>
        {roles.map((role, index) => {
          const roleIsPresent = !role.end;

          return (
            <li key={`${role.position}_${index}`} {...styles.role}>
              {showRoleDates ? (
                <p {...styles.when}>
                  <time dateTime={role.start}>{format(monthYear, role.start)}</time> —{' '}
                  {roleIsPresent ? (
                    <b>Present</b>
                  ) : (
                    <time dateTime={role.end}>{format(monthYear, role.end as string)}</time>
                  )}
                  {showRoleLocation ? ` · ${role.location}` : null}
                </p>
              ) : null}
              {/* The dot pins to the title, so the kicker above never shifts it. */}
              <p {...cx(styles.position, roleIsPresent && styles.positionPresent)}>
                {role.position}
              </p>
              <p {...styles.tagline}>{role.tagline}</p>
            </li>
          );
        })}
      </ol>
    </article>
  );
};
