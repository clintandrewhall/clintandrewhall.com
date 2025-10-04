import type { Options } from 'unplugin-fonts/types';

const custom: Options['custom'] = {
  families: [
    {
      name: 'Libre Baskerville Bold',
      local: 'libre-baskerville-bold',
      src: './config/fonts/librebaskerville/librebaskerville-bold-webfont.woff2',
    },
    // {
    //   name: 'Libre Baskerville Italic',
    //   local: 'libre-baskerville-italic',
    //   src: './config/fonts/librebaskerville/librebaskerville-italic-webfont.woff',
    // },
    {
      name: 'Libre Baskerville',
      local: 'libre-baskerville',
      src: './config/fonts/librebaskerville/librebaskerville-regular-webfont.woff2',
    },
    {
      name: 'Montserrat Bold',
      local: 'montserrat-bold',
      src: './config/fonts/montserrat/montserrat-bold-webfont.woff2',
    },
    {
      name: 'Montserrat Extra Bold',
      local: 'montserrat-extra-bold',
      src: './config/fonts/montserrat/montserrat-extrabold-webfont.woff2',
    },
    {
      name: 'Montserrat Medium',
      local: 'montserrat-medium',
      src: './config/fonts/montserrat/montserrat-medium-webfont.woff2',
    },
    {
      name: 'Montserrat Semibold',
      local: 'montserrat-semi-bold',
      src: './config/fonts/montserrat/montserrat-semibold-webfont.woff2',
    },
    {
      name: 'Montserrat Regular',
      local: 'montserrat-regular',
      src: './config/fonts/montserrat/montserrat-regular-webfont.woff2',
    },
    {
      name: 'Montserrat Light',
      local: 'montserrat-light',
      src: './config/fonts/montserrat/montserrat-light-webfont.woff2',
    },
    {
      name: 'Iconic',
      local: 'iconic',
      src: './config/fonts/iconic/iconic-font.woff2',
    },
    // {
    //   name: 'Montserrat Black',
    //   local: 'montserrat-black',
    //   src: './config/fonts/montserrat/montserrat-black-webfont.woff',
    // },
    // {
    //   name: 'Montserrat Extra Light',
    //   local: 'montserrat-extra-light',
    //   src: './config/fonts/montserrat/montserrat-extralight-webfont.woff',
    // },
    // {
    //   name: 'Montserrat Thin',
    //   local: 'montserrat-thin',
    //   src: './config/fonts/montserrat/montserrat-thin-webfont.woff',
    // },
  ],
  preload: true,
};

export const unfontConfig = { custom };
