import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-udaipur/layout.jsx
// SERVER COMPONENT — SEO metadata only. All JSON-LD schemas in page.jsx.
const CITY        = "Udaipur";
const SLUG        = "anchor-in-udaipur";
const DOMAIN      = "yashsoni.in";
const FULL_URL    = `https://${DOMAIN}/${SLUG}`;
const LAT         = "24.5854";
const LNG         = "73.7125";
const OG_IMAGE    = `https://${DOMAIN}/backgrounds/udaipur_bg.webp`;
// ─── JSON-LD SCHEMAS ───────────────────────────────────────────────────────
// LocalBusiness (ProfessionalService)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type":    "ProfessionalService",
  "@id":      `${FULL_URL}/#business`,
  name:        `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    `Anchor in ${CITY}`,
    `Wedding Anchor ${CITY}`,
    `Emcee ${CITY}`,
    `Destination Wedding Anchor ${CITY}`,
    `Sangeet Host ${CITY}`,
    `Event Host ${CITY}`,
    "Taj Lake Palace Wedding Anchor",
    "Oberoi Udaivilas Anchor",
    "Jagmandir Island Wedding Host",
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
    addressRegion:     "Rajasthan",
    addressCountry:    "IN",
    postalCode:        "313001",
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
    { "@type": "AdministrativeArea", name: "Rajasthan" },
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
    name: "Anchoring Services in Udaipur",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Anchor Udaipur", description: "Full-ceremony bilingual wedding anchoring at Udaipur palace venues" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sangeet Emcee Udaipur", description: "High-energy Sangeet hosting at Jagmandir Island and Oberoi Udaivilas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Anchor Udaipur", description: "Corporate galas, product launches and dealer meets in Udaipur" } },
    ],
  },
};
// Person schema for E-E-A-T
const personSchema = {
  "@context":        "https://schema.org",
  "@type":           "Person",
  "@id":             `https://${DOMAIN}/#person`,
  name:              "Yash Soni",
  alternateName:     ["Anchor Yash Soni", "Anchor Yash"],
  jobTitle:          "Professional Event Anchor & Emcee",
  description:       `Yash Soni is a professional event anchor with 5+ years of experience in wedding and corporate events. He has hosted 700+ shows across Rajasthan and India, including luxury destination weddings at Taj Lake Palace and Oberoi Udaivilas in Udaipur.`,
  url:               `https://${DOMAIN}`,
  image:             `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone:         "+917737877978",
  knows:             CITY,
  knowsAbout: [
    "Wedding Anchoring",
    "Destination Wedding Hosting",
    "Sangeet Emceeing",
    "Corporate Event Hosting",
    "Bilingual Hindi English Hosting",
    "NRI Wedding Management",
    "Lake Palace Event Hosting",
    "Rajasthan Destination Weddings",
  ],
  award: "4.9★ Rated — 50+ Five-Star Reviews",
  alumniOf: { "@type": "Organization", name: "Rajasthan Event Industry" },
};
// Breadcrumb
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",               item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: "Anchor in Rajasthan", item: `https://${DOMAIN}/anchor-in-rajasthan` },
    { "@type": "ListItem", position: 3, name: `Anchor in ${CITY}`,  item: FULL_URL },
  ],
};
// ─── METADATA EXPORT ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Udaipur | Wedding & Destination Event Host — Anchor Yash Soni`,
  description:
    `Looking for the best anchor in Udaipur? Anchor Yash Soni — 4.9★ rated, 700+ shows, 5+ years. Expert for destination weddings at Taj Lake Palace, Oberoi Udaivilas & Jagmandir Island. Bilingual Hindi/English, unscripted, NRI-experienced.`,
  keywords: [
    // Core identity — highest volume
    "anchor in udaipur",
    "best anchor in udaipur",
    "wedding anchor udaipur",
    "event anchor udaipur",
    "emcee udaipur",
    "event host udaipur",
    // Venue-specific — high intent
    "anchor taj lake palace udaipur",
    "wedding anchor oberoi udaivilas",
    "jagmandir island wedding host",
    "leela udaipur anchor",
    "raffles udaipur wedding emcee",
    "fateh garh wedding anchor",
    // Event type
    "destination wedding anchor udaipur",
    "nri wedding anchor udaipur",
    "sangeet host udaipur",
    "haldi anchor udaipur",
    "corporate anchor udaipur",
    "bilingual anchor udaipur",
    // Semantic/long-tail
    "anchor for destination wedding udaipur",
    "best emcee udaipur wedding",
    "udaipur lake palace wedding anchor",
    "udaipur destination wedding host",
    "anchor yash soni udaipur",
    "professional anchor udaipur rajasthan",
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
    title:       `Best Anchor in Udaipur | Destination Wedding & Event Host — Anchor Yash Soni`,
    description: `4.9★ rated. 700+ shows. Udaipur's most trusted anchor for lake palace weddings, Sangeets at Jagmandir Island & NRI destination events. Unscripted, bilingual, premium.`,
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    `Best Anchor in Udaipur — Anchor Yash Soni at Lake Pichola`,
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    site:        "@yashsonianchor",
    creator:     "@yashsonianchor",
    title:       `Best Anchor in Udaipur | Anchor Yash Soni — 4.9★`,
    description: `Taj Lake Palace. Oberoi Udaivilas. Jagmandir Island. Udaipur's most trusted destination wedding anchor — 700+ shows, 4.9★ rated.`,
    images:      [OG_IMAGE],
  },
  // Geo signals — Google uses these for local SEO
  other: {
    "geo.region":    "IN-RJ",
    "geo.placename": `${CITY}, Rajasthan, India`,
    "geo.position":  `${LAT};${LNG}`,
    ICBM:            `${LAT}, ${LNG}`,
    // Classification
    "DC.subject":    `Event Anchor, Wedding Anchor, Emcee, ${CITY}, Rajasthan, India`,
    // Rating signals
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
    q: "Who is the best anchor for destination weddings in Udaipur?",
    a: "Anchor Yash Soni is rated 4.9★ with 700+ shows anchored across Rajasthan, specialising in Udaipur's lake palace destination wedding circuit — Taj Lake Palace, Oberoi Udaivilas, Jagmandir Island, Leela Udaipur, Raffles, and Fateh Garh. Bilingual Hindi/English, unscripted, NRI-experienced, with zero paper scripts across his entire career.",
  },
  {
    q: "Have you hosted events at Taj Lake Palace and Jagmandir Island?",
    a: "Taj Lake Palace and Jagmandir Island are both venues with specific acoustic challenges, boat-arrival timing, and heritage sound protocols. The lake setting changes how crowd energy travels — these are not venues you learn on the job. The operational knowledge for Maharana Pratap Sthal, the terrace at Udaivilas, and the courtyard stages at Jagmandir comes from repeated work at these properties.",
  },
  {
    q: "Can you manage a bilingual NRI wedding crowd in Udaipur?",
    a: "Bilingual hosting for NRI families is the core specialty of the Udaipur destination circuit. NRI families from the UK, USA, and Canada bring their extended diaspora — three generations in one room means three different emotional vocabularies. Sophisticated English for the international crowd, warm rooted Hindi for the parents and elders, and cultural Rajasthani references that make the home crowd feel the pride of the city they chose.",
  },
  {
    q: "What is the typical cost of hiring an anchor for a destination wedding in Udaipur?",
    a: "Destination wedding anchoring fees cover event duration, travel logistics, pre-event research time, and programme complexity. Multi-day weddings with bilingual scripting and full event management are priced differently from single-ceremony events. WhatsApp the event details for a customised quote within the hour.",
  },
  {
    q: "How far in advance should I book for Udaipur's peak wedding season?",
    a: "Udaipur's peak season runs October through March. Dates at lake palace venues fill 6–8 months ahead, especially for Diwali, New Year, and Valentine's weekend. No replacements are sent and no waitlist is maintained. The date is exclusively blocked on receipt of advance — WhatsApp the moment your venue date is confirmed.",
  },
  {
    q: "Do you anchor Sangeet functions on Jagmandir Island?",
    a: "Jagmandir Island Sangeets are among the most technically complex events on the Udaipur circuit — island acoustics, elevated crowd spread, boat-transfer timing for guest flow, and the echo off Lake Pichola. Sangeets here have run 5+ hours without an energy drop using unscripted crowd games, high-energy bilingual hosting, and real-time adaptation to the island's quirks.",
  },
  {
    q: "Can you anchor corporate events and dealer meets in Udaipur?",
    a: "Corporate events — annual galas, product launches, dealer meets, and leadership summits at Leela Udaipur, Radisson Blu, and Trident Udaipur — are a strong specialisation. The hosting register is sharp, brand-aligned, and aware of C-suite hierarchy, not a wedding energy copy-pasted into a boardroom setting.",
  },
  {
    q: "What makes Anchor Yash different from local Udaipur anchors?",
    a: "Local anchors know the city. Anchor Yash Soni knows the city and the crowd psychology to command every segment of it — 700+ shows, 10,000+ crowds commanded, 4.9★ rating, and a specific track record at Udaipur's top-tier palace properties. The difference shows when the NRI grandfather from London feels as included as the local Rajasthani family cousin dancing in the front row.",
  },
  {
    q: "Who is the best emcee in Udaipur for lake palace weddings?",
    a: "Anchor Yash Soni is the top-rated wedding emcee for Udaipur destination events — 4.9★ verified, with deep experience at Taj Lake Palace, Jagmandir Island, Oberoi Udaivilas, and Leela Udaipur. Whether called anchor, emcee, host, or MC, the same bilingual unscripted expertise applies across all Udaipur lake palace venues.",
  },
  {
    q: "What is the difference between a wedding anchor, emcee, and host in Udaipur?",
    a: "Anchor, emcee, host, and MC are four terms for the same role — the professional who leads the event programme, manages transitions, and commands the room. Wedding planners in Udaipur's destination circuit often use 'emcee' or 'host', while traditional families say 'anchor'. Yash Soni operates flawlessly across all formats and audience types.",
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
  "@id": `https://yashsoni.in/anchor-in-udaipur/#webpage`,
  url: `https://${DOMAIN}/${SLUG}`,
  name: `Best Anchor in Udaipur | Wedding & Event Host — Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in Udaipur. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in Udaipur`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Udaipur.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Udaipur.` },
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
