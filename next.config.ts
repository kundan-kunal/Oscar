import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Smallest-first; the browser picks the first it supports.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
