/* eslint-disable @next/next/no-sync-scripts */
// app/anchor-in-rajasthan/layout.jsx
// SERVER COMPONENT — metadata + schema only
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/anchor-in-rajasthan",
  name: "Anchor in Rajasthan — Yash Soni",
  description: "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Premier Event Anchor — Rajasthan",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "City", name: "Udaipur" },
    { "@type": "City", name: "Jodhpur" },
    { "@type": "City", name: "Jaisalmer" },
    { "@type": "City", name: "Pushkar" },
    { "@type": "City", name: "Ajmer" },
    { "@type": "City", name: "Bikaner" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/anchor-in-rajasthan",
  serviceType: "Event Anchor & Emcee — Rajasthan",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchor Services Across Rajasthan",
    itemListElement: [
      { "@type": "Offer", name: "Wedding Anchor Jaipur" },
      { "@type": "Offer", name: "Anchor in Udaipur" },
      { "@type": "Offer", name: "Anchor in Jodhpur" },
      { "@type": "Offer", name: "Anchor in Jaisalmer" },
      { "@type": "Offer", name: "Destination Wedding Anchor Rajasthan" },
      { "@type": "Offer", name: "Corporate Anchor Rajasthan" },
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
    { "@type": "ListItem", position: 2, name: "Best Anchor in Jaipur", item: "https://yashsoni.in/anchor-in-jaipur" },
    { "@type": "ListItem", position: 3, name: "Anchor in Rajasthan", item: "https://yashsoni.in/anchor-in-rajasthan" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Anchor in Rajasthan | Wedding & Event Host Across Rajasthan | Yash Soni",
  description:
    "Looking for an anchor in Rajasthan? Yash Soni covers all major Rajasthan cities — Jaipur, Udaipur, Jodhpur, Jaisalmer, Pushkar. Palace weddings, destination events, corporate galas across the royal state.",
  keywords: [
    "anchor in rajasthan",
    "event anchor rajasthan",
    "wedding anchor rajasthan",
    "anchor rajasthan",
    "best anchor rajasthan",
    "anchor in jaipur",
    "anchor in udaipur",
    "anchor in jodhpur",
    "anchor in jaisalmer",
    "anchor in pushkar",
    "destination wedding anchor rajasthan",
    "corporate anchor rajasthan",
    "palace wedding anchor rajasthan",
    "bilingual anchor rajasthan",
    "hindi english anchor rajasthan",
    "nri wedding anchor rajasthan",
    "luxury event anchor rajasthan",
    "anchor for wedding in rajasthan",
    "event host rajasthan",
    "emcee rajasthan",
  ],
  alternates: { canonical: "https://yashsoni.in/anchor-in-rajasthan" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website", locale: "en_IN",
    url: "https://yashsoni.in/anchor-in-rajasthan",
    siteName: "Anchor Yash Soni",
    title: "Anchor in Rajasthan | Yash Soni — Jaipur · Udaipur · Jodhpur · Jaisalmer",
    description: "Premier event anchor across all of Rajasthan. Palace weddings, destination events & corporate galas across every major Rajasthan city.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Anchor in Rajasthan — Yash Soni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchor in Rajasthan | Yash Soni",
    description: "Jaipur · Udaipur · Jodhpur · Jaisalmer · Pushkar. 1100+ events. Palace weddings & destination events across Rajasthan.",
    images: ["/og-image.webp"],
  },
  other: {
    "geo.region": "IN-RJ", "geo.placename": "Rajasthan, India",
    "geo.position": "27.0238;74.2179", ICBM: "27.0238, 74.2179",
  },
};
export default function AnchorRajasthanLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
