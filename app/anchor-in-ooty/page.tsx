import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-ooty/layout.jsx
// Ultra-Luxury Heritage Hill Destination Anchor Layout

const CITY     = "Ooty";
const REGION   = "Tamil Nadu";
const SLUG     = "anchor-in-ooty";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "11.4102";
const LNG      = "76.6950";
const OG_IMAGE = `https://${DOMAIN}/rose-petal-tree-background.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Ooty",
    "Best Wedding Anchor Ooty",
    "Ooty Destination Wedding Emcee",
    "Savoy Ooty Wedding Anchor",
    "Ferrnhills Royale Palace Emcee",
    "Nilgiris Luxury Wedding Anchor",
    "Bilingual Emcee Ooty",
    "Tea Estate Destination Wedding Host",
    "Corporate Retreat Anchor Ooty",
    "Bangalore Elite Wedding Host Ooty",
  ],
  description: `700+ Premium Shows Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
  url: FULL_URL,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  priceRange: "₹₹₹₹",
  image: OG_IMAGE,
  logo: `https://${DOMAIN}/logo.webp`,
  sameAs: [
    "https://www.instagram.com/yashsoni_official",
    "https://www.youtube.com/@anchorYashSoni",
    "https://g.co/kgs/anchoryashsoni",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nilgiri Heritage Corridor",
    addressLocality: CITY,
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
    postalCode: "643001",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: LAT,
    longitude: LNG,
  },
  hasMap: `https://maps.google.com/?q=${LAT},${LNG}`,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+917737877978",
    contactType: "booking",
    availableLanguage: ["Hindi","English", "Tamil"],
    contactOption: "TollFree",
  },
  areaServed: [
    { "@type": "City", name: "Ooty" },
    { "@type": "City", name: "Coonoor" },
    { "@type": "City", name: "Coimbatore" },
    { "@type": "AdministrativeArea", name: "Tamil Nadu" },
    { "@type": "Country", name: "India" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "NRI Destination Wedding — USA" },
      reviewBody: "Hosting a colonial-themed wedding at Ferrnhills Royale Palace meant we needed someone with absolute poise and flawless English. Yash was the perfect choice. He managed the global guest list with incredible unscripted wit and authority.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Corporate Summit — Bangalore" },
      reviewBody: "We held a leadership retreat at Savoy. Yash moderated our gala evening with pure executive class. He is much more than a wedding anchor; he is a sophisticated moderator who understands corporate pedigree.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Ooty",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Savoy Heritage Hosting", description: "Executing highly prestigious, VIP-heavy events navigating Ooty's historical and colonial-era luxury logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tea Estate Sangeet Execution", description: "Bilingual English/Hindi bridging for high-net-worth families looking for a sophisticated mountain vibe" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nilgiri Acoustic Mastery", description: "Defeating massive outdoor sound dispersion in sprawling mountain estates through intense stage command" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Leadership Offsite Moderation", description: "Unscripted, zero-notes hosting for high-stakes Bangalore tech summits and private MNC retreats" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Ooty Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 4+ years and 700+ shows. Specialist in Ooty's heritage luxury sector, executing flawless ceremonies at Savoy and Ferrnhills Royale Palace.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Savoy Ooty Protocol",
    "Heritage Hotel Logistics",
    "Mountain Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "NRI & Bangalore Elite Crowds",
    "Colonial Heritage Wedding Flow",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Anchor Yash Soni Events",
    url: `https://${DOMAIN}`,
  },
};

// ─── 3. BREADCRUMB SCHEMA ─────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: `Best Anchor in ${CITY}`, item: FULL_URL },
  ],
};

// ─── 4. WEBPAGE SCHEMA ────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://yashsoni.in/anchor-in-ooty/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Ooty | Savoy & Ferrnhills Emcee — Yash Soni`,
  headline: `Ooty's Premier Event Anchor for Ultra-Luxury Colonial Heritage Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Ooty destination weddings. Mastering prestigious properties like Savoy and Ferrnhills Royale Palace with unscripted VIP executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Tamil Nadu` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Ooty | Luxury Colonial Heritage Wedding Emcee`,
  description: `Looking for the best anchor in Ooty? Anchor Yash Soni — 4.9★. Expert for Savoy (IHCL), Ferrnhills Royale Palace, and ultra-prestigious tea estate weddings. Flawless unscripted bilingual hosting for VIP events.`,
  keywords: [
    "anchor in ooty",
    "best anchor in ooty",
    "wedding anchor ooty",
    "savoy ooty event host",
    "ferrnhills royale palace anchor",
    "nilgiris destination wedding anchor",
    "bilingual english hindi anchor ooty",
    "luxury event emcee tamil nadu",
    "bangalore wedding host ooty",
    "tea estate destination anchor",
    "cultural heritage host ooty",
    "anchor yash",
    "anchor yash soni",
  ],
  alternates: { canonical: FULL_URL },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: FULL_URL,
    siteName: "Anchor Yash Soni",
    title: `Best Anchor in Ooty | Elite Colonial Heritage Destination Wedding Host`,
    description: `4.9★ rated. Ooty's premium anchor for highly prestigious destination weddings spanning the Nilgiri heritage corridors. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Ooty — Anchor Yash Soni at Nilgiri Heritage Properties` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Ooty | Anchor Yash Soni — 4.9★`,
    description: `Savoy Ooty. Ferrnhills Royale Palace. Ooty's premier bilingual event anchor for exclusive VIP Sangeets and heavily restricted mountain VIP ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Ooty | Nilgiri VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, VIP Events, ${CITY}, Tamil Nadu, India`,
    "DC.coverage": `${CITY}, Tamil Nadu, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────


const FAQS = [
  {
    q: "How do you handle outdoor weddings in Ooty when the Nilgiri mist and cold roll in at sunset?",
    a: "This is the cardinal rule of high-altitude hosting. The second the sun sets over the tea gardens, the crowd wants to retreat. A basic DJ setup cannot counter this psychology. I utilize 'Temperature Compression'—speeding up the entire timeline aggressively, plunging into the crowd physically, and detonating a massive dancing session before the cold forces families indoors."
  },
  {
    q: "Our Bangalore guest list is incredibly sophisticated—tech founders and corporate VIPs. Can you match this tone?",
    a: "Completely. Elite heritage properties like Savoy do not need a loud, shouting 'hype man'. They require an Executive Moderator. I deliberately drop standard, childish 'wedding gimmicks'. I host with formal, razor-sharp, unscripted English that respects the pedigree of the VIPs, perfectly bridging high-level networking with eventual massive celebration."
  },
  {
    q: "The properties here are heritage sites with strict noise and acoustic rules. How do you adapt?",
    a: "I execute 'Acoustic Precision'. In locations like Coonoor or Ooty, I am extremely mindful of property decibel limits during the Day. I host conversationally. However, when the Sangeet begins, I use 'Crowd Condensing'—physically pulling the guests towards the core stage area to generate massive perceived energy without needing to volume-blast the whole mountain."
  },
  {
    q: "Do you use teleprompters or scripts during these complex multi-day Ooty itineraries?",
    a: "Never. Reading from a clipboard instantly kills raw party energy. It breaks your eye contact, and the high-net-worth audience realizes you are not in command. I memorize the family lineages, the corporate tensions, and the full timeline, enabling me to host 100% unscripted and dictate the absolute flow of the room."
  },
  {
    q: "What if the mountain weather forces us to suddenly move our event from the lawns into the ballrooms?",
    a: "Himalayan and Nilgiri weather systems are volatile. If rain forces us to rip down an outdoor setup and compress an sprawling Sangeet into an indoor banquet hall dynamically, I operate with zero panic. Because I am purely unscripted, I instantly recalibrate the pacing, compress the performances on the fly, and reconstruct the hype natively indoors."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Ooty?",
    a: "Travel to Ooty (via Coimbatore Airport or the highway) is completely streamlined. I am constantly active across the South India luxury wedding circuit (Bangalore/Chennai/Ooty/Coorg), so there are zero hidden logistical risks. All exact requirements are calculated and provided instantly when blocking dates."
  },
  {
    q: "When should we freeze your dates for a Nilgiri heritage event?",
    a: "Ooty’s premium destination windows (especially for Savoy and Ferrnhills) vanish over 12 months in advance for big weekends. Lock my dates the instant your luxury venue contract is confirmed."
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a }
  }))
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in Ooty`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Ooty.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Ooty.` },
    { "@type": "HowToStep", position: 2, name: "Receive Quote", text: "A comprehensive quote covering all event logistics is provided within the hour." },
    { "@type": "HowToStep", position: 3, name: "Confirm with Advance", text: "Date exclusively blocked on receipt of advance payment." },
    { "@type": "HowToStep", position: 4, name: "Pre-Event Briefing", text: "A detailed pre-event call covers the run-of-show and specific venue logistics." }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, personSchema, breadcrumbSchema, webPageSchema, howToSchema, faqSchema]) }} />
      <PageClient />
    </>
  );
}
