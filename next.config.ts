import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      {
        source: '/locations/:slug*',
        destination: '/anchor-in-:slug*',
        permanent: true,
      },
      {
        source: '/corporate-emcee-jaipur',
        destination: '/corporate-event-anchor-jaipur',
        permanent: true,
      },
      {
        source: '/wedding-emcee-jaipur',
        destination: '/wedding-anchor-jaipur',
        permanent: true,
      },
      {
        source: '/locations',
        destination: '/anchor-in-rajasthan',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
