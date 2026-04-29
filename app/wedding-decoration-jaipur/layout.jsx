/* eslint-disable @next/next/no-sync-scripts */
import Script from "next/script";

export const metadata = {
  title: "Wedding Decoration Jaipur | Top Floral Mandap Decorators | Anchor Yash Soni",
  description:
    "Premium wedding decoration in Jaipur. Specializing in luxury floral mandaps, palatial themes, and lighting. Expert decorators led by Anchor Yash Soni.",
  keywords: [
    "wedding decoration jaipur",
    "wedding decorators jaipur",
    "mandap decoration jaipur",
    "floral decor rajasthan",
    "luxury wedding decor jaipur",
    "theme wedding decorators",
  ],
  openGraph: {
    title: "Wedding Decoration Jaipur | Premium Floral Decor",
    description:
      "Transform your venue into a cinematic masterpiece. We provide top-tier floral mandaps, lighting, and thematic wedding decoration across Rajasthan.",
    url: "https://yashsoni.in/wedding-decoration-jaipur",
    siteName: "Anchor Yash Soni",
    type: "website",
  },
  alternates: {
    canonical: 'https://yashsoni.in/wedding-decoration-jaipur',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Wedding Decoration",
  name: "Wedding Decoration Jaipur",
  description:
    "Anchor Yash Soni offers premium wedding decoration services in Jaipur, including 3D design, custom floral mandaps, stage fabrication, and lighting for luxury weddings.",
  provider: {
    "@type": "Person",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  areaServed: { "@type": "City", name: "Jaipur" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Decoration Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Elegant Setup" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Custom Royal Theme" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Massive Palace Build" },
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="wedding-decoration-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
