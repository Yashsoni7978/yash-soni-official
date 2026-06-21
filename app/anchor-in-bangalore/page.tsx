import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-bangalore/layout.jsx
// South India Urban Luxury & Palace Grounds Wedding Anchor — Full Schema + Rich SEO Layout

const CITY     = "Bangalore";
const REGION   = "Karnataka";
const SLUG     = "anchor-in-bangalore";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "12.9716";
const LNG      = "77.5946";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/bangalore_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Bangalore",
    "Best Wedding Anchor Bangalore",
    "Bangalore Palace Grounds Anchor",
    "Taj West End Wedding Emcee",
    "Bengaluru Destination Wedding Anchor",
    "Tech Park Corporate Host Bangalore",
    "Bilingual Emcee Bangalore",
    "Marwari Wedding Anchor Bangalore",
    "Luxury Event Host Bengaluru",
    "South Indian Hindi English Anchor",
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
    streetAddress: "MG Road Hub",
    addressLocality: CITY,
    addressRegion: "Karnataka",
    addressCountry: "IN",
    postalCode: "560001",
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
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Mysore" },
    { "@type": "AdministrativeArea", name: "Karnataka" },
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
      author: { "@type": "Person", name: "Agarwal Family" },
      reviewBody: "Hosting our Marwari wedding at the Taj West End required someone who could respect our rituals in Hindi, while communicating perfectly with our business partners in English. Yash executed this duality perfectly.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "VP Communications — Global IT Firm, Whitefield" },
      reviewBody: "We flew Yash down for our annual leadership summit. Standing in front of 1,200 tech executives, he carried the entire three-day agenda without a single script or teleprompter. A genuinely elite corporate asset.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Bangalore",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj West End Luxury Hosting", description: "Bespoke ceremony facilitation at Bangalore's ultra-premium heritage hotels" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tech Summit Corporate Anchor", description: "High-level intellectual hosting for IT parks, global summits, and VC galas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Palace Grounds Mega Wedding", description: "Vocal and acoustic command over 2,000+ guest mega-weddings at Bangalore Palace Grounds" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "North-South Cross-Cultural Host", description: "Bridge anchoring for weddings fusing Hindi and South Indian linguistic cultures" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Bengaluru Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor and emcee with 4+ years and 700+ shows across India. Specialist in Bangalore's premium event circuit—from Taj West End high-net-worth weddings to Whitefield tech summits. Impeccable bilingual English/Hindi execution.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Bangalore Palace Grounds Ecosystem",
    "Elite English Corporate Moderation",
    "Taj West End and Leela Palace Protocols",
    "North Indian Marwari Community in South India",
    "Bilingual Cross-Cultural Hosting Strategy",
    "Large Scale Mega Wedding Acoustic Command",
    "Bengaluru Tech Sector Executive Delivery",
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
  "@id": `https://yashsoni.in/anchor-in-bangalore/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Bangalore | Luxury Wedding & Corporate Host — Yash Soni`,
  headline: `Bangalore's Most Trusted Event Anchor for Taj West End, Palace Grounds & Elite Corporate Summits`,
  description: `Anchor Yash Soni — 4.9★ rated, 700+ shows. Premier anchor for Bangalore luxury weddings and IT mega-summits. Bilingual English/Hindi expert. Zero scripts. Absolute authority.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Karnataka` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Bangalore | Premium Wedding & Corporate Host — Yash Soni`,
  description: `Looking for the best anchor in Bangalore? Anchor Yash Soni — 4.9★ rated, 700+ shows. Expert for Taj West End weddings, Palace Grounds events, and major corporate tech summits. Elite bilingual English/Hindi unscripted hosting.`,
  keywords: [
    "anchor in bangalore",
    "best anchor in bangalore",
    "wedding anchor bangalore",
    "taj west end wedding anchor",
    "bangalore palace grounds event host",
    "leela palace wedding emcee bangalore",
    "corporate anchor bengaluru",
    "tech summit host bangalore",
    "bilingual english hindi anchor bangalore",
    "marwari wedding anchor bangalore",
    "destinaton wedding anchor karnataka",
    "nri wedding host bangalore",
    "luxury event emcee bengaluru",
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
    title: `Best Anchor in Bangalore | Elite Wedding & Corporate Host`,
    description: `4.9★ rated. 700+ shows. Bangalore's most trusted anchor for Taj West End luxury weddings and high-stakes tech summits. Perfect bilingual English/Hindi execution.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Bangalore — Anchor Yash Soni at Bangalore Luxury Venues` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Bangalore | Anchor Yash Soni — 4.9★`,
    description: `Palace Grounds. Taj West End. Whitefield Tech Summits. Bengaluru's premier bilingual event anchor. 700+ shows. Zero scripts.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Bangalore | Luxury Urban Anchor — Yash Soni`,
    "DC.subject": `Event Anchor, Luxury Wedding, Corporate Tech Emcee, ${CITY}, Karnataka, India`,
    "DC.coverage": `${CITY}, Karnataka, India`,
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
    q: "Who is the best anchor for luxury and corporate events in Bangalore?",
    a: "Anchor Yash Soni is highly sought after in Bangalore's elite circuit. With 700+ shows and a flawless bilingual (English/Hindi) capability, he provides the intellectual polish required for Whitefield corporate summits and the deep cultural respect needed for Taj West End or Palace Grounds luxury weddings."
  },
  {
    q: "We are an IT firm hosting a major summit in Bangalore. Do you use scripts?",
    a: "No. All my corporate anchoring is 100% unscripted. Executive and tech audiences instantly disengage when a host reads from cards. I memorize timelines, panelist bios, and transition logic so I can maintain absolute eye contact and command the room dynamically."
  },
  {
    q: "Ours is a cross-cultural wedding (North Indian & South Indian) in Bengaluru. Can you manage both crowds?",
    a: "Yes. This is a very common requirement in Bangalore. The hosting strategy here is bilingual code-switching. I utilize deeply respectful Hindi to honor the North Indian/Marwari rituals, and flawless metropolitan English to ensure the South Indian family and local VIPs are completely integrated and engaged."
  },
  {
    q: "Can you project enough energy for a mega-wedding at Bangalore Palace Grounds?",
    a: "Venues like Palace Grounds require a completely different skill set than indoor banquets due to massive sound dissipation and crowd scatter. I use specific acoustic pacing, strategic stage movement, and crowd-condensing techniques to ensure a 2,000-person event feels tightly unified."
  },
  {
    q: "Are you familiar with the protocol for properties like The Leela Palace or Taj West End?",
    a: "Absolutely. These ultra-premium urban properties mandate 'understated authority.' You cannot use loud, cheap humor here. The anchor must be the authoritative spine of the event—directing proceedings with immaculate diction and ensuring the host family's prestige is protected at all times."
  },
  {
    q: "Do you anchor Sangeet events in Bangalore?",
    a: "Yes. For elite metropolitan Sangeets, I focus on rapid timeline execution. I transition the evening smoothly from formal family dance performances directly into a high-voltage, interactive dance floor environment, ensuring there are no dead spaces in the energy."
  },
  {
    q: "What languages do you anchor in?",
    a: "I provide premium bilingual anchoring in English and Hindi. For Bangalore, this exact combination is usually perfect—English serves the global, professional, and cross-cultural demographic, while Hindi drives the energy for Sangeets and North Indian ceremonial rituals."
  },
  {
    q: "When should we book you for a Bangalore event?",
    a: "Because I travel pan-India from Rajasthan, flying to Bangalore requires dedicated multi-day blockouts. The corporate summit season often clashes directly with peak wedding dates (Oct–Feb). Please reach out via WhatsApp the moment your venue dates are finalized."
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
  name: `How to Hire the Best Anchor in Bangalore`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Bangalore.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Bangalore.` },
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
