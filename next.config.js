if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

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





