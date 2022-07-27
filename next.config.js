// next.config.js
module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://b3a7-123-201-213-104.ngrok.io/api/news/post/',
        },
      ]
    },
};

module.exports = {
  images: {
      domains: ['ecinfosolutions.com'],
  },
}