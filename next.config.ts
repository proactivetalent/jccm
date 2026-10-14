import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
        pathname: "/images/5kvrtqgg/production/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
