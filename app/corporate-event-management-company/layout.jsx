import Script from "next/script";

export const metadata = {
  title: "Corporate Event Management Company | MICE & Galas | Anchor Yash Soni",
  description:
    "Top corporate event management company in Jaipur. We execute flawless MICE travel, annual galas, dealer meets, and product launches with high-end tech production.",
  keywords: [
    "corporate event management company",
    "corporate event planner jaipur",
    "MICE planners india",
    "award night organizers",
    "product launch event management",
  ],
  openGraph: {
    title: "Corporate Event Management Company | Flawless Execution",
    description:
      "Executing high-stakes corporate galas, dealer meets, and summits. We handle complete MICE logistics, LED stage production, and show-calling across Rajasthan.",
    url: "https://yashsoni.in/corporate-event-management-company",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/corporate-event-management-company',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corporate Event Management",
  name: "Corporate Event Management Company",
  description:
    "Anchor Yash Soni offers premium corporate event management, including MICE travel, massive stage tech production, artist booking, and flawless show calling for enterprise clients.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "Country", name: "India" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Corporate Event Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Annual Galas & Award Nights" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "MICE & Corporate Retreats" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Product Launches & Summits" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="corporate-event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
