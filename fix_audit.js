const fs = require('fs');

// Fix Layout Pixel ID
let layout = fs.readFileSync('app/layout.tsx', 'utf8');
layout = layout.replace(/'YOUR_ACTUAL_PIXEL_ID'/g, "''");
fs.writeFileSync('app/layout.tsx', layout, 'utf8');

// Check schema in anchor-in-jaipur
let anchorClient = fs.readFileSync('app/anchor-in-jaipur/PageClient.jsx', 'utf8');
if (anchorClient.includes('application/ld+json')) {
  // Try to remove it
  anchorClient = anchorClient.replace(/<script\s+type=[\"']application\/ld\+json[\"'][\s\S]*?<\/script>/g, '');
  fs.writeFileSync('app/anchor-in-jaipur/PageClient.jsx', anchorClient, 'utf8');
}

// Check where generic blog desc is
const dataDir = 'data';
fs.readdirSync(dataDir).forEach(f => {
  if (f.endsWith('.js') || f.endsWith('.jsx')) {
    let content = fs.readFileSync('data/' + f, 'utf8');
    if (content.includes('Read the latest insights on')) {
      console.log('Found generic desc in data/' + f);
      // Let's replace it with a generic safe one if found, or just print it.
      // Wait, there might be one in blogs.js I missed? Let's check it manually.
    }
  }
});

// Check sitemap.js for anchor-in-jaipur priority
let sitemap = fs.readFileSync('app/sitemap.js', 'utf8');
console.log('Does sitemap have anchor-in-jaipur priority?', sitemap.includes('/anchor-in-jaipur') && sitemap.includes('1.0'));
