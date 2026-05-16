const fs = require('fs');
const path = require('path');

const VALID_ROUTES = new Set([
  '/', '/about', '/portfolio', '/locations', '/contact', '/privacy', '/terms', '/press',
  '/corporate-event-anchor-jaipur', '/wedding-anchor-jaipur', '/anchor-in-rajasthan',
  '/anchor-in-jaipur', '/blog', '/event-management-jaipur', '/event-designing',
  '/wedding-planning-jaipur', '/artist-management-jaipur', '/corporate-event-management-company',
  '/destination-wedding-planner-jaipur', '/gala-dinner-event-planner', '/theme-wedding-organizer-india',
  '/best-anchor-in-jaipur', '/anchor-for-birthday-party-jaipur', '/celebrity-public-events-host',
  '/destination-wedding-anchor', '/engagement-roka-ceremony-anchor', '/haldi-anchor-jaipur',
  '/mehendi-anchor-jaipur', '/sangeet-anchor-jaipur', '/team-building-host', '/award-night-anchor-jaipur',
  '/wedding-venue-jaipur', '/wedding-decoration-jaipur', '/wedding-catering-jaipur', '/sangeet-decoration-jaipur', '/haldi-decoration-jaipur', '/event-planning-jaipur',
  '/anchor-in-agra', '/anchor-in-ajmer', '/anchor-in-alibaug', '/anchor-in-alwar', '/anchor-in-andaman', '/anchor-in-bangalore', '/anchor-in-bharatpur', '/anchor-in-bikaner', '/anchor-in-chennai', '/anchor-in-chittorgarh', '/anchor-in-coorg', '/anchor-in-delhi', '/anchor-in-dharamshala', '/anchor-in-goa', '/anchor-in-haridwar', '/anchor-in-hyderabad', '/anchor-in-jaisalmer', '/anchor-in-jodhpur', '/anchor-in-kolkata', '/anchor-in-kota', '/anchor-in-kumbhalgarh', '/anchor-in-manali', '/anchor-in-mandawa', '/anchor-in-mount-abu', '/anchor-in-mumbai', '/anchor-in-mussoorie', '/anchor-in-nainital', '/anchor-in-neemrana', '/anchor-in-ooty', '/anchor-in-pushkar', '/anchor-in-ranthambore', '/anchor-in-rishikesh', '/anchor-in-shimla', '/anchor-in-udaipur', '/anchor-in-varanasi'
]);

const BLOG_SLUGS = [
  "sangeet-ceremony-planning-guide-jaipur",
  "mehendi-ceremony-planning-jaipur",
  "haldi-ceremony-planning-jaipur",
  "about-yash-soni-anchor-jaipur",
  "jaipur-wedding-costs-budget-2026",
  "udaipur-vs-jaipur-destination-wedding",
  "anchor-charges-jaipur-2026-pricing",
  "wedding-anchor-cost-rajasthan",
  "how-to-hire-wedding-anchor-india",
  "anchor-vs-event-manager",
  "royal-wedding-venues-jaipur",
  "destination-wedding-udaipur-lakeside",
  "jodhpur-umaid-bhawan-wedding",
  "jaisalmer-desert-wedding-guide",
  "budget-destination-wedding-rajasthan",
  "anchor-script-sangeet-ceremony",
  "wedding-games-for-guests",
  "haldi-ceremony-games-ideas",
  "mehendi-ceremony-interactive-games",
  "couple-entry-ideas-wedding",
  "corporate-event-anchor-script",
  "team-building-activities-corporate",
  "award-ceremony-host-tips",
  "product-launch-event-ideas",
  "gala-dinner-entertainment",
  "event-management-company-jaipur-guide",
  "how-to-plan-corporate-retreat",
  "wedding-planner-jaipur-cost",
  "event-decoration-trends-2026",
  "artist-management-agency-india"
];

BLOG_SLUGS.forEach(slug => VALID_ROUTES.add(`/blog/${slug}`));

const fileTypes = ['.js', '.jsx', '.ts', '.tsx', '.md'];
function walk(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      if (!['node_modules', '.next', '.git', 'public'].includes(file)) {
        walk(filepath, filelist);
      }
    } else if (fileTypes.some(ext => file.endsWith(ext))) {
      filelist.push(filepath);
    }
  }
  return filelist;
}

const filesToCheck = walk(__dirname);

let brokenLinks = [];
let totalLinks = 0;

filesToCheck.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Match standard href
  const hrefMatch = content.match(/href=["']([^"']+)["']/g) || [];
  // Match markdown links: [text](link)
  const mdMatch = content.match(/\[[^\]]+\]\(([^)]+)\)/g) || [];
  
  const allMatches = [...hrefMatch.map(h => h.slice(6, -1)), ...mdMatch.map(m => m.match(/\(([^)]+)\)/)[1])];
  
  allMatches.forEach(url => {
    // Ignore external, email, tel, anchor, javascript
    if (url.startsWith('http') && !url.includes('yashsoni.in')) return;
    if (url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('javascript:')) return;
    
    totalLinks++;

    let cleanUrl = url;
    if (cleanUrl.includes('yashsoni.in')) {
      cleanUrl = cleanUrl.split('yashsoni.in')[1];
      if (!cleanUrl) cleanUrl = '/';
    }
    cleanUrl = cleanUrl.split('?')[0].split('#')[0];
    if (cleanUrl !== '/' && cleanUrl.endsWith('/')) cleanUrl = cleanUrl.slice(0, -1);
    
    if (!VALID_ROUTES.has(cleanUrl)) {
      brokenLinks.push({ file: path.relative(__dirname, file), url: cleanUrl, originalUrl: url });
    }
  });
});

console.log(`Scanned ${totalLinks} links.`);
console.log(`Found ${brokenLinks.length} broken links.`);

if (brokenLinks.length > 0) {
  fs.writeFileSync('broken_links_report.json', JSON.stringify(brokenLinks, null, 2));
  console.log('Saved to broken_links_report.json');
}
