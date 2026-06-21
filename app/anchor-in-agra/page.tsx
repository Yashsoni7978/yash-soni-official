import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-agra/layout.jsx
// Ultra-Luxury Heritage & Taj Mahal Destination Anchor Layout

const CITY     = "Agra";
const REGION   = "Uttar Pradesh";
const SLUG     = "anchor-in-agra";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "27.1767";
const LNG      = "78.0081";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/agra_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Agra",
    "Best Wedding Anchor Agra",
    "Agra Destination Wedding Host",
    "Oberoi Amarvilas Wedding Anchor",
    "Taj Mahal View Event Emcee",
    "Heritage Wedding Anchor Uttar Pradesh",
    "Bilingual Emcee Agra",
    "Luxury Royal Wedding Host",
    "Corporate Retreat Anchor Agra",
    "ITC Mughal Wedding Anchor",
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
    streetAddress: "Taj East Gate Road Corridors",
    addressLocality: CITY,
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
    postalCode: "282001",
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
    { "@type": "City", name: "Agra" },
    { "@type": "City", name: "Mathura" },
    { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
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
      author: { "@type": "Person", name: "Corporate Director — Delhi NCR" },
      reviewBody: "Hosting a sunset reception at The Oberoi Amarvilas requires an anchor who understands immense prestige. Yash’s unscripted English was flawless, and he managed the transition into the evening Sangeet with complete authority. He commands the room effortlessly.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Singhania Family" },
      reviewBody: "We had international guests and traditional elders flying into ITC Mughal. Yash’s bilingual code-switching was perfect. He bridged the cultural gap so naturally. No awkward jokes, no loud club behavior—just pure, refined stage presence.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Agra",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oberoi Amarvilas Hosting", description: "Executing highly prestigious, VIP-heavy events with extreme architectural restrictions and noise limits" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cross-Cultural Royal Weddings", description: "Bilingual English/Hindi bridging for international guests mixed with deep Indian traditions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Corporate Offsites", description: "Unscripted moderation for high-stakes leadership symposiums holding retreats in Agra" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ITC Mughal Massive Sangeets", description: "Pacing sprawling guest lists and generating intense Sangeet energy in luxury mega-resorts" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Agra Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 5+ years and 700+ shows. Specialist in Agra's highly prestigious heritage sector, executing flawless bilingual ceremonies at The Oberoi Amarvilas and ITC Mughal.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Oberoi Amarvilas Event Protocol",
    "Taj Mahal Proximity Restrictions",
    "Bilingual VIP Moderation",
    "Heritage Architectural Acoustics",
    "Delhi NCR Executive Events",
    "Mughal Era Property Timelines",
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
  "@id": `https://yashsoni.in/anchor-in-agra/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Agra | Oberoi Amarvilas & Heritage Host — Yash Soni`,
  headline: `Agra's Premier Event Anchor for Ultra-Luxury Taj Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Agra destination weddings. Mastering prestigious layouts like The Oberoi Amarvilas and ITC Mughal with unscripted executive hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Uttar Pradesh` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Agra | Heritage Destination Wedding Emcee`,
  description: `Looking for the best anchor in Agra? Anchor Yash Soni — 4.9★. Expert for The Oberoi Amarvilas, ITC Mughal, and ultra-prestigious destination weddings. Flawless unscripted bilingual hosting for extreme VIP events.`,
  keywords: [
    "anchor in agra",
    "best anchor in agra",
    "wedding anchor agra",
    "oberoi amarvilas event host",
    "itc mughal agra wedding anchor",
    "heritage destination wedding anchor up",
    "bilingual english hindi anchor agra",
    "royal wedding anchor agra",
    "luxury event emcee taj mahal",
    "delhi ncr wedding host agra",
    "corporate retreat host agra",
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
    title: `Best Anchor in Agra | Elite Heritage Destination Wedding Host`,
    description: `4.9★ rated. Agra's premium anchor for highly prestigious destination weddings at The Oberoi Amarvilas and ITC Mughal. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Agra — Anchor Yash Soni at Oberoi Amarvilas` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Agra | Anchor Yash Soni — 4.9★`,
    description: `The Oberoi Amarvilas. ITC Mughal. Agra's premier bilingual event anchor for exclusive VIP Sangeets and highly restricted heritage ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Agra | Heritage VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Heritage Wedding, VIP Events, ${CITY}, Uttar Pradesh, India`,
    "DC.coverage": `${CITY}, Uttar Pradesh, India`,
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
    q: "How do you handle the strict acoustic/noise ordinances around heritage zones like the Taj East Gate?",
    a: "This is the true test of a heritage anchor. Properties near the Taj Mahal have aggressive volume limiters to protect the monument. You cannot rely on a 100-decibel DJ to create the energy. Instead, I use 'Psychological Momentum'—intense timeline pacing, physical crowd interaction, and deep vocal projection to manufacture a massive party atmosphere entirely organically, without violating venue limits."
  },
  {
    q: "Our Agra guest list is highly exclusive—mostly C-suite executives and VIP families. Can you match this tone?",
    a: "Completely. A VIP wedding doesn't need a high-pitched 'hype man'; it needs an Executive Moderator. I drop the standard 'wedding tropes' and host with sharp, highly conversational, unscripted English that treats the VIPs with intellectual respect, immediately breaking the sterile barrier between the stage and the audience."
  },
  {
    q: "Half our guests are flying in from abroad, and half are traditional relatives. Can you manage both?",
    a: "Absolutely. This 'Cross-Border Collision' is my primary specialty. I provide flawless, executive-grade English anchoring to ensure your international guests understand the nuance of the Indian rituals, while seamlessly code-switching into deep, respectful Hindi to honor the local elders. Neither side ever feels excluded."
  },
  {
    q: "Do you use scripts during a chaotic multi-family Sangeet?",
    a: "Never. Scripts destroy the raw energy of an intimate Sangeet. When you read from a clipboard, you break eye contact with the audience. I memorize the family dynamics, the performance cue-sheet, and the overarching timeline, allowing me to host 100% unscripted. This means I can react instantly to an unexpected joke or an impromptu VIP toast."
  },
  {
    q: "Properties like ITC Mughal are massive. How do you keep the crowd together across huge lawns?",
    a: "Sprawling venues cause 'Audience Drift', where guests split off to the bar, the buffet, and the corners. I act as the central timeline engine. Using specific vocal pacing and hyper-interactive stage movement, I actively 'stitch' the event together, pulling the fragmented crowd back into a single, high-energy focal point near the stage."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Agra?",
    a: "Because I am heavily active across the Delhi-NCR and Rajasthan corridors, Agra is incredibly accessible for my team. The travel logistics via the Expressway are completely streamlined. There are no hidden flight complications, and the exact rider is provided instantly upon booking."
  },
  {
    q: "When should we freeze your dates for an Agra wedding?",
    a: "Agra’s destination season aligns directly with the absolute peak winter dates of North India (October through March). The premium properties vanish over a year in advance. The exact moment your luxury venue is locked, send me a WhatsApp to initiate the calendar block."
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
  name: `How to Hire the Best Anchor in Agra`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Agra.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Agra.` },
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
