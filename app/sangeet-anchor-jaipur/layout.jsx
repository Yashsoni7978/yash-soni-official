/* eslint-disable @next/next/no-sync-scripts */
// app/sangeet-anchor-jaipur/layout.jsx
// SERVER COMPONENT — no head tags, no scripts, metadata only
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/sangeet-anchor-jaipur",
  name: "Sangeet Anchor Jaipur — Anchor Yash Soni",
  description: "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Premium Sangeet Anchor & Emcee",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
  ],
  url: "https://yashsoni.in/sangeet-anchor-jaipur",
  serviceType: "Sangeet Ceremony Hosting",
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
    { "@type": "ListItem", position: 3, name: "Sangeet Anchor Jaipur", item: "https://yashsoni.in/sangeet-anchor-jaipur" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Best Sangeet Anchor in Jaipur | Anchor Yash Soni — 4.9★ Sangeet Host",
  description:
    "Best Sangeet anchor in Jaipur — Anchor Yash Soni. 4.9★ rated. Dance floors packed until 4 AM. Farmhouse Sangeets on Ajmer Road, palace events in Kukas. Family roasts, awards nights, crowd games. Book now.",
  keywords: [
    "sangeet anchor jaipur",
    "best sangeet anchor in jaipur",
    "sangeet host jaipur",
    "sangeet emcee jaipur",
    "sangeet anchor rajasthan",
    "wedding sangeet host jaipur",
    "sangeet anchor ajmer road jaipur",
    "farmhouse sangeet anchor jaipur",
    "sangeet games host jaipur",
    "sangeet night anchor jaipur",
    "anchor for sangeet jaipur",
    "sangeet awards night host jaipur",
    "high energy sangeet host jaipur",
    "anchor yash sangeet",
    "best anchor in jaipur sangeet",
    "sangeet anchor kukas jaipur",
    "destination sangeet anchor india",
    "sangeet anchor bhankrota jaipur",
    "sangeet host amer road jaipur",
    "sangeet emcee rajasthan",
  ],
  alternates: {
    canonical: "https://yashsoni.in/sangeet-anchor-jaipur",
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
    url: "https://yashsoni.in/sangeet-anchor-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Best Sangeet Anchor in Jaipur | Anchor Yash Soni — 4.9★",
    description:
      "4.9★ Sangeet anchor. Dance floors packed until 4 AM. Farmhouse Sangeets on Ajmer Road & palace events in Kukas, Jaipur.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Best Sangeet Anchor in Jaipur on stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Sangeet Anchor in Jaipur | Anchor Yash Soni",
    description: "4.9★. Dance floors packed until 4 AM. Jaipur's best Sangeet host.",
    images: ["/og-image.webp"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};
export default function SangeetAnchorLayout({ children }) {
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
