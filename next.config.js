const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] },
  images: {
    loader: 'imgix',
    path: 'https://app.rona.market',
  },
  env: {
    API_URL: process.env.API_URL,
    IMG_URL: process.env.IMG_URL,
    STATIC: process.env.STATIC,
  },
};

module.exports = nextConfig;
