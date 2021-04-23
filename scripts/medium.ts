import Parser from 'rss-parser';
import fs from 'fs';

const FEED = 'https://clintandrewhall.medium.com/feed';
const WRITE_PATH = './build';

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

  const result = feed.items.map(
    ({ categories, link, pubDate, title, ...rest }) => {
      const summary = rest['content:encodedSnippet'];
      return {
        categories,
        link: link.split('?')[0],
        timestamp: new Date(pubDate).getTime(),
        title,
        summary,
      };
    },
  );

  fs.writeFile(
    `${WRITE_PATH}/medium.json`,
    `
    {
      "posts": ${JSON.stringify(result)}
    }
    `,
    () => {
      // eslint-disable-next-line no-console
      console.log('wrote medium');
    },
  );
})();
