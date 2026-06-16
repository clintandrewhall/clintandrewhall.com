import styles from './numbers.styles';

export interface Props {
  followers: number;
  following: number;
  gists: number;
  repos: number;
}

const Item = ({ name, number }: { name: string; number: number }) => (
  <div {...styles.item}>
    <dt {...styles.name}>{name}</dt>
    <dd {...styles.number}>{number}</dd>
  </div>
);

export const Numbers = ({ followers, following, gists, repos }: Props) => {
  return (
    <section id="stats" {...styles.root}>
      <dl {...styles.list}>
        <Item name="Repos" number={repos} />
        <Item name="Followers" number={followers} />
        <Item name="Following" number={following} />
        <Item name="Gists" number={gists} />
      </dl>
    </section>
  );
};
