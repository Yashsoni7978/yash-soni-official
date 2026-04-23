const fs = require('fs');
const path = require('path');

const pages = [
  {
    route: "wedding-planning-jaipur",
    component: "WeddingPlanningJaipur",
    title: "Luxury Wedding Planner in Jaipur",
    keyword: "Best luxury wedding planner in Jaipur",
    headline: "Mastering The Royal Wedding",
    subheadline: "Curating elite wedding experiences in Jaipur",
    desc: "Hire the best luxury wedding planner in Jaipur. Anchor Yash Soni and team organize flawless destination weddings across Rajasthan's finest heritage venues."
  },
  {
    route: "event-planning-jaipur",
    component: "EventPlanningJaipur",
    title: "Top Event Planning Company in Jaipur",
    keyword: "Event Planning Company Jaipur",
    headline: "Architects of Elegance",
    subheadline: "The premier event planning company in Jaipur",
    desc: "Jaipur's top event planning company. We execute high-end corporate events, private galas, and VIP celebrations across Rajasthan with unmatched precision."
  },
  {
    route: "event-management-jaipur",
    component: "EventManagementJaipur",
    title: "Best Event Management Company in Jaipur",
    keyword: "Event Management Company Jaipur",
    headline: "Flawless Event Execution",
    subheadline: "End-to-end event management in Jaipur",
    desc: "The best event management company in Jaipur. Specializing in VIP protocol, massive corporate summits, and luxury event production."
  },
  {
    route: "event-designing",
    component: "EventDesigning",
    title: "Luxury Event Designing & Decor in Jaipur",
    keyword: "Wedding Decoration Design Jaipur",
    headline: "Bespoke Spatial Art",
    subheadline: "Luxury wedding and event design in Jaipur",
    desc: "Immersive event designing and luxury decor in Jaipur. We transform palaces and massive spaces into breathtaking visual masterpieces."
  },
  {
    route: "artist-management-jaipur",
    component: "ArtistManagementJaipur",
    title: "Celebrity & Artist Management Agency Jaipur",
    keyword: "Artist Management Agency Jaipur",
    headline: "Curating Global Talent",
    subheadline: "Premium artist and celebrity management",
    desc: "Jaipur's leading artist management agency. We secure A-list celebrities, global performers, and elite live bands for luxury weddings and corporate galas."
  },
  {
    route: "luxury-wedding-planner-rajasthan",
    component: "LuxuryWeddingPlannerRajasthan",
    title: "Luxury Wedding Planner in Rajasthan",
    keyword: "Luxury Wedding Planner Rajasthan",
    headline: "The Kings of Rajasthan",
    subheadline: "Executing royal weddings across the desert state",
    desc: "The ultimate luxury wedding planner in Rajasthan. We curate majestic destination weddings in Udaipur, Jodhpur, Jaisalmer, and Jaipur."
  },
  {
    route: "wedding-decoration-jaipur",
    component: "WeddingDecorationJaipur",
    title: "Premium Wedding Decoration in Jaipur",
    keyword: "Wedding Decoration Jaipur",
    headline: "The Floral Symphony",
    subheadline: "Bespoke luxury wedding decoration in Jaipur",
    desc: "Transform your big day with the best wedding decoration in Jaipur. Specializing in floral mandaps, crystal stages, and ivory aesthetic designs."
  },
  {
    route: "sangeet-decoration-jaipur",
    component: "SangeetDecorationJaipur",
    title: "Sangeet Decoration & Stage Design Jaipur",
    keyword: "Sangeet Decoration Jaipur",
    headline: "The Sangeet Spectacle",
    subheadline: "High-octane Sangeet stage design & decoration",
    desc: "Mind-blowing Sangeet decoration in Jaipur. We design massive crystal stages, dynamic lighting arrays, and mirror-work setups for elite celebrations."
  },
  {
    route: "wedding-catering-jaipur",
    component: "WeddingCateringJaipur",
    title: "Luxury Wedding Catering Services in Jaipur",
    keyword: "Wedding Catering Jaipur",
    headline: "Culinary Masterpieces",
    subheadline: "Elite wedding catering and mixology",
    desc: "Premium luxury wedding catering in Jaipur. We curate global menus, molecular mixology, and royal Rajasthani feasts for HNI weddings."
  },
  {
    route: "destination-wedding-planner-jaipur",
    component: "DestinationWeddingPlannerJaipur",
    title: "Destination Wedding Planner in Jaipur",
    keyword: "Destination Wedding Planner Jaipur",
    headline: "Your Royal Destination",
    subheadline: "The finest destination wedding planner in Jaipur",
    desc: "Plan the perfect destination wedding in Jaipur. We handle heritage venue booking, guest logistics, and complete white-glove event production."
  },
  {
    route: "gala-dinner-event-planner",
    component: "GalaDinnerEventPlanner",
    title: "Gala Dinner Event Planner in Jaipur",
    keyword: "Gala Dinner Event Planner Jaipur",
    headline: "The Elite Gala",
    subheadline: "Curating high-end corporate gala dinners",
    desc: "The best gala dinner event planner in Jaipur. We design and execute sophisticated corporate dinners and VIP networking events."
  },
  {
    route: "corporate-event-management-company",
    component: "CorporateEventManagementCompany",
    title: "Corporate Event Management Company in Jaipur",
    keyword: "Corporate Event Management Jaipur",
    headline: "Corporate Precision",
    subheadline: "India's premier corporate event management",
    desc: "Leading corporate event management company in Jaipur. Handling summits, massive award nights, and international dealer meets."
  },
  {
    route: "haldi-decoration-jaipur",
    component: "HaldiDecorationJaipur",
    title: "Haldi Decoration Services in Jaipur",
    keyword: "Haldi Decoration Jaipur",
    headline: "The Haldi Canvas",
    subheadline: "Vibrant and aesthetic Haldi decoration",
    desc: "Beautiful Haldi decoration in Jaipur. We specialize in marigold themes, sun-kissed courtyards, and interactive floral setups."
  },
  {
    route: "wedding-venue-jaipur",
    component: "WeddingVenueJaipur",
    title: "Luxury Wedding Venues in Jaipur | Guide",
    keyword: "Wedding Venue Jaipur Guide",
    headline: "Unlocking The Palaces",
    subheadline: "Exclusive access to Jaipur's heritage venues",
    desc: "Find the ultimate luxury wedding venue in Jaipur. We provide exclusive access to Rambagh Palace, Fairmont, Taj Amer, and historic forts."
  },
  {
    route: "theme-wedding-organizer-india",
    component: "ThemeWeddingOrganizerIndia",
    title: "Theme Wedding Organizer in India",
    keyword: "Theme Wedding Organizer India",
    headline: "Immersive Themes",
    subheadline: "The top theme wedding organizer in India",
    desc: "India's premier theme wedding organizer. From vintage royal to modern minimalist, we bring your exact aesthetic vision to life."
  }
];

const templatePath = path.join(__dirname, 'app', 'demo123', 'page.jsx');
let templateContent = fs.readFileSync(templatePath, 'utf8');

pages.forEach(page => {
  const targetDir = path.join(__dirname, 'app', page.route);
  
  // Ensure directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 1. Prepare customized page.jsx
  let customizedPage = templateContent;
  
  // Replace component name
  customizedPage = customizedPage.replace(
    /export default function LuxuryEventPlanningJaipur/g,
    `export default function ${page.component}`
  );
  
  // Replace Headline
  customizedPage = customizedPage.replace(
    /Execute The Impossible/g,
    page.headline
  );
  
  // Replace Subheadline
  customizedPage = customizedPage.replace(
    /Curating royal experiences across Rajasthan/g,
    page.subheadline
  );
  
  // Replace Footer SEO text
  customizedPage = customizedPage.replace(
    /Anchor Yash Soni is widely recognized as the best luxury event planner in Jaipur, Rajasthan\..*?unparalleled\./g,
    page.desc + " " + page.keyword + " execution managed by Anchor Yash Soni across Rambagh Palace, Fairmont, and elite destinations."
  );

  fs.writeFileSync(path.join(targetDir, 'page.jsx'), customizedPage);

  // 2. Prepare layout.jsx
  const layoutContent = `
export const metadata = {
  title: "${page.title} | Anchor Yash Soni",
  description: "${page.desc}",
  alternates: {
    canonical: "https://yashsoni.in/${page.route}",
  },
  openGraph: {
    title: "${page.title} | Anchor Yash Soni",
    description: "${page.desc}",
    url: "https://yashsoni.in/${page.route}",
  }
};

export default function Layout({ children }) {
  return children;
}
`;

  fs.writeFileSync(path.join(targetDir, 'layout.jsx'), layoutContent);
  
  console.log(`Successfully generated: ${page.route}`);
});

console.log("All 15 pages and layouts have been perfectly generated.");
