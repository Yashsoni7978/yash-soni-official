/* eslint-disable @next/next/no-sync-scripts */
import Script from "next/script";

export const metadata = {
  title: "Theme Wedding Organizer India | Custom Sets & Decor | Anchor Yash Soni",
  description:
    "Top theme wedding organizer in India. We design and fabricate immersive 3D sets, royal rajwada themes, and enchanted forest setups for luxury destination weddings.",
  keywords: [
    "theme wedding organizer india",
    "theme wedding planner jaipur",
    "custom wedding sets rajasthan",
    "rajwada theme wedding",
    "vrindavan theme wedding decor",
  ],
  openGraph: {
    title: "Theme Wedding Organizer India | Immersive Designs",
    description:
      "We don't just decorate venues, we build entire worlds. Expert fabrication, 3D concept art, and thematic detailing for high-end weddings across India.",
    url: "https://yashsoni.in/theme-wedding-organizer-india",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/theme-wedding-organizer-india',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Theme Wedding Organization",
  name: "Theme Wedding Organizer India",
  description:
    "Anchor Yash Soni specializes in creating bespoke theme weddings across India, offering 3D design, massive set fabrication, and theatrical lighting for immersive celebrations.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "Country", name: "India" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Thematic Wedding Designs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Custom 3D Theme Renders" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Theatrical Set Fabrication" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Immersive Lighting & Production" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="theme-wedding-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
