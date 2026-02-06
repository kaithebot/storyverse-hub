import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  images: { unoptimized: true },
  assetPrefix: '.',
};

export default nextConfig;
