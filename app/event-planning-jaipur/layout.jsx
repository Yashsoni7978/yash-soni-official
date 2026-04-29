/* eslint-disable @next/next/no-sync-scripts */
import Script from "next/script";

export const metadata = {
  title: "Event Planners in Jaipur | Social & Corporate Events | Anchor Yash Soni",
  description:
    "Top event planners in Jaipur. We curate flawless social gatherings, corporate summits, and brand activations with full turnkey management and venue sourcing.",
  keywords: [
    "event planners in jaipur",
    "social event planner rajasthan",
    "corporate event planners india",
    "gala dinner organizer",
    "turnkey event management",
  ],
  openGraph: {
    title: "Event Planners in Jaipur | Flawless Execution",
    description:
      "Ideas are easy. Execution is an art. We handle venue sourcing, vendor curation, and complete logistical management for premium events in Jaipur.",
    url: "https://yashsoni.in/event-planning-jaipur",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/event-planning-jaipur',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Event Planning",
  name: "Event Planning Jaipur",
  description:
    "Anchor Yash Soni offers premium event planning services in Jaipur, managing logistics, vendors, and end-to-end execution for corporate and social events.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "City", name: "Jaipur" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Full Service Turnkey Planning" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Corporate Summit Planning" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Social Gala Management" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="event-planning-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
