import { Layout } from '@components/layout';
import { type TopicId } from '@lib/site';

import { ToSectionLink } from './to_section_link';

export interface Props {
  currentSectionId?: TopicId;
}

export const Header = ({ currentSectionId: selectedId = 'home' }: Props) => {
  return <Layout.Header {...{ selectedId, Link: ToSectionLink }} />;
};
