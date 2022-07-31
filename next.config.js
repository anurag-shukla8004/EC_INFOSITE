module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
};

const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withVideos = require('next-videos')

module.exports = withPlugins([withImages, withVideos], {
  target: 'serverless',
})