import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-bharatpur/layout.jsx
// Fort Heritage & Golden Triangle Wedding Anchor — Full Schema + Rich SEO Layout

const CITY     = "Bharatpur";
const REGION   = "Eastern Rajasthan, Golden Triangle";
const SLUG     = "anchor-in-bharatpur";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "27.2152";
const LNG      = "77.5030";
const OG_IMAGE = `https://${DOMAIN}/vintage-car-couple-shoot.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Bharatpur",
    "Best Wedding Anchor Bharatpur",
    "Lohagarh Fort Wedding Anchor",
    "Laxmi Vilas Palace Event Host",
    "Keoladeo Bird Sanctuary Wedding Anchor",
    "Braj Heritage Wedding Emcee",
    "Golden Triangle Wedding Anchor",
    "Brij Bhoomi Event Host Rajasthan",
    "Deeg Palace Wedding Anchor",
    "The Bagh Heritage Wedding Anchor",
    "Bharatpur Jat Heritage Event Host",
    "Agra Jaipur Corridor Anchor",
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
    streetAddress: "Lohagarh Fort Road",
    addressLocality: CITY,
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    postalCode: "321001",
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
    { "@type": "City", name: "Bharatpur" },
    { "@type": "City", name: "Deeg" },
    { "@type": "City", name: "Keoladeo" },
    { "@type": "City", name: "Agra" },
    { "@type": "City", name: "Mathura" },
    { "@type": "AdministrativeArea", name: "Braj Region" },
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
      author: { "@type": "Person", name: "Singhania Family" },
      reviewBody: "Yash understood that Lohagarh was not just a beautiful venue but a statement about our heritage. His references to the fort's history were specific and accurate. The family felt genuinely honoured.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Agarwal Family" },
      reviewBody: "The Laxmi Vilas Sangeet ran from 7pm to midnight without dropping energy once. 300 guests from Delhi, Agra and Jaipur — Yash managed all three communities with complete authority.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Bharatpur",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lohagarh Fort Heritage Wedding Anchor", description: "India's only unconquered fort wedding ceremonies — Jat heritage fluency" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laxmi Vilas Palace Sangeet Emcee", description: "Colonial heritage garden Sangeet events with multi-city guest management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Golden Triangle Corporate Retreat Host", description: "Delhi-Agra-Jaipur corporate events at Bharatpur heritage properties" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Braj Heritage Pre-Wedding Event Host", description: "Mehndi and Haldi events with Braj devotional cultural warmth" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Yash Soni Bharatpur Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor and emcee with 5+ years and 700+ shows across Rajasthan, India. Specialist in fort heritage weddings, Braj cultural events, Golden Triangle multi-city guest management, and bilingual English/Hindi destination wedding hosting.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Lohagarh Fort Heritage Identity and Jat Community Protocol",
    "Braj Regional Cultural References and Vaishnava Tradition",
    "Golden Triangle Multi-City Guest Management",
    "Keoladeo Sanctuary Environmental Event Protocol",
    "Laxmi Vilas Palace Heritage Hosting Register",
    "Delhi NCR Metropolitan and Heritage Family Bilingualism",
    "Destination Wedding Corporate Retreat Anchoring",
    "Bilingual Hindi English Emceeing",
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
    { "@type": "ListItem", position: 3, name: "Eastern Rajasthan Heritage Anchor", item: `https://${DOMAIN}/anchor-in-rajasthan#eastern` },
    { "@type": "ListItem", position: 4, name: `Best Anchor in ${CITY}`, item: FULL_URL },
  ],
};

// ─── 4. WEBPAGE SCHEMA ────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://yashsoni.in/anchor-in-bharatpur/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Bharatpur | Lohagarh Fort & Golden Triangle Wedding Host — Yash Soni`,
  headline: `India's Most Trusted Event Anchor for Bharatpur — Lohagarh Fort, Laxmi Vilas Palace & the Golden Triangle Heritage Circuit`,
  description: `Anchor Yash Soni — 4.9★ rated, 700+ shows. Premier anchor for Bharatpur's Lohagarh Fort weddings & Laxmi Vilas Palace Sangeets. Braj cultural fluency. Delhi-Agra-Jaipur guest management. Bilingual, unscripted.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Eastern Rajasthan` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Bharatpur | Lohagarh Fort Heritage Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Bharatpur? Anchor Yash Soni — 4.9★ rated, 700+ shows. Expert for Lohagarh Fort weddings & Laxmi Vilas Palace Sangeets. Braj cultural fluency, Delhi-Agra-Jaipur guest management, bilingual, unscripted.`,
  keywords: [
    "anchor in bharatpur",
    "best anchor in bharatpur",
    "wedding anchor bharatpur",
    "lohagarh fort wedding anchor",
    "laxmi vilas palace event host",
    "heritage wedding anchor bharatpur",
    "braj wedding anchor",
    "braj heritage emcee",
    "destination wedding bharatpur",
    "golden triangle wedding anchor",
    "agra jaipur delhi corridor anchor",
    "keoladeo bird sanctuary wedding",
    "brij bhoomi wedding emcee",
    "bharatpur jat community anchor",
    "deeg palace wedding host",
    "the bagh heritage wedding",
    "bilingual anchor bharatpur",
    "nri wedding anchor bharatpur eastern rajasthan",
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
    title: `Best Anchor in Bharatpur | Lohagarh Fort Heritage Wedding Host`,
    description: `4.9★ rated. 700+ shows. Bharatpur's most trusted anchor — Lohagarh Fort (India's only unconquered fort), Laxmi Vilas Palace & Keoladeo. Braj cultural fluency. Bilingual, unscripted.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Bharatpur — Anchor Yash Soni at Lohagarh Fort, Golden Triangle` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Bharatpur | Anchor Yash Soni — 4.9★`,
    description: `Lohagarh Fort. Laxmi Vilas Palace. Keoladeo UNESCO. India's Golden Triangle gateway's most trusted heritage wedding anchor.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Bharatpur | Fort Heritage Wedding Anchor — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, Fort Emcee, Braj Culture, Golden Triangle, ${CITY}, Rajasthan, India`,
    "DC.coverage": `${CITY}, Eastern Rajasthan, India`,
    "DC.language": "en-IN",
    "DC.creator": "Anchor Yash Soni",
    "rating": "General",
    "revisit-after": "7 days",
    "content-language": "en-in",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────


const FAQS = [
  { q: "Who is the best anchor for weddings and events?", a: "Anchor Yash Soni is a premium event host with 700+ shows hosted across India. With a 4.9? rating across 50+ client reviews, he specialises in luxury weddings, high-energy Sangeets, corporate award nights, and VIP events. Bilingual in Hindi and English, and fluent in cultural traditions." },
  { q: "Which anchor is best for destination weddings?", a: "Anchor Yash Soni is a top choice for destination weddings. He hosts events across premium venues and travels across India for the right events. Travel logistics and accommodation are discussed during the first booking call." },
  { q: "How to find a bilingual (Hindi/English) anchor in India?", a: "Anchor Yash Soni switches effortlessly between Hindi for the emotions, English for the class, and regional touches to make the elders smile. For NRI families with international guests, the transitions are completely seamless." },
  { q: "Why hire a professional anchor instead of a family member?", a: "Because a professional like Anchor Yash never uses a paper script (zero in 700+ shows). If the PA fails, he turns it into a crowd moment. If the bride needs 10 more minutes, nobody in the room knows. He is your insurance policy against awkward silences � the difference between an event people attend and one they remember." },
  { q: "What does an event anchor do if there is a technical failure?", a: "Technical failures, power cuts, last-minute schedule changes, and delayed brides are all handled without the guests noticing. For Anchor Yash, crisis management under pressure is a core competency, not an afterthought." },
  { q: "Who is the best anchor for destination weddings in Bharatpur?", a: "Anchor Yash Soni is rated 4.9★ across 700+ shows and specialises in Bharatpur's heritage and wildlife resort wedding circuit. Completely unscripted and bilingual, he delivers the elegant, high-energy hosting required for premium venues near the bird sanctuary." },
  { q: "How do you handle the unique logistics of weddings in Bharatpur?", a: "Bharatpur offers a mix of heritage properties and nature-adjacent resorts. Managing events here requires a host who can seamlessly transition between the regal, traditional tone of a palace setting and the vibrant, high-energy atmosphere of an open-air resort Sangeet." },
  { q: "Can you host bilingual events for NRI families in Bharatpur?", a: "Yes. Given its proximity to Delhi and Agra, Bharatpur is a prime location for NRI destination weddings. Bilingual cultural bridging ensures international guests remain engaged through sophisticated English, while traditional relatives connect through culturally resonant Hindi." },
  { q: "Do you anchor corporate events in Bharatpur?", a: "Bharatpur is an excellent destination for corporate offsites and dealer meets from the Delhi-NCR and Agra regions. The hosting register for these events is sharp, brand-aligned, and professional, perfectly suited for leadership summits and galas." },
  { q: "How far in advance should I book for a Bharatpur wedding?", a: "Bharatpur is highly sought after during the winter wedding season (October–March). Premium dates book out 6–8 months in advance. Secure your dates via WhatsApp immediately upon confirming your venue." },
  { q: "Who is the best emcee or host in Bharatpur for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Bharatpur destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies to deliver a flawless event." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Bharatpur?", a: "Anchor, emcee, host, and MC are terms for the same professional role. Event planners often use 'emcee' or 'host', while families say 'anchor'. Yash Soni operates seamlessly across all audience types and formats regardless of the exact title used." },
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
  name: `How to Hire the Best Anchor in Bharatpur`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Bharatpur.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Bharatpur.` },
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
