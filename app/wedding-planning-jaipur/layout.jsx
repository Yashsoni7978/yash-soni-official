// app/wedding-planning-jaipur/layout.jsx
// SERVER COMPONENT — metadata only
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/wedding-planning-jaipur",
  name: "Luxury Wedding Planner Jaipur — Anchor Yash Soni",
  description:
    "Premium luxury wedding planning in Jaipur. Palace venue procurement at Fairmont, Rambagh Palace, Leela Palace, and Amer Road properties. Full-service destination wedding execution across Rajasthan. Transparent fixed-fee model.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Luxury Wedding Planner & Event Architect",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/wedding-planning-jaipur",
  serviceType: "Luxury Wedding Planning & Destination Wedding Management",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Planning Services Jaipur",
    itemListElement: [
      { "@type": "Offer", name: "Palace Wedding Planner Jaipur" },
      { "@type": "Offer", name: "Destination Wedding Planner Rajasthan" },
      { "@type": "Offer", name: "Luxury Wedding Planner Fairmont Jaipur" },
      { "@type": "Offer", name: "Wedding Planner Rambagh Palace" },
      { "@type": "Offer", name: "NRI Wedding Planner Jaipur" },
      { "@type": "Offer", name: "Full Service Wedding Management Jaipur" },
    ],
  },
};
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Wedding Anchor Jaipur", item: "https://yashsoni.in/wedding-anchor-jaipur" },
    { "@type": "ListItem", position: 3, name: "Wedding Planner Jaipur", item: "https://yashsoni.in/wedding-planning-jaipur" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Luxury Wedding Planner in Jaipur | Palace & Destination Weddings | Yash Soni",
  description:
    "Premium luxury wedding planner in Jaipur. Palace venue procurement at Fairmont, Rambagh, Leela & Amer Road. Full-service destination wedding execution across Rajasthan. Transparent fixed-fee model. Book now.",
  keywords: [
    "luxury wedding planner jaipur",
    "wedding planner jaipur",
    "destination wedding planner jaipur",
    "destination wedding planner rajasthan",
    "palace wedding planner jaipur",
    "wedding planner fairmont jaipur",
    "wedding planner rambagh palace",
    "wedding planner leela palace jaipur",
    "premium wedding planner jaipur",
    "wedding planner amer road jaipur",
    "nri wedding planner jaipur",
    "wedding planner kukas jaipur",
    "luxury wedding agency jaipur",
    "royal wedding planner rajasthan",
    "full service wedding planner jaipur",
    "wedding management jaipur",
    "high end wedding planner jaipur",
    "wedding planning services jaipur",
    "anchor yash wedding planner",
    "elite wedding planner jaipur",
  ],
  alternates: {
    canonical: "https://yashsoni.in/wedding-planning-jaipur",
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
    url: "https://yashsoni.in/wedding-planning-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Luxury Wedding Planner Jaipur | Palace & Destination Weddings | Yash Soni",
    description:
      "Palace venue procurement, full-service destination wedding execution, transparent fixed-fee model. Fairmont, Rambagh, Leela & Amer Road specialist.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Wedding Planner Jaipur — Anchor Yash Soni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Wedding Planner Jaipur | Anchor Yash Soni",
    description: "Palace venues, full-service execution, transparent pricing. Fairmont, Rambagh & Leela specialist.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};
export default function WeddingPlanningLayout({ children }) {
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