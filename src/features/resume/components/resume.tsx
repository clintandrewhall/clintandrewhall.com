import styles from './resume.module.css';
import { Sidebar } from './sidebar';
import { Contact } from './contact';

import resume from '../../../content/resume.json';
import { Formats } from './formats';
import { Profiles } from './profiles';
import { Education } from './education';
import { Summary } from './summary';

export const Resume = () => {
  const { basics, education } = resume;

  return (
    <div className={styles.page}>
      <div className={styles.root}>
        <Sidebar {...basics}>
          <Contact {...basics} />
          <Formats />
          <Profiles {...basics} />
          <Education {...{ education }} />
        </Sidebar>
        <main className={styles.main}>
          <Summary {...basics} />
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};
