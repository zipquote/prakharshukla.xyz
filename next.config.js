const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  webpack: (config) => {
    const svgrConfig = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    };

    config.module.rules.push(svgrConfig);

    return config;
  },
  sass: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
