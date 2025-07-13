import { html } from '@content/about.md';

import styles from './about.styles';

export const Summary = () => <div {...styles.summary} dangerouslySetInnerHTML={{ __html: html }} />;
