// app/sitemap.js
// ─────────────────────────────────────────────────────────────
// Dynamic sitemap — auto-updates when new blog posts are added.
// Served at https://yashsoni.in/sitemap.xml by Next.js.
// ─────────────────────────────────────────────────────────────

import { BLOG_POSTS } from '../data/blogs';

const BASE = 'https://yashsoni.in';
const NOW  = new Date().toISOString();

export default function sitemap() {

  // ── TIER 1: Homepage (1.0) ────────────────────────────────
  const homepage = [
    {
      url: BASE,
      lastModified: NOW,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // ── TIER 2: Money pages (0.9) ─────────────────────────────
  // Pages with direct booking intent — highest crawl priority.
  // /best-anchor-in-jaipur was missing from old sitemap — fixed.
  const moneyPages = [
    '/best-anchor-in-jaipur',
    '/anchor-in-jaipur',
    '/wedding-anchor-jaipur',
    '/sangeet-anchor-jaipur',
    '/haldi-anchor-jaipur',
    '/mehendi-anchor-jaipur',
    '/corporate-event-anchor-jaipur',
    '/destination-wedding-anchor',
  ].map(route => ({
    url: `${BASE}${route}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // ── TIER 3: Brand pages (0.8) ─────────────────────────────
  const brandPages = [
    '/about',
    '/portfolio',
    '/contact',
  ].map(route => ({
    url: `${BASE}${route}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // ── TIER 4: Supporting service pages (0.7) ────────────────
  const supportPages = [
    '/event-management-jaipur',
    '/event-planning-jaipur',
    '/wedding-planning-jaipur',
    '/event-designing',
    '/celebrity-public-events-host',
    '/team-building-host',
    '/artist-management-jaipur',
    '/blog',
  ].map(route => ({
    url: `${BASE}${route}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // ── TIER 5: Location pages (0.7) ──────────────────────────
  const locationPages = [
    'jaipur', 'udaipur', 'jodhpur', 'jaisalmer', 'pushkar', 'goa',
  ].map(city => ({
    url: `${BASE}/locations/${city}`,
    lastModified: NOW,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // ── TIER 6: Blog posts (0.6) ──────────────────────────────
  // Dynamically pulled from blogs.js — new posts appear automatically.
  const blogPages = BLOG_POSTS.map(post => {
    // Convert "March 01, 2026" → proper ISO date for lastModified
    let lastMod = NOW;
    if (post.fullDate) {
      const parsed = new Date(post.fullDate);
      if (!isNaN(parsed.getTime())) lastMod = parsed.toISOString();
    }
    return {
      url: `${BASE}/blog/${post.slug}`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  });

  return [
    ...homepage,
    ...moneyPages,
    ...brandPages,
    ...supportPages,
    ...locationPages,
    ...blogPages,
  ];
}
