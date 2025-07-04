import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProd ? '/Documentacion-visal' : '',
  assetPrefix: isProd ? '/Documentacion-visal/' : '',
  reactStrictMode: true,
};

export default nextConfig;
