/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export for Cloudflare Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // Enable trailing slashes for better compatibility with Cloudflare Pages
  trailingSlash: true,
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 