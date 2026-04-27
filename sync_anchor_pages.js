const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file === 'page.jsx' && fullPath.includes('anchor-in-')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const cityName = path.basename(path.dirname(fullPath)).replace('anchor-in-', '');
      
      console.log(`Processing: ${cityName}`);

      // 1. Fix Texture
      const textureRegex = /backgroundImage:\s*["']url\('\/texture\/.*\.webp'\)["']/g;
      const newTexture = `backgroundImage: "url('/texture/${cityName}.webp')"`;
      content = content.replace(textureRegex, newTexture);

      // 2. Add Schema if missing (simplified check)
      if (!content.includes('LocalBusiness')) {
        const schemaInjection = `
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Anchor Yash Soni",
  "image": "https://yashsoni.in/og-image.webp",
  "@id": "https://yashsoni.in/#organization",
  "url": "https://yashsoni.in",
  "telephone": "+917737877978",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vaishali Nagar",
    "addressLocality": "Jaipur",
    "postalCode": "302021",
    "addressRegion": "RJ",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.9124,
    "longitude": 75.7873
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.instagram.com/anchoryashsoni",
    "https://www.facebook.com/anchoryashsoni"
  ]
};`;
        content = content.replace('const faqSchema', schemaInjection + '\nconst faqSchema');
        content = content.replace('JSON.stringify(faqSchema)', 'JSON.stringify([faqSchema, localBusinessSchema])');
      }

      fs.writeFileSync(fullPath, content);
      console.log(`✅ Fixed: ${cityName}`);
    }
  });
};

walk(path.join(process.cwd(), 'app'));
console.log('✨ All anchor pages synchronized and optimized!');
