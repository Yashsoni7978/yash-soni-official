import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-neemrana/layout.jsx
// Delhi NCR Weekend Heritage & Corporate Retreat Anchor Layout

const CITY     = "Neemrana";
const REGION   = "Rajasthan";
const SLUG     = "anchor-in-neemrana";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "27.9890";
const LNG      = "76.3888";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/neemrana_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Neemrana",
    "Best Wedding Anchor Neemrana",
    "Neemrana Fort Palace Event Host",
    "Delhi NCR Corporate Retreat Host",
    "Tijara Fort Palace Anchor",
    "Weekend Destination Wedding Anchor",
    "Bilingual Emcee Neemrana",
    "Luxury Event Host Rajasthan",
    "Heritage Wedding Emcee NCR",
    "15th Century Fort Event Host",
  ],
  description: `1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
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
    streetAddress: "Delhi-Jaipur Highway Zone",
    addressLocality: CITY,
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    postalCode: "301705",
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
    availableLanguage: ["Hindi","English"],
    contactOption: "TollFree",
  },
  areaServed: [
    { "@type": "City", name: "Neemrana" },
    { "@type": "City", name: "Alwar" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
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
      author: { "@type": "Person", name: "Director — Tech Startup NCR" },
      reviewBody: "We brought our entire C-suite out to Neemrana for a leadership summit. Yash anchored the daytime panels with incredible English precision, and then transitioned into hosting our evening gala flawlessly. True executive hosting.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Malhotra Family (Delhi)" },
      reviewBody: "Neemrana Fort has 14 different levels. It’s impossible to manage guests naturally, and they don't allow loud DJs. Yash stepped up and literally kept our entire wedding together using purely his voice and stage presence. Magic.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Neemrana",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Neemrana Fort Palace Hosting", description: "Navigating archaic venue regulations and complex 14-tier fortress acoustics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NCR Corporate Retreats", description: "Intellectual, unscripted moderation for Delhi/Gurgaon executive teams on weekend offsites" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Weekend Sangeet", description: "Acoustic control across sprawling heritage resorts driving natural energy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tijara Fort Event Execution", description: "Bridging modern Delhi corporate friends with traditional family customs in a heritage venue" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Neemrana Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 4+ years and 1,100+ events. Specialist in Neemrana's unique weekend proximity to NCR: acting as the executive moderator for Delhi corporate retreats, and overcoming the architectural challenges of 15th-century stepped forts.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Neemrana Fort Palace Acoustic Zones",
    "Tijara Fort Heritage Logistics",
    "Bilingual NCR Executive Moderation",
    "Weekend Destination Weekend Timelines",
    "Stepped Fortress Crowd Control",
    "Delhi/Gurgaon Corporate Demographics",
    "Strict Heritage Decibel Control Policies",
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
  "@id": `https://yashsoni.in/anchor-in-neemrana/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Neemrana | Delhi NCR Corporate Retreat & Fort Host — Yash Soni`,
  headline: `Neemrana's Most Trusted Anchor for 15th-Century Fort Weddings & Gurgaon Corporate Escapes`,
  description: `Anchor Yash Soni — 4.9★ rated. Premier anchor for Neemrana weekend destination weddings and NCR corporate retreats. Specialist in managing complex heritage acoustics at Neemrana Fort Palace and Tijara Fort.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Rajasthan` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Neemrana | Corporate Retreat & Fort Emcee — Yash Soni`,
  description: `Looking for the best anchor in Neemrana? Anchor Yash Soni — 4.9★. Expert for Neemrana Fort Palace, Tijara Fort, and Delhi NCR weekend corporate retreats. Flawless unscripted bilingual hosting for extreme heritage venues.`,
  keywords: [
    "anchor in neemrana",
    "best anchor in neemrana",
    "wedding anchor neemrana",
    "neemrana fort palace event host",
    "tijara fort wedding anchor",
    "delhi ncr corporate retreat host rajasthan",
    "bilingual english hindi anchor neemrana",
    "weekend destination wedding anchor neemrana",
    "heritage wedding emcee rajasthan",
    "corporate summit host neemrana",
    "luxury event emcee alwar region",
    "gurgaon offsite anchor",
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
    title: `Best Anchor in Neemrana | Corporate Offsite & Elite Fort Host`,
    description: `4.9★ rated. Neemrana's premium anchor for 15th-century fort weddings and elite Delhi NCR corporate retreats. Flawless bilingual execution.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Neemrana — Anchor Yash Soni at Neemrana Fort Palace` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Neemrana | Anchor Yash Soni — 4.9★`,
    description: `Neemrana Fort. Tijara Fort. NCR Corporate Retreats. Neemrana's premier event anchor for extreme heritage and executive hosting.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Neemrana | Heritage Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, Corporate Retreats, ${CITY}, Rajasthan, India`,
    "DC.coverage": `${CITY}, Rajasthan, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────


const FAQS = [
  { q: "Who is the best anchor for destination weddings in Neemrana?", a: "Anchor Yash Soni is rated 4.9★ across 1,100+ events and specialises in Neemrana's fort palace and heritage resort wedding circuit. Bilingual Hindi/English, completely unscripted, and deeply experienced in managing grand destination weddings for families travelling from Delhi-NCR and abroad." },
  { q: "How do you handle the logistics and acoustics of fort weddings in Neemrana?", a: "Neemrana's heritage venues, particularly Neemrana Fort Palace, feature multi-level open-air settings and unique acoustic challenges. Managing event energy across these stepped terraces requires an experienced host who uses precise pacing and crowd psychology to draw guests together, maintaining a high-energy atmosphere despite the vertical spread." },
  { q: "Can you host bilingual events for NRI families in Neemrana?", a: "Yes. Given its proximity to Delhi, Neemrana frequently hosts NRI destination weddings. Bilingual cultural bridging is essential here — sophisticated English for international guests combined with culturally rich Hindi ensures everyone connects with the royal Rajasthani setting." },
  { q: "Do you anchor corporate events in Neemrana?", a: "Neemrana is a prime location for corporate offsites, dealer meets, and leadership summits from the Delhi-NCR region. The hosting register for these events is sharp, brand-aligned, and professional, distinctly different from a high-energy wedding tone." },
  { q: "How far in advance should I book for a Neemrana wedding?", a: "Neemrana is highly sought after year-round but especially during the winter wedding season (October–March). Premium dates book out 6–8 months in advance. Secure your dates via WhatsApp immediately upon confirming your venue." },
  { q: "Who is the best emcee or host in Neemrana for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Neemrana destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies to deliver a flawless royal event." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Neemrana?", a: "Anchor, emcee, host, and MC are terms for the same professional role. Event planners often use 'emcee' or 'host', while families might say 'anchor'. Yash Soni operates seamlessly across all audience types and formats regardless of the exact title used." },
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
  name: `How to Hire the Best Anchor in Neemrana`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Neemrana.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Neemrana.` },
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
