import type { CSSProperties } from 'react';
import { Link } from 'react-router';

import { useResume } from '@lib/hooks';

import styles from './about.styles';

// A proof link is either an on-site route (SPA nav via <Link>) or an external
// artifact (<a> — react-router's Link can't handle absolute URLs).
const ProofLink = ({ label, href }: { label: string; href: string }) => {
  const isExternal = /^https?:\/\//.test(href);
  const arrow = <span aria-hidden="true">→</span>;

  if (isExternal) {
    return (
      <a {...styles.proof} href={href} target="_blank" rel="noreferrer">
        {label}
        {arrow}
      </a>
    );
  }

  return (
    <Link {...styles.proof} to={href}>
      {label}
      {arrow}
    </Link>
  );
};

// WHAT I BELIEVE — POV statements pulled from resume.json (`custom.principles`),
// so the credo stays data-driven alongside the résumé rather than hard-coded in
// JSX. Each conviction is answered by substantiating prose and a link to the proof.
export const Principles = () => {
  const resume = useResume();
  const principles = resume?.custom?.principles;

  if (!principles?.length) {
    return null;
  }

  return (
    <dl {...styles.principles}>
      {principles.map((principle, index) => (
        <div
          key={principle.statement}
          {...styles.principle}
          style={{ '--reveal-i': index } as CSSProperties}
        >
          <dt {...styles.statement}>{principle.statement}</dt>
          <dd {...styles.detail}>
            {principle.detail}
            {principle.proof ? <ProofLink {...principle.proof} /> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
};
