import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://yashsoni.in';

// Pages to exclude from sitemap (no-index, API routes, internal components, etc.)
const EXCLUDE = ['api', '_components', 'locations', 'favicon.ico', 'icon.png', 'apple-icon.png', 'opengraph-image.png', 'twitter-image.png', 'robots.txt'];

function getRoutes(dir, base = '') {
  const routes = [];
  if (!fs.existsSync(dir)) return routes;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (EXCLUDE.includes(entry.name)) continue;
    if (entry.name.startsWith('(')) continue; // route groups
    if (entry.name.startsWith('[')) continue; // dynamic routes handled separately

    const routePath = `${base}/${entry.name}`;
    const pagePath = path.join(dir, entry.name, 'page.jsx');
    const pageTsx  = path.join(dir, entry.name, 'page.tsx');

    if (fs.existsSync(pagePath) || fs.existsSync(pageTsx)) {
      routes.push(routePath);
    }
    
    // Recursive scan for nested routes
    routes.push(...getRoutes(path.join(dir, entry.name), routePath));
  }
  return routes;
}

// SEO Priority Scoring Logic
function getPriority(route) {
  if (route === '/') return '1.0';
  if (route.includes('anchor-in-rajasthan')) return '1.0';
  if (route.includes('anchor-in-jaipur'))    return '0.9';
  if (route.startsWith('/anchor-in-'))       return '0.9';
  if (route.startsWith('/blog/'))            return '0.6';
  return '0.8';
}

export default function sitemap() {
  const appDir = path.join(process.cwd(), 'app');
  const staticRoutes = getRoutes(appDir);

  // Pull blog slugs from data file
  const { BLOG_POSTS } = require('../data/blogs.js');
  const blogRoutes = BLOG_POSTS.map(b => `/blog/${b.slug}`);

  const allRoutes = ['/', ...staticRoutes, ...blogRoutes];

  return [...new Set(allRoutes)].map(route => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '/' ? 'daily' : 'weekly',
    priority: getPriority(route),
  }));
}
