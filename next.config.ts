import type { NextConfig } from "next";

const nextConfig: NextConfig = {
      transpilePackages: ["next-mdx-remote"],
      serverExternalPackages: ["rehype-pretty-code", "shiki"],
};

export default nextConfig;
