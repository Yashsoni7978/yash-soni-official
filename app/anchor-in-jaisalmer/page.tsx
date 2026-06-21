import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-jaisalmer/layout.jsx
// Golden Fort & Desert Wedding Anchor — Full Triple Schema + Rich SEO Layout

const CITY     = "Jaisalmer";
const REGION   = "Thar Desert, Western Rajasthan";
const SLUG     = "anchor-in-jaisalmer";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "26.9157";
const LNG      = "70.9083";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/jaisalmer_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Jaisalmer",
    "Best Wedding Anchor Jaisalmer",
    "Desert Destination Wedding Anchor",
    "Suryagarh Wedding Anchor",
    "Jaisalmer Marriott Event Host",
    "Golden City Wedding Emcee",
    "Thar Desert Safari Anchor",
    "Bhati Rajput Heritage Wedding Anchor",
    "Sam Sand Dunes Event Host",
    "Jaisalmer Fort Royal Wedding Anchor",
    "Luxury Desert Camp Event Emcee",
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
    streetAddress: "Sam Road",
    addressLocality: CITY,
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    postalCode: "345001",
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
    { "@type": "City", name: "Jaisalmer" },
    { "@type": "City", name: "Sam Sand Dunes" },
    { "@type": "City", name: "Khuri" },
    { "@type": "AdministrativeArea", name: "Thar Desert" },
    { "@type": "AdministrativeArea", name: "Western Rajasthan" },
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
      author: { "@type": "Person", name: "Goenka Family" },
      reviewBody: "Our Suryagarh wedding required absolute understated elegance. Yash read our international guest list perfectly. He connected deeply with the elders while keeping our friends from London wholly engaged.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Desai Family" },
      reviewBody: "Managing a Sangeet in the open desert dunes was an acoustic nightmare until Yash stepped on stage. His energy outmatched the desert wind, holding 500 guests locked to the stage for a straight 4-hour set.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Jaisalmer & Thar Desert",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Suryagarh Heritage Wedding Anchor", description: "Bespoke hosting for ultra-luxury weddings at Jaisalmer's premier fortress property" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desert Camp Sangeet Emcee", description: "High-energy open-air Sangeet hosting against the backdrop of the Sam Sand Dunes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marriott Golden City Wedding Host", description: "Seamless bilingual anchoring for NRI and metropolitan Indian families" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Reward Trip Host", description: "Desert safaris and corporate gala dinner hosting for elite business delegations" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Jaisalmer NRI Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor and emcee with 5+ years and 700+ shows across Rajasthan. Specialist in luxury Jaisalmer destination weddings, open-desert acoustic command, and bilingual English/Hindi premium family hosting.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Suryagarh Jaisalmer Event Protocol",
    "Open Desert Acoustic Management",
    "Luxury HNI Destination Weddings",
    "NRI Guest List Bilingual Hosting",
    "Golden City Heritage Ceremonies",
    "Bhati Rajput Heritage Integration",
    "Desert Safari Corporate Gala Hosting",
    "Jaisalmer Multi-Day Logistics",
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
    { "@type": "ListItem", position: 3, name: "Western Rajasthan Desert Anchor", item: `https://${DOMAIN}/anchor-in-rajasthan#western` },
    { "@type": "ListItem", position: 4, name: `Best Anchor in ${CITY}`, item: FULL_URL },
  ],
};

// ─── 4. WEBPAGE SCHEMA ────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://yashsoni.in/anchor-in-jaisalmer/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Jaisalmer | Suryagarh & Desert Wedding Host — Yash Soni`,
  headline: `India's Most Trusted Event Anchor for Jaisalmer, Suryagarh & Golden City Sand Dune Celebrations`,
  description: `Anchor Yash Soni — 4.9★ rated, 700+ shows. Premier anchor for Jaisalmer destination weddings at Suryagarh, Marriott & Sam dunes. NRI/HNI bilingual expert. Open-desert acoustic mastery. Zero scripts.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Thar Desert, Rajasthan` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Jaisalmer | Desert & Heritage Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Jaisalmer? Anchor Yash Soni — 4.9★ rated, 700+ shows. Expert for Suryagarh, Marriott & Sam dunes luxury destination weddings. HNI/NRI bilingual specialist, open-air desert acoustic command.`,
  keywords: [
    "anchor in jaisalmer",
    "best anchor in jaisalmer",
    "wedding anchor jaisalmer",
    "suryagarh wedding anchor",
    "jaisalmer marriott event host",
    "desert destination wedding anchor",
    "sam sand dunes event emcee",
    "golden city wedding anchor",
    "nri wedding anchor jaisalmer",
    "hni destination wedding rajasthan",
    "sangeet anchor jaisalmer",
    "bilingual anchor jaisalmer rajasthan",
    "luxury desert camp anchor",
    "bhati rajput wedding anchor",
    "anchor yash",
    "anchor yash soni",
    "best anchor rajasthan desert",
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
    title: `Best Anchor in Jaisalmer | Luxury Desert Wedding Host`,
    description: `4.9★ rated. 700+ shows. Jaisalmer's most trusted anchor for Suryagarh, Marriott & luxury desert camps. NRI/HNI bilingual expert. Open-air desert acoustic command.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Jaisalmer — Anchor Yash Soni at the Golden Fort and Thar Desert` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Jaisalmer | Anchor Yash Soni — 4.9★`,
    description: `Suryagarh. Marriott. Sam Dunes. Western Rajasthan's most trusted luxury desert weapon. 700+ shows. Zero scripts.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Jaisalmer | Desert Heritage Anchor — Yash Soni`,
    "DC.subject": `Event Anchor, Luxury Wedding, HNI Emcee, Desert Safari, ${CITY}, Rajasthan, India`,
    "DC.coverage": `${CITY}, Thar Desert, Rajasthan, India`,
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
    q: "Who is the best anchor for luxury weddings in Jaisalmer?",
    a: "Anchor Yash Soni is rated 4.9★ across 700+ shows and specialises in the ultra-luxury and NRI destination wedding demographic in Jaisalmer — with deep experience at Suryagarh, Marriott Jaisalmer, The Serai, and premium desert camp venues. He delivers the flawless, bilingual, and sophisticated hosting required for Jaisalmer's discerning clientele.",
  },
  {
    q: "How do you handle the acoustics of open desert events at Sam Sand Dunes?",
    a: "Open desert is one of the hardest acoustic environments in the world — sound dissipates instantly and wind interferes with microphone usage. The solution is crowd psychology: using precise pacing to draw the audience physically closer to the stage, creating an intimate bubble of energy that defies the infinite space around it. This is a technique that comes from experience, not theory.",
  },
  {
    q: "Can you host a bilingual event that bridges NRI modern life with Rajasthani tradition?",
    a: "Bilingual cultural bridging is the cornerstone of Jaisalmer destination wedding hosting. NRI families from the US, UK, and UAE bring their extended diaspora — the hosting must be perfectly bilingual, ensuring international guests are completely engrossed while Indian relatives feel the full cultural depth and pride of the Rajputana Thar setting.",
  },
  {
    q: "Do you integrate local Rajasthani folk musicians (like Manganiyars) into your events?",
    a: "Manganiyar folk musicians are woven seamlessly into Jaisalmer events — respectfully introduced and strategically placed so the transition from heritage folk to modern Sangeet beats feels like a natural cultural evolution, not a jarring interruption. Yash coordinates directly with musicians and DJs to manage this flow.",
  },
  {
    q: "Have you hosted corporate elite events and offsites in Jaisalmer?",
    a: "Jaisalmer is a highly sought-after destination for CEO-level retreats and top-tier reward trips. Brand-aligned, executive-level hosting for daytime leadership summits and premium gala hosting for evening desert safaris maintain a professional yet highly engaging tone throughout.",
  },
  {
    q: "What makes Jaisalmer different from Jaipur or Udaipur for a wedding host?",
    a: "Jaisalmer is remote and extreme — families who choose the Golden City are deliberately isolating themselves in luxury at the edge of the Thar Desert. The hosting must match the vastness of the setting: unmatched elegance, profound environmental awareness, and a stage presence that can command an audience under the weight of a living 12th-century fort.",
  },
  {
    q: "What happens if it gets very cold during our desert Sangeet?",
    a: "Desert temperatures plummet rapidly after sunset from November to February. As the host, the timeline is aggressively adjusted — cutting long gaps, driving interactive segments rapidly, and immediately moving the crowd to the dance floor to maintain energy and core temperature. This real-time adaptation is what separates experienced Jaisalmer anchors from untested ones.",
  },
  {
    q: "How far in advance should we book for a Jaisalmer event?",
    a: "Jaisalmer events often require multi-day blockouts due to travel distance from central Rajasthan — availability disappears quickly during peak winter months. Families booking Suryagarh or the Marriott typically lock their anchor simultaneously with the venue. WhatsApp immediately upon confirming your dates.",
  },
  {
    q: "Who is the best emcee in Jaisalmer for desert weddings?",
    a: "Anchor Yash Soni is the top-rated wedding emcee and host for Jaisalmer destination events — with a 4.9★ verified rating and experience at Suryagarh, The Serai, Gorbandh Palace, and Sam Sand Dunes venues. Whether called anchor, emcee, host, or MC, the same bilingual unscripted expertise applies across all Jaisalmer settings.",
  },
  {
    q: "What is the difference between a wedding anchor, emcee, and host in Jaisalmer?",
    a: "Anchor, emcee, host, and MC are four terms for the same role. International destination wedding planners typically prefer 'emcee' or 'host', while traditional families say 'anchor'. Yash Soni operates across all formats flawlessly — the Jaisalmer fort and desert circuit demands the same skill regardless of what the role is called.",
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
  name: `How to Hire the Best Anchor in Jaisalmer`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Jaisalmer.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Jaisalmer.` },
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
