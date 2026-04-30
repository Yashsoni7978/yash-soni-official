/* eslint-disable @next/next/no-sync-scripts */
// app/mehendi-anchor-jaipur/layout.jsx
// SERVER COMPONENT — metadata only
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/mehendi-anchor-jaipur",
  name: "Mehendi Anchor Jaipur — Anchor Yash Soni",
  description: "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Mehendi Anchor & Ladies Sangeet Host",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
  ],
  url: "https://yashsoni.in/mehendi-anchor-jaipur",
  serviceType: "Mehendi Ceremony & Ladies Sangeet Hosting",
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
    { "@type": "ListItem", position: 3, name: "Mehendi Anchor Jaipur", item: "https://yashsoni.in/mehendi-anchor-jaipur" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Best Mehendi Anchor in Jaipur | Ladies Sangeet Host | Anchor Yash Soni — 4.9★",
  description:
    "Best Mehendi anchor in Jaipur — Anchor Yash Soni. 4.9★ rated. Ladies Sangeet specialist. Hands-free musical games, couple trivia, zero awkward silences. Book Jaipur's top Mehendi ceremony host.",
  keywords: [
    "mehendi anchor jaipur",
    "best mehendi anchor in jaipur",
    "mehendi host jaipur",
    "ladies sangeet host jaipur",
    "mehendi ceremony anchor jaipur",
    "mehendi anchor rajasthan",
    "ladies sangeet anchor jaipur",
    "mehendi games host jaipur",
    "anchor for mehendi jaipur",
    "mehendi emcee jaipur",
    "interactive mehendi games jaipur",
    "mehendi ceremony host jaipur",
    "mehendi sangeet anchor jaipur",
    "anchor yash mehendi",
    "best anchor in jaipur mehendi",
    "mehendi host ajmer road jaipur",
    "destination mehendi anchor india",
    "wedding mehendi anchor jaipur",
    "ladies sangeet emcee rajasthan",
    "mehendi anchor near me jaipur",
  ],
  alternates: {
    // FIX: was /mehendi-anchor (404). Corrected to full slug.
    canonical: "https://yashsoni.in/mehendi-anchor-jaipur",
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
    // FIX: was /mehendi-anchor (wrong). Corrected.
    url: "https://yashsoni.in/mehendi-anchor-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Best Mehendi Anchor in Jaipur | Anchor Yash Soni — 4.9★",
    description:
      "Ladies Sangeet specialist. Hands-free musical games, couple trivia, zero awkward silences. Jaipur's 4.9★ Mehendi ceremony host.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Best Mehendi Anchor in Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Mehendi Anchor in Jaipur | Anchor Yash Soni",
    description: "4.9★ Mehendi host. Ladies Sangeet specialist. Zero boring waiting times.",
    images: ["/og-image.webp"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};
export default function MehendiLayout({ children }) {
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
