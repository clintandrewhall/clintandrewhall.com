import { Helmet } from 'react-helmet-async';

const DEFAULT_DESCRIPTION = 'The portfolio and thoughts of Clint Andrew Hall';
const DEFAULT_IMAGE_PATH = '/images/image.jpg';
const DEFAULT_SITE_URL = 'https://clintandrewhall.com';
const DEFAULT_TITLE = 'Clint Andrew Hall';

export interface MetaProps {
  title?: string;
  description?: string;
  imagePath?: string;
  siteUrl?: string;
}

export const Meta = ({
  title: titleProp = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  imagePath = DEFAULT_IMAGE_PATH,
  siteUrl = DEFAULT_SITE_URL,
}: MetaProps) => {
  const title = titleProp !== DEFAULT_TITLE ? `${titleProp} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta itemProp="headline" content={title} />
      <meta itemProp="name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="manifest" href={`${siteUrl}/manifest.json`} />
      <link rel="shortcut icon" href={`${siteUrl}/favicon.ico`} />

      <meta itemProp="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="Description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta itemProp="image" content={`${siteUrl}${imagePath}`} />
      <meta name="twitter:image" content={`${siteUrl}${imagePath}`} />
      <meta property="og:image" content={`${siteUrl}${imagePath}`} />

      <meta name="theme-color" content="#000000" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
    </Helmet>
  );
};
