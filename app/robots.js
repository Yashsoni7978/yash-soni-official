export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/api/og", // Allow OG image generation for social previews
        ],
        disallow: [
          "/private/",
          "/admin/",
          // FIXED: Removed '/*.json$' — regex patterns are NOT valid robots.txt syntax.
          // Googlebot ignores them silently. Use specific paths instead.
          // FIXED: Removed '/api/' block entirely — it was preventing the allowed
          // '/api/og' route above from working. Googlebot follows the most specific rule.
          // If you have specific API routes to block, list them explicitly:
          // '/api/some-private-route',
        ],
      },
      {
        // Prevent search engine bots from indexing /_next/ internal paths
        // (these are JS/CSS bundles — not crawlable content)
        userAgent: "*",
        disallow: ["/_next/"],
      },
    ],
    sitemap: "https://yashsoni.in/sitemap.xml",
    host: "https://yashsoni.in",
  };
}
