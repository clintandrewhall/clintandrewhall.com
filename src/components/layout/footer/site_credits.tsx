import styles from './site_credits.styles';

export const SiteCredits = () => {
  const year = new Date().getFullYear();

  return (
    <div {...styles.root}>
      <span>© Copyright Clint Andrew Hall {year}</span>
      <span>
        <a href="https://github.com/clintandrewhall/clintandrewhall.com">Crafted</a> with{' '}
        <a href="https://reactjs.org/">React</a>
      </span>
      <span>
        Design by <a href="https://www.styleshout.com/">styleshout</a>
      </span>
    </div>
  );
};
