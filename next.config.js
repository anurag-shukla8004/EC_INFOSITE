module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
        // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.resolve.fallback = {
            fs: false
        }
    }

    return config;
},

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
    target: 'serverless'
};






