import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  // distDir: 'out',
  // output: 'export',
};

export default nextConfig;
