/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-chittorgarh/layout.jsx
const CITY     = "Chittorgarh";
const SLUG     = "anchor-in-chittorgarh";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "24.8887";
const LNG      = "74.6269";
const OG_IMAGE = `https://${DOMAIN}/bride-groom-fort-shoot.webp`;

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: ["Anchor in Chittorgarh","Wedding Anchor Chittorgarh","Heritage Wedding Host Chittorgarh","Chittorgarh Fort Wedding Anchor","Padmini Palace Event Emcee","Mewar Wedding Anchor","Rajput Honour Wedding Host"],
  description: `1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
  url: FULL_URL, telephone: "+917737877978", priceRange: "₹₹₹₹", image: OG_IMAGE,
  sameAs: ["https://www.instagram.com/yashsoni_official","https://www.youtube.com/@anchorYashSoni"],
  address: { "@type": "PostalAddress", addressLocality: CITY, addressRegion: "Rajasthan", addressCountry: "IN", postalCode: "312001" },
  geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LNG },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "09:00", closes: "21:00" },
  areaServed: [{ "@type": "City", name: CITY },{ "@type": "City", name: "Bhilwara" },{ "@type": "AdministrativeArea", name: "Rajasthan" },{ "@type": "Country", name: "India" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5", worstRating: "1" },
};

const personSchema = {
  "@context": "https://schema.org", "@type": "Person", "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni", alternateName: ["Anchor Yash Soni","Anchor Yash"],
  jobTitle: "Professional Event Anchor & Emcee",
  url: `https://${DOMAIN}`, image: `https://${DOMAIN}/intro-portrait-top.webp`, telephone: "+917737877978",
  knowsAbout: ["Heritage Wedding Anchoring","Rajput Honour Ceremony Hosting","Fort Wedding Staging","Bilingual Emceeing","Mewar Cultural Protocol","Chittorgarh Destination Events"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `https://${DOMAIN}` },
    { "@type": "ListItem", position: 2, name: "Anchor in Rajasthan", item: `https://${DOMAIN}/anchor-in-rajasthan` },
    { "@type": "ListItem", position: 3, name: `Anchor in ${CITY}`, item: FULL_URL },
  ],
};

export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Chittorgarh | Rajput Heritage Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Chittorgarh? Anchor Yash Soni — 4.9★ rated, 1,100+ events. Expert Rajput honour heritage weddings at Chittorgarh Fort. Mewar cultural fluency, bilingual, zero paper scripts.`,
  keywords: [
    "anchor in chittorgarh","best anchor in chittorgarh","wedding anchor chittorgarh",
    "heritage wedding anchor chittorgarh","chittorgarh fort wedding anchor",
    "padmini palace event host","mewar wedding anchor","rajput wedding anchor",
    "destination wedding anchor chittorgarh","rajputana heritage anchor",
    "sangeet host chittorgarh","fort wedding emcee rajasthan",
    "bilingual anchor chittorgarh","anchor yash","anchor yash soni"
  ],
  alternates: { canonical: FULL_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_IN", url: FULL_URL, siteName: "Anchor Yash Soni", title: `Best Anchor in Chittorgarh | Rajput Heritage Wedding Host`, description: `4.9★ rated. 1,100+ events. Chittorgarh's most trusted anchor for Rajput honour heritage weddings at the Fort. Mewar cultural fluency, bilingual, unscripted.`, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Chittorgarh — Anchor Yash Soni at Chittorgarh Fort` }] },
  twitter: { card: "summary_large_image", site: "@yashsonianchor", creator: "@yashsonianchor", title: `Best Anchor in Chittorgarh | Anchor Yash Soni — 4.9★`, description: `Chittorgarh Fort. Padmini Palace. Most trusted Rajput heritage wedding anchor in Mewar.`, images: [OG_IMAGE] },
  other: { "geo.region": "IN-RJ", "geo.placename": `${CITY}, Rajasthan, India`, "geo.position": `${LAT};${LNG}`, ICBM: `${LAT}, ${LNG}`, "DC.subject": `Event Anchor, Rajput Heritage Wedding, Fort Emcee, ${CITY}, Rajasthan, India` },
};

export default function ChittorgarhLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}