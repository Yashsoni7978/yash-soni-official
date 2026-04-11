// app/anchor-in-bikaner/layout.jsx
const CITY     = "Bikaner";
const SLUG     = "anchor-in-bikaner";
const DOMAIN   = "yashsoni.in";
const FULL_URL = `https://${DOMAIN}/${SLUG}`;
const LAT      = "28.0229";
const LNG      = "73.3119";
const OG_IMAGE = `https://${DOMAIN}/vintage-car-couple-shoot.webp`;

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${FULL_URL}/#business`,
  name: `Anchor Yash Soni — Best Anchor in ${CITY}`,
  alternateName: ["Anchor in Bikaner","Wedding Anchor Bikaner","Heritage Wedding Host Bikaner","Junagarh Fort Wedding Anchor","Lallgarh Palace Emcee","Karni Bhawan Event Host","Desert Heritage Anchor Bikaner","Camel Festival Anchor Bikaner"],
  description: `Anchor Yash Soni is Bikaner's premier destination wedding and heritage event anchor — 4.9★ rated, 1,100+ events, 8+ years. Specialist in royal fort-city weddings at Junagarh Fort, Lallgarh Palace, and Karni Bhawan. Bilingual Hindi/English, fully unscripted, experienced with Marwari and Rajputana elite families.`,
  url: FULL_URL, telephone: "+917737877978", priceRange: "₹₹₹₹", image: OG_IMAGE,
  sameAs: ["https://www.instagram.com/yashsoni_official","https://www.youtube.com/@anchorYashSoni"],
  address: { "@type": "PostalAddress", addressLocality: CITY, addressRegion: "Rajasthan", addressCountry: "IN", postalCode: "334001" },
  geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LNG },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "09:00", closes: "21:00" },
  areaServed: [{ "@type": "City", name: CITY },{ "@type": "AdministrativeArea", name: "Rajasthan" },{ "@type": "Country", name: "India" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5", worstRating: "1" },
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Anchoring Services in Bikaner",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heritage Wedding Anchor Bikaner", description: "Royal fort-side wedding hosting at Junagarh and Lallgarh" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sangeet Host Bikaner", description: "High-energy Sangeet emcee for Marwari heritage celebrations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Anchor Bikaner", description: "Corporate retreats and summits at Bikaner's heritage properties" } },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org", "@type": "Person", "@id": `https://${DOMAIN}/#person`,
  name: "Yash Soni", alternateName: ["Anchor Yash Soni","Anchor Yash"],
  jobTitle: "Professional Event Anchor & Emcee",
  url: `https://${DOMAIN}`, image: `https://${DOMAIN}/intro-portrait-top.webp`, telephone: "+917737877978",
  knowsAbout: ["Heritage Wedding Anchoring","Marwari Wedding Hosting","Fort Wedding Events","Bilingual Emceeing","Bikaner Heritage Events","Desert City Destination Weddings","Rajputana Clan Protocol"],
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
  title: `Best Anchor in Bikaner | Heritage Wedding & Marwari Emcee — Yash Soni`,
  description: `Looking for the best anchor in Bikaner? Anchor Yash Soni — 4.9★ rated, 1,100+ events. Expert for Royal Marwari weddings at Junagarh Fort & Lallgarh Palace. Bilingual, unscripted, heritage protocol specialist.`,
  keywords: [
    "anchor in bikaner","best anchor in bikaner","wedding anchor bikaner",
    "heritage wedding anchor bikaner","junagarh fort wedding anchor",
    "lallgarh palace emcee","karni bhawan wedding host",
    "marwari wedding anchor","destination wedding anchor bikaner",
    "rajputana anchor bikaner","sangeet host bikaner",
    "corporate anchor bikaner","bilingual anchor bikaner",
    "desert wedding anchor rajasthan","anchor yash","anchor yash soni"
  ],
  alternates: { canonical: FULL_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "en_IN", url: FULL_URL, siteName: "Anchor Yash Soni", title: `Best Anchor in Bikaner | Heritage Wedding & Marwari Emcee`, description: `4.9★ rated. 1,100+ events. Bikaner's most trusted anchor for Royal Marwari weddings at Junagarh Fort & Lallgarh Palace. Bilingual, unscripted.`, images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `Best Anchor in Bikaner — Anchor Yash Soni at Junagarh Fort` }] },
  twitter: { card: "summary_large_image", site: "@yashsonianchor", creator: "@yashsonianchor", title: `Best Anchor in Bikaner | Anchor Yash Soni — 4.9★`, description: `Junagarh Fort. Lallgarh Palace. Bikaner's most trusted Royal Marwari wedding anchor.`, images: [OG_IMAGE] },
  other: { "geo.region": "IN-RJ", "geo.placename": `${CITY}, Rajasthan, India`, "geo.position": `${LAT};${LNG}`, ICBM: `${LAT}, ${LNG}`, "DC.subject": `Event Anchor, Heritage Wedding, Marwari Emcee, ${CITY}, Rajasthan, India` },
};

export default function BikanerLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}