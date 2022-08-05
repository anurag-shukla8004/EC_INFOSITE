module.exports = {
  images: {
    domains: [
     'ecinfosolutions.com',
     "http://ecinfosolutions.com"
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






