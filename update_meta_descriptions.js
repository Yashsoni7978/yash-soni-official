const fs = require('fs');
const path = require('path');

const BOILERPLATE = `1,100+ Premium Events Hosted \u2022 Elite Heritage Venues \u2022 Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end\u2011to\u2011end.`;

const UPDATES = {
  'app/artist-management-jaipur/layout.jsx': 'End-to-end artist booking and management in Jaipur. Yash Soni Studio handles talent sourcing, coordination and performance delivery for premium events.',
  'app/corporate-event-management-company/layout.jsx': "Yash Soni Studio — Jaipur's premium corporate event management company. Award nights, product launches and summits executed flawlessly across Jaipur & Rajasthan.",
  'app/destination-wedding-planner-jaipur/layout.jsx': "Planning a destination wedding in Jaipur? Yash Soni delivers full-service destination wedding planning across Rajasthan's palace and heritage venues.",
  'app/event-designing/layout.jsx': 'Luxury 3D event designing and decor planning in Jaipur by Yash Soni Studio. Conceptual design to on-ground execution for weddings and corporate events.',
  'app/event-management-jaipur/layout.jsx': 'Premium event management in Jaipur by Yash Soni Studio. End-to-end planning, coordination and execution for weddings, corporate events and galas across Rajasthan.',
  'app/gala-dinner-event-planner/layout.jsx': "Jaipur's finest gala dinner event planner. Yash Soni Studio creates high-end gala experiences with flawless coordination, luxury decor and seamless execution.",
  'app/theme-wedding-organizer-india/layout.jsx': "India's premium theme wedding organizer. Yash Soni Studio conceptualizes and executes breathtaking themed weddings across Rajasthan and beyond.",
  'app/wedding-planning-jaipur/layout.jsx': 'Luxury wedding planning in Jaipur by Yash Soni Studio. From intimate ceremonies to grand palace weddings — full-service planning with zero compromise.',
};

let updated = 0;
for (const [relPath, newDesc] of Object.entries(UPDATES)) {
  const filePath = path.join(__dirname, relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`NOT FOUND: ${relPath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the description field in the top-level metadata object
  // Match the line that contains the boilerplate description string
  const oldDescRegex = /description:\s*["']([^"'\n]+1,100\+[^"'\n]*)["'],?/;
  if (oldDescRegex.test(content)) {
    content = content.replace(oldDescRegex, `description: "${newDesc}",`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${relPath}`);
    updated++;
  } else {
    // Try alternative: description is split across lines using the first description: occurrence
    const lines = content.split('\n');
    let found = false;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('description:') && (lines[i].includes('1,100+') || (lines[i+1] && lines[i+1].includes('1,100+')))) {
        lines[i] = `  description: "${newDesc}",`;
        found = true;
        break;
      }
    }
    if (found) {
      fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
      console.log(`Updated (fallback): ${relPath}`);
      updated++;
    } else {
      console.log(`NO MATCH FOUND in: ${relPath}`);
      // Show a snippet of the current description
      const descMatch = content.match(/description:\s*["']([^"']+)["'],?/);
      if (descMatch) console.log(`  Current: ${descMatch[1].substring(0, 80)}...`);
    }
  }
}
console.log(`\nDone. Updated ${updated}/${Object.keys(UPDATES).length} files.`);
