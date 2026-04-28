import Script from "next/script";

export const metadata = {
  title: "Luxury Wedding Planner in Jaipur | Anchor Yash Soni",
  description: "Hire the best luxury wedding planner in Jaipur. Anchor Yash Soni and team organize flawless destination weddings across Rajasthan's finest heritage venues.",
  alternates: {
    canonical: "https://yashsoni.in/wedding-planning-jaipur",
  },
  openGraph: {
    title: "Luxury Wedding Planner in Jaipur | Anchor Yash Soni",
    description: "Hire the best luxury wedding planner in Jaipur. Anchor Yash Soni and team organize flawless destination weddings across Rajasthan's finest heritage venues.",
    url: "https://yashsoni.in/wedding-planning-jaipur",
  }
};

export default function Layout({ children }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Luxury Wedding Planning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Anchor Yash Soni",
      "image": "https://yashsoni.in/premium_events/luxury_wedding_mandap.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "Rajasthan"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wedding Planning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "The Intimate Affair",
            "description": "Boutique venue scouting and core aesthetic design for up to 150 guests."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "The Grand Celebration",
            "description": "Palace booking, immersive decor, and full concierge logistics for 150-400 guests."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "The Royal Protocol",
            "description": "Multi-property buyouts and A-list celebrity bookings for 400+ VIP guests."
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="wedding-planning-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
