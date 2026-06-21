import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-rishikesh/layout.jsx
// Ultra-Luxury Satvik Destination & Himalayan Foothills Anchor Layout

const CITY     = "Rishikesh";
const REGION   = "Uttarakhand";
const SLUG     = "anchor-in-rishikesh";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "30.0869";
const LNG      = "78.2676";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/rishikesh_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Rishikesh",
    "Best Wedding Anchor Rishikesh",
    "Rishikesh Destination Wedding Host",
    "Taj Rishikesh Wedding Anchor",
    "Satvik Wedding Anchor Uttarakhand",
    "Himalayan Wellness Wedding Emcee",
    "Bilingual Emcee Rishikesh",
    "Luxury Riverside Event Anchor",
    "Aloha on the Ganges Wedding Host",
    "Spiritual Destination Wedding Emcee",
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
    streetAddress: "Ganges Valley Luxury Corridor",
    addressLocality: CITY,
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
    postalCode: "249201",
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
    { "@type": "City", name: "Rishikesh" },
    { "@type": "City", name: "Haridwar" },
    { "@type": "AdministrativeArea", name: "Uttarakhand" },
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
      author: { "@type": "Person", name: "Bansal Family — Delhi" },
      reviewBody: "Hosting a Satvik wedding at Taj Rishikesh was beautiful but we were terrified the Sangeet would be boring without alcohol. Yash completely changed the game. He brought an insane level of pure, organic hype using his voice and crowd interaction. The dance floor was packed till the venue shut down.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Venture Capital Summit — Gurgaon" },
      reviewBody: "We held a 3-day wellness and strategy summit at The Roseate Ganges. Yash anchored the entire schedule. His English is exceptionally sharp, and his ability to pace a room without relying on notes made him look like one of the executives. True professional.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Rishikesh",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Satvik Sangeet Hype Generation", description: "Creating massive, explosive organic party momentum without relying on alcohol or basic DJ tracks" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taj Rishikesh // Roseate Hosting", description: "Navigating Himalayan valley acoustics and ultra-luxury spiritual retreat protocols" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spiritual Cross-Cultural Ceremonies", description: "Bilingual English/Hindi bridging for modern executives engaging in deeply traditional Pheras" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Wellness Offsites", description: "Unscripted, highly articulate moderation for leadership retreats in the Ganges foothills" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Rishikesh Wedding Anchor"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 5+ years and 700+ shows. Specialist in Rishikesh's luxury wellness sector, overcoming strictly Satvik environments to produce high-voltage events for VIPs at Taj Rishikesh.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Satvik Event Momentum",
    "Taj Rishikesh Logistics",
    "Himalayan Acoustic Dynamics",
    "Bilingual VIP Moderation",
    "Spiritual Retreat Timelines",
    "Delhi NCR Executive Crowds",
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
  "@id": `https://yashsoni.in/anchor-in-rishikesh/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Rishikesh | Taj Rishikesh & Satvik Host — Yash Soni`,
  headline: `Rishikesh's Premier Event Anchor for Ultra-Luxury Satvik Destination Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The definitive expert for Rishikesh destination weddings. Mastering Satvik (no-alcohol) party momentum, Taj Rishikesh protocols, and elite bilingual hosting.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, Uttarakhand` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Rishikesh | Elite Satvik Destination Wedding Emcee`,
  description: `Looking for the best anchor in Rishikesh? Anchor Yash Soni — 4.9★. Expert for Taj Rishikesh, The Roseate, and luxury Satvik destination weddings. Flawless unscripted bilingual hosting driving pure organic energy.`,
  keywords: [
    "anchor in rishikesh",
    "best anchor in rishikesh",
    "wedding anchor rishikesh",
    "taj rishikesh event host",
    "satvik wedding anchor",
    "spiritual destination wedding anchor",
    "bilingual english hindi anchor uttarakhand",
    "luxury wellness wedding anchor",
    "nri wedding anchor rishikesh",
    "delhi ncr wedding host rishikesh",
    "corporate wellness retreat host",
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
    title: `Best Anchor in Rishikesh | Luxury Riverside Destination Host`,
    description: `4.9★ rated. Rishikesh's premium anchor for highly exclusive Satvik destination weddings at Taj Rishikesh. Driving massive, unscripted organic energy for elite crowds.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Rishikesh — Anchor Yash Soni at Himalayan Destinations` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Rishikesh | Anchor Yash Soni — 4.9★`,
    description: `Taj Rishikesh. The Roseate. Rishikesh's premier bilingual event anchor for exclusive VIP Satvik Sangeets and luxury riverside ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-UT",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Rishikesh | Satvik VIP Destination Emcee — Yash Soni`,
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
    q: "A lot of our guests are worried the Sangeet will be dull because it’s a strict dry (no-alcohol) event. How do you fix this?",
    a: "This is arguably the most valuable skillset an anchor can possess. When alcohol isn't present to loosen up a crowd, the anchor must become the catalyst. I employ 'Psychological Momentum'—using rapid-fire interactive segments, highly personalized unscripted humor, and aggressive timeline pacing to pull guests onto the dance floor via pure, organic energy."
  },
  {
    q: "We are holding a corporate offsite at Taj Rishikesh. Our crowd is purely C-Suite. Can you match this tone?",
    a: "Absolutely. A VIP corporate audience doesn't need a high-pitched 'hype man'; it needs an Executive Moderator. I drop all standard 'entertainment tropes' and host with sharp, highly conversational English taking zero paper notes to the stage. It bridges the gap between formal strategy and luxury relaxation seamlessly."
  },
  {
    q: "How do you handle the massive outdoor acoustics of a riverside Varmala?",
    a: "The Himalayan valley wind acts as a giant vacuum, instantly sucking away standard DJ sound. I actively prevent 'audience drift'. I use targeted vocal projection and physical stage boundaries to condense the VIPs exactly where the energy needs to be, forcing an intimate, tightly-packed atmosphere despite the infinite backdrop."
  },
  {
    q: "Do you use scripts during a chaotic multi-family timeline?",
    a: "Never. Scripts destroy raw party energy. When you read from a clipboard, you break eye contact with the audience. I memorize the complex family dynamics, the performance cue-sheet, and the overarching timeline, allowing me to host 100% unscripted. This means I can react instantly to an unexpected joke or an impromptu delay."
  },
  {
    q: "Since our event is heavily spiritual, can you ensure the modern English hosting doesn't disrespect the traditions?",
    a: "This is exactly why couples book me for Rishikesh. I execute pristine 'Bilingual Code-Switching'. The modern, global guests receive sharp, highly intelligent English validation, while I seamlessly intertwine deep, respectful Hindi so the gravity of the spiritual rituals by the Ganges is completely honored."
  },
  {
    q: "Since you travel nationally, how are your logistics handled for Rishikesh?",
    a: "Because I am heavily active across the Delhi-NCR circuit, the logistics to Rishikesh (via Dehradun Jolly Grant Airport or highway) are completely streamlined. There are no hidden complications, and the exact travel rider is provided instantly upon booking to your planner."
  },
  {
    q: "When should we freeze your dates for a Rishikesh wedding?",
    a: "Rishikesh’s destination season aligns directly with the absolute peak winter dates of North India. The premium luxury properties (like Taj and Roseate) vanish over a year in advance. The exact moment your luxury venue is locked, send me a WhatsApp to initiate the calendar block."
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
  name: `How to Hire the Best Anchor in Rishikesh`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Rishikesh.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Rishikesh.` },
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
