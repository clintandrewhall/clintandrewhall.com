import { type Plugin } from 'vite';

import { imageProcessor } from './markdown_image_plugin';

export function viteImagePlugin(): Plugin {
  let hasLogged = false;

  return {
    name: 'image-processing',
    apply: 'build', // Only apply during build, not dev server
    async buildStart() {
      // This runs at the start of the build process
      if (!hasLogged) {
        console.log('Starting image processing...');
        hasLogged = true;
      }
    },
    async generateBundle() {
      // This runs during the build process, before assets are finalized
      console.log('Waiting for image processing to complete...');

      // Wait for image processing to complete using a Promise-based approach
      await new Promise<void>((resolve) => {
        const checkProcessing = () => {
          if (!imageProcessor.isProcessing) {
            console.log('All images processed successfully');
            resolve();
          } else {
            console.log(
              `Waiting for ${imageProcessor.processingCount} images to finish processing...`,
            );
            setTimeout(checkProcessing, 100); // Check again after a short delay
          }
        };

        checkProcessing();
      });
    },
  };
}
