/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/mrpal' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mrpal/' : '',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;