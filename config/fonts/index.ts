const google = {
  families: [
    {
      name: 'Libre Baskerville',
      styles: 'ital,wght@0,400;0,700;1,400',
    },
    {
      name: 'Montserrat',
      styles: 'wght@100;200;300;400;500;600;700',
    },
  ],
};

const custom = {
  families: [
    {
      name: 'Libre Baskerville Bold',
      local: 'libre-baskerville-bold',
      src: './config/fonts/librebaskerville/librebaskerville-bold-webfont.woff',
    },
    {
      name: 'Libre Baskerville Italic',
      local: 'libre-baskerville-italic',
      src: './config/fonts/librebaskerville/librebaskerville-italic-webfont.woff',
    },
    {
      name: 'Montserrat Bold',
      local: 'montserrat-bold',
      src: './config/fonts/montserrat/montserrat-bold-webfont.woff',
    },
    {
      name: 'Montserrat Extra Bold',
      local: 'montserrat-extra-bold',
      src: './config/fonts/montserrat/montserrat-extrabold-webfont.woff',
    },
    {
      name: 'Montserrat Medium',
      local: 'montserrat',
      src: './config/fonts/montserrat/montserrat-medium-webfont.woff',
    },
    {
      name: 'Montserrat Semibold',
      local: 'montserrat-semi-bold',
      src: './config/fonts/montserrat/montserrat-semibold-webfont.woff',
    },
    {
      name: 'Montserrat Regular',
      local: 'montserrat-semi-bold',
      src: './config/fonts/montserrat/montserrat-regular-webfont.woff',
    },
    {
      name: 'Montserrat Light',
      local: 'montserrat-light',
      src: './config/fonts/montserrat/montserrat-light-webfont.woff',
    },
    {
      name: 'Iconic',
      local: 'iconic',
      src: './config/fonts/iconic/iconic-font.woff',
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

export const unfontConfig = { google, custom };
