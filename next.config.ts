import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    // 确保Next.js可以优化public/images目录下的图片
    unoptimized: false
  }
};

export default nextConfig;
