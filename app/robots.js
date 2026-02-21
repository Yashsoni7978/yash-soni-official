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
          '/admin/',     // If you have a hidden admin panel
          '/api/',       // Prevents crawling of your backend API routes (except the OG allowed above)
          '/*.json$',    // Prevents crawling of internal data files
        ],
      },
    ],
    sitemap: 'https://yashsoni.in/sitemap.xml', // This perfectly matches the sitemap.js we just created!
  }
}
