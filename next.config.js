/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/docas-front' : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath, // ⭐ Isso é crucial para o favicon
  
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  }
};

module.exports = nextConfig;
