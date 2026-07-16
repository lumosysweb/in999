import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    formats: ["image/webp"],
    unoptimized: true,
  },
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
