/* eslint-disable @next/next/no-sync-scripts */
export const metadata = {
  title: "Luxury Wedding Planner Rajasthan | VVIP Palace Weddings | Anchor Yash Soni",
  description: "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  keywords: [
    "luxury wedding planner rajasthan",
    "vvip wedding planner india",
    "palace wedding planner jaipur",
    "high end wedding planner udaipur",
    "celebrity wedding planner rajasthan",
  ],
  openGraph: {
    title: "Luxury Wedding Planner Rajasthan | VVIP Events",
    description:
      "Elite wedding planning for high-net-worth clients. Full hotel buyouts, absolute privacy, and flawless execution across Rajasthan's finest palaces.",
    url: "https://yashsoni.in/luxury-wedding-planner-rajasthan",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/luxury-wedding-planner-rajasthan',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Luxury Wedding Planning",
  name: "Luxury Wedding Planner Rajasthan",
  description:
    "Anchor Yash Soni provides exclusive VVIP luxury wedding planning services across Rajasthan, featuring hotel buyouts, private security, and bespoke elite experiences.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "State", name: "Rajasthan" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Luxury Wedding Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Premium Palace Wedding" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "VVIP Exclusive Buyout" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="luxury-wedding-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
