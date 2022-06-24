import styles from './formats.module.css';

export const Formats = () => {
  return (
    <section id="formats" className={styles.root}>
      <h2 className={styles.title}>Resume Formats</h2>
      <ul className="list-unstyled formats-list">
        <li className={styles.item}>
          <a href="/resume/clintandrewhall.txt">
            <i className={styles.text}></i>Text
          </a>
        </li>
        <li className={styles.item}>
          <a href="/resume/clintandrewhall.pdf">
            <i className={styles.pdf}></i>PDF
          </a>
        </li>
        <li className={styles.item}>
          <a href="/resume/clintandrewhall.doc">
            <i className={styles.doc}></i>DOC
          </a>
        </li>
        <li className={styles.item}>
          <a href="/resume/clintandrewhall.json">
            <i className={styles.json}></i>JSON
          </a>
        </li>
        <li className={styles.item}>
          <a href="/resume/clintandrewhall.md">
            <i className={styles.md}></i>Markdown
          </a>
        </li>
        <li className={styles.item}>
          <a href="/resume/clintandrewhall.yml">
            <i className={styles.yml}></i>YML
          </a>
        </li>
      </ul>
    </section>
  );
};
