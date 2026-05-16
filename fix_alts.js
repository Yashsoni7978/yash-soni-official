const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

const cities = [
  "Agra", "Ajmer", "Alibaug", "Alwar", "Andaman", "Bangalore", "Bharatpur", "Bikaner", "Chennai",
  "Chittorgarh", "Coorg", "Delhi", "Dharamshala", "Goa", "Haridwar", "Hyderabad", "Jaipur", "Jaisalmer",
  "Jodhpur", "Kolkata", "Kota", "Kumbhalgarh", "Manali", "Mandawa", "Mount Abu", "Mumbai", "Mussoorie",
  "Nainital", "Neemrana", "Ooty", "Pushkar", "Rajasthan", "Ranthambore", "Rishikesh", "Shimla", "Udaipur", "Varanasi"
];

cities.forEach(city => {
  const slug = `anchor-in-${city.toLowerCase().replace(/ /g, '-')}`;
  const filePath = path.join(appDir, slug, 'page.jsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Look for <Image ... alt="" ... /> or <Image ... alt="background" ... /> etc.
    // In the location templates, there's usually a hero image.
    // Let's replace any <Image ... alt="[something generic]" or without alt
    // Wait, the template usually has `alt="Background texture"` or `alt="Hero Background"` or `alt=""`
    
    // Replace empty alt="" with the descriptive one
    const action = "hosting a luxury event";
    const newAlt = `Anchor Yash Soni ${action} in ${city}`;
    
    content = content.replace(/alt=(["'])(?:Background texture|Hero Background|Yash Soni Anchor|)[^\1]*\1/i, `alt="${newAlt}"`);
    content = content.replace(/alt={""}/g, `alt="${newAlt}"`);
    content = content.replace(/alt=""/g, `alt="${newAlt}"`);

    // If there's an image without alt entirely:
    // This regex is tricky, let's just do a basic string replacement if we know the exact string.
    // The previous audit script found images without alt.

    // Better regex for next/image without alt:
    // It's safer to just let the above simple replaces run. Let's see if we can find <Image without alt.
    content = content.replace(/<Image([^>]*?)(?<!alt=(?:\{".*?"\}|".*?"|'.*?'))(?<!alt=[^\s>]+)(\s*\/?>)/gi, `<Image alt="${newAlt}"$1$2`);

    fs.writeFileSync(filePath, content);
  }
});

console.log('Finished updating alt tags for location pages.');
