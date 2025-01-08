/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['warembo-unique.onrender.com'],
    unoptimized: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;