import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { scroller } from 'react-scroll';

import type { Section } from '../lib';
import styles from './header_link.module.css';

type Props = {
  id: Section;
  isSelected?: boolean;
  navigation?: Navigation;
  onClick?: () => void;
};

export const HeaderLink = ({
  id,
  isSelected = false,
  navigation = 'url',
  onClick: onClickHandler = () => {},
}: Props) => {
  let to: string;
  const isBookmark = navigation === 'local';

  if (id === 'home') {
    to = isBookmark ? '#' : '/';
  } else {
    to = isBookmark ? `#${id}` : `/${id}`;
  }

  const title = id.charAt(0).toUpperCase() + id.slice(1);
  const onClick = () => {
    if (!isBookmark) {
      return;
    }

    scroller.scrollTo(to, { smooth: true });
    onClickHandler();
  };

  return (
    <li
      className={classnames(styles.root, {
        [`${styles.current}`]: isSelected,
      })}>
      <Link className={styles.link} {...{ to, title, onClick }}>
        {title}
      </Link>
    </li>
  );
};
