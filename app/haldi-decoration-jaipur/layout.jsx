import Script from "next/script";

export const metadata = {
  title: "Haldi Decoration Jaipur | Haldi Ceremony Planner | Anchor Yash Soni",
  description:
    "Best Haldi ceremony decoration in Jaipur. Marigold setups, floral tunnels, colour props, and fun anchoring by Anchor Yash Soni.",
  keywords: [
    "haldi decoration jaipur",
    "haldi ceremony planner jaipur",
    "haldi decor rajasthan",
    "marigold wedding decoration",
    "haldi ceremony setup",
    "yellow themed wedding jaipur",
  ],
  openGraph: {
    title: "Haldi Decoration Jaipur | Anchor Yash Soni",
    description:
      "Make your Haldi ceremony unforgettable with Jaipur's top Haldi planner. Marigold decor, colour props, live entertainment and complete management.",
    url: "https://yashsoni.in/haldi-decoration-jaipur",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/haldi-decoration-jaipur',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Haldi Ceremony Decoration",
  name: "Haldi Decoration Jaipur",
  description:
    "Complete Haldi ceremony setup and decoration by Anchor Yash Soni including marigold decor, colour props, floral setups, fun activities and anchoring.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "City", name: "Jaipur" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Haldi Ceremony Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Classic Haldi — Up to 100 Guests" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Grand Haldi — Up to 300 Guests" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Luxury Haldi — Large Venue" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="haldi-decoration-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
