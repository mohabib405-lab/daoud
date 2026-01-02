import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/ueber-uns",
        destination: "/about",
      },
      {
        source: "/leistungen",
        destination: "/services",
      },
      {
        source: "/kontakt",
        destination: "/contact",
      },
      {
        source: "/preise",
        destination: "/pricing",
      },
      {
        source: "/haeufige-fragen",
        destination: "/faq",
      },
    ];
  },
};

export default nextConfig;
