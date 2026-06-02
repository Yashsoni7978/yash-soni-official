import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
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
      {
        source: '/anchor-in-chandigarh',
        destination: '/anchor-in-rajasthan',
        permanent: true,
      },
      {
        source: '/anchor-in-kishangarh',
        destination: '/anchor-in-rajasthan',
        permanent: true,
      },
      {
        source: '/anchor-in-pune',
        destination: '/anchor-in-jaipur',
        permanent: true,
      },
      {
        source: '/blog/anchor-charges-jaipur-2026',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/locations/jaipur',
        destination: '/anchor-in-jaipur',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
