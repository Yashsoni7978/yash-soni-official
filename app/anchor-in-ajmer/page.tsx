import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-ajmer/layout.jsx
// Sufi Heritage & Regional Palace Wedding Anchor — Full Schema + SEO Layout

const CITY     = "Ajmer";
const REGION   = "Central Rajasthan";
const SLUG     = "anchor-in-ajmer";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "26.4499";
const LNG      = "74.6399";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/pushkar_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Ajmer",
    "Best Wedding Anchor Ajmer",
    "Ajmer Heritage Wedding Anchor",
    "Pratap Palace Wedding Emcee",
    "Kishangarh Heritage Wedding Host",
    "Pushkar-Ajmer Corridor Event Anchor",
    "Central Rajasthan Destination Wedding",
    "Gateway Resort Ajmer Anchor",
    "Ana Sagar Lake Wedding Host",
    "Sufi Culture Destination Anchor",
    "Ajmer NRI Destination Host",
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
    streetAddress: "Ana Sagar Circular Road",
    addressLocality: CITY,
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    postalCode: "305001",
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
    { "@type": "City", name: "Ajmer" },
    { "@type": "City", name: "Pushkar" },
    { "@type": "City", name: "Kishangarh" },
    { "@type": "City", name: "Beawar" },
    { "@type": "AdministrativeArea", name: "Central Rajasthan" },
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
      author: { "@type": "Person", name: "Bansal Family" },
      reviewBody: "Choosing Pratap Palace meant we needed someone who matched the Taj standard. Yash's hosting was flawless. He merged our formal ceremonies with unscripted celebration that got both sides of the family invested.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Qureshi Family" },
      reviewBody: "Bilingual, sophisticated, and deeply aware of our traditions. Yash hosted our 500-guest reception near Ana Sagar with incredible dignity and warmth.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Ajmer & Central Rajasthan",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pratap Palace Heritage Anchor", description: "Bespoke ceremony facilitation at Ajmer's premium heritage hotel properties" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ana Sagar Lake Sangeet Emcee", description: "Outdoor, high-energy Sangeet hosting against Ajmer's historic lake" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ajmer Pushkar Corridor Host", description: "Seamless logistical understanding of events split between Ajmer and Pushkar" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NRI Destination Wedding Emcee", description: "Bilingual formal hosting for international families returning to their roots" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Ajmer Heritage Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor and emcee with 5+ years and 700+ shows across Rajasthan, India. Specialist in Ajmer's premium heritage properties, lake-side acoustics, and syncretic cultural hosting.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Pratap Palace Keys to Taj Protocol",
    "Ana Sagar Open Air Acoustic Management",
    "Central Rajasthan Syncretic Heritage",
    "Ajmer to Pushkar Guest Flow Logistics",
    "Bilingual English/Hindi Code Switching",
    "Marwari and Rajput Ceremonial Protocols",
    "VIP Security Contexts in Ajmer",
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
    { "@type": "ListItem", position: 2, name: "Anchor in Rajasthan", item: `https://${DOMAIN}/anchor-in-rajasthan` },
    { "@type": "ListItem", position: 3, name: "Central Rajasthan Heritage Anchor", item: `https://${DOMAIN}/anchor-in-rajasthan#central` },
    { "@type": "ListItem", position: 4, name: `Best Anchor in ${CITY}`, item: FULL_URL },
  ],
};

// ─── 4. WEBPAGE SCHEMA ────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://yashsoni.in/anchor-in-ajmer/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Ajmer | Pratap Palace & Heritage Wedding Host — Yash Soni`,
  headline: `India's Most Trusted Event Anchor for Ajmer — Pratap Palace, Mansingh & the Central Rajasthan Circuit`,
  description: `Anchor Yash Soni — 4.9★ rated, 700+ shows. Premier anchor for Ajmer destination weddings at Pratap Palace (Taj) & Ana Sagar properties. Regional cultural fluency. Bilingual, unscripted.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Central Rajasthan` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Ajmer | Premium Heritage Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Ajmer? Anchor Yash Soni — 4.9★ rated, 700+ shows. Expert for luxury weddings at Pratap Palace & Ana Sagar lake outposts. Syncretic cultural fluency, bilingual English/Hindi, completely unscripted.`,
  keywords: [
    "anchor in ajmer",
    "best anchor in ajmer",
    "wedding anchor ajmer",
    "pratap palace taj ajmer wedding",
    "ajmer heritage wedding anchor",
    "mansingh palace event host",
    "ana sagar lake wedding emcee",
    "pushkar ajmer wedding anchor",
    "central rajasthan destination wedding",
    "kishangarh wedding anchor",
    "nri destination wedding ajmer",
    "ajmer sufi heritage host",
    "marwari wedding anchor ajmer",
    "bilingual anchor ajmer",
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
    title: `Best Anchor in Ajmer | Premium Heritage Wedding Host`,
    description: `4.9★ rated. 700+ shows. Ajmer's most trusted anchor for Pratap Palace and premium heritage properties. Seamless bilingual hosting for central Rajasthan's elite families.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Ajmer — Anchor Yash Soni at Pratap Palace` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Ajmer | Anchor Yash Soni — 4.9★`,
    description: `Pratap Palace. Ana Sagar. Central Rajasthan's premium bilingual heritage wedding anchor. 700+ shows. Zero paper scripts.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Ajmer | Heritage Palace Anchor — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, Destination Emcee, Syncretic Culture, ${CITY}, Rajasthan, India`,
    "DC.coverage": `${CITY}, Central Rajasthan, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────


const FAQS = [
  { q: "Who is the best anchor for destination weddings in Ajmer?", a: "Anchor Yash Soni is rated 4.9★ across 700+ shows, specialising in Ajmer and Pushkar's unique destination wedding circuit — including premium resorts and heritage properties. Bilingual Hindi/English, completely unscripted, and experienced in managing large-scale destination events for NRI and traditional Indian families." },
  { q: "How do you manage events in Ajmer given its proximity to Pushkar?", a: "Ajmer and Pushkar often operate as a combined destination wedding hub. While Pushkar venues focus on lakeside heritage, Ajmer venues often accommodate larger capacities with a blend of modern luxury and tradition. The hosting style adapts seamlessly between the spiritual depth required for a Pushkar ceremony and the high-energy luxury needed for an Ajmer reception." },
  { q: "Can you host bilingual events for NRI families in Ajmer?", a: "Yes. Destination weddings in Ajmer frequently attract NRI families. Bilingual hosting is critical here — sophisticated English for the international guests and respectful, culturally rich Hindi for the local relatives. This ensures every guest feels completely connected to the celebration." },
  { q: "Do you anchor corporate events in Ajmer?", a: "Corporate events, dealer meets, and annual galas at Ajmer's premium hotels are a strong specialisation. The corporate hosting register is sharp, brand-aligned, and professional, distinctly different from a wedding tone." },
  { q: "How far in advance should I book for an Ajmer wedding?", a: "Ajmer's peak season aligns with the general Rajasthan wedding season (October–March). Premium properties and top anchors book out 6–8 months ahead. Secure your dates via WhatsApp as soon as your venue is confirmed." },
  { q: "Who is the best emcee or host in Ajmer for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Ajmer destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies across all Ajmer venues." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Ajmer?", a: "Anchor, emcee, host, and MC refer to the same professional role leading the event. While event planners may say 'emcee' and traditional families say 'anchor', the skill set — managing transitions, commanding the room, and engaging the crowd — remains identical." },
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
  name: `How to Hire the Best Anchor in Ajmer`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Ajmer.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Ajmer.` },
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
