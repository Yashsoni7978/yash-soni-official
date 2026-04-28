import Script from "next/script";

export const metadata = {
  title: "Wedding Venues Jaipur | Top Palaces & Resorts | Anchor Yash Soni",
  description:
    "Book the best wedding venues in Jaipur. From 5-star heritage palaces like Rambagh to luxury resorts like Fairmont. Expert venue sourcing by Anchor Yash Soni.",
  keywords: [
    "wedding venues jaipur",
    "palace wedding jaipur",
    "5 star wedding venues jaipur",
    "resorts for wedding in jaipur",
    "destination wedding venues rajasthan",
  ],
  openGraph: {
    title: "Wedding Venues Jaipur | Premium Sourcing",
    description:
      "We help you find, negotiate, and secure the perfect luxury wedding venue in Jaipur. Expert guidance for palace and resort buyouts.",
    url: "https://yashsoni.in/wedding-venue-jaipur",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/wedding-venue-jaipur',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wedding Venue Sourcing",
  name: "Wedding Venue Jaipur",
  description:
    "Anchor Yash Soni provides expert wedding venue sourcing and negotiation services in Jaipur, helping clients secure 5-star heritage palaces and luxury resorts at the best rates.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "City", name: "Jaipur" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Venue Sourcing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Complete Wedding Venue Sourcing & Planning" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Venue Consulting & Contract Negotiation" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="wedding-venue-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
