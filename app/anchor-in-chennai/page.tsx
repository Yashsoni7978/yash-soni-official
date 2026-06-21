import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-chennai/layout.jsx
// Ultra-Luxury Coastal Heritage Destination Anchor Layout

const CITY     = "Chennai";
const REGION   = "Tamil Nadu";
const SLUG     = "anchor-in-chennai";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "13.0827";
const LNG      = "80.2707";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/chennai_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Chennai",
    "Best Wedding Anchor Chennai",
    "Chennai Destination Wedding Emcee",
    "Taj Fisherman's Cove Wedding Anchor",
    "ITC Grand Chola Event Host",
    "Leela Palace Chennai Anchor",
    "Bilingual Emcee Chennai",
    "ECR Destination Wedding Host",
    "Corporate Summit Anchor Chennai",
    "South India Elite Wedding Host",
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
    streetAddress: "Coastal Luxury Corridor, ECR",
    addressLocality: CITY,
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
    postalCode: "600001",
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
    { "@type": "City", name: "Chennai" },
    { "@type": "City", name: "Mahabalipuram" },
    { "@type": "City", name: "Pondicherry" },
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
      author: { "@type": "Person", name: "NRI Destination Wedding — Australia" },
      reviewBody: "Hosting at Taj Fisherman's Cove required absolute poise and the ability to manage a massive coastal lawn. Yash was incredible. His English moderation for our global guests was flawlessly professional and unscripted.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Corporate Summit — ITC Grand Chola" },
      reviewBody: "We held an international leadership summit at ITC Grand Chola. Yash moderated our strategic gala sessions with pure executive polish. He perfectly bridges the gap between formal corporate requirements and high-energy hosting.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Chennai",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fisherman's Cove Luxury Hosting", description: "Executing highly prestigious, VIP events within the sprawling architectural scale of Taj's coastal property" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ITC Grand Chola Gala Execution", description: "Bilingual English/Hindi bridging for high-net-worth pan-India families in grand ballroom settings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ECR Acoustic Centralization", description: "Defeating massive beachside sound dispersion and humidity challenges in sprawling coastal resorts" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Summit Moderation", description: "Unscripted hosting for elite international leadership symposiums and private MNC offsites" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Chennai Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 5+ years and 700+ shows. Specialist in Chennai's coastal luxury sector, executing flawless ceremonies at Taj Fisherman's Cove and ITC Grand Chola.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Taj Fisherman's Cove Protocol",
    "ITC Grand Chola Logistics",
    "Coastal Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Pan-India Corporate Demographics",
    "South India Wedding Flow",
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
  "@id": `https://yashsoni.in/anchor-in-chennai/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Chennai | Taj & ITC Grand Chola Emcee — Yash Soni`,
  headline: `Chennai's Premier Event Anchor for Ultra-Luxury Coastal Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Chennai destination weddings. Mastering prestigious properties like Taj Fisherman's Cove and ITC Grand Chola with unscripted VIP executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Tamil Nadu` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Chennai | Luxury Coastal Wedding Emcee`,
  description: `Looking for the best anchor in Chennai? Anchor Yash Soni — 4.9★. Expert for Taj Fisherman's Cove, ITC Grand Chola, and ultra-prestigious coastal weddings. Flawless unscripted bilingual hosting for VIP events.`,
  keywords: [
    "anchor in chennai",
    "best anchor in chennai",
    "wedding anchor chennai",
    "taj fisherman's cove event host",
    "itc grand chola anchor",
    "leela palace chennai destination wedding anchor",
    "bilingual english hindi anchor chennai",
    "luxury event emcee tamil nadu",
    "corporate summit host chennai",
    "ecr destination anchor",
    "cultural heritage host chennai",
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
    title: `Best Anchor in Chennai | Elite Coastal Destination Wedding Host`,
    description: `4.9★ rated. Chennai's premium anchor for highly prestigious destination weddings spanning the ECR luxury ridge. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Chennai — Anchor Yash Soni at Coastal Luxury Resorts` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Chennai | Anchor Yash Soni — 4.9★`,
    description: `Taj Fisherman's Cove. ITC Grand Chola. Chennai's premier bilingual event anchor for exclusive VIP Sangeets and heavily restricted coastal ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Chennai | Coastal VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Coastal Wedding, VIP Events, ${CITY}, Tamil Nadu, India`,
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
  { q: "Who is the best anchor for weddings and events?", a: "Anchor Yash Soni is a premium event host with 700+ shows hosted across India. With a 4.9? rating across 50+ client reviews, he specialises in luxury weddings, high-energy Sangeets, corporate award nights, and VIP events. Bilingual in Hindi and English, and fluent in cultural traditions." },
  { q: "Which anchor is best for destination weddings?", a: "Anchor Yash Soni is a top choice for destination weddings. He hosts events across premium venues and travels across India for the right events. Travel logistics and accommodation are discussed during the first booking call." },
  { q: "How to find a bilingual (Hindi/English) anchor in India?", a: "Anchor Yash Soni switches effortlessly between Hindi for the emotions, English for the class, and regional touches to make the elders smile. For NRI families with international guests, the transitions are completely seamless." },
  { q: "Why hire a professional anchor instead of a family member?", a: "Because a professional like Anchor Yash never uses a paper script (zero in 700+ shows). If the PA fails, he turns it into a crowd moment. If the bride needs 10 more minutes, nobody in the room knows. He is your insurance policy against awkward silences � the difference between an event people attend and one they remember." },
  { q: "What does an event anchor do if there is a technical failure?", a: "Technical failures, power cuts, last-minute schedule changes, and delayed brides are all handled without the guests noticing. For Anchor Yash, crisis management under pressure is a core competency, not an afterthought." },
  {
    q: "How do you handle the massive outdoor sound dispersion of Chennai's ECR beachfront properties?",
    a: "This is the cardinal rule of coastal hosting. The second you are on a 10-acre ECR lawn, the guests want to drift. A basic setup fails. I utilize 'Crowd Compression'—speeding up the timeline, initiating physical interaction, and detonating a massive dancing session that pulls the dispersed VIPs into a tight, high-energy core."
  },
  {
    q: "Our guest list includes international dignitaries and board directors. Can you match this tone?",
    a: "Completely. Elite properties like ITC Grand Chola and The Leela Palace do not need 'shouting MCs'. They require an Executive Moderator. I deliberately drop standard gimmicks. I host with formal, razor-sharp, unscripted English that respects the pedigree of the VIPs, perfectly bridging high-level networking with eventual massive celebration."
  },
  {
    q: "The humidity on Chennai's coast can drain guest energy. How do you adapt?",
    a: "I execute 'Phase-Based Pacing'. I allow for formal, seated elegance during the high-humidity sunset phase, then once the temperature drops slightly and the after-party begins, I deploy aggressively high-frequency energy work to 're-start' the room and drive the dance floor unhinged."
  },
  {
    q: "Do you use teleprompters or scripts during these complex multi-day Chennai itineraries?",
    a: "Never. Reading from a clipboard instantly kills raw party energy. It breaks your eye contact, and the high-net-worth audience realizes you are not in command. I memorize the family lineages, the corporate tensions, and the full timeline, enabling me to host 100% unscripted and dictate the absolute flow of the room."
  },
  {
    q: "What if the coastal rains force us to suddenly move our event from the lawns into the banquets?",
    a: "Chennai weather systems are volatile. If rain forces us to rip down an outdoor setup and compress an sprawling Sangeet into an indoor ballroom dynamically, I operate with zero panic. Because I am purely unscripted, I instantly recalibrate the pacing, compress the performances on the fly, and reconstruct the hype natively indoors."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Chennai?",
    a: "Travel to Chennai is completely streamlined. I am constantly active across the South India luxury wedding circuit, so there are zero hidden logistical risks. All exact requirements are calculated and provided instantly when blocking dates."
  },
  {
    q: "When should we freeze your dates for a Chennai coastal event?",
    a: "Chennai’s premium destination windows (especially for Fisherman's Cove and Grand Chola) vanish over 12 months in advance for big weekends. Lock my dates the instant your luxury venue contract is confirmed."
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
  name: `How to Hire the Best Anchor in Chennai`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Chennai.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Chennai.` },
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
