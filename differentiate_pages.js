const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\yashs\\Downloads\\yash-soni-official-main\\yash-soni-official-main\\app';

const pages = [
  {
    dir: 'wedding-planning-jaipur',
    title: 'The Art of Royal Unions',
    subtitle: 'Curating the most elite wedding experiences in Rajasthan',
    h1: 'Mastering The Royal Wedding',
    welcome: 'The Jaipur Union',
    preludeH2: 'A wedding in Jaipur is not just an event. It is a legacy written in gold and silk.',
    preludeP: 'As your premier destination wedding planner, we specialize in the Rambagh and Fairmont circuit. We handle every detail from the first petal to the final phera.',
    manifesto: '"A great wedding is not measured by its cost, but by the <span className=\\"text-[#D4AF37]\\">emotions</span> it anchors for a lifetime."',
    timeline: [
      { title: "The Royal Swagat", desc: "Elephant processions and petal showers." },
      { title: "The Vibrant Sangeet", desc: "A night of high-octane performances." },
      { title: "The Sacred Pheras", desc: "A floating mandap under the moonlight." },
      { title: "The Grand Reception", desc: "A black-tie gala in the palace gardens." }
    ]
  },
  {
    dir: 'artist-management-jaipur',
    title: 'The Stage is Your Legacy',
    subtitle: 'Securing global talent for India\'s most prestigious stages',
    h1: 'Mastering Global Performance',
    welcome: 'The Artist Protocol',
    preludeH2: 'The right artist doesn\'t just perform. They transform the very air of your event.',
    preludeP: 'We manage the bridge between global celebrities and your private stage. From Bollywood icons to international symphonies, we handle the contracts, the riders, and the show.',
    manifesto: '"True performance is <span className=\\"text-[#D4AF37]\\">vulnerability</span>. It is the connection between the star and the soul of the room."',
    timeline: [
      { title: "Talent Scouting", desc: "Matching the right energy to your crowd." },
      { title: "Technical Riders", desc: "Zero-compromise audio and hospitality setups." },
      { title: "The Performance", desc: "Seamless coordination and stage management." },
      { title: "The After-Show", desc: "Private meet-and-greets and VIP protocol." }
    ]
  },
  {
    dir: 'corporate-event-management-company',
    title: 'Precision in Every Frame',
    subtitle: 'Defining the corporate standard for India\'s industry leaders',
    h1: 'Engineering Brand Impact',
    welcome: 'The Corporate Standard',
    preludeH2: 'A corporate event is not a party. It is a statement of your brand\'s authority.',
    preludeP: 'We specialize in high-stakes award nights, global summits, and product launches. Precision logistics meets cinematic production to ensure your brand shines.',
    manifesto: '"Leadership is <span className=\\"text-[#D4AF37]\\">clarity</span>. Your event should be the clearest expression of your vision."',
    timeline: [
      { title: "Strategic Planning", desc: "Aligning event goals with brand identity." },
      { title: "Global Summits", desc: "Managing international delegates and VIPs." },
      { title: "Award Ceremonies", desc: "Sharp, timed-to-the-second gala productions." },
      { title: "Product Launches", desc: "Immersive experiences that define markets." }
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
