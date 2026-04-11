// app/destination-wedding-anchor/layout.jsx
// SERVER COMPONENT — national-rank SEO metadata
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/destination-wedding-anchor",
  name: "Destination Wedding Anchor India — Anchor Yash Soni",
  description:
    "Anchor Yash Soni is a 4.9★ rated destination wedding anchor specialist across India. 4.9★ rated. Jaipur, Udaipur, Jodhpur, Jaisalmer, Goa, Pushkar, Dubai, and international. Full 2–3 day wedding package — Welcome Lunch, Haldi, Sangeet, Varmala. NRI bilingual specialist.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Destination Wedding Anchor & Emcee",
    knowsLanguage: ["Hindi", "English", "Rajasthani", "Marwari"],
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "City", name: "Udaipur" },
    { "@type": "City", name: "Jodhpur" },
    { "@type": "City", name: "Jaisalmer" },
    { "@type": "City", name: "Pushkar" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "AdministrativeArea", name: "Goa" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/destination-wedding-anchor",
  serviceType: "Destination Wedding Hosting",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Destination Wedding Services India",
    itemListElement: [
      { "@type": "Offer", name: "Destination Wedding Anchor Udaipur" },
      { "@type": "Offer", name: "Destination Wedding Anchor Jodhpur" },
      { "@type": "Offer", name: "Destination Wedding Anchor Jaisalmer" },
      { "@type": "Offer", name: "Destination Wedding Anchor Goa" },
      { "@type": "Offer", name: "NRI Wedding Anchor India" },
      { "@type": "Offer", name: "Palace Wedding Anchor Rajasthan" },
      { "@type": "Offer", name: "3-Day Wedding Package Anchor India" },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
};
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Best Anchor in Jaipur", item: "https://yashsoni.in/best-anchor-in-jaipur" },
    { "@type": "ListItem", position: 3, name: "Destination Wedding Anchor India", item: "https://yashsoni.in/destination-wedding-anchor" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Destination Wedding Anchor India | Anchor Yash Soni — 4.9★ Udaipur, Jodhpur, Goa & Global",
  description:
    "India's 4.9★ rated destination wedding anchor — Anchor Yash Soni. Udaipur, Jodhpur, Jaisalmer, Goa, Pushkar & international. Full 2–3 day wedding package. NRI bilingual specialist. Book now.",
  keywords: [
    "destination wedding anchor india",
    "destination wedding anchor",
    "destination wedding emcee india",
    "destination wedding anchor udaipur",
    "destination wedding anchor jodhpur",
    "destination wedding anchor jaisalmer",
    "destination wedding anchor goa",
    "destination wedding anchor rajasthan",
    "destination wedding anchor jaipur",
    "palace wedding anchor india",
    "nri wedding anchor india",
    "nri destination wedding anchor",
    "bilingual wedding anchor india",
    "wedding anchor udaipur",
    "wedding anchor jodhpur",
    "wedding anchor goa",
    "wedding anchor pushkar",
    "royal palace wedding anchor india",
    "destination sangeet anchor india",
    "3 day wedding anchor india",
    "anchor yash destination wedding",
    "destination wedding anchor 4.9 rated india",
    "international wedding anchor india",
    "rambagh palace wedding anchor",
    "umaid bhawan wedding anchor",
  ],
  alternates: {
    canonical: "https://yashsoni.in/destination-wedding-anchor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yashsoni.in/destination-wedding-anchor",
    siteName: "Anchor Yash Soni",
    title: "Destination Wedding Anchor India | Anchor Yash Soni — 4.9★",
    description:
      "4.9★ destination wedding anchor. Udaipur, Jodhpur, Goa & international. Full 2–3 day wedding package. NRI bilingual specialist.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Destination Wedding Anchor India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Destination Wedding Anchor India | Anchor Yash Soni",
    description: "4.9★. Udaipur, Jodhpur, Goa, Dubai & international. NRI specialist.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};
export default function DestinationAnchorLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}