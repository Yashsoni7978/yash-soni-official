import Script from "next/script";

export const metadata = {
  title: "Wedding Planners in Jaipur | Turnkey Logistics | Anchor Yash Soni",
  description:
    "Top wedding planners in Jaipur. We manage turnkey event logistics, venue negotiations, RSVPs, and end-to-end execution for luxury destination weddings.",
  keywords: [
    "wedding planners in jaipur",
    "turnkey wedding management",
    "best wedding planner rajasthan",
    "wedding logistics jaipur",
    "destination wedding organizer",
  ],
  openGraph: {
    title: "Wedding Planners in Jaipur | End-to-End Execution",
    description:
      "Be a guest at your own wedding. We handle venue buyouts, vendor sourcing, transport grids, and flawless show calling for premium celebrations.",
    url: "https://yashsoni.in/wedding-planning-jaipur",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/wedding-planning-jaipur',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wedding Planning",
  name: "Wedding Planning Jaipur",
  description:
    "Anchor Yash Soni runs a premier wedding planning agency in Jaipur, specializing in full turnkey management, from logistics and hospitality to vendor sourcing.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "City", name: "Jaipur" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planning Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Full Service Turnkey Planning" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Partial Planning & Coordination" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "VVIP Palace Buyout Management" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="wedding-planning-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
