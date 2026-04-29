/* eslint-disable @next/next/no-sync-scripts */
// app/award-night-anchor-jaipur/layout.jsx
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/award-night-anchor-jaipur",
  name: "Award Night Anchor Jaipur — Yash Soni",
  description:
    "Professional award ceremony and gala dinner anchor in Jaipur. Corporate award nights, annual day hosting, and business gala events at JECC Sitapura, Fairmont, ITC Rajputana and major conference venues. Teleprompter-free, brand-aligned hosting for national companies.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Award Night Anchor & Corporate Emcee",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
  ],
  url: "https://yashsoni.in/award-night-anchor-jaipur",
  serviceType: "Award Night Anchor & Corporate Emcee",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Award Night Anchoring Services Jaipur",
    itemListElement: [
      { "@type": "Offer", name: "Award Ceremony Anchor Jaipur" },
      { "@type": "Offer", name: "Gala Dinner Host Jaipur" },
      { "@type": "Offer", name: "Annual Day Anchor Jaipur" },
      { "@type": "Offer", name: "Award Night JECC Sitapura" },
      { "@type": "Offer", name: "Corporate Gala Anchor Jaipur" },
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
    { "@type": "ListItem", position: 1, name: "Home",                       item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Corporate Anchor Jaipur",    item: "https://yashsoni.in/corporate-event-anchor-jaipur" },
    { "@type": "ListItem", position: 3, name: "Award Night Anchor Jaipur",  item: "https://yashsoni.in/award-night-anchor-jaipur" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Award Night Anchor in Jaipur | Corporate Gala Host | JECC Sitapura Specialist | Yash Soni",
  description:
    "Professional award night anchor in Jaipur. Corporate galas, annual days and business award ceremonies at JECC Sitapura, Fairmont & ITC Rajputana. 70+ national brands. Book via WhatsApp.",
  keywords: [
    "award night anchor jaipur",
    "award ceremony anchor jaipur",
    "corporate award anchor jaipur",
    "gala dinner host jaipur",
    "annual day anchor jaipur",
    "award night jecc sitapura",
    "corporate gala anchor jaipur",
    "business award emcee jaipur",
    "award ceremony emcee jaipur",
    "anchor for award night jaipur",
    "corporate anchor jaipur",
    "annual day host jaipur",
    "award night host jaipur",
    "corporate emcee rajasthan",
    "anchor fairmont jaipur corporate",
    "anchor itc rajputana award night",
    "dealer meet anchor jaipur",
    "product launch anchor jaipur",
    "brand event anchor jaipur",
    "yash soni corporate anchor",
  ],
  alternates: { canonical: "https://yashsoni.in/award-night-anchor-jaipur" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website", locale: "en_IN",
    url: "https://yashsoni.in/award-night-anchor-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Award Night Anchor Jaipur | Yash Soni — JECC Sitapura & Luxury Venue Specialist",
    description: "Corporate award night anchor in Jaipur. 70+ national brands. JECC Sitapura, Fairmont & ITC Rajputana specialist.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Award Night Anchor Jaipur — Yash Soni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Award Night Anchor Jaipur | Yash Soni",
    description: "Corporate award ceremonies, gala dinners & annual days. JECC Sitapura specialist. 4.9★.",
    images: ["/og-image.webp"],
  },
  other: {
    "geo.region": "IN-RJ", "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873", ICBM: "26.9124, 75.7873",
  },
};
export default function AwardNightLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
