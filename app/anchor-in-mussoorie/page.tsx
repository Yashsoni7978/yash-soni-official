import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-mussoorie/layout.jsx
// Ultra-Luxury Heritage Doon Valley Destination Anchor Layout

const CITY     = "Mussoorie";
const REGION   = "Uttarakhand";
const SLUG     = "anchor-in-mussoorie";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "30.4598";
const LNG      = "78.0644";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/mussoorie_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Mussoorie",
    "Best Wedding Anchor Mussoorie",
    "Mussoorie Destination Wedding Emcee",
    "JW Marriott Walnut Grove Anchor",
    "The Savoy Wedding Host",
    "Doon Valley Luxury Wedding Anchor",
    "Bilingual Emcee Mussoorie",
    "High Altitude Heritage Wedding Host",
    "Corporate Retreat Anchor Uttarakhand",
    "Delhi Elite Wedding Host Mussoorie",
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
    streetAddress: "Doon Valley Heritage Corridor",
    addressLocality: CITY,
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
    postalCode: "248179",
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
    { "@type": "City", name: "Mussoorie" },
    { "@type": "City", name: "Dehradun" },
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
      author: { "@type": "Person", name: "Executive Corporate Retreat — Delhi NCR" },
      reviewBody: "Hosting a sunset reception at JW Marriott Walnut Grove requires an anchor who understands immense prestige. Yash’s unscripted English was flawless, and he managed the transition into the evening Sangeet despite the massive indoor scale of the ballrooms. Absolute executive polish.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Bhargava Family — Dehradun" },
      reviewBody: "Choosing The Savoy meant we had a highly restricted, incredibly VIP guest list inside a heritage property. We needed an anchor, not a noisy MC. Yash was absolute perfection. Intense conversational flow, no reading from notes, completely owning the space without ever crossing the line.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Mussoorie",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "JW Marriott Walnut Grove Hosting", description: "Executing highly prestigious, VIP-heavy events navigating extreme high-altitude luxury logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "The Savoy Heritage Intimacy", description: "Bilingual English/Hindi bridging for incredibly distilled, VIP heritage destination weddings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Doon Valley Ridge Sangeets", description: "Defeating massive mountain winds and freezing temperatures through intense acoustic centralization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Offsite Moderation", description: "Unscripted hosting for high-stakes leadership symposiums holding strategy retreats overlooking the valley" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Mussoorie Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 4+ years and 700+ shows. Specialist in Mussoorie's high-altitude luxury sector, executing flawless bilingual ceremonies at JW Marriott Walnut Grove and The Savoy.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "JW Marriott Walnut Grove Protocol",
    "The Savoy Venue Exclusivity",
    "Uttarakhand Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Delhi NCR Executive Crowds",
    "Doon Valley Wedding Logistics",
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
  "@id": `https://yashsoni.in/anchor-in-mussoorie/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Mussoorie | JW Marriott & The Savoy Emcee — Yash Soni`,
  headline: `Mussoorie's Premier Event Anchor for Ultra-Luxury Himalayan Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Mussoorie destination weddings. Mastering prestigious properties like JW Marriott Walnut Grove and The Savoy with unscripted executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Uttarakhand` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Mussoorie | Luxury Heritage Wedding Emcee`,
  description: `Looking for the best anchor in Mussoorie? Anchor Yash Soni — 4.9★. Expert for JW Marriott, The Savoy, and ultra-prestigious destination weddings. Flawless unscripted bilingual hosting for extreme VIP events.`,
  keywords: [
    "anchor in mussoorie",
    "best anchor in mussoorie",
    "wedding anchor mussoorie",
    "jw marriott walnut grove host",
    "the savoy wedding anchor",
    "himalayan destination wedding anchor",
    "bilingual english hindi anchor mussoorie",
    "luxury event emcee uttarakhand",
    "dehradun elite wedding host",
    "delhi ncr wedding host mussoorie",
    "corporate retreat host mussoorie",
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
    title: `Best Anchor in Mussoorie | Elite Heritage Destination Wedding Host`,
    description: `4.9★ rated. Mussoorie's premium anchor for highly prestigious destination weddings at JW Marriott Walnut Grove and The Savoy. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Mussoorie — Anchor Yash Soni at Himalayan Luxury Resorts` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Mussoorie | Anchor Yash Soni — 4.9★`,
    description: `JW Marriott Walnut Grove. The Savoy. Mussoorie's premier bilingual event anchor for exclusive VIP Sangeets and highly restricted heritage ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-UT",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Mussoorie | Doon Valley VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Mountain Wedding, VIP Events, ${CITY}, Uttarakhand, India`,
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
    q: "How do you handle outdoor functions in Mussoorie where the freezing wind kills the crowd's energy?",
    a: "This is the ultimate test of a Doon Valley anchor. When the temperature drops rapidly at sunset, guests instantly mentally check out and want to retreat indoors. You cannot solve this purely with a loud sound system. I use 'Psychological Momentum'—accelerating the timeline aggressively, using extreme vocal projection to physically compress the crowd towards the stage, and forcing an explosive dancing state before the cold wins."
  },
  {
    q: "Our Mussoorie guest list is absolutely exclusive—mostly South Delhi executives and corporate VIPs. Can you match this tone?",
    a: "Completely. A VIP destination wedding doesn't need a high-pitched 'hype man'; it needs an Executive Moderator. I drop all standard 'wedding gimmicks' and host with sharp, highly conversational, unscripted English. It treats the VIPs with intellectual respect and immediately breaks the sterile barrier between the stage and the high-society audience."
  },
  {
    q: "The properties here like JW Marriott and Jaypee Manor are massive. How do you prevent guests from wandering off?",
    a: "Large-footprint luxury properties cause severe 'Audience Drift'. Guests vanish to the lounges or terraces. I assume the role of the 'Timeline Catalyst'—deploying rapid-fire pacing and unscripted crowd-work that constantly drags the guests back to the main stage, actively keeping the energy trapped and centralized throughout the evening."
  },
  {
    q: "Do you use teleprompters or scripts during these massive VIP itineraries?",
    a: "Never. Scripts destroy raw party energy. When you read from a clipboard, you look unprepared and you break eye contact with the high-net-worth audience. I memorize the family lineages, the corporate dynamics, and the overarching timeline, allowing me to host 100% unscripted to maintain absolute command over the room."
  },
  {
    q: "What if Himalayan weather systems (heavy rain) force us to suddenly move our event indoors into the ballrooms?",
    a: "Mountain logistics are inherently volatile. If extreme weather forces us to compress an sprawling outdoor Sangeet into an indoor banquet hall at the last minute, I do not panic. Because I am entirely unscripted, I instantly rewrite the pacing, stitch family performances together on the fly, and reconstruct the hype natively."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Mussoorie?",
    a: "Logistics to Mussoorie (via Dehradun Jolly Grant Airport) are entirely streamlined. I operate heavily across the Delhi-NCR/Dehradun corridor, so there are no hidden travel complications. The exact logistical requirement is verified and provided instantly upon your booking."
  },
  {
    q: "When should we freeze your dates for a Mussoorie event?",
    a: "Mussoorie’s premium destination season aligns directly with the absolute peak luxury dates of North India. Elite properties like JW Marriott and The Savoy vanish over a year in advance for big weekends. Lock my dates the instant your luxury venue contract is signed."
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
  name: `How to Hire the Best Anchor in Mussoorie`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Mussoorie.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Mussoorie.` },
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
