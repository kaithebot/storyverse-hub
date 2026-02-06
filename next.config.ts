import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  images: { unoptimized: true },
  basePath: '/storyverse-hub',
  assetPrefix: '/storyverse-hub/',
};

export default nextConfig;
