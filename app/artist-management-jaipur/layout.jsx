import Script from "next/script";

export const metadata = {
  title: "Celebrity & Artist Management Agency Jaipur | Anchor Yash Soni",
  description:
    "Book Bollywood celebrities, live bands, DJs and anchors for your wedding or corporate event in Jaipur. India's top artist management by Anchor Yash Soni.",
  keywords: [
    "artist management jaipur",
    "celebrity booking jaipur",
    "bollywood artist booking wedding",
    "live band booking jaipur",
    "DJ booking jaipur wedding",
    "anchor booking jaipur",
  ],
  openGraph: {
    title: "Celebrity & Artist Management Agency Jaipur | Anchor Yash Soni",
    description:
      "Direct celebrity bookings for weddings and corporate events. Bollywood stars, live bands, DJs and professional anchors across Rajasthan.",
    url: "https://yashsoni.in/artist-management-jaipur",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/artist-management-jaipur',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Artist & Celebrity Management",
  name: "Artist Management Jaipur",
  description:
    "Anchor Yash Soni provides direct booking of Bollywood celebrities, live bands, DJs and professional anchors for weddings and corporate events across Jaipur and Rajasthan.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "State", name: "Rajasthan" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Artist Booking Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Live Band & DJ — Wedding Night" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Celebrity Performance — Sangeet & Reception" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Full Entertainment Production" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="artist-management-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
