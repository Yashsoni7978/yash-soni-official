import { BLOG_POSTS } from '../data/blogs'; // Adjust this import path if your data folder is somewhere else

export default function sitemap() {
  const baseUrl = 'https://yashsoni.in';

  // --- 1. CORE STATIC ROUTES ---
  // We set the homepage to priority 1.0, and major services to 0.8
  const staticRoutes = [
    '',
    '/about',
    '/anchor-in-jaipur',
    '/artist-management-jaipur',
    '/blog',
    '/celebrity-public-events-host',
    '/contact',
    '/corporate-event-anchor-jaipur',
    '/destination-wedding-anchor',
    '/event-designing',
    '/event-management-jaipur',
    '/event-planning-jaipur',
    '/haldi-anchor-jaipur',
    '/mehendi-anchor-jaipur',
    '/portfolio',
    '/sangeet-anchor-jaipur',
    '/team-building-host',
    '/wedding-anchor-jaipur',
    '/wedding-planning-jaipur'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // --- 2. DYNAMIC LOCATION ROUTES ---
  // Your build showed 6 total location paths. Adjust these 6 cities as needed based on your actual data!
  const destinationCities = ['jaipur', 'udaipur', 'jodhpur', 'jaisalmer', 'pushkar', 'goa']; 
  const locationRoutes = destinationCities.map((city) => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7, // Slightly lower than core service pages
  }));

  // --- 3. DYNAMIC BLOG ROUTES ---
  // This automatically pulls from your blogs.js array so you never have to manually update the sitemap when you write a new blog!
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(), 
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Combine them all and return
  return [...staticRoutes, ...locationRoutes, ...blogRoutes];
}
