/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-ranthambore/layout.jsx
const CITY     = "Ranthambore";
const SLUG     = "anchor-in-ranthambore";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "26.0173";
const LNG      = "76.5026";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/ranthambore_bg.webp`;

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: ["Anchor in Ranthambore","Wedding Anchor Ranthambore","Wildlife Destination Wedding Anchor","Ranthambore Safari Wedding Host","Sher Bagh Anchor","Khem Villas Event Emcee","Nahargarh Fort Ranthambore Anchor","Jungle Luxury Wedding Anchor"],
  description: `Anchor Yash Soni is Ranthambore's premier wildlife destination wedding anchor — 4.9★ rated, 1,100+ events, 8+ years. Specialist in tiger-reserve jungle luxury weddings at Sher Bagh, Khem Villas, and Nahargarh Fort. Bilingual Hindi/English, fully unscripted, deeply experienced with wildlife-adjacent acoustic management and NRI destination families.`,
  url: FULL_URL, telephone: "+917737877978", priceRange: "₹₹₹₹", image: OG_IMAGE,
  sameAs: ["https://www.instagram.com/yashsoni_official","https://www.youtube.com/@anchorYashSoni"],
  address: { "@type": "PostalAddress", addressLocality: "Sawai Madhopur", addressRegion: "Rajasthan", addressCountry: "IN", postalCode: "322001" },
  geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LNG },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "09:00", closes: "21:00" },
  areaServed: [{ "@type": "City", name: CITY },{ "@type": "City", name: "Sawai Madhopur" },{ "@type": "AdministrativeArea", name: "Rajasthan" },{ "@type": "Country", name: "India" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5", worstRating: "1" },
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Anchoring Services in Ranthambore",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jungle Luxury Wedding Anchor Ranthambore", description: "Wildlife-adjacent destination wedding hosting at Sher Bagh and Khem Villas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sangeet Host Ranthambore", description: "Open-air tented Sangeet emcee in the tiger reserve circuit" } },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org", "@type": "Person", "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni", alternateName: ["Anchor Yash Soni","Anchor Yash"],
  jobTitle: "Professional Event Anchor & Emcee",
  url: `https://${DOMAIN}`, image: `https://${DOMAIN}/intro-portrait-top.webp`, telephone: "+917737877978",
  knowsAbout: ["Wildlife Destination Wedding Anchoring","Jungle Luxury Event Hosting","NRI Wedding Management","Bilingual Emceeing","Ranthambore Tiger Reserve Acoustics","Tented Camp Event Management"],
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
  title: `Best Anchor in Ranthambore | Jungle Luxury Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Ranthambore? Anchor Yash Soni — 4.9★ rated, 1,100+ events. Expert for wildlife tented destination weddings at Sher Bagh & Khem Villas. Bilingual, unscripted, NRI-experienced.`,
  keywords: [
    "anchor in ranthambore","best anchor in ranthambore","wedding anchor ranthambore",
    "wildlife wedding anchor ranthambore","jungle luxury wedding host",
    "sher bagh wedding anchor","khem villas event emcee",
    "nahargarh fort ranthambore anchor","tiger reserve wedding anchor",
    "destination wedding anchor ranthambore","nri wedding anchor ranthambore",
    "sangeet host ranthambore","tented camp wedding anchor",
    "bilingual anchor ranthambore","anchor yash","anchor yash soni"
  ],
  alternates: { canonical: FULL_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_IN", url: FULL_URL, siteName: "Anchor Yash Soni", title: `Best Anchor in Ranthambore | Jungle Luxury Wedding Host`, description: `4.9★ rated. 1,100+ events. Ranthambore's most trusted anchor for wildlife tented weddings at Sher Bagh & Khem Villas. Bilingual, unscripted, NRI-experienced.`, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Ranthambore — Anchor Yash Soni jungle luxury wedding` }] },
  twitter: { card: "summary_large_image", site: "@yashsonianchor", creator: "@yashsonianchor", title: `Best Anchor in Ranthambore | Anchor Yash Soni — 4.9★`, description: `Sher Bagh. Khem Villas. Nahargarh Fort. Ranthambore's most trusted jungle luxury wedding anchor.`, images: [OG_IMAGE] },
  other: { "geo.region": "IN-RJ", "geo.placename": `${CITY}, Sawai Madhopur, Rajasthan, India`, "geo.position": `${LAT};${LNG}`, ICBM: `${LAT}, ${LNG}`, "DC.subject": `Event Anchor, Wildlife Wedding, Jungle Luxury, ${CITY}, Rajasthan, India` },
};

export default function RanthamboreLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}