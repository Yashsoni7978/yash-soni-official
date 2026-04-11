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
    '/anchor-for-birthday-party-jaipur',
    '/engagement-roka-ceremony-anchor',
    '/award-night-anchor-jaipur',
    '/locations',
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

  // ── TIER 5: Rajasthan City Pages (0.8) ───────────────────
  // High-authority landing pages for Rajasthan's core destination cities.
  const rajasthanLocations = [
    '/anchor-in-udaipur',
    '/anchor-in-jodhpur',
    '/anchor-in-jaisalmer',
    '/anchor-in-pushkar',
    '/anchor-in-alwar',
    '/anchor-in-mount-abu',
    '/anchor-in-mandawa',
    '/anchor-in-ranthambore',
    '/anchor-in-kumbhalgarh',
    '/anchor-in-kota',
    '/anchor-in-bikaner',
    '/anchor-in-bharatpur',
    '/anchor-in-chittorgarh',
  ].map(route => ({
    url: `${BASE}${route}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // ── TIER 6: National City Pages (0.8) ────────────────────
  const nationalLocations = [
    '/anchor-in-agra',
    '/anchor-in-alibaug',
    '/anchor-in-andaman',
    '/anchor-in-bangalore',
    '/anchor-in-chennai',
    '/anchor-in-coorg',
    '/anchor-in-delhi',
    '/anchor-in-dharamshala',
    '/anchor-in-goa',
    '/anchor-in-haridwar',
    '/anchor-in-hyderabad',
    '/anchor-in-kolkata',
    '/anchor-in-manali',
    '/anchor-in-mumbai',
    '/anchor-in-mussoorie',
    '/anchor-in-nainital',
    '/anchor-in-neemrana',
    '/anchor-in-ooty',
    '/anchor-in-rishikesh',
    '/anchor-in-shimla',
    '/anchor-in-varanasi',
  ].map(route => ({
    url: `${BASE}${route}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // ── TIER 7: Blog posts (0.6) ──────────────────────────────
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
    ...rajasthanLocations,
    ...nationalLocations,
    ...blogPages,
  ];

}
