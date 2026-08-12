import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoPath = "/paul-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: isProd ? repoPath : "",
  assetPrefix: isProd ? repoPath : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;