/* eslint-disable @next/next/no-sync-scripts */

export const metadata = {
  title: "Destination Wedding Planner Jaipur | Rajasthan | Anchor Yash Soni",
  description: "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  keywords: [
    "destination wedding planner jaipur",
    "destination wedding rajasthan",
    "wedding planner udaipur",
    "palace wedding jaipur",
    "wedding planner pushkar",
    "destination wedding jodhpur",
  ],
  openGraph: {
    title: "Destination Wedding Planner Jaipur | Anchor Yash Soni",
    description:
      "Rajasthan's most trusted destination wedding planner. Full hotel buyouts, travel, decor and anchor management.",
    url: "https://yashsoni.in/destination-wedding-planner-jaipur",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: "https://yashsoni.in/destination-wedding-planner-jaipur",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Destination Wedding Planning",
  name: "Destination Wedding Planner Jaipur",
  description:
    "Anchor Yash Soni offers complete destination wedding planning across Jaipur, Udaipur, Jodhpur and Pushkar including hotel bookings, travel, decor and full event management.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "City", name: "Udaipur" },
    { "@type": "City", name: "Jodhpur" },
    { "@type": "City", name: "Pushkar" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Destination Wedding Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Palace Wedding — Up to 200 Guests" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Heritage Estate — Up to 400 Guests" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Royal Rajasthan — 400+ VIP Guests" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
