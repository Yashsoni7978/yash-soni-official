/* eslint-disable @next/next/no-sync-scripts */
export const metadata = {
  title: "Event Management Company Jaipur | Turnkey Execution | Anchor Yash Soni",
  description: "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  keywords: [
    "event management company jaipur",
    "top event planners rajasthan",
    "event production agency india",
    "live concert organizers",
    "luxury event management",
  ],
  openGraph: {
    title: "Event Management Company Jaipur | Master Execution Agency",
    description:
      "Scale changes everything. We provide full agency capabilities, from massive stage fabrication to hospitality logistics for the biggest events across India.",
    url: "https://yashsoni.in/event-management-jaipur",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/event-management-jaipur',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Event Management & Production",
  name: "Event Management Jaipur",
  description:
    "Anchor Yash Soni is a leading event management agency in Jaipur, providing overarching capabilities including in-house stage production, A/V tech, and complete logistics.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "Country", name: "India" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event Management Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Full Turnkey Event Production" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Corporate Galas & Summits" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Luxury Weddings & Concerts" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="event-management-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
