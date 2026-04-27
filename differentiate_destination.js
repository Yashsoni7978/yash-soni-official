const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\yashs\\Downloads\\yash-soni-official-main\\yash-soni-official-main\\app';

const pages = [
  {
    dir: 'destination-wedding-planner-jaipur',
    title: 'The Royal Escape',
    subtitle: 'Crafting legendary destination weddings in India\'s most iconic palaces',
    h1: 'The Destination Authority',
    welcome: 'The Global Union',
    preludeH2: 'A destination wedding is a journey. We are your compass through the sands of Rajasthan.',
    preludeP: 'From the blue streets of Jodhpur to the golden dunes of Jaisalmer, we orchestrate multi-day celebrations that merge heritage with global luxury. No logistics too complex, no vision too grand.',
    manifesto: '"Distance is an <span className=\\"text-[#D4AF37]\\">opportunity</span>. It is the chance to host your family in a world entirely of your own making."',
    timeline: [
      { title: "Venue Acquisition", desc: "Securing the desert's most exclusive heritage forts." },
      { title: "Guest Logistics", desc: "Seamless private charter and luxury fleet management." },
      { title: "Cultural Immersion", desc: "Authentic local experiences meets global protocol." },
      { title: "The Grand Finale", desc: "A world-class production in a historic setting." }
    ]
  }
];

pages.forEach(p => {
  const filePath = path.join(baseDir, p.dir, 'page.jsx');
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace H1
  content = content.replace(/<h1 className="font-\['Runiga'\][^>]*>[\s\S]*?<\/h1>/, '<h1 className="font-[\'Runiga\'] text-5xl md:text-7xl lg:text-[100px] leading-[0.85] text-[#1A1A1A] mb-8">' + p.h1 + '</h1>');
  
  // Replace Hero Subtitle
  content = content.replace(/<p className="font-\['Amandine'\][^>]*>[\s\S]*?<\/p>/, '<p className="font-[\'Amandine\'] text-3xl md:text-5xl text-[#D4AF37] mb-10">' + p.subtitle + '</p>');

  // Replace Prelude H2
  content = content.replace(/<h2 className="font-\['The_Seasons'\] text-4xl md:text-6xl text-\[#1A1A1A\][^>]*>[\s\S]*?<\/h2>/, '<h2 className="font-[\'The_Seasons\'] text-4xl md:text-6xl text-[#1A1A1A] leading-tight mb-10">' + p.preludeH2 + '</h2>');

  // Replace Prelude P
  content = content.replace(/<p className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed">[\s\S]*?<\/p>/, '<p className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed">' + p.preludeP + '</p>');

  // Replace Manifesto
  content = content.replace(/<p className="font-\['Kugile_Regular'\][^>]*>[\s\S]*?<\/p>/, '<p className="font-[\'Kugile_Regular\'] text-5xl md:text-7xl lg:text-[90px] leading-[1.1] text-[#1A1A1A]">' + p.manifesto + '</p>');

  // Replace Timeline items (Section 9)
  const timelineRegex = /\[\s*{\s*title:\s*"The Welcome"[\s\S]*?}\s*\]/;
  const newTimelineStr = '[\n' + p.timeline.map((t, i) => {
    const img = i === 0 ? '"/ivory_vintage_car_1776854011319.webp"' : i === 1 ? '"/ivory_palace_venue_1776853964418.webp"' : i === 2 ? '"/ivory_sangeet_stage_1776854029383.webp"' : '"/ivory_hero_wedding_1776853928413.webp"';
    return '            { title: "' + t.title + '", desc: "' + t.desc + '", img: ' + img + ' }';
  }).join(',\n') + '\n          ]';
  
  content = content.replace(timelineRegex, newTimelineStr);

  fs.writeFileSync(filePath, content);
  console.log('Updated ' + p.dir);
});
