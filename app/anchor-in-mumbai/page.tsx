import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-mumbai/layout.jsx
// SERVER COMPONENT — SEO metadata only. All JSON-LD schemas inside.

const CITY       = "Mumbai";
const SLUG       = "anchor-in-mumbai";
const DOMAIN     = "yashsoni.in";
const FULL_URL   = `https://${DOMAIN}/${SLUG}`;
const LAT        = "19.0760";
const LNG        = "72.8777";
const OG_IMAGE   = `https://${DOMAIN}/backgrounds/mumbai_bg.webp`;

// ─── JSON-LD SCHEMAS ───────────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type":    "ProfessionalService",
  "@id":      `${FULL_URL}/#business`,
  name:        `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    `Anchor in ${CITY}`,
    `Wedding Anchor ${CITY}`,
    `Corporate Emcee ${CITY}`,
    `Corporate Event Anchor ${CITY}`,
    `Sangeet Host ${CITY}`,
    `Event Host ${CITY}`,
    "Taj Mahal Palace Wedding Anchor",
    "JW Marriott Sahar Corporate Emcee",
    "St Regis Mumbai Wedding Host",
    "Bandra Kurla Complex Event Anchor",
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
    addressRegion:     "Maharashtra",
    addressCountry:    "IN",
    postalCode:        "400001",
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
    { "@type": "City",               name: "Navi Mumbai" },
    { "@type": "City",               name: "Thane" },
    { "@type": "AdministrativeArea", name: "Maharashtra" },
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
    name: "Anchoring Services in Mumbai",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Summit Anchor Mumbai", description: "Elite corporate hosting for BKC and South Bombay award nights" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Wedding Anchor Mumbai", description: "Bilingual, unscripted hosting for 5-star sea-facing weddings (Taj Mahal Palace, St Regis)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grand Sangeet Host Mumbai", description: "High-energy Sangeet and reception hosting for massive luxury ballrooms" } },
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
  description:   `Yash Soni is a high-profile corporate and wedding anchor with 5+ years of unscripted stage presence. He regularly commands 10,000+ crowds and hosts elite multi-crore destination weddings and Fortune 500 summits at properties like Taj Mahal Palace, JW Marriott, and The St. Regis Mumbai.`,
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
    "NRI Wedding Management",
    "South Bombay Elite Events",
    "BKC Corporate Summits",
  ],
  award: "4.9★ Rated — 50+ Five-Star Reviews",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: `Anchor in ${CITY}`,   item: FULL_URL },
  ],
};

// ─── METADATA EXPORT ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),

  title: `Best Anchor in Mumbai | Corporate Emcee & Wedding Host — Yash Soni`,

  description:
    `Looking for the best anchor in Mumbai? Anchor Yash Soni — 4.9★ rated, 700+ shows. Elite corporate emcee for BKC & luxury wedding host for Taj Mahal Palace & St Regis. Bilingual, zero scripts, and VIP-trusted.`,

  keywords: [
    // Core identity
    "anchor in mumbai",
    "best anchor in mumbai",
    "corporate emcee mumbai",
    "corporate anchor mumbai",
    "wedding anchor mumbai",
    "event anchor mumbai",
    "female anchor in mumbai", // Often searched, good to capture lateral traffic
    "male anchor in mumbai",
    "emcee mumbai",
    "event host mumbai",
    // Venue-specific — high intent
    "taj mahal palace wedding anchor",
    "st regis mumbai sangeet host",
    "jw marriott sahar corporate emcee",
    "bkc corporate event anchor",
    "sofitel bkc anchor",
    "trident nariman point emcee",
    // Event type
    "luxury wedding anchor mumbai",
    "south bombay wedding host",
    "nri wedding anchor mumbai",
    "sangeet host mumbai",
    "award night anchor mumbai",
    "product launch emcee mumbai",
    "bilingual anchor mumbai",
    // Semantic/long-tail
    "top 10 anchors in mumbai",
    "professional emcee in mumbai for corporate events",
    "celebrity anchor in mumbai",
    "fluent english anchor in mumbai",
    "hindi english anchor mumbai",
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
    title:       `Best Anchor in Mumbai | Corporate Emcee & Wedding Host`,
    description: `4.9★ rated. 700+ shows. Mumbai's premier unscripted anchor for VIP corporate summits in BKC and luxury sea-facing weddings at Taj Mahal Palace and The St. Regis.`,
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    `Anchor Yash Soni — Best Event Anchor in Mumbai`,
      },
    ],
  },

  twitter: {
    card:        "summary_large_image",
    site:        "@yashsonianchor",
    creator:     "@yashsonianchor",
    title:       `Best Anchor in Mumbai | Corporate & Wedding Emcee`,
    description: `Taj Mahal Palace. BKC Summits. The St. Regis. Mumbai's most trusted elite anchor — 700+ shows, 4.9★ rated.`,
    images:      [OG_IMAGE],
  },

  other: {
    "geo.region":    "IN-MH",
    "geo.placename": `${CITY}, Maharashtra, India`,
    "geo.position":  `${LAT};${LNG}`,
    ICBM:            `${LAT}, ${LNG}`,
    "DC.subject":    `Corporate Emcee, Wedding Anchor, Event Host, VIP Events, ${CITY}, Maharashtra, India`,
    "rating":        "4.9",
    "reviewCount":   "200",
  },
};

// ─── LAYOUT ────────────────────────────────────────────────────────────────


const FAQS = [
  {
    q: "Who is the best anchor for luxury events in Mumbai?",
    a: "Anchor Yash Soni is widely regarded as a premier choice for high-end events in Mumbai. Rated 4.9★ across 50+ reviews, he specializes in elite corporate events in BKC and luxury weddings at iconic properties like the Taj Mahal Palace and The St. Regis."
  },
  {
    q: "Do you host corporate award nights and summits in Mumbai?",
    a: "Yes. Events at properties like the Trident Nariman Point or Grand Hyatt require an anchor who understands corporate tonality. The register used for an FMCG awards gala is distinctly different from a Sangeet, and Yash masters this switch effortlessly."
  },
  {
    q: "How does the travel work for Mumbai events?",
    a: "Mumbai is a major hub. Yash travels nationwide and globally for events. For Mumbai bookings, travel and local hospitality (usually at the same hotel as the event) are handled by the client. Yash always arrives the day prior to ensure zero logistical delays."
  },
  {
    q: "Can you handle a bilingual crowd of NRIs and local guests?",
    a: "Absolutely. Yash is completely bilingual, switching seamlessly between polished English and sophisticated Hindi. This ensures international delegates, NRI family members, and local guests all feel deeply included and engaged."
  },
  {
    q: "Do you use a script for hosting?",
    a: "No. Yash is famous for his zero-paper-script approach. Everything is managed live through crowd psychology and meticulous pre-event research. This allows for real-time interaction and organic, unforgettable moments that scripted anchors simply cannot deliver."
  },
  {
    q: "How far in advance should we book for a Mumbai wedding season date?",
    a: "Mumbai's peak season (November to February) and premium auspicious dates fill up 6 to 8 months in advance. Dates are secured strictly on an advance-payment basis. Reach out via WhatsApp as soon as your venue is confirmed."
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
  "@id": `https://yashsoni.in/anchor-in-mumbai/#webpage`,
  url: `https://${DOMAIN}/${SLUG}`,
  name: `Best Anchor in Mumbai | Wedding & Event Host — Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in Mumbai. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in Mumbai`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Mumbai.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Mumbai.` },
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
