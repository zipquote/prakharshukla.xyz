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
  modules: true,
  i18n: {
    locales: ['en-us', 'hi-in'],
    defaultLocale: 'en-us',
  },
};
