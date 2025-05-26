/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS && process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_BASE_PATH 
    : '',
};

module.exports = nextConfig;
