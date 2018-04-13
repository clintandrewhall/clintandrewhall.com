// @flow
import request from 'request';

const BASE_URL = 'https://medium.com';
const username = 'clintandrewhall';

request.get(`${BASE_URL}/@${username}/latest?format=json`, function(
  error,
  reseponse,
  data,
) {
  data = data.substr(data.indexOf('{'));
  data = JSON.parse(data) || {};
  const { payload } = data;

  if (payload) {
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
        tags,
        title,
        uniqueSlug,
        virtuals,
      } = post;
      const { subtitle } = content;
      const { previewImage } = virtuals;
      const { imageId } = previewImage;

      const displayTags = tags.map(tag => {
        const { slug, name } = tag;
        return {
          name,
          slug,
        };
      });

      return {
        coverSrc: imageId,
        latestTimestamp: latestPublishedAt,
        slug: uniqueSlug,
        subtitle,
        tags: displayTags,
        timestamp: firstPublishedAt,
        title,
      };
    });
  }

  const posts =
    (data.payload && data.payload.posts) ||
    (data.payload &&
      data.payload.references &&
      data.payload.references.Post &&
      Object.keys(data.payload.references.Post).map(
        key => data.payload.references.Post[key],
      ));
  console.log('medium', error, posts);
});
