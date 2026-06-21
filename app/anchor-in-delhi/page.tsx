import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-delhi/layout.jsx
// SERVER COMPONENT — SEO metadata only. All JSON-LD schemas inside.

const CITY       = "Delhi";
const SLUG       = "anchor-in-delhi";
const DOMAIN     = "yashsoni.in";
const FULL_URL   = `https://${DOMAIN}/${SLUG}`;
const LAT        = "28.6139";
const LNG        = "77.2090";
const OG_IMAGE   = `https://${DOMAIN}/backgrounds/delhi_bg.webp`;

// ─── JSON-LD SCHEMAS ───────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type":    "ProfessionalService",
  "@id":      `${FULL_URL}/#business`,
  name:        `Anchor Yash Soni — Best Anchor in ${CITY} NCR`,
  alternateName: [
    `Anchor in ${CITY}`,
    `Wedding Anchor ${CITY} NCR`,
    `Corporate Emcee ${CITY}`,
    `Corporate Event Anchor ${CITY}`,
    `Sangeet Host ${CITY}`,
    `Punjabi Sangeet Anchor ${CITY}`,
    "Taj Palace Delhi Wedding Anchor",
    "Chhatarpur Farm Wedding Emcee",
    "Aerocity Corporate Host",
    "ITC Maurya Event Anchor",
  ],
  description: `700+ Premium Shows Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
  url:         FULL_URL,
  telephone:   "+917737877978",
  priceRange:  "₹₹₹₹",
  image:        OG_IMAGE,
  sameAs: [
    "https://www.instagram.com/yashsoni_official",
    "https://www.youtube.com/@anchorYashSoni",
  ],
  address: {
    "@type":           "PostalAddress",
    addressLocality:   CITY,
    addressRegion:     "Delhi",
    addressCountry:    "IN",
    postalCode:        "70001",
  },
  geo: {
    "@type":    "GeoCoordinates",
    latitude:   LAT,
    longitude:  LNG,
  },
  openingHoursSpecification: {
    "@type":     "OpeningHoursSpecification",
    dayOfWeek:   ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens:       "09:00",
    closes:      "21:00",
  },
  areaServed: [
    { "@type": "City",               name: CITY },
    { "@type": "City",               name: "New Delhi" },
    { "@type": "City",               name: "Gurugram" },
    { "@type": "City",               name: "Noida" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
    { "@type": "Country",            name: "India" },
  ],
  aggregateRating: {
    "@type":       "AggregateRating",
    ratingValue:   "4.9",
    reviewCount:   "200",
    bestRating:    "5",
    worstRating:   "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Delhi NCR",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Farmhouse Wedding Anchor Delhi", description: "Elite unscripted hosting for massive Chhatarpur farm weddings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Punjabi Sangeet Emcee Delhi", description: "Bilingual, high-energy hosting for massive Sangeets" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Summit Anchor Delhi", description: "Protocol-aware VIP hosting for Aerocity and Diplomatic Enclave summits" } },
    ],
  },
};

const personSchema = {
  "@context":    "https://schema.org",
  "@type":       "Person",
  "@id":         `https://${DOMAIN}/#person`,
  name:          "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash"],
  jobTitle:      "Professional Event Anchor & Corporate Emcee",
  description:   `Yash Soni is a high-profile corporate and wedding anchor with 5+ years of unscripted stage presence. He regularly commands expansive Chhatarpur farm weddings and Fortune 500 summits at properties like Taj Palace Delhi, The Leela Palace, and ITC Maurya.`,
  url:           `https://${DOMAIN}`,
  image:         `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone:     "+917737877978",
  knows:         CITY,
  knowsAbout: [
    "Corporate Event Anchoring",
    "Luxury Wedding Hosting",
    "Bilingual Emceeing",
    "VIP & Celebrity Discretion",
    "Live Event Crisis Management",
    "Unscripted Stage Mechanics",
    "Massive Farmhouse Weddings",
    "Punjabi Sangeet Hosting",
    "Aerocity Corporate Summits",
  ],
  award: "4.9★ Rated — 50+ Five-Star Reviews",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: `Anchor in ${CITY} NCR`,item: FULL_URL },
  ],
};

// ─── METADATA EXPORT ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),

  title: `Best Anchor in Delhi NCR | Wedding Host & Corporate Emcee — Yash Soni`,

  description:
    `Looking for the best anchor in Delhi NCR? Anchor Yash Soni — 4.9★ rated, 700+ shows. Elite corporate emcee & massive Chhatarpur farm wedding host. Bilingual, zero paper scripts, and VIP-trusted.`,

  keywords: [
    // Core identity
    "anchor in delhi",
    "anchor in delhi ncr",
    "best anchor in delhi",
    "corporate emcee delhi",
    "corporate anchor delhi ncr",
    "wedding anchor delhi",
    "event anchor delhi",
    "female anchor in delhi", // Capture lateral traffic
    "male anchor in delhi",
    "emcee delhi",
    "event host delhi",
    // Venue-specific — high intent
    "taj palace delhi wedding anchor",
    "itc maurya corporate emcee",
    "chhatarpur farm wedding anchor",
    "aerocity corporate event anchor",
    "roseate house wedding emcee",
    "the leela palace chanakyapuri anchor",
    // Event type
    "luxury wedding anchor delhi",
    "punjabi sangeet host delhi",
    "farmhouse wedding anchor delhi ncr",
    "award night anchor delhi",
    "diplomatic summit emcee delhi",
    "bilingual anchor delhi",
    // Semantic/long-tail
    "top 10 anchors in delhi",
    "professional emcee in delhi for corporate events",
    "celebrity anchor in delhi",
    "fluent english anchor in delhi",
    "hindi english anchor ncr",
    // Branded
    "anchor yash",
    "anchor yash soni",
    "yash soni anchor",
  ],

  alternates: {
    canonical: FULL_URL,
  },

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  openGraph: {
    type:        "website",
    locale:      "en_IN",
    url:          FULL_URL,
    siteName:    "Anchor Yash Soni",
    title:       `Best Anchor in Delhi NCR | Wedding Host & Corporate Emcee`,
    description: `4.9★ rated. 700+ shows. Delhi NCR's premier unscripted anchor for massive Chhatarpur farm weddings, high-energy Punjabi Sangeets, and Aerocity VIP corporate summits.`,
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    `Anchor Yash Soni — Best Event Anchor in Delhi NCR`,
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    site:        "@yashsonianchor",
    creator:     "@yashsonianchor",
    title:       `Best Anchor in Delhi NCR | Corporate & Wedding Emcee`,
    description: `Massive Farm Weddings. Aerocity Summits. Delhi NCR's most trusted elite anchor — 700+ shows, 4.9★ rated.`,
    images:      [OG_IMAGE],
  },

  other: {
    "geo.region":    "IN-DL",
    "geo.placename": `${CITY}, Delhi, India`,
    "geo.position":  `${LAT};${LNG}`,
    ICBM:            `${LAT}, ${LNG}`,
    "DC.subject":    `Corporate Emcee, Wedding Anchor, Event Host, VIP Events, Farmhouse Weddings, ${CITY}, Delhi, India`,
    "rating":        "4.9",
    "reviewCount":   "200",
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
    q: "Who is the best anchor for massive weddings in Delhi NCR?",
    a: "Anchor Yash Soni is highly sought after for large-scale Delhi NCR events. With a 4.9★ rating across 700+ shows, he brings the high-energy command required for massive Chhatarpur farm weddings and the sophisticated protocol needed for properties like Taj Palace and ITC Maurya."
  },
  {
    q: "Do you host high-energy Punjabi Sangeets in Delhi?",
    a: "Yes. Delhi Sangeets operate at a completely different energy level. They require an anchor who refuses to use paper scripts, feeds off massive crowds, and can seamlessly coordinate with large dhol troupes and complex family performances without losing control of the timeline."
  },
  {
    q: "Can you handle corporate summits with politicians and VIPs?",
    a: "Absolutely. Yash has extensive experience hosting protocol-heavy events in Delhi's Diplomatic Enclave and Aerocity. He understands the strict stage chronologies, the VIP acknowledgment hierarchies, and the precise English/Hindi register required for government and corporate elites."
  },
  {
    q: "Are you comfortable hosting outdoor events at Chhatarpur Farms?",
    a: "Yes. Open-air farmhouses present unique acoustic and crowd-control challenges. Yash uses advanced spatial crowd-work techniques — rather than just shouting into a mic, he physically works the zones of a massive lawn to unify a decentralized crowd into a single moment."
  },
  {
    q: "Do you travel to Gurugram and Noida for events?",
    a: "Yes. Anchor Yash covers the entire Delhi NCR region, including premium venues in Gurugram (like the DLF Country Club and Leela Ambiance) and massive exhibition grounds in Greater Noida."
  },
  {
    q: "How far in advance should we book for the Delhi winter wedding season?",
    a: "The Delhi peak wedding season (November to February) is the busiest in the country. Key saaya (auspicious) dates at prime venues like Roseate and Andaz book out 6 to 8 months in advance. Yash operates strictly on a first-to-confirm, advance-payment basis."
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

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://yashsoni.in/anchor-in-delhi/#webpage`,
  url: `https://${DOMAIN}/${SLUG}`,
  name: `Best Anchor in Delhi | Wedding & Event Host — Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in Delhi. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in Delhi`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Delhi.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Delhi.` },
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
