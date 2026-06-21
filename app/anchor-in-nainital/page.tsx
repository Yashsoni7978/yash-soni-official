import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-nainital/layout.jsx
// Ultra-Luxury Lakeside Heritage Destination Anchor Layout

const CITY     = "Nainital";
const REGION   = "Uttarakhand";
const SLUG     = "anchor-in-nainital";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "29.3919";
const LNG      = "79.4542";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/nainital_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Nainital",
    "Best Wedding Anchor Nainital",
    "Nainital Destination Wedding Emcee",
    "The Naini Retreat Wedding Anchor",
    "Bhimtal Luxury Event Host",
    "Kumaon Heritage Wedding Anchor",
    "Bilingual Emcee Nainital",
    "Lakeside Destination Wedding Host",
    "Corporate Retreat Anchor Nainital",
    "Delhi Elite Wedding Host Nainital",
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
    streetAddress: "Nainital & Bhimtal Luxury Corridor",
    addressLocality: CITY,
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
    postalCode: "263001",
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
    { "@type": "City", name: "Nainital" },
    { "@type": "City", name: "Bhimtal" },
    { "@type": "City", name: "Jim Corbett" },
    { "@type": "AdministrativeArea", name: "Uttarakhand" },
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
      author: { "@type": "Person", name: "Executive Offsite — Gurgaon" },
      reviewBody: "Hosting our annual corporate retreat at a heritage property in Nainital required a very specific tone. Yash was exactly what we needed. High-end English hosting, entirely unscripted, blending the corporate strategy daytime talks immediately into the lakeside evening gala.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Kapur Family — Delhi NCR" },
      reviewBody: "The logistics of lakeside acoustic drop-off are real. Our Sangeet threatened to lose energy, but Yash physically compressed the crowd dynamically and pushed the interactions into overdrive. He saved the Sangeet entirely.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Nainital",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lakeside Heritage Hosting", description: "Executing highly prestigious, VIP-heavy events navigating extreme acoustic lakeside logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bhimtal Resort Exclusivity", description: "Bilingual English/Hindi bridging for incredibly distilled, VIP destination weddings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kumaon Ridge Sangeets", description: "Defeating massive mountain winds and dropping temperatures through intense acoustic centralization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Offsite Moderation", description: "Unscripted hosting for high-stakes leadership symposiums holding strategy retreats in the Kumaon hills" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Nainital Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 5+ years and 700+ shows. Specialist in Nainital's high-altitude luxury sector, executing flawless bilingual ceremonies across Kumaon lakeside heritage properties.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "The Naini Retreat Protocol",
    "Bhimtal Lakeside Logistics",
    "Kumaon Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Delhi NCR Executive Crowds",
    "Heritage Lakeside Wedding Flow",
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
  "@id": `https://yashsoni.in/anchor-in-nainital/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Nainital | Kumaon Lakeside Emcee — Yash Soni`,
  headline: `Nainital's Premier Event Anchor for Ultra-Luxury Lakeside Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Nainital destination weddings. Mastering prestigious properties like The Naini Retreat with unscripted VIP executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Uttarakhand` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Nainital | Luxury Heritage Lakeside Emcee`,
  description: `Looking for the best anchor in Nainital? Anchor Yash Soni — 4.9★. Expert for The Naini Retreat, Bhimtal luxury, and ultra-prestigious destination weddings. Flawless unscripted bilingual hosting for extreme VIP events.`,
  keywords: [
    "anchor in nainital",
    "best anchor in nainital",
    "wedding anchor nainital",
    "naini retreat event host",
    "bhimtal wedding anchor",
    "kumaon destination wedding anchor",
    "bilingual english hindi anchor nainital",
    "luxury event emcee uttarakhand",
    "delhi ncr wedding host nainital",
    "lakeside destination anchor",
    "corporate retreat host nainital",
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
    title: `Best Anchor in Nainital | Elite Lakeside Destination Wedding Host`,
    description: `4.9★ rated. Nainital's premium anchor for highly prestigious destination weddings spanning the Kumaon lakes. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Nainital — Anchor Yash Soni at Lakeside Luxury Resorts` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Nainital | Anchor Yash Soni — 4.9★`,
    description: `The Naini Retreat. Bhimtal Estates. Nainital's premier bilingual event anchor for exclusive VIP Sangeets and heavily restricted heritage ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-UT",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Nainital | Kumaon VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Mountain Lakeside Wedding, VIP Events, ${CITY}, Uttarakhand, India`,
    "DC.coverage": `${CITY}, Uttarakhand, India`,
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
    q: "How do you handle outdoor functions by Naini Lake where the altitude drops the temperature drastically?",
    a: "This is the true test of a Kumaon destination anchor. When the evening cold hits the lake, guests instantly mentally check out and want to go inside. A generic DJ set will fail here. I use 'Psychological Momentum'—accelerating the timeline aggressively, physically moving into the crowd, and forcing an explosive dancing state via unscripted interaction before the cold ruins the event."
  },
  {
    q: "We are holding our Varmala outdoors. The wind off the lake is usually very loud. Can you manage the audio spread?",
    a: "The acoustic drop-off at properties in Bhimtal and Nainital is massive. I actively deploy 'Acoustic Defense'. Instead of just telling the DJ to max the volume (which causes terrible echo), I restructure the crowd physically—pulling the seating tighter to the stage—and I use heavy vocal projection to overpower the ambient wind, ensuring the emotional depth of the Pheras is deeply felt."
  },
  {
    q: "Our guest list is highly exclusive—mostly South Delhi executives and VIP corporate legacy families. Can you match this tone?",
    a: "Completely. A VIP destination wedding at The Naini Retreat does not need a high-pitched 'hype man'; it requires an Executive Moderator. I drop all standard 'wedding gimmick' games. I host with sharp, highly conversational, unscripted English that treats the VIPs with intellectual respect, bridging the gap between networking and raw celebration."
  },
  {
    q: "Do you use teleprompters or scripts during these complex multi-day lakeside itineraries?",
    a: "Never. Scripts destroy raw party energy. When you read from a clipboard, you look unprepared and you completely break eye contact with a high-net-worth audience. I memorize the family lineages, the corporate dynamics, and the overarching timeline. This allows me to host 100% unscripted to maintain absolute command over the sprawling property."
  },
  {
    q: "What if sudden mountain rain systems force us to spontaneously move our open-air Sangeet indoors?",
    a: "High-altitude logistics are inherently volatile. If extreme weather forces us to compress an sprawling outdoor Sangeet into an indoor banquet hall dynamically, I do not panic. Because I am entirely unscripted, I instantly synthesize the new pacing, stitch family performances together on the fly, and reconstruct the Sangeet hype natively."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Nainital/Bhimtal?",
    a: "Logistics to the Kumaon region (via Pantnagar Airport or the Kathgodam highway) are highly streamlined. I operate heavily across the Delhi-NCR/Uttarakhand corridor, so there are no massive travel delays. The exact logistical rider is verified and provided instantly upon booking."
  },
  {
    q: "When should we freeze your dates for a Kumaon event?",
    a: "Nainital’s destination season aligns directly with the absolute peak luxury resort dates. Elite properties vanish over a year in advance for high-net-worth weddings. Lock my dates the exact moment your luxury venue contract is signed."
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
  name: `How to Hire the Best Anchor in Nainital`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Nainital.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Nainital.` },
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
