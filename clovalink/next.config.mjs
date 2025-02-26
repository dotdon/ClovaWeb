/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export for Cloudflare Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // Enable trailing slashes for better compatibility with Cloudflare Pages
  trailingSlash: true,
};

export default nextConfig; 