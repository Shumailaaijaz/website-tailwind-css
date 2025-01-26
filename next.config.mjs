/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
  images: {
    domains: ['images.unsplash.com'], // Add domains for external images
  },
};

export default nextConfig;