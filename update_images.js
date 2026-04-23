const fs = require('fs');
const path = require('path');

const mappings = {
  '/sangeet_hero_1776855109279.png': [
    'sangeet-decoration-jaipur',
    'artist-management-jaipur'
  ],
  '/haldi_hero_1776855126915.png': [
    'haldi-decoration-jaipur'
  ],
  '/corporate_hero_1776855145552.png': [
    'gala-dinner-event-planner',
    'corporate-event-management-company'
  ],
  '/catering_hero_1776855166226.png': [
    'wedding-catering-jaipur'
  ],
  '/destination_hero_1776855183717.png': [
    'destination-wedding-planner-jaipur',
    'wedding-venue-jaipur',
    'luxury-wedding-planner-rajasthan'
  ]
};

const defaultImage = '/ivory_hero_wedding_1776853928413.png';

for (const [newImage, routes] of Object.entries(mappings)) {
  for (const route of routes) {
    const pagePath = path.join(__dirname, 'app', route, 'page.jsx');
    if (fs.existsSync(pagePath)) {
      let content = fs.readFileSync(pagePath, 'utf8');
      // Replace only the first occurrence (which is the Hero image)
      content = content.replace(defaultImage, newImage);
      fs.writeFileSync(pagePath, content);
      console.log(`Updated hero image for ${route}`);
    }
  }
}
console.log('Finished updating specific hero images.');
