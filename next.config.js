const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  webpack: (config) => {
    const svgrConfig = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    };

    const htmlLoaderConfig = {
      test: /\.html$/i,
      use: ['html-loader'],
    };

    config.module.rules.push(svgrConfig);
    config.module.rules.push(htmlLoaderConfig);

    return config;
  },
  serverRuntimeConfig: {
    sass: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  },
  publicRuntimeConfig: {
    i18n: {
      locales: ['en', 'hi'],
      defaultLocale: 'en',
    },
    images: {
      domains: ['res.cloudinary.com'],
    },
    website: 'https://www.prakharshukla.xyz',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
