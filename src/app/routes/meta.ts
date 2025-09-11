const DEFAULT_DESCRIPTION = 'The portfolio and thoughts of Clint Andrew Hall';
const DEFAULT_IMAGE_PATH = '/images/image.jpg';
export const DEFAULT_SITE_URL = 'https://clintandrewhall.com';
export const DEFAULT_TITLE = 'Clint Andrew Hall';

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 630;

export const getMeta =
  ({
    title: titleVar = DEFAULT_TITLE,
    imagePath = DEFAULT_IMAGE_PATH,
    description = DEFAULT_DESCRIPTION,
    siteUrl = DEFAULT_SITE_URL,
  } = {}) =>
  () => {
    const title = titleVar !== DEFAULT_TITLE ? `${titleVar} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;

    return [
      { title },
      { name: 'description', content: description },
      { name: 'Description', content: description },
      { itemProp: 'headline', content: title },
      { itemProp: 'image', content: `${siteUrl}${imagePath}` },
      { itemProp: 'name', content: title },

      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${siteUrl}${imagePath}` },
      { name: 'twitter:title', content: title },
      { name: 'twitter:url', content: siteUrl },

      { property: 'og:description', content: description },
      { property: 'og:image', content: `${siteUrl}${imagePath}` },
      { property: 'og:image:width', content: String(IMAGE_WIDTH) },
      { property: 'og:image:height', content: String(IMAGE_HEIGHT) },
      { property: 'og:site_name', content: DEFAULT_TITLE },
      { property: 'og:title', content: title },
      { property: 'og:url', content: siteUrl },
    ];
  };
