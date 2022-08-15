module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
     'ecinfosoluts.com',
    ],
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







