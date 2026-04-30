/* eslint-disable @next/next/no-sync-scripts */
export const metadata = {
  title: "Event Designing Jaipur | 3D Renders & Floral Sets | Anchor Yash Soni",
  description: "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  keywords: [
    "event designing jaipur",
    "3d event designers rajasthan",
    "custom stage fabrication india",
    "luxury floral decorators",
    "bespoke event design",
  ],
  openGraph: {
    title: "Event Designing Jaipur | Architectural Scale Decor",
    description:
      "Visual storytelling through spatial design. We provide 3D mockups, custom carpentry, and intelligent lighting for premium events in Jaipur.",
    url: "https://yashsoni.in/event-designing",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/event-designing',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Event Designing & 3D Visualization",
  name: "Event Designing Jaipur",
  description:
    "Anchor Yash Soni's in-house design studio provides 3D visualization, spatial planning, and high-end set fabrication for luxury weddings and corporate events.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "City", name: "Jaipur" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "3D Venue Rendering" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Custom Set Fabrication" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Floral & Light Architecture" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="event-designing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
