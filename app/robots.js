export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/', 
          '/api/og', // Allows crawlers to see your Open Graph images for social previews
        ],
        disallow: [
          '/private/',
          '/_next/',     // Prevents crawling of internal Next.js build files
          '/admin/',     // If you have a hidden admin panel
          '/api/',       // Prevents crawling of your backend API routes
          '/*.json$',    // Prevents crawling of internal data files
        ],
      },
    ],
    sitemap: 'https://yashsoni.in/sitemap.xml',
  }
}
