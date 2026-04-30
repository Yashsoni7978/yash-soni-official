/* eslint-disable @next/next/no-sync-scripts */
// app/celebrity-public-events-host/layout.jsx
// SERVER COMPONENT — metadata only, no head/script tags
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/celebrity-public-events-host",
  name: "Celebrity & Public Events Host Jaipur — Anchor Yash Soni",
  description: "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Celebrity & Public Events Anchor",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/celebrity-public-events-host",
  serviceType: "Celebrity & Public Event Hosting",
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
    { "@type": "ListItem", position: 3, name: "Celebrity Events Host Jaipur", item: "https://yashsoni.in/celebrity-public-events-host" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Celebrity & Public Events Host Jaipur | Anchor Yash Soni — Concerts & Launches",
  description:
    "Celebrity and public events host in Jaipur — Anchor Yash Soni. 4.9★ rated. Music concerts, fashion shows, luxury brand launches, Bollywood celebrity events. 5,000+ crowd management. Book now.",
  keywords: [
    "celebrity event host jaipur",
    "celebrity anchor jaipur",
    "public event host jaipur",
    "concert host jaipur",
    "music festival anchor jaipur",
    "fashion show anchor jaipur",
    "fashion show host jaipur",
    "luxury brand launch host jaipur",
    "store launch anchor jaipur",
    "product launch anchor jaipur",
    "celebrity meet greet host jaipur",
    "bollywood event anchor jaipur",
    "red carpet host jaipur",
    "concert emcee jaipur",
    "large event anchor jaipur",
    "celebrity event anchor rajasthan",
    "anchor yash celebrity events",
    "public event anchor india",
    "event host jaipur",
    "anchor in jaipur",
  ],
  alternates: {
    canonical: "https://yashsoni.in/celebrity-public-events-host",
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
    url: "https://yashsoni.in/celebrity-public-events-host",
    siteName: "Anchor Yash Soni",
    title: "Celebrity & Public Events Host Jaipur | Anchor Yash Soni — 4.9★",
    description:
      "Music concerts, fashion shows, luxury launches & Bollywood events. 5,000+ crowd management. 4.9★ rated Jaipur celebrity events anchor.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Celebrity & Public Events Host Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celebrity & Public Events Host Jaipur | Anchor Yash Soni",
    description: "4.9★. Concerts, fashion shows, luxury launches. 5,000+ crowd management.",
    images: ["/og-image.webp"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};
export default function CelebrityLayout({ children }) {
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
