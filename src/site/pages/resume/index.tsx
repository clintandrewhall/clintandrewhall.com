import { useResume } from '@lib/hooks';

import { ResumeSummary } from './summary';

export const Resume = () => {
  const resume = useResume();

  if (!resume) {
    return null;
  }

  const { basics } = resume;

  return (
    <div>
      <header>
        <h1>{basics.name}</h1>
        <h2>{basics.label}</h2>
        <section>
          <h2>Contact</h2>
          <dl>
            <dt>Email</dt>
            <dd>{basics.email}</dd>
            <dt>Website</dt>
            <dd>{basics.url}</dd>
            <dt>Location</dt>
            <dd>
              {basics.location.city}, {basics.location.region}, {basics.location.countryCode}
            </dd>
          </dl>
        </section>
      </header>
      <main>
        <ResumeSummary />
      </main>
      <aside>
        <section>
          <h2>Profiles</h2>
          <dl>
            {basics.profiles.map((profile) => (
              <div key={profile.network}>
                <dt>{profile.network}</dt>
                <dd>
                  <a href={profile.url} target="_blank" rel="noreferrer">
                    {profile.username}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </aside>
    </div>
  );
};
