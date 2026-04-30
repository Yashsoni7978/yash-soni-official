/* eslint-disable @next/next/no-sync-scripts */
// app/engagement-roka-ceremony-anchor/layout.jsx
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/engagement-roka-ceremony-anchor",
  name: "Engagement & Roka Ceremony Anchor Jaipur — Yash Soni",
  description: "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Engagement & Roka Ceremony Anchor",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/engagement-roka-ceremony-anchor",
  serviceType: "Engagement Ceremony Anchor & Host",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engagement & Roka Anchoring Services",
    itemListElement: [
      { "@type": "Offer", name: "Roka Ceremony Anchor Jaipur" },
      { "@type": "Offer", name: "Engagement Ceremony Host Jaipur" },
      { "@type": "Offer", name: "Ring Ceremony Anchor Jaipur" },
      { "@type": "Offer", name: "Sagai Anchor Jaipur" },
      { "@type": "Offer", name: "Pre-Wedding Ceremony Host Jaipur" },
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
    { "@type": "ListItem", position: 1, name: "Home",                    item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Wedding Anchor Jaipur",   item: "https://yashsoni.in/wedding-anchor-jaipur" },
    { "@type": "ListItem", position: 3, name: "Engagement Ceremony Anchor Jaipur", item: "https://yashsoni.in/engagement-roka-ceremony-anchor" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Engagement & Roka Ceremony Anchor in Jaipur | Ring Ceremony Host | Yash Soni",
  description:
    "Professional engagement, roka and ring ceremony anchor in Jaipur. Custom interactive games, bilingual hosting and personalised scripts for families meeting for the first time. Book via WhatsApp.",
  keywords: [
    "engagement ceremony anchor jaipur",
    "roka ceremony anchor jaipur",
    "ring ceremony anchor jaipur",
    "sagai anchor jaipur",
    "engagement host jaipur",
    "roka anchor jaipur",
    "engagement party anchor jaipur",
    "pre-wedding anchor jaipur",
    "ring ceremony host jaipur",
    "engagement emcee jaipur",
    "roka ceremony host jaipur",
    "sagai emcee jaipur",
    "engagement anchor rajasthan",
    "bilingual engagement host jaipur",
    "anchor for engagement in jaipur",
    "anchor for roka ceremony",
    "anchor for ring ceremony jaipur",
    "family icebreaker anchor jaipur",
    "engagement games host jaipur",
    "yash soni engagement anchor",
  ],
  alternates: { canonical: "https://yashsoni.in/engagement-roka-ceremony-anchor" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website", locale: "en_IN",
    url: "https://yashsoni.in/engagement-roka-ceremony-anchor",
    siteName: "Anchor Yash Soni",
    title: "Engagement & Roka Ceremony Anchor Jaipur | Yash Soni",
    description: "Custom scripted engagement, roka & ring ceremony anchor in Jaipur. Interactive games and bilingual hosting for families meeting for the first time.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Engagement Ceremony Anchor Jaipur — Yash Soni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engagement & Roka Anchor Jaipur | Yash Soni",
    description: "Custom scripted. Bilingual. Ring ceremony, roka & engagement host in Jaipur.",
    images: ["/og-image.webp"],
  },
  other: {
    "geo.region": "IN-RJ", "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873", ICBM: "26.9124, 75.7873",
  },
};
export default function EngagementAnchorLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
