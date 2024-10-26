import { Section, type SectionHeaderProps, type SectionProps } from './layout';
import { Meta } from './meta';

export type NotFoundProps = Partial<
  Pick<SectionProps & SectionHeaderProps, 'className' | 'title' | 'subtitle' | 'name' | 'children'>
>;

export const NotFound = ({
  title = '404',
  subtitle = 'Page not found',
  name = 'Ope!',
  children = null,
  className,
}: NotFoundProps) => {
  return (
    <>
      <Meta title="404 | Clint Andrew Hall" description="Ope! This page isn't found" />
      <Section id="notFound" {...{ className }}>
        <Section.Header noDivider={children === null} {...{ title, subtitle, name }} />
        {children}
      </Section>
    </>
  );
};
