import moment from 'moment';
import styles from './education.module.css';

interface Props {
  education: Education[];
}

export const Education = ({ education }: Props) => {
  const items = education.map(
    ({ institution, endDate, startDate, studyType, area }) => (
      <div className={styles.item} key={institution}>
        <h3 className={styles.degree}>
          {studyType} {area}
        </h3>
        <h4 className={styles.institution}>{institution}</h4>
        <p className={styles.time}>
          {moment(startDate).format('MM/YYYY')} —{' '}
          {moment(endDate).format('MM/YYYY')}
        </p>
      </div>
    ),
  );

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Education</h2>
      {items}
    </section>
  );
};
