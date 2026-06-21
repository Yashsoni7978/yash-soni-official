import type { Metadata } from 'next';
import PageClient from './PageClient';

// app/anchor-in-kumbhalgarh/layout.jsx
const CITY     = "Kumbhalgarh";
const SLUG     = "anchor-in-kumbhalgarh";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "25.1477";
const LNG      = "73.5820";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/kumbhalgarh_bg.webp`;

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: ["Anchor in Kumbhalgarh","Wedding Anchor Kumbhalgarh","Heritage Wedding Host Kumbhalgarh","Fort Wedding Anchor Kumbhalgarh","Kumbha Bagh Wedding Anchor","Aodhi Hotel Event Host","Safari Camp Wedding Emcee"],
  description: `700+ Premium Shows Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
  url: FULL_URL, telephone: "+917737877978", priceRange: "₹₹₹₹", image: OG_IMAGE,
  sameAs: ["https://www.instagram.com/yashsoni_official","https://www.youtube.com/@anchorYashSoni"],
  address: { "@type": "PostalAddress", addressLocality: CITY, addressRegion: "Rajasthan", addressCountry: "IN", postalCode: "313325" },
  geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LNG },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "09:00", closes: "21:00" },
  areaServed: [{ "@type": "City", name: CITY },{ "@type": "AdministrativeArea", name: "Rajasthan" },{ "@type": "Country", name: "India" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5", worstRating: "1" },
};

const personSchema = {
  "@context": "https://schema.org", "@type": "Person", "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni", alternateName: ["Anchor Yash Soni","Anchor Yash"],
  jobTitle: "Professional Event Anchor & Emcee",
  url: `https://${DOMAIN}`, image: `https://${DOMAIN}/intro-portrait-top.webp`, telephone: "+917737877978",
  knowsAbout: ["Heritage Wedding Anchoring","Fort-Wall Event Hosting","NRI Wedding Management","Bilingual Emceeing","Kumbhalgarh Resort Events","Open-Air Heritage Acoustics"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: "Anchor in Rajasthan", item: `https://${DOMAIN}/anchor-in-rajasthan` },
    { "@type": "ListItem", position: 3, name: `Anchor in ${CITY}`, item: FULL_URL },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Kumbhalgarh | Heritage Fort Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Kumbhalgarh? Anchor Yash Soni — 4.9★ rated, 700+ shows. Expert for heritage fort weddings at The Kumbha Bagh & Aodhi. Bilingual, unscripted, NRI-experienced.`,
  keywords: ["anchor in kumbhalgarh","best anchor in kumbhalgarh","wedding anchor kumbhalgarh","fort wedding anchor kumbhalgarh","kumbha bagh wedding anchor","aodhi hotel event host","heritage wedding host rajasthan","destination wedding anchor kumbhalgarh","nri wedding anchor kumbhalgarh","sangeet host kumbhalgarh","bilingual anchor kumbhalgarh","anchor yash","anchor yash soni"],
  alternates: { canonical: FULL_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_IN", url: FULL_URL, siteName: "Anchor Yash Soni", title: `Best Anchor in Kumbhalgarh | Heritage Fort Wedding Host`, description: `4.9★ rated. 700+ shows. Kumbhalgarh's most trusted anchor for heritage fort weddings at Kumbha Bagh & Aodhi. Bilingual, unscripted, NRI-experienced.`, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Kumbhalgarh — Anchor Yash Soni at the Great Wall` }] },
  twitter: { card: "summary_large_image", site: "@yashsonianchor", creator: "@yashsonianchor", title: `Best Anchor in Kumbhalgarh | Anchor Yash Soni — 4.9★`, description: `The Kumbha Bagh. The Aodhi. Kumbhalgarh Fort. The Great Wall City's most trusted heritage wedding anchor.`, images: [OG_IMAGE] },
  other: { "geo.region": "IN-RJ", "geo.placename": `${CITY}, Rajasthan, India`, "geo.position": `${LAT};${LNG}`, ICBM: `${LAT}, ${LNG}`, "DC.subject": `Event Anchor, Heritage Wedding, Fort Wedding, Emcee, ${CITY}, Rajasthan, India` },
};



const FAQS = [
  { q: "Who is the best anchor for destination weddings in Kumbhalgarh?", a: "Anchor Yash Soni is rated 4.9★ across 700+ shows and is a specialist in Kumbhalgarh's majestic fort and heritage resort wedding circuit. Bilingual Hindi/English, completely unscripted, and deeply experienced in managing grand destination weddings for both NRI and traditional Indian families seeking a royal backdrop." },
  { q: "How do you handle the logistics and acoustics of fort weddings in Kumbhalgarh?", a: "Kumbhalgarh's heritage venues often involve open-air settings with unique acoustic challenges and sprawling layouts. Navigating event energy in these vast, majestic spaces requires an experienced host who uses precise pacing and crowd psychology to draw guests together, creating an intimate, high-energy atmosphere despite the massive surroundings." },
  { q: "Can you host bilingual events for NRI families in Kumbhalgarh?", a: "Yes, bilingual cultural bridging is essential for Kumbhalgarh destination weddings. NRI families from the US, UK, and UAE require hosting that is perfectly bilingual — sophisticated English for international guests and culturally rich Hindi for local relatives, ensuring everyone connects with the royal Rajasthani setting." },
  { q: "What makes Kumbhalgarh different from other destination wedding locations?", a: "Kumbhalgarh offers a dramatic, remote, and monumental setting. The hosting must match this grandeur — it requires unmatched elegance, environmental awareness, and a stage presence capable of commanding an audience under the shadow of the second longest wall in the world." },
  { q: "How far in advance should I book for a Kumbhalgarh wedding?", a: "Kumbhalgarh is highly sought after during the peak winter wedding season (October–March). Premium properties book out 6–8 months in advance. Secure your dates via WhatsApp immediately upon confirming your venue." },
  { q: "Who is the best emcee or host in Kumbhalgarh for weddings?", a: "Anchor Yash Soni is the top-rated wedding emcee and host for Kumbhalgarh destination events — with a 4.9★ verified rating. Whether you are searching for an anchor, emcee, host, or MC, the same unscripted expertise applies to deliver a flawless royal event." },
  { q: "What is the difference between a wedding anchor, emcee, and host in Kumbhalgarh?", a: "Anchor, emcee, host, and MC are terms for the same professional role. International event planners often use 'emcee' or 'host', while traditional families say 'anchor'. Yash Soni operates seamlessly across all audience types and formats regardless of the term used." },
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
  "@id": `https://yashsoni.in/anchor-in-kumbhalgarh/#webpage`,
  url: `https://${DOMAIN}/${SLUG}`,
  name: `Best Anchor in Kumbhalgarh | Wedding & Event Host — Yash Soni`,
  description: `Anchor Yash Soni is the premium event anchor in Kumbhalgarh. Flawless unscripted hosting for weddings and corporate events.`,
  inLanguage: "en-IN",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".yash-citable", ".yash-hero-desc", ".yash-faq-answer"] }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: `How to Hire the Best Anchor in Kumbhalgarh`,
  description: `Step-by-step process to book Anchor Yash Soni for weddings and corporate events in Kumbhalgarh.`,
  totalTime: "PT48H",
  step: [
    { "@type": "HowToStep", position: 1, name: "Check Availability", text: `WhatsApp +91 7737877978 with your event dates and venues in Kumbhalgarh.` },
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
