// app/anchor-in-alwar/layout.jsx
const CITY     = "Alwar";
const SLUG     = "anchor-in-alwar";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "27.5530";
const LNG      = "76.6346";
const OG_IMAGE = `https://${DOMAIN}/backgrounds/alwar_bg.webp`;

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: ["Anchor in Alwar","Wedding Anchor Alwar","Heritage Wedding Host Alwar","Sariska Anchor","Neemrana Anchor","Siliserh Lake Palace Wedding","Bala Quila Event Host","NCR Wedding Anchor Alwar"],
  description: `Anchor Yash Soni is Alwar's premier destination wedding anchor — 4.9★ rated, 1,100+ events, 8+ years. Specialist in heritage weddings at Neemrana Fort, Siliserh Lake Palace, and Sariska Palace. Bilingual Hindi/English, fully unscripted, strategically placed between Jaipur and Delhi NCR.`,
  url: FULL_URL, telephone: "+917737877978", priceRange: "₹₹₹₹", image: OG_IMAGE,
  sameAs: ["https://www.instagram.com/yashsoni_official","https://www.youtube.com/@anchorYashSoni"],
  address: { "@type": "PostalAddress", addressLocality: CITY, addressRegion: "Rajasthan", addressCountry: "IN", postalCode: "301001" },
  geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LNG },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "09:00", closes: "21:00" },
  areaServed: [{ "@type": "City", name: CITY },{ "@type": "City", name: "Sariska" },{ "@type": "City", name: "Neemrana" },{ "@type": "AdministrativeArea", name: "Rajasthan" },{ "@type": "Country", name: "India" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5", worstRating: "1" },
};

const personSchema = {
  "@context": "https://schema.org", "@type": "Person", "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni", alternateName: ["Anchor Yash Soni","Anchor Yash"],
  jobTitle: "Professional Event Anchor & Emcee",
  url: `https://${DOMAIN}`, image: `https://${DOMAIN}/intro-portrait-top.webp`, telephone: "+917737877978",
  knowsAbout: ["Heritage Wedding Anchoring","Haveli Wedding Hosting","NRI Wedding Management","Bilingual Emceeing","Alwar Region Events","Sariska Wildlife Resort Events","NCR Destination Wedding"],
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
  title: `Best Anchor in Alwar | Heritage & Sariska Wedding Host — Yash Soni`,
  description: `Looking for the best anchor in Alwar? Anchor Yash Soni — 4.9★ rated, 1,100+ events. Expert for heritage weddings near Alwar, Sariska & Neemrana. Bilingual, unscripted, NCR destination specialist.`,
  keywords: ["anchor in alwar","best anchor in alwar","wedding anchor alwar","heritage wedding anchor alwar","sariska anchor","neemrana anchor","siliserh lake palace wedding","bala quila event host","nri wedding anchor alwar","sangeet host alwar","bilingual anchor alwar","ncr destination wedding anchor","anchor yash","anchor yash soni"],
  alternates: { canonical: FULL_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_IN", url: FULL_URL, siteName: "Anchor Yash Soni", title: `Best Anchor in Alwar | Heritage & Sariska Wedding Host`, description: `4.9★ rated. 1,100+ events. Alwar's most trusted anchor for heritage weddings near Siliserh Lake, Sariska & Neemrana. Bilingual, unscripted.`, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Alwar — Anchor Yash Soni` }] },
  twitter: { card: "summary_large_image", site: "@yashsonianchor", creator: "@yashsonianchor", title: `Best Anchor in Alwar | Anchor Yash Soni — 4.9★`, description: `Siliserh Lake Palace. Sariska. Neemrana. Alwar's most trusted heritage wedding anchor.`, images: [OG_IMAGE] },
  other: { "geo.region": "IN-RJ", "geo.placename": `${CITY}, Rajasthan, India`, "geo.position": `${LAT};${LNG}`, ICBM: `${LAT}, ${LNG}`, "DC.subject": `Event Anchor, Heritage Wedding, Destination Emcee, ${CITY}, Rajasthan, India` },
};

export default function AlwarLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}