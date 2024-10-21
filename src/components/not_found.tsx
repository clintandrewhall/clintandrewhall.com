import { Section, type SectionHeaderProps, type SectionProps } from './layout';

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
    <Section id="notFound" {...{ className }}>
      <Section.Header noDivider={children === null} {...{ title, subtitle, name }} />
      {children}
    </Section>
  );
};
