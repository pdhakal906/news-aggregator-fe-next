import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.setoparty.com",
        port: "",
        pathname: "/uploads/posts/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "assets-cdn-api.ekantipur.com",
      },
      {
        protocol: "https",
        hostname: "assets-cdn.ekantipur.com",
      },
      {
        protocol: "https",
        hostname: "www.setopati.com",
      },
    ],
  },
};

export default nextConfig;
