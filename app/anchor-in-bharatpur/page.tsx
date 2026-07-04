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
  {
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Bharatpur?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Bharatpur. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Bharatpur?",
    a: "Yash Soni specialises in premium, high-energy events. In Bharatpur, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Bharatpur?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Bharatpur feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Bharatpur, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Bharatpur?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Bharatpur, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Bharatpur, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Bharatpur is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
  }
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
