import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-hyderabad/layout.jsx
// Royal Nizam Heritage & Ramoji Mega Scale Wedding Anchor

const CITY     = "Hyderabad";
const REGION   = "Telangana";
const SLUG     = "anchor-in-hyderabad";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "17.3850";
const LNG      = "78.4867";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/hyderabad_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Hyderabad",
    "Best Wedding Anchor Hyderabad",
    "Taj Falaknuma Wedding Anchor",
    "Ramoji Film City Event Emcee",
    "Hyderabad Destination Wedding Anchor",
    "HITEC City Corporate Host",
    "Bilingual Emcee Hyderabad",
    "Marwari Wedding Anchor Hyderabad",
    "Luxury Event Host Telangana",
    "Nizam Heritage Wedding Anchor",
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
    streetAddress: "Banjara Hills Hub",
    addressLocality: CITY,
    addressRegion: "Telangana",
    addressCountry: "IN",
    postalCode: "500034",
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
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Secunderabad" },
    { "@type": "AdministrativeArea", name: "Telangana" },
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
      author: { "@type": "Person", name: "Reddy Family" },
      reviewBody: "Anchoring at Taj Falaknuma requires absolute vocal command without resorting to shouting. Yash understood the architectural authority of the palace perfectly. He bridged our North and South Indian relatives flawlessly.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Director — Media Conglomerate" },
      reviewBody: "Ramoji Film City is so incredibly large that you need an anchor with pure stage dominance to stop a 2,000-person crowd from fracturing. Yash held the event together start to finish with no script.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Hyderabad",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Falaknuma Luxury Hosting", description: "Bespoke formal anchoring bridging Nizam heritage and global elite standards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ramoji Mega-Scale Wedding Emcee", description: "Extreme physical and vocal crowd control for 2,000+ guest film city productions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HITEC City Corporate Anchor", description: "Tech industry and medical summit executive hosting in flawless English" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Banjara Hills Intimate Sangeet", description: "High-energy, interactive Sangeet hosting for premium private club events" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Hyderabad Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor and emcee with 5+ years and 700+ shows. Specialist in Hyderabad's extreme event dichotomy: commanding the intimate royal protocol of Taj Falaknuma and the sprawling mega-scale productions of Ramoji Film City.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Taj Falaknuma Palace Heritage Protcol",
    "Ramoji Film City Mega Events",
    "Bilingual Hindi English Emceeing",
    "Tech Summit Moderation HITEC City",
    "North/South Cross Cultural Integration",
    "Extravagant Marwari Weddings in Telangana",
    "High-Net-Worth VIP Crowd Management",
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
  "@id": `https://yashsoni.in/anchor-in-hyderabad/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Hyderabad | Taj Falaknuma & Ramoji Host — Yash Soni`,
  headline: `Hyderabad's Most Trusted Event Anchor for Falaknuma Palace, Ramoji Film City & Corporate Summits`,
  description: `Anchor Yash Soni — 4.9★ rated, 700+ shows. Premier anchor for Hyderabad luxury weddings. Mega-event specialist for Ramoji Film City. Flawless bilingual English/Hindi execution. Zero scripts.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Telangana` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Hyderabad | Luxury Wedding Emcee — Yash Soni`,
  description: `Looking for the best anchor in Hyderabad? Anchor Yash Soni — 4.9★ rated, 700+ shows. Expert for Taj Falaknuma Palace, Ramoji Film City weddings, and HITEC City corporate summits. Flawless elite bilingual hosting.`,
  keywords: [
    "anchor in hyderabad",
    "best anchor in hyderabad",
    "wedding anchor hyderabad",
    "taj falaknuma wedding anchor",
    "ramoji film city event host",
    "corporate anchor hyderabad",
    "hitec city tech summit host",
    "bilingual english hindi anchor hyderabad",
    "marwari wedding anchor hyderabad",
    "destinaton wedding anchor telangana",
    "hni wedding host hyderabad",
    "luxury event emcee telangana",
    "banjara hills wedding host",
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
    title: `Best Anchor in Hyderabad | Elite Wedding & Corporate Host`,
    description: `4.9★ rated. 700+ shows. Hyderabad's most trusted anchor for Taj Falaknuma Palace and Ramoji Film City mega-events. Impeccable bilingual English/Hindi execution.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Hyderabad — Anchor Yash Soni at Taj Falaknuma Palace` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Hyderabad | Anchor Yash Soni — 4.9★`,
    description: `Taj Falaknuma. Ramoji Film City. HITEC City. Hyderabad's premier bilingual event anchor. 700+ shows. Zero scripts.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Hyderabad | Luxury Heritage Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Luxury Wedding, Mega Events, Corporate Emcee, ${CITY}, Telangana, India`,
    "DC.coverage": `${CITY}, Telangana, India`,
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
    q: "Who is the best anchor for luxury and high-profile events in Hyderabad?",
    a: "Anchor Yash Soni is highly sought after across Hyderabad's elite tier. With 700+ shows and a perfectly calibrated bilingual execution, he provides the deep cultural respect required for Taj Falaknuma weddings and the intellectual sharpness necessary for HITEC City summits."
  },
  {
    q: "Are you familiar with the protocol required for properties like Taj Falaknuma Palace?",
    a: "Absolutely. Taj properties—especially Falaknuma—mandate an 'understated authority.' You cannot use loud, club-style entertainment here. The host must act as the dignified voice of the family, projecting immense respect for the 19th-century architecture while keeping the event seamlessly on schedule."
  },
  {
    q: "Can you manage events at Ramoji Film City where the guest count exceeds 2,000?",
    a: "Yes. Mega-scale events require an entirely different skill set than indoor banquets. Sound dissipates, and guests tend to scatter. At Ramoji, I use aggressive crowd-condensing psychology and specific vocal projection to ensure 2,000 people feel like they are part of a tight, unified celebration."
  },
  {
    q: "Ours is a cross-cultural Marwari and South Indian wedding. How do you bridge the gap?",
    a: "This is the defining dynamic of modern Hyderabad weddings. I use rapid bilingual code-switching. I conduct the ritual aspects in deeply respectful Hindi to satisfy the Marwari elders, but transition instantly to polished, metropolitan English to ensure the local South Indian family and corporate guests are fully engaged."
  },
  {
    q: "Do you use teleprompters or paper scripts for corporate summits?",
    a: "Never. All my corporate anchoring is 100% unscripted. Executive audiences at HITEC city conferences immediately notice when a host is reading. By internalizing the run-sheet, I maintain constant eye contact and can dynamically adjust the timeline if speakers run over."
  },
  {
    q: "Do you host high-energy Sangeet events in Banjara Hills or Jubilee Hills?",
    a: "Yes. For elite metropolitan Sangeets, the key is momentum. I drive the timeline aggressively, transitioning the crowd from seated family dinner performances directly into a high-voltage dance floor environment without letting the energy drop."
  },
  {
    q: "Is it difficult to book you for dates in peak winter?",
    a: "Because I travel Pan-India and anchor extensively across the Rajasthan heritage properties, my winter calendar books out incredibly fast. When you lock a premium Hyderabad venue, I recommend WhatsApping me on the very same day to secure your dates."
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
  name: `How to Hire the Best Anchor in Hyderabad`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Hyderabad.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Hyderabad.` },
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
