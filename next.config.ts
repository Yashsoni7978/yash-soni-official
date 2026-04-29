import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' }
        ],
      },
    ];
  },
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;
