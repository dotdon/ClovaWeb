/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Cloudflare Pages
  output: 'export',
  
  // Better compatibility with Cloudflare Pages
  trailingSlash: true,
  
  // Disable image optimization since Cloudflare Pages doesn't support it
  images: {
    unoptimized: true,
  },
  
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Explicitly set the output directory
  distDir: 'out',
};

export default nextConfig; 