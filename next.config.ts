import type { NextConfig } from "next";

const nextConfig: NextConfig = {
      transpilePackages: ["next-mdx-remote"],
      experimental: {
            serverComponentsExternalPackages: ["rehype-pretty-code", "shiki"],
      },
};

export default nextConfig;
