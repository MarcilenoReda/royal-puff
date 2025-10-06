/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    unoptimized: false,
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
}

module.exports = nextConfig
