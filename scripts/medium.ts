import fs from 'fs';
import { JSDOM } from 'jsdom';
import Parser from 'rss-parser';

const FEED = 'https://clintandrewhall.medium.com/feed';
const WRITE_PATH = './src/content';

interface Item {
  'content:encoded': string;
  'content:encodedSnippet': string;
  'dc:creator': string;
  categories: string[];
  creator: string;
  guid: string;
  isoDate: string;
  link: string;
  pubDate: string;
  title: string;
}

interface Feed {
  channel: {
    feedUrl: string;
    image: {
      link: string;
      url: string;
      title: string;
    };
    // paginationLinks: { self: 'https://medium.com/@clintandrewhall/feed' },
    title: string;
    description: string;
    webMaster: string;
    generator: string;
    link: string;
    lastBuildDate: string;
  };
}

const parser: Parser<Feed, Item> = new Parser({
  customFields: {
    feed: ['channel'],
  },
});

(async () => {
  const feed = await parser.parseURL(FEED);
  console.log(feed.items);

  const result = feed.items.map(
    ({ categories, link, pubDate, title, 'content:encoded': content }) => {
      const dom = new JSDOM(content);
      const imgSrc = dom.window.document.querySelector('img')?.getAttribute('src');

      return {
        categories,
        link: link.split('?')[0],
        timestamp: new Date(pubDate).getTime(),
        title,
        imgSrc,
      };
    },
  );

  console.log(result);

  fs.writeFile(
    `${WRITE_PATH}/medium.json`,
    `
    {
      "posts": ${JSON.stringify(result)}
    }
    `,
    () => {
      console.log('wrote medium');
    },
  );
})();
