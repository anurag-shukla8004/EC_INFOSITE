module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
     'ecinfosolutions.com',
     'https://dreamy-medovik-9cddcf.netlify.app/'
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







