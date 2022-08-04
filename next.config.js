module.exports = {
  images: {
    domains: [
     'ecinfosolutions.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
    target: 'serverless'
};






