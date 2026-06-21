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
        ],
      },
      {
        // Explicitly allow AI Search crawlers for GEO (Generative Engine Optimization)
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "OAI-SearchBot"],
        allow: ["/"],
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
