/* eslint-disable @next/next/no-sync-scripts */
export const metadata = {
  title: "Wedding Catering Jaipur | Premium Food & Live Counters | Anchor Yash Soni",
  description: "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  keywords: [
    "wedding catering jaipur",
    "premium wedding caterers rajasthan",
    "luxury catering services jaipur",
    "live food counters wedding",
    "destination wedding catering",
  ],
  openGraph: {
    title: "Wedding Catering Jaipur | Luxury Culinary Experiences",
    description:
      "Serve your guests an unforgettable feast. We provide high-end catering, global cuisines, and flawless white-glove service for luxury weddings in Jaipur.",
    url: "https://yashsoni.in/wedding-catering-jaipur",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/wedding-catering-jaipur',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wedding Catering",
  name: "Wedding Catering Jaipur",
  description:
    "Anchor Yash Soni organizes premium wedding catering services in Jaipur, offering global cuisines, live theatrical food counters, and royal Rajasthani dining experiences.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "City", name: "Jaipur" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Catering Menus",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Traditional Rajasthani Feast" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Global Fusion Live Counters" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Luxury Plated Sit-Down Dinner" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="wedding-catering-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
