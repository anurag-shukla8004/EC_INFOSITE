module.exports = {

  reactStrictMode: true,
  images: {
    domains: ["ecinfosolutions.com"],
  },

  future: {
    webpack5: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
    
  target: 'serverless',
};







