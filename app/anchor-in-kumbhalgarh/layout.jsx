/* eslint-disable @next/next/no-sync-scripts */
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
  description: `1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.`,
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

export const metadata = {
  metadataBase: new URL(`https://${DOMAIN}`),
  title: `Best Anchor in Kumbhalgarh | Heritage Fort Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Kumbhalgarh? Anchor Yash Soni — 4.9★ rated, 1,100+ events. Expert for heritage fort weddings at The Kumbha Bagh & Aodhi. Bilingual, unscripted, NRI-experienced.`,
  keywords: ["anchor in kumbhalgarh","best anchor in kumbhalgarh","wedding anchor kumbhalgarh","fort wedding anchor kumbhalgarh","kumbha bagh wedding anchor","aodhi hotel event host","heritage wedding host rajasthan","destination wedding anchor kumbhalgarh","nri wedding anchor kumbhalgarh","sangeet host kumbhalgarh","bilingual anchor kumbhalgarh","anchor yash","anchor yash soni"],
  alternates: { canonical: FULL_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_IN", url: FULL_URL, siteName: "Anchor Yash Soni", title: `Best Anchor in Kumbhalgarh | Heritage Fort Wedding Host`, description: `4.9★ rated. 1,100+ events. Kumbhalgarh's most trusted anchor for heritage fort weddings at Kumbha Bagh & Aodhi. Bilingual, unscripted, NRI-experienced.`, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Kumbhalgarh — Anchor Yash Soni at the Great Wall` }] },
  twitter: { card: "summary_large_image", site: "@yashsonianchor", creator: "@yashsonianchor", title: `Best Anchor in Kumbhalgarh | Anchor Yash Soni — 4.9★`, description: `The Kumbha Bagh. The Aodhi. Kumbhalgarh Fort. The Great Wall City's most trusted heritage wedding anchor.`, images: [OG_IMAGE] },
  other: { "geo.region": "IN-RJ", "geo.placename": `${CITY}, Rajasthan, India`, "geo.position": `${LAT};${LNG}`, ICBM: `${LAT}, ${LNG}`, "DC.subject": `Event Anchor, Heritage Wedding, Fort Wedding, Emcee, ${CITY}, Rajasthan, India` },
};

export default function KumbhalgarhLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}