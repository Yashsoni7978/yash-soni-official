import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-haridwar/layout.jsx
// Ultra-Luxury Spiritual Heritage Destination Anchor Layout

const CITY     = "Haridwar";
const REGION   = "Uttarakhand";
const SLUG     = "anchor-in-haridwar";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "29.9457";
const LNG      = "78.1642";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/haridwar_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Haridwar",
    "Best Wedding Anchor Haridwar",
    "Haridwar Destination Wedding Emcee",
    "Pilibhit House Wedding Anchor",
    "Ganges Luxury Event Host",
    "Spiritual Heritage Wedding Anchor",
    "Bilingual Emcee Haridwar",
    "VIP Ganga Aarti Host",
    "Corporate Retreat Anchor Haridwar",
    "Delhi Elite Spiritual Wedding Host",
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
    streetAddress: "Ganges Heritage Corridor",
    addressLocality: CITY,
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
    postalCode: "249401",
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
    availableLanguage: ["Hindi","English", "Sanskrit"],
    contactOption: "TollFree",
  },
  areaServed: [
    { "@type": "City", name: "Haridwar" },
    { "@type": "City", name: "Rishikesh" },
    { "@type": "AdministrativeArea", name: "Uttarakhand" },
    { "@type": "Country", name: "India" },
  ],
  
  review: [
    {
      "@type": "Review",
      
      author: { "@type": "Person", name: "NRI Destination Wedding — London" },
      reviewBody: "Hosting at Pilibhit House required absolute reverence but also the ability to run a highly sophisticated timeline. Yash was flawless. His English narration of the Ganga Aarti brought the entire international guest list to tears. Astounding stage command.",
    },
    {
      "@type": "Review",
      
      author: { "@type": "Person", name: "Corporate Heritage Initiative" },
      reviewBody: "We held an executive spiritual retreat on the ghats. Yash moderated the multi-day event with incredible grace. He possesses an authentic understanding of spiritual logistics combined with raw corporate polish.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Haridwar",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pilibhit House Hosting", description: "Executing highly prestigious, VIP events navigating extreme spiritual and luxury heritage logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "VIP Ganga Aarti Execution", description: "Bilingual English/Sanskrit/Hindi bridging translating profound rituals for elite corporate families" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Satvik Event Crowd Command", description: "Generating intense, respectful momentum for massive un-amplified spiritual retreats" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Serenity Moderation", description: "Unscripted, highly articulate hosting for high-stakes leadership symposiums by the Ganges" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Haridwar Destination Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 5+ years and 700+ shows. Specialist in Haridwar's high-altitude spiritual luxury sector, executing flawless bilingual ceremonies at Pilibhit House and the Ganges ghats.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Pilibhit House Protocol",
    "Ghat Logistics",
    "Ganges Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Delhi NCR Executive Crowds",
    "Spiritual Retreat Wedding Flow",
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
  "@id": `https://yashsoni.in/anchor-in-haridwar/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Haridwar | Pilibhit House & Ganges Emcee — Yash Soni`,
  headline: `Haridwar's Premier Event Anchor for Ultra-Luxury Spiritual Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Haridwar destination weddings. Mastering prestigious properties like Pilibhit House and the Ganges Ghats with unscripted VIP spiritual hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Uttarakhand` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Haridwar | Luxury Spiritual Wedding Emcee`,
  description: `Looking for the best anchor in Haridwar? Anchor Yash Soni — 4.9★. Expert for Pilibhit House, Ganges Aarti logistics, and ultra-prestigious spiritual destination weddings. Flawless unscripted bilingual hosting.`,
  keywords: [
    "anchor in haridwar",
    "best anchor in haridwar",
    "wedding anchor haridwar",
    "pilibhit house wedding host",
    "ganges destination wedding anchor",
    "haridwar ghat event anchor",
    "bilingual english hindi anchor haridwar",
    "luxury event emcee uttarakhand",
    "delhi ncr wedding host haridwar",
    "nri destination anchor",
    "spiritual retreat host haridwar",
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
    title: `Best Anchor in Haridwar | Elite Spiritual Destination Wedding Host`,
    description: `4.9★ rated. Haridwar's premium anchor for highly prestigious destination weddings intersecting the Ganges. Unscripted bilingual spiritual excellence.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Haridwar — Anchor Yash Soni at Ganges Luxury Properties` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Haridwar | Anchor Yash Soni — 4.9★`,
    description: `Pilibhit House. The Ganges Ghats. Haridwar's premier bilingual event anchor for exclusive VIP retreats and heavily restricted spiritual ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-UT",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Haridwar | Ganges VIP Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Spiritual Wedding, VIP Events, ${CITY}, Uttarakhand, India`,
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
    q: "Who is Anchor Yash Soni, and why should I hire him for my event in Haridwar?",
    a: "Anchor Yash Soni is a premium, professionally rated event emcee with over 700+ shows hosted across India. Known for his flawless command over audiences and zero-script hosting, he brings a highly energetic and sophisticated presence to luxury weddings, corporate galas, and VIP events in Haridwar. His 4.9★ rating across 50+ reviews is a testament to his unmatched stage presence."
  },
  {
    q: "What type of events does Yash Soni host in Haridwar?",
    a: "Yash Soni specialises in premium, high-energy events. In Haridwar, he frequently anchors luxury destination weddings, electrifying Sangeet nights, Haldi and Mehendi ceremonies, corporate award nights, product launches, and massive public concerts. He is also a sought-after sports commentator."
  },
  {
    q: "Can you host bilingual (Hindi/English) weddings and events in Haridwar?",
    a: "Absolutely. Yash is a bilingual expert who seamlessly transitions between English for international/NRI guests and corporate audiences, and warm, culturally rooted Hindi for family elders and traditional ceremonies. This ensures every single guest in Haridwar feels included and engaged."
  },
  {
    q: "What is your anchoring style, and how much experience do you have?",
    a: "With over 5 years of stage experience and 700+ live shows under his belt, Yash's style is dynamic, unscripted, and deeply interactive. He doesn't just read from a script; he reads the crowd's energy. Whether it's managing a massive corporate crowd of 10,000+ or an intimate VIP gathering in Haridwar, he ensures the event flows flawlessly even during technical glitches."
  },
  {
    q: "Do you travel for destination weddings and corporate events in Haridwar?",
    a: "Yes, Anchor Yash Soni is highly experienced in destination events. If you are planning a destination wedding, corporate retreat, or luxury Sangeet at a premium venue or resort in Haridwar, he travels nationwide to host. All travel and accommodation logistics are discussed transparently during the initial booking."
  },
  {
    q: "What are your charges for events in Haridwar, and how can I book you?",
    a: "Charges depend on the event type, scale, duration, and whether travel to Haridwar is required. Yash offers premium services for clients who value flawless execution. To check his availability for your dates and get a customized quote, you can directly contact his team via the WhatsApp button on this website or email bookings@yashsoni.in."
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
  name: `How to Hire the Best Anchor in Haridwar`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Haridwar.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Haridwar.` },
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
