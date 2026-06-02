import fs from 'fs';
import path from 'path';

import { BLOG_POSTS } from '../data/blogs';

/**
 * Technical SEO Architect: Dynamic Sitemap Generator
 * 
 * Logic:
 * 1. Recursively crawls 'app/' directory for static routes.
 * 2. Injects dynamic blog slugs from data/blogs.js.
 * 3. Filters for valid 'page.jsx' or 'page.tsx' files.
 * 4. Excludes api, components, libs, and internal directories.
 * 5. Extracts modification time (mtime) via fs.statSync for <lastmod>.
 * 6. Assigns logical priority based on route depth and keyword significance.
 */

export default function sitemap() {
  const baseUrl = 'https://yashsoni.in';
  const appDir = path.join(process.cwd(), 'app');

  const getRoutes = (dir, routes = []) => {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Exclude specific directories
        if (file === 'api' || file.startsWith('_') || file.startsWith('(') || file === 'lib') {
           // Skip these, but handle Group Routes if they contain pages
           if (file.startsWith('(')) {
             getRoutes(fullPath, routes);
           }
           continue;
        }
        getRoutes(fullPath, routes);
      } else if (file === 'page.jsx' || file === 'page.tsx') {
        // Construct the URL path
        let relativePath = path.relative(appDir, dir).replace(/\\/g, '/');
        
        // Remove group routes from the URL path
        const cleanedPath = relativePath
          .split('/')
          .filter(segment => !segment.startsWith('('))
          .join('/');

        const urlPath = cleanedPath === '' ? '' : `/${cleanedPath}`;
        
        // Explicitly exclude prohibited static routes
        const EXCLUDED_ROUTES = [
          '/privacy', 
          '/terms', 
          '/anchor-in-chandigarh', 
          '/anchor-in-pune',
          '/anchor-in-kishangarh', 
          '/corporate-emcee-jaipur', 
          '/wedding-emcee-jaipur',
          '/blog/[slug]', 
          '/locations/jaipur'
        ];
        if (EXCLUDED_ROUTES.includes(urlPath)) continue;
        
        routes.push({
          url: `${baseUrl}${urlPath}`,
          lastModified: stat.mtime,
          path: urlPath
        });
      }
    }
    return routes;
  };

  const allRoutes = getRoutes(appDir);

  // 1.5 Inject Dynamic Blog Routes
  const EXPECTED_BLOGS = [
    'sangeet-ceremony-planning-guide-jaipur',
    'mehendi-ceremony-planning-jaipur',
    'haldi-ceremony-planning-jaipur',
    'about-yash-soni-anchor-jaipur',
    'jaipur-wedding-costs-budget-2026',
    'udaipur-vs-jaipur-destination-wedding',
    'anchor-charges-jaipur-2026-pricing',
    'jodhpur-destination-wedding-guide',
    'farmhouse-wedding-venues-jaipur',
    'complete-wedding-planning-guide-jaipur',
    'destination-wedding-rajasthan-complete-guide',
    'corporate-annual-day-planning-jaipur',
    'royal-pre-wedding-setup-pushkar-ajmer',
    'top-10-royal-palace-wedding-venues-jaipur',
    'nri-destination-wedding-guide-rajasthan-2026'
  ];

  BLOG_POSTS.forEach(post => {
    if (EXPECTED_BLOGS.includes(post.slug)) {
      allRoutes.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        path: `/blog/${post.slug}`,
        isBlog: true
      });
    }
  });

  return allRoutes.map((route) => {
    // Priority Heuristics
    let priority = 0.6;
    let changeFrequency = 'monthly';

    // 1.0 - Homepage and Master Hubs
    if (route.path === '' || route.path === '/' || route.path === '/anchor-in-jaipur' || route.path === '/best-anchor-in-jaipur' || route.path === '/wedding-anchor-jaipur') {
      priority = 1.0;
      changeFrequency = 'daily';
    } 
    // 0.8 - Regional Hubs / Primary Services
    else if (
      route.path === '/locations' || 
      route.path.includes('rajasthan') || 
      route.path.includes('jaipur') || 
      route.path.includes('hub') ||
      ['/wedding-planning-jaipur', '/corporate-event-management-company', '/event-management-jaipur'].includes(route.path)
    ) {
      priority = 0.8;
      changeFrequency = 'weekly';
    }
    // 0.7 - Dynamic Blog Posts
    else if (route.isBlog) {
      priority = 0.7;
      changeFrequency = 'weekly';
    }
    // 0.6 - Niche locations / Long-tail pages
    else {
      priority = 0.6;
      changeFrequency = 'monthly';
    }

    return {
      url: route.url,
      lastModified: route.lastModified,
      changeFrequency: changeFrequency,
      priority: priority,
    };
  });
}
