import Script from "next/script";

export const metadata = {
  title: "Gala Dinner Event Planner Jaipur | Corporate Awards | Anchor Yash Soni",
  description:
    "Premium gala dinner event planners in Jaipur. We manage high-end corporate sit-downs, award nights, and executive hospitality with flawless precision.",
  keywords: [
    "gala dinner event planner jaipur",
    "corporate awards night organizer",
    "sit down dinner planner rajasthan",
    "executive event management",
    "corporate gala organizers",
  ],
  openGraph: {
    title: "Gala Dinner Event Planner Jaipur | Executive Hospitality",
    description:
      "Corporate luxury defined at the dinner table. We handle white-glove service, A/V tech, and show directing for premium corporate galas.",
    url: "https://yashsoni.in/gala-dinner-event-planner",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/gala-dinner-event-planner',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corporate Gala Planning",
  name: "Gala Dinner Event Planner Jaipur",
  description:
    "Anchor Yash Soni specializes in planning and executing high-end gala dinners, corporate award nights, and executive networking events in Jaipur.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "City", name: "Jaipur" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Gala Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Award Night Show Directing" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sit-down Plated Service Management" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Corporate Event Production" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="gala-dinner-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
