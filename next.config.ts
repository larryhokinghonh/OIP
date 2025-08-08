import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/OIP',
  assetPrefix: '/OIP/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true
};

export default nextConfig;
