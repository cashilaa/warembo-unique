/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['warembo-unique.onrender.com'],
    unoptimized: true,
  },
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;