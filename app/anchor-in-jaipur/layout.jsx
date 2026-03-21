// app/anchor-in-jaipur/layout.jsx
// SERVER COMPONENT — metadata only, no head/script tags

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://yashsoni.in/#business",
  name: "Anchor Yash Soni",
  alternateName: ["Best Anchor in Jaipur", "Anchor Yash", "Anchor in Jaipur"],
  description:
    "Anchor Yash Soni is the best anchor in Jaipur with 1100+ events hosted. 4.9★ rated across 200+ verified reviews. Specialist in luxury weddings, Sangeet, Haldi, Mehendi, corporate events, NRI destination weddings, and VIP birthday galas. Serving Kukas, Amer Road, Ajmer Road, Bhankrota, Jhotwara, Mansarovar, Vaishali Nagar, Sitapura JECC, Tonk Road, and JLN Marg.",
  url: "https://yashsoni.in",
  telephone: "+917737877978",
  priceRange: "₹₹₹₹",
  image: "https://yashsoni.in/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jhotwara",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302012",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.9124,
    longitude: 75.7873,
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
  sameAs: [
    "https://www.instagram.com/anchor_yash_official",
    "https://www.youtube.com/@anchor_yash",
    "https://www.wedmegood.com/profile/anchor-yash-25628297",
    "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Anchor in Jaipur", item: "https://yashsoni.in/anchor-in-jaipur" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),

  title: "Best Anchor in Jaipur | Anchor Yash Soni — 4.9★ Local Event Host",

  description:
    "Looking for the best anchor in Jaipur? Anchor Yash Soni — 4.9★, 1100+ events. Local Jaipur anchor for weddings at Rambagh Palace, Fairmont, Kukas, Ajmer Road farmhouses & JECC Sitapura corporate events.",

  keywords: [
    "anchor in jaipur",
    "best anchor in jaipur",
    "anchors in jaipur",
    "anchor jaipur",
    "jaipur event host",
    "jaipur anchor",
    "anchor yash soni",
    "anchor yash",
    "wedding emcee jaipur",
    "wedding anchor jaipur",
    "corporate anchor jaipur",
    "sangeet anchor jaipur",
    "local anchor jaipur",
    "anchor near me jaipur",
    "best emcee jaipur",
    "event anchor jaipur",
    "anchor in rajasthan",
    "jaipur destination wedding anchor",
    "anchor kukas jaipur",
    "anchor ajmer road jaipur",
    "anchor mansarovar jaipur",
    "anchor sitapura jaipur",
    "anchor vaishali nagar jaipur",
    "anchor amer road jaipur",
    "rambagh palace wedding anchor",
    "fairmont jaipur wedding anchor",
  ],

  alternates: {
    canonical: "https://yashsoni.in/anchor-in-jaipur",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yashsoni.in/anchor-in-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Best Anchor in Jaipur | Anchor Yash Soni — 4.9★",
    description:
      "4.9★ rated local Jaipur anchor. 1100+ events at Rambagh Palace, Fairmont, Kukas, Ajmer Road & JECC Sitapura.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Best Anchor in Jaipur — Anchor Yash Soni" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Anchor in Jaipur | Anchor Yash Soni",
    description: "4.9★ rated. 1100+ events. Jaipur's most trusted local event anchor.",
    images: ["/og-image.jpg"],
  },

  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};

export default function AnchorInJaipurLayout({ children }) {
  // Schemas injected in page.jsx body (client component)
  return <>{children}</>;
}