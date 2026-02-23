const withLinaria = require('next-with-linaria');
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = withLinaria({
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
  transpilePackages: ['next-mdx-remote'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
});
