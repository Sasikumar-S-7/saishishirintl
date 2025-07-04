/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 This makes Next.js generate a static HTML export
  productionBrowserSourceMaps: true, // 👈 Keep this if you want source maps for debugging
};

export default nextConfig;
