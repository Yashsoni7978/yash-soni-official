// app/wedding-anchor-jaipur/layout.jsx
// SERVER COMPONENT — complete SEO metadata
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://yashsoni.in/#business",
  name: "Anchor Yash Soni",
  description:
    "Anchor Yash Soni is the best wedding anchor in Jaipur with 1100+ events hosted. 4.9★ rated across 200+ reviews. Specialist in luxury weddings, Sangeet, Haldi, Mehendi, Varmala, and NRI destination weddings across Kukas, Amer Road, Ajmer Road, and all Jaipur venues.",
  url: "https://yashsoni.in/wedding-anchor-jaipur",
  telephone: "+917737877978",
  priceRange: "₹₹₹₹",
  image: "https://yashsoni.in/service-wedding.webp",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302012",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.9124,
    longitude: 75.7873,
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Anchoring Services Jaipur",
    itemListElement: [
      { "@type": "Offer", name: "Wedding Ceremony Anchor Jaipur" },
      { "@type": "Offer", name: "Sangeet Host Jaipur" },
      { "@type": "Offer", name: "Varmala Ceremony Anchor" },
      { "@type": "Offer", name: "Baraat Entry Host Jaipur" },
      { "@type": "Offer", name: "Wedding Reception Emcee Jaipur" },
      { "@type": "Offer", name: "NRI Destination Wedding Anchor Jaipur" },
      { "@type": "Offer", name: "Hindu Wedding Anchor Jaipur" },
      { "@type": "Offer", name: "Bilingual Wedding Emcee Jaipur" },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
  sameAs: [
    "https://www.instagram.com/anchor_yash_official",
    "https://www.youtube.com/@anchor_yash",
    "https://www.wedmegood.com/profile/anchor-yash-25628297",
    "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166",
  ],
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Best Anchor in Jaipur", item: "https://yashsoni.in/best-anchor-in-jaipur" },
    { "@type": "ListItem", position: 3, name: "Wedding Anchor Jaipur", item: "https://yashsoni.in/wedding-anchor-jaipur" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Best Wedding Anchor in Jaipur | Anchor Yash Soni — 4.9★ Premium Wedding Emcee",
  description:
    "Looking for the best wedding anchor in Jaipur? Anchor Yash Soni — 4.9★, 1100+ weddings. Sangeet, Varmala, Baraat, Haldi & NRI destination weddings across Kukas, Amer Road & Ajmer Road. Book now.",
  keywords: [
    "best wedding anchor in jaipur",
    "wedding anchor jaipur",
    "wedding emcee jaipur",
    "anchor for wedding jaipur",
    "sangeet anchor jaipur",
    "varmala anchor jaipur",
    "baraat anchor jaipur",
    "wedding host jaipur",
    "anchor yash soni wedding",
    "anchor yash",
    "nri wedding anchor jaipur",
    "destination wedding anchor jaipur",
    "luxury wedding emcee rajasthan",
    "hindi english wedding anchor jaipur",
    "bilingual wedding anchor jaipur",
    "farmhouse wedding anchor jaipur",
    "palace wedding anchor jaipur",
    "anchor for sangeet jaipur",
    "best anchor in jaipur wedding",
    "anchor in rajasthan wedding",
    "wedding anchor kukas jaipur",
    "wedding anchor ajmer road jaipur",
    "hindu wedding anchor jaipur",
    "wedding emcee india",
  ],
  alternates: {
    canonical: "https://yashsoni.in/wedding-anchor-jaipur",
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
    url: "https://yashsoni.in/wedding-anchor-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Best Wedding Anchor in Jaipur | Anchor Yash Soni — 4.9★",
    description:
      "4.9★. 1100+ weddings. Jaipur's most trusted wedding anchor for Sangeet, Varmala, Baraat & NRI destination weddings.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Best Wedding Anchor in Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Wedding Anchor in Jaipur | Anchor Yash Soni",
    description: "4.9★ rated. 1100+ weddings. The anchor Jaipur's elite families choose.",
    images: ["/og-image.webp"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};
export default function WeddingAnchorLayout({ children }) {
  return <>{children}</>;
}
