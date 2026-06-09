/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // FIXED: 60 seconds was dangerously short for a personal brand site.
    // 30 days (2,592,000 seconds) is appropriate for static marketing images.
    minimumCacheTTL: 2592000,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      {
        // Security headers applied to all routes
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Long-term cache for static assets (fonts, images, JS, CSS)
        source: "/(.*)\\.(woff2|woff|ttf|otf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.(webp|avif|png|jpg|jpeg|svg|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ── Anchoring redirects ──────────────────────────────────────────
      {
        source: "/corporate-emcee-jaipur",
        destination: "/corporate-event-anchor-jaipur",
        permanent: true,
      },
      {
        source: "/wedding-emcee-jaipur",
        destination: "/wedding-anchor-jaipur",
        permanent: true,
      },
      // ── Location redirects ────────────────────────────────────────────
      {
        source: "/anchor-in-chandigarh",
        destination: "/anchor-in-rajasthan",
        permanent: true,
      },
      {
        source: "/anchor-in-kishangarh",
        destination: "/anchor-in-rajasthan",
        permanent: true,
      },
      {
        source: "/anchor-in-pune",
        destination: "/anchor-in-jaipur",
        permanent: true,
      },
      // ── Blog redirects ────────────────────────────────────────────────
      // FIXED: Was redirecting to /blog (index) causing link equity loss.
      // Now redirects to the pricing article — closest semantic equivalent.
      {
        source: "/blog/anchor-charges-jaipur-2026",
        destination: "/blog/anchor-charges-jaipur-2026-pricing",
        permanent: true,
      },
      // ── Legacy location redirects ─────────────────────────────────────
      {
        source: "/locations/jaipur",
        destination: "/anchor-in-jaipur",
        permanent: true,
      },
      // ── www → non-www canonical redirect (handled at DNS/hosting level
      //    too, but belt-and-suspenders approach here) ────────────────────
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.yashsoni.in" }],
        destination: "https://yashsoni.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
