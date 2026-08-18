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
  
  review: [
    {
      "@type": "Review",
      
      author: { "@type": "Person", name: "Agarwal Family" },
      reviewBody: "Hosting our Marwari wedding at the Taj West End required someone who could respect our rituals in Hindi, while communicating perfectly with our business partners in English. Yash executed this duality perfectly.",
    },
    {
      "@type": "Review",
      
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
  description: "Professional event anchor and emcee with 5+ years and 700+ shows across India. Specialist in Bangalore's premium event circuit—from Taj West End high-net-worth weddings to Whitefield tech summits. Impeccable bilingual English/Hindi execution.",
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
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Bangalore?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Bangalore. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Bangalore?",
    a: "Yash Soni specialises in premium, high-energy events. In Bangalore, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Bangalore?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Bangalore feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Bangalore, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Bangalore?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Bangalore, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Bangalore, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Bangalore is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
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
