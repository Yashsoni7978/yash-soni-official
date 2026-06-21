import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-andaman/layout.jsx
// Ultra-Luxury Remote Island Destination Anchor Layout

const CITY     = "Andaman";
const REGION   = "Andaman & Nicobar Islands";
const SLUG     = "anchor-in-andaman";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "11.6670";
const LNG      = "92.7359";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/andaman_bg.webp`;

// ─── 1. LOCAL BUSINESS SCHEMA ─────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: [
    "Anchor in Andaman",
    "Best Wedding Anchor Andaman",
    "Havelock Island Destination Wedding Host",
    "Taj Exotica Radhanagar Wedding Anchor",
    "Andaman Luxury Resort Emcee",
    "Private Island Wedding Anchor India",
    "Bilingual Emcee Port Blair",
    "Ultra-Luxury Beach Event Host",
    "NRI Wedding Anchor Andaman",
  ],
  description: `700+ Premium Shows Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
  url: FULL_URL,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  priceRange: "₹₹₹₹₹",
  image: OG_IMAGE,
  logo: `https://${DOMAIN}/logo.webp`,
  sameAs: [
    "https://www.instagram.com/yashsoni_official",
    "https://www.youtube.com/@anchorYashSoni",
    "https://g.co/kgs/anchoryashsoni",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Havelock & Port Blair Island Circuit",
    addressLocality: CITY,
    addressRegion: "Andaman & Nicobar",
    addressCountry: "IN",
    postalCode: "744101",
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
    { "@type": "City", name: "Havelock Island" },
    { "@type": "City", name: "Port Blair" },
    { "@type": "City", name: "Neil Island" },
    { "@type": "AdministrativeArea", name: "Andaman" },
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
      author: { "@type": "Person", name: "Executive family — UAE" },
      reviewBody: "Flying our 100 closest guests to Havelock was a logistical mountain. We needed an anchor who didn't just 'talk' but actively managed the entire flow of the island resort. Yash was brilliant. His English delivery for our international guests was sharper than any host we've seen in Dubai.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Singhania Foundation" },
      reviewBody: "Taj Exotica Havelock is massive and entirely open to the sea. The acoustics are terrible for ordinary speakers. Yash used sheer stage dominance to physically pull our guests together during the dusk Varmala, making it feel perfectly intimate against the ocean.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchoring Services in Andaman",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Island Emcee Logistics", description: "Flawless timeline management across remote luxury properties like Taj Exotica Havelock" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Net-Worth NRI Sangeets", description: "Executive bilingual hosting merging international VIPs with deep traditional Indian aesthetics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beachfront Acoustic Condensing", description: "Overcoming infinite ocean wind to create extreme intimacy during the main Pheras/Varmala" } },
    ],
  },
};

// ─── 2. PERSON SCHEMA ─────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni",
  alternateName: ["Anchor Yash Soni", "Anchor Yash", "Andaman Wedding Emcee"],
  jobTitle: "Professional Event Anchor & Emcee",
  description: "Professional event anchor with 700+ shows. Specialist in the Andaman Islands' highly restrictive, ultra-luxury private island weddings. Translating VIP intimacy globally.",
  url: `https://${DOMAIN}`,
  image: `https://${DOMAIN}/intro-portrait-top.webp`,
  telephone: "+917737877978",
  email: "bookings@yashsoni.in",
  sameAs: ["https://www.instagram.com/yashsoni_official", "https://www.youtube.com/@anchorYashSoni"],
  knowsAbout: [
    "Havelock Island Logistics",
    "Taj Exotica Resort Pacing",
    "Bilingual Executive Moderation",
    "Ultra-Luxury Curated Guest Lists",
    "Remote Island Acoustic Management",
    "Cross-Cultural Ceremonies",
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
  "@id": `https://yashsoni.in/anchor-in-andaman/#webpage`,
  url: FULL_URL,
  name: `Best Anchor in Andaman | Luxury Island & Havelock Emcee — Yash Soni`,
  headline: `The Andaman's Premier Event Anchor for Ultra-Exclusive VIP Island Weddings`,
  description: `Anchor Yash Soni — 4.9★ rated. The absolute expert for Andaman destination weddings. Mastering Havelock logistics, Taj Exotica beach acoustics, and elite unscripted VIP event flow.`,
  inLanguage: "en-IN",
  isPartOf: { "@type": "WebSite", url: `https://${DOMAIN}`, name: "Anchor Yash Soni" },
  about: { "@type": "Thing", name: `Event Anchor Services in ${CITY}, India` },
  breadcrumb: breadcrumbSchema,
  speakable: { "@type": "SpeakableSpecification", xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"] },
};

// ─── METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Andaman | Elite Island Destination Host`,
  description: `Looking for the best anchor in Andaman? Anchor Yash Soni — 4.9★. Expert for Taj Exotica Havelock and ultra-luxury private island weddings. Bilingual, executive-grade hosting for global VIPs.`,
  keywords: [
    "anchor in andaman",
    "best anchor in andaman",
    "wedding anchor andaman",
    "havelock island event host",
    "taj exotica andaman wedding anchor",
    "private island destination wedding anchor",
    "bilingual english hindi anchor port blair",
    "vip wedding anchor andaman",
    "luxury beach emcee india",
    "nri wedding host andaman",
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
    title: `Best Anchor in Andaman | Ultra-Luxury Island Wedding Host`,
    description: `4.9★ rated. Andaman's premium anchor for highly intimate, ultra-luxury destination weddings at Havelock. Master of unscripted executive bilingual hosting.`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Andaman — Anchor Yash Soni at Beach Island Weddings` }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yashsonianchor",
    creator: "@yashsonianchor",
    title: `Best Anchor in Andaman | Anchor Yash Soni — 4.9★`,
    description: `Taj Exotica. Havelock. Andaman's premier bilingual event anchor for exclusive VIP Sangeets and highly restricted island ceremonies.`,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "IN-AN",
    "geo.placename": `${CITY}, ${REGION}, India`,
    "geo.position": `${LAT};${LNG}`,
    ICBM: `${LAT}, ${LNG}`,
    "DC.title": `Best Anchor in Andaman | Private Island Destination Emcee — Yash Soni`,
    "DC.subject": `Event Anchor, Island Wedding, VIP Events, ${CITY}, India`,
    "DC.coverage": `${CITY}, India`,
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
    q: "How do you manage the massive, open acoustics of a remote Andaman beach?",
    a: "The ocean is essentially an acoustic void—it absorbs all standard sound. Furthermore, properties on Radhanagar Beach are sprawling. I actively prevent 'audience drift'. I use targeted vocal projection and physical stage boundaries to condense the VIPs exactly where the energy needs to be, forcing an intimate, tightly-packed atmosphere despite the infinite horizon."
  },
  {
    q: "Our Andaman guest list is incredibly distilled—only 100 highly important VIPs. Can you host a room this small?",
    a: "This is exactly my specialty. A 1,000-person wedding requires broadcasting. A 100-person island wedding requires 'Conversational Dominance'. I dismantle the formal 'stage persona' and interact with the VIPs intimately, in immaculate English. It feels more like a high-end executive gala hosted by a close friend than a scripted show."
  },
  {
    q: "We have international guests flying into Port Blair and traditional family from mainland India. Can you bridge them?",
    a: "Absolutely. I execute pristine 'Bilingual Code-Switching'. The modern, global guests receive sharp, highly intelligent English validation, while I seamlessly intertwine deep, respectful Hindi so the traditional family feels completely centered and secure in the rituals."
  },
  {
    q: "Do you use teleprompters or scripts for these intricate VIP events?",
    a: "Never. Reading from paper in front of 100 highly intelligent VIPs instantly drops your authority. I memorize the family lineages, the complex itineraries, and the cross-border dynamics. This allows me to maintain absolute eye contact and run the entire multi-day itinerary 100% unscripted."
  },
  {
    q: "How are your logistics and travel managed for the Andamans?",
    a: "Because I travel Pan-India handling massive volumes of destination weddings, my technical rider is highly optimized. Travel to Port Blair (and the subsequent ferry to Havelock/Neil) is clearly defined in the initial contract. There are no hidden surprises; my team coordinates seamlessly with your destination planner."
  },
  {
    q: "What if island logistics (like ferry delays) force a sudden change in our Sangeet timeline?",
    a: "Island logistics are inherently volatile. If a ferry delay forces us to compress a 4-hour Sangeet into 2 hours, I do not panic. Because I am entirely unscripted, I can instantly rewrite the pacing, stitch performances together on the fly, and accelerate the hype without the audience ever realizing the timeline was compromised."
  },
  {
    q: "When should we freeze your dates for an Andaman event?",
    a: "The Andaman wedding season aligns closely with extreme peak winter dates nationwide. Because flying into Port Blair and transferring to Havelock requires a multi-day blackout on my calendar, I strictly do not hold dates. The moment your resort is finalized, secure the dates immediately."
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
  name: `How to Hire the Best Anchor in Andaman`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Andaman.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Andaman.` },
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
