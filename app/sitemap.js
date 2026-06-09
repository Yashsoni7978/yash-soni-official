import fs from "fs";
import path from "path";
import { BLOG_POSTS } from "../data/blogs";

/**
 * Dynamic Sitemap Generator — Technical SEO Architect
 *
 * Improvements over previous version:
 * 1. Removed EXPECTED_BLOGS whitelist — ALL blog posts are now included.
 * 2. /privacy and /terms are now omitted (they have robots: noindex in their
 *    page metadata, so they should NOT appear in sitemap per SEO best practice).
 * 3. Priority heuristics refined — duplicate /anchor-in-jaipur entries removed.
 * 4. lastModified uses ISO string for compatibility.
 */

export default function sitemap() {
  const baseUrl = "https://yashsoni.in";
  const appDir = path.join(process.cwd(), "app");

  /**
   * Recursively crawls app/ directory for static page files.
   * Excludes API routes, internal dirs, and specific noindex routes.
   */
  const getRoutes = (dir, routes = []) => {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip internal/system directories
        if (file === "api" || file === "lib") continue;
        // Group routes: recurse into them but strip from URL
        if (file.startsWith("(")) {
          getRoutes(fullPath, routes);
          continue;
        }
        // Skip underscore folders (components, etc.)
        if (file.startsWith("_")) continue;
        getRoutes(fullPath, routes);
      } else if (file === "page.jsx" || file === "page.tsx") {
        let relativePath = path
          .relative(appDir, dir)
          .replace(/\\/g, "/");

        // Strip group route segments from URL
        const cleanedPath = relativePath
          .split("/")
          .filter((segment) => !segment.startsWith("("))
          .join("/");

        const urlPath = cleanedPath === "" ? "" : `/${cleanedPath}`;

        // Pages that should NOT appear in sitemap:
        // - /privacy and /terms have robots: noindex — excluded correctly
        // - /blog/[slug] is a dynamic route — added separately below
        // - /locations/jaipur redirects to /anchor-in-jaipur — excluded
        const EXCLUDED_ROUTES = [
          "/privacy",
          "/terms",
          "/blog/[slug]",
          "/locations/jaipur",
        ];
        if (EXCLUDED_ROUTES.includes(urlPath)) continue;

        routes.push({
          url: `${baseUrl}${urlPath}`,
          lastModified: stat.mtime.toISOString(),
          path: urlPath,
        });
      }
    }
    return routes;
  };

  const allRoutes = getRoutes(appDir);

  // ── Dynamic Blog Routes ────────────────────────────────────────────────
  // FIXED: Removed the EXPECTED_BLOGS whitelist filter.
  // ALL blog posts from data/blogs.js are now included automatically.
  // When you add new blog posts to BLOG_POSTS, they appear in sitemap immediately.
  BLOG_POSTS.forEach((post) => {
    allRoutes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date().toISOString(),
      path: `/blog/${post.slug}`,
      isBlog: true,
    });
  });

  // ── Priority & Change Frequency Assignment ─────────────────────────────
  return allRoutes.map((route) => {
    let priority = 0.6;
    let changeFrequency = "monthly";

    // 1.0 — Homepage
    if (route.path === "" || route.path === "/") {
      priority = 1.0;
      changeFrequency = "daily";
    }
    // 0.95 — Primary money pages (highest commercial intent)
    else if (
      [
        "/anchor-in-jaipur",
        "/best-anchor-in-jaipur",
        "/wedding-anchor-jaipur",
        "/sangeet-anchor-jaipur",
        "/corporate-event-anchor-jaipur",
      ].includes(route.path)
    ) {
      priority = 0.95;
      changeFrequency = "weekly";
    }
    // 0.85 — Secondary service pages and regional hubs
    else if (
      route.path === "/anchor-in-rajasthan" ||
      route.path.includes("rajasthan") ||
      route.path.includes("jaipur") ||
      [
        "/about",
        "/contact",
        "/event-management-jaipur",
        "/wedding-planning-jaipur",
        "/destination-wedding-anchor",
        "/haldi-anchor-jaipur",
        "/mehendi-anchor-jaipur",
      ].includes(route.path)
    ) {
      priority = 0.85;
      changeFrequency = "weekly";
    }
    // 0.75 — Blog listing and portfolio
    else if (["/blog", "/portfolio"].includes(route.path)) {
      priority = 0.75;
      changeFrequency = "weekly";
    }
    // 0.7 — Dynamic blog posts
    else if (route.isBlog) {
      priority = 0.7;
      changeFrequency = "monthly";
    }
    // 0.6 — All other location/niche pages
    else {
      priority = 0.6;
      changeFrequency = "monthly";
    }

    return {
      url: route.url,
      lastModified: route.lastModified,
      changeFrequency,
      priority,
    };
  });
}
