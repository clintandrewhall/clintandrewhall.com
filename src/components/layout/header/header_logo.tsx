import styles from './header_logo.styles';

export interface HeaderLogoProps {
  isLocal?: boolean;
}

export const HeaderLogo = ({ isLocal = false }: HeaderLogoProps) => {
  return (
    <h1 {...styles.root}>
      <a {...styles.link} href={isLocal ? '#' : '/'}>
        Clint Andrew Hall
      </a>
    </h1>
  );
};
