import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-dharamshala/layout.jsx
// Ultra-Luxury Mountain Retreat Destination Anchor Layout

const CITY     = "Dharamshala";
const REGION   = "Himachal Pradesh";
const SLUG     = "anchor-in-dharamshala";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "32.2190";
const LNG      = "76.3234";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/dharamshala_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Dharamshala",
    "Best Wedding Anchor Dharamshala",
    "Dharamshala Destination Wedding Emcee",
    "Taj Dharamshala Wedding Anchor",
    "Hyatt Regency Dharamshala Host",
    "Kangra Valley Luxury Wedding Anchor",
    "Bilingual Emcee Dharamshala",
    "Dhauladhar Mountain Destination Wedding Host",
    "Corporate Retreat Anchor Dharamshala",
    "Chandigarh Elite Wedding Host Dharamshala",
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
    streetAddress: "Dhauladhar Luxury Corridor",
    addressLocality: CITY,
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN",
    postalCode: "176215",
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
    availableLanguage: ["Hindi","English", "Punjabi"],
    contactOption: "TollFree",
  },
  areaServed: [
    { "@type": "City", name: "Dharamshala" },
    { "@type": "City", name: "Kangra" },
    { "@type": "City", name: "McLeod Ganj" },
    { "@type": "AdministrativeArea", name: "Himachal Pradesh" },
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
      author: { "@type": "Person", name: "Corporate Summit — Chandigarh" },
      reviewBody: "Choosing Taj Dharamshala meant we needed an extremely refined host for our executive summit. Yash anchored with pure executive polish. Unscripted, sharp, and totally in control of the multi-day agenda.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Punjabi Destination Sangeet" },
      reviewBody: "Mountain weather is a mood killer. But Yash brought massive Sangeet hype entirely natively. He switched between English for the VIPs and heavy Punjabi crowd-work effortlessly. The dance floor at Hyatt Regency exploded.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Dharamshala",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Dharamshala Retreat Hosting", description: "Executing highly prestigious, VIP-heavy events navigating extreme high-altitude luxury logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hyatt Regency Sangeet Execution", description: "Bilingual Punjabi/English bridging for incredibly fast-paced VIP destination weddings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dhauladhar Acoustic Centralization", description: "Defeating massive mountain winds and freezing temperatures through intense timeline compression" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Peace Offsite Moderation", description: "Unscripted, highly spiritual and strategic hosting for high-stakes leadership symposiums" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Dharamshala Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 4+ years and 1,100+ events. Specialist in Dharamshala's high-altitude luxury sector, executing explosive bilingual ceremonies at Taj Dharamshala and Hyatt Regency.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Taj Dharamshala Protocol",
    "Hyatt Regency Logistics",
    "Dhauladhar Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Chandigarh & Punjab Elite Crowds",
    "Mountain Retreat Wedding Flow",
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
  "@id": `https://yashsoni.in/anchor-in-dharamshala/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Dharamshala | Taj & Hyatt Emcee — Yash Soni`,
  headline: `Dharamshala's Premier Event Anchor for Ultra-Luxury Mountain Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Dharamshala destination weddings. Mastering prestigious properties like Taj Dharamshala and Hyatt Regency with unscripted VIP executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Himachal Pradesh` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Dharamshala | Luxury Mountain Wedding Emcee`,
  description: `Looking for the best anchor in Dharamshala? Anchor Yash Soni — 4.9★. Expert for Taj Dharamshala, Hyatt Regency, and ultra-prestigious mountain weddings. Flawless unscripted bilingual hosting for VIP events.`,
  keywords: [
    "anchor in dharamshala",
    "best anchor in dharamshala",
    "wedding anchor dharamshala",
    "taj dharamshala event host",
    "hyatt regency dharamshala anchor",
    "dhauladhar destination wedding anchor",
    "bilingual english punjabi anchor dharamshala",
    "luxury event emcee himachal",
    "chandigarh wedding host dharamshala",
    "mountain retreat destination anchor",
    "corporate retreat host dharamshala",
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
    title: `Best Anchor in Dharamshala | Elite Mountain Destination Wedding Host`,
    description: `4.9★ rated. Dharamshala's premium anchor for highly prestigious destination weddings spanning the Dhauladhar luxury ridge. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Dharamshala — Anchor Yash Soni at Mountain Luxury Resorts` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Dharamshala | Anchor Yash Soni — 4.9★`,
    description: `Taj Dharamshala. Hyatt Regency. Dharamshala's premier bilingual event anchor for exclusive VIP Sangeets and heavily restricted mountain VIP ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-HP",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Dharamshala | Dhauladhar VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Mountain Wedding, VIP Events, ${CITY}, Himachal Pradesh, India`,
    "DC.coverage": `${CITY}, Himachal Pradesh, India`,
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
    q: "How do you handle open-air events in Dharamshala when the Dhauladhar cold rolls in at sunset?",
    a: "This is the cardinal rule of high-altitude hosting. The second the sun sets over Kangra, the crowd wants to go inside. A basic DJ setup cannot counter this psychology. I utilize 'Temperature Compression'—speeding up the entire timeline aggressively, plunging into the crowd physically, and detonating a massive dancing session with high-intensity unscripted crowd-work before the cold paralyzes the night."
  },
  {
    q: "Our Mussoorie guest list is absolutely exclusive—mostly Chandigarh executives and corporate VIPs. Can you match this tone?",
    a: "Completely. Elite destination properties like Taj Dharamshala do not need a loud, shouting 'hype man'. They require an Executive Moderator. I deliberately drop standard, childish 'wedding gimmicks'. I host with formal, razor-sharp, unscripted English that respects the pedigree of the VIPs, perfectly bridging high-level networking with eventual massive celebration."
  },
  {
    q: "The properties here are beautiful but sprawling. How do you prevent guests from wandering off to the lounges?",
    a: "Large luxury properties inevitably cause 'Audience Drift'. In Dharamshala, guests go wandering for valley views. I play the role of the 'Timeline Catalyst'—deploying rapid-fire, high-frequency pacing that constantly drags the guests back to the main stage, actively preventing the energy from bleeding away across the resort footprint."
  },
  {
    q: "Do you use teleprompters or scripts during these massive VIP itineraries?",
    a: "Never. Reading from a clipboard instantly kills raw party energy. It breaks your eye contact, and the high-net-worth audience realizes you are not in command. I memorize the family lineages, the corporate tensions, and the full timeline, enabling me to host 100% unscripted and dictate the absolute flow of the room."
  },
  {
    q: "What if Himalayan weather systems (heavy fog/rain) force us to suddenly move our event indoors into the ballrooms?",
    a: "Mountain logistics are totally volatile. If extreme mountain weather forces us to rip down an outdoor setup and compress an sprawling Sangeet into an indoor banquet hall dynamically, I operate with zero panic. Because I am purely unscripted, I instantly recalibrate the pacing, compress the performances on the fly, and reconstruct the hype natively indoors."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Dharamshala?",
    a: "Travel to Dharamshala (via Gaggal Airport or the highway) is completely streamlined. I am constantly active across the Northern India luxury wedding circuit (Chandigarh/Punjab/Himachal), so there are zero hidden logistical risks. All exact requirements are calculated and provided instantly when blocking dates."
  },
  {
    q: "When should we freeze your dates for a Dharamshala event?",
    a: "Dharamshala’s premium destination windows perfectly mirror the absolute peak luxury dates of North India. Elite properties like Taj and Hyatt vanish over 18 months in advance for big weekends. Lock my dates the instant your luxury venue contract is confirmed."
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
  name: `How to Hire the Best Anchor in Dharamshala`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Dharamshala.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Dharamshala.` },
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
