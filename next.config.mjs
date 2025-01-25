/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
module.exports = {
    eslint: {
      ignoreDuringBuilds: true, // Disable ESLint during builds
    },
    images: {
      domains: ['images.unsplash.com'], // Add domains for external images
    },
  };