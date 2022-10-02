module.exports = {
  compress: true,
  reactStrictMode: true,
  images: {
    domains: ["ecinfosolutions.com"],
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







