/* eslint-disable @next/next/no-sync-scripts */
export const metadata = {
  title: "Sangeet Decoration Jaipur | LED Stages & Lighting | Anchor Yash Soni",
  description: "1,100+ Premium Events Hosted • Elite Heritage Venues • Anchor Yash Soni delivers flawless destination weddings across Jaipur, Udaipur, Jodhpur & Pushkar. Luxury planning, travel & decor handled end‑to‑end.",
  keywords: [
    "sangeet decoration jaipur",
    "sangeet stage decorators jaipur",
    "LED stage setup rajasthan",
    "cocktail night decor jaipur",
    "luxury sangeet planner",
  ],
  openGraph: {
    title: "Sangeet Decoration Jaipur | High Energy Setups",
    description:
      "Transform your Sangeet into a concert. We specialize in LED screens, intelligent lighting arrays, and immersive nightclub setups for luxury weddings.",
    url: "https://yashsoni.in/sangeet-decoration-jaipur",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/sangeet-decoration-jaipur',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Sangeet Decoration & Production",
  name: "Sangeet Decoration Jaipur",
  description:
    "Anchor Yash Soni designs and fabricates high-energy sangeet setups in Jaipur, offering LED screens, pixel mapping, custom lighting, and premium lounge decor.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "City", name: "Jaipur" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sangeet Decor Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Modern Club LED Setup" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Concert Level Production" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Sufi & Retro Theme Designs" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="sangeet-decoration-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
