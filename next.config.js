module.exports = {

  target: 'serverless',

  reactStrictMode: true,
  images: {
    domains: [
     'ecinfosolutions.com',
     'http://ecinfosolutions.com',
     'eclocalwebsite.local',
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
    
};






