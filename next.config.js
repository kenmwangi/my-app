/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  basePath: isProd ? '/my-app' : '',
  // pageExtensions: ['page.tsx'],
};

module.exports = nextConfig;
