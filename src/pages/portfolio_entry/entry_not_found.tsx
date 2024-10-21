import { NotFound, type NotFoundProps } from '@components/not_found';
import {
  PortfolioGrid,
  type PortfolioItemProps,
  usePortfolioItemProps,
} from '@components/portfolio';
import { useEntryIds } from '@lib/hooks';

import styles from './entry_not_found.styles';

const args: NotFoundProps = {
  title: 'Portfolio story not found.',
  subtitle: 'But you could read about one of these instead.',
};

export const PortfolioEntryNotFound = () => {
  const ids = useEntryIds();
  const entries = ids
    .map(usePortfolioItemProps)
    .filter<PortfolioItemProps>((entry) => entry !== null)
    .slice(0, 3)
    .map((entry) => <PortfolioGrid.Item key={entry.title} {...entry} />);

  return (
    <div {...styles.root}>
      <NotFound {...args} {...styles.notFound}>
        <PortfolioGrid {...styles.grid}>{entries}</PortfolioGrid>
      </NotFound>
    </div>
  );
};
