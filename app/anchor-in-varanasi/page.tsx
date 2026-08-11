import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-varanasi/layout.jsx
// Ultra-Luxury Heritage & Spiritual Destination Anchor Layout

const CITY     = "Varanasi";
const REGION   = "Uttar Pradesh";
const SLUG     = "anchor-in-varanasi";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "25.3176";
const LNG      = "83.0062";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/varanasi_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Varanasi",
    "Best Wedding Anchor Varanasi",
    "BrijRama Palace Wedding Emcee",
    "Taj Nadesar Palace Anchor",
    "Ghats Wedding Host Varanasi",
    "Spiritual Destination Wedding Anchor UP",
    "Bilingual Emcee Kashi",
    "Luxury Heritage Event Host",
    "Corporate Anchor Varanasi",
    "NRI Destination Wedding Varanasi",
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
    streetAddress: "Kashi Heritage Corridor",
    addressLocality: CITY,
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
    postalCode: "221001",
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
    { "@type": "City", name: "Varanasi" },
    { "@type": "City", name: "Prayagraj" },
    { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    { "@type": "Country", name: "India" },
  ],
  
  review: [
    {
      "@type": "Review",
      
      author: { "@type": "Person", name: "NRI Family — London" },
      reviewBody: "Hosting a wedding on the ghats of Varanasi at BrijRama Palace is incredibly complex logistically. We needed someone who could translate the immense depth of the rituals for our UK guests without turning it into a lecture. Yash's bilingual anchoring was absolute perfection. He commanded the space elegantly.",
    },
    {
      "@type": "Review",
      
      author: { "@type": "Person", name: "Corporate Group — Mumbai" },
      reviewBody: "We held an executive strategy retreat and spiritual trip in Varanasi. Yash anchored our evening panels at Taj Nadesar Palace. He doesn't rely on paper notes at all. His ability to moderate high-level discussions while respecting the city's aura is unmatched.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Varanasi",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ghats Ceremony Hosting", description: "Bilingual English/Hindi ceremonial bridging during complex spiritual Varmalas on the Ganges" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Nadesar & BrijRama Protocol", description: "Navigating ultra-luxury heritage property constraints and VIP guest list management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NRI Sangeet Management", description: "Creating explosive, dignified Sangeet energy crossing cultural boundaries without 'club' gimmicks" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Corporate Summits", description: "Unscripted moderation for highly intellectual leadership retreats visiting Kashi" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Varanasi Emcee"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 5+ years and 700+ shows. Specialist in Varanasi's highly spiritual heritage sector, executing flawless cross-cultural ceremonies at Taj Nadesar Palace and BrijRama.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "BrijRama Palace Logistics",
    "Taj Nadesar Protocol",
    "Ganges Ghats Acoustics",
    "Spiritual Ceremony Moderation",
    "Bilingual NRI Hosting",
    "Heritage Cross-Cultural Events",
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
  "@id": `https://yashsoni.in/anchor-in-varanasi/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Varanasi | Taj Nadesar & BrijRama Emcee — Yash Soni`,
  headline: `Varanasi's Premier Event Anchor for Ultra-Luxury Spiritual Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Varanasi destination weddings. Mastering prestigious properties like Taj Nadesar Palace and BrijRama with unscripted bilingual hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Uttar Pradesh` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Varanasi | Heritage Spiritual Wedding Host`,
  description: `Looking for the best anchor in Varanasi? Anchor Yash Soni — 4.9★. Expert for Taj Nadesar Palace, BrijRama, and heritage Kashi weddings. Flawless bilingual hosting merging modern VIPs with deep traditions.`,
  keywords: [
    "anchor in varanasi",
    "best anchor in varanasi",
    "wedding anchor varanasi",
    "taj nadesar palace event host",
    "brijrama palace wedding anchor",
    "heritage destination wedding anchor up",
    "bilingual english hindi anchor kashi",
    "spiritual wedding anchor varanasi",
    "nri luxury event emcee varanasi",
    "corporate retreat host varanasi",
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
    title: `Best Anchor in Varanasi | Elite Spiritual Heritage Wedding Host`,
    description: `4.9★ rated. Varanasi's premium anchor for highly profound destination weddings at Taj Nadesar Palace and BrijRama. Unscripted bilingual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Varanasi — Anchor Yash Soni at Kashi Heritage Properties` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Varanasi | Anchor Yash Soni — 4.9★`,
    description: `BrijRama Palace. Taj Nadesar. Varanasi's premier bilingual event anchor bridging international VIPs with deep spiritual traditions on the Ganges.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Varanasi | Heritage Spiritual VIP Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Spiritual Wedding, VIP Events, ${CITY}, Uttar Pradesh, India`,
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
  {
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Varanasi?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Varanasi. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Varanasi?",
    a: "Yash Soni specialises in premium, high-energy events. In Varanasi, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Varanasi?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Varanasi feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Varanasi, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Varanasi?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Varanasi, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Varanasi, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Varanasi is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
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
  name: `How to Hire the Best Anchor in Varanasi`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Varanasi.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Varanasi.` },
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
