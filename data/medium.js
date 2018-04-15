// @flow
import fs from 'fs';
import fetch from 'node-fetch';

const BASE_URL = 'https://medium.com';
const username = 'clintandrewhall';
const writePath = './src/_content/posts/';

const TAG_BASE = 'https://mediums.com/tag/';
const IMG_BASE = 'https://cdn-images-1.medium.com/freeze/fit/t/800/350/';

type Post = {
  coverSrc: string,
  latestTimestamp: number,
  slug: string,
  subtitle: string,
  tags: Array<{ slug: string, name: string }>,
  timestamp: number,
  title: string,
};

const Template = (post: Post) => {
  const {
    coverSrc,
    latestTimestamp,
    slug,
    subtitle,
    tags,
    timestamp,
    title,
  } = post;

  let tagOutput = '';

  if (tags && tags.length > 0) {
    tagOutput = 'Tags: ';
    tags.forEach(tag => {
      tagOutput += '[' + tag.name + '](' + TAG_BASE + tag.slug + '), ';
    });
  }

  return `
---
coverSrc: ${coverSrc}
latestTimestamp: ${latestTimestamp}
slug: ${slug}
subtitle: ${subtitle}
timestamp: ${timestamp}
title: ${title}
---
# ${title}
## ${subtitle}

${tagOutput}
`;
};

(async function() {
  const postsRequest = await fetch(
    `${BASE_URL}/@${username}/latest?format=json`,
  );

  let data = await postsRequest.text();
  data = data.substr(data.indexOf('{'));
  data = JSON.parse(data) || {};

  const { success, payload } = data;

  if (!payload || !success) {
    console.log('no payload');
    return;
  }

  let { posts, references } = payload;

  if (!posts && references) {
    const { Post } = references;
    posts = Object.keys(Post).map(key => Post[key]);
  }

  posts = posts.map(post => {
    const {
      content,
      firstPublishedAt,
      latestPublishedAt,
      title,
      uniqueSlug,
      virtuals,
    } = post;

    const { subtitle } = content;
    const { previewImage, tags } = virtuals;
    const { imageId } = previewImage;

    const displayTags =
      tags &&
      tags.map(tag => {
        const { slug, name } = tag;
        return {
          name,
          slug,
        };
      });

    return {
      coverSrc: IMG_BASE + imageId,
      latestTimestamp: latestPublishedAt,
      slug: uniqueSlug,
      source: 'medium',
      subtitle,
      tags: displayTags,
      timestamp: firstPublishedAt,
      title,
    };
  });

  if (posts.length <= 0) {
    console.log('no posts');
    return;
  }

  const writes = posts.map(post =>
    fs.writeFile(
      writePath + post.latestTimestamp + '.md',
      Template(post),
      () => {
        console.log('wrote: ' + post.latestTimestamp);
      },
    ),
  );

  await Promise.all(writes);
})();
