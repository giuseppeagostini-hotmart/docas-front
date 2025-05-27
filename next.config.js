/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/docas-front' : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  basePath,
  assetPrefix: basePath,
  
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  
  compress: true,
};

module.exports = nextConfig;
