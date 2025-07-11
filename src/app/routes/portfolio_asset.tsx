import React from 'react';
import { useParams } from 'react-router';

// Dynamically import all images processed by vite-imagetools
const imageModules = import.meta.glob<{ default: ImageOutputMetadata[] }>(
  '@content/portfolio/images/*.{jpg,png}',
  {
    query: { w: '480;880;1280', as: 'metadata', format: 'webp' },
    eager: true,
  },
);

// Map the images into a more accessible structure
const images = Object.fromEntries(
  Object.entries(imageModules).map(([key, value]) => {
    const id = key.replace('/src/content/portfolio/images/', '').replace(/\.(jpg|png)$/, ''); // Extract the image ID
    const sizes = Object.fromEntries(
      value.default.map((item) => [
        item.width > 880 ? 'large' : item.width > 480 ? 'medium' : 'small',
        item,
      ]),
    );
    return [id, sizes];
  }),
);

const AssetRoute: React.FC = () => {
  const { imageId } = useParams<{ imageId: string }>();

  // Find the image by ID
  const image = imageId && images[imageId]?.large; // Default to "large" size

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <img
      src={image.src} // Processed image URL
      alt={imageId}
      width={image.width}
      height={image.height}
    />
  );
};

export default AssetRoute;
