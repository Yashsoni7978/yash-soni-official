// app/best-anchor-in-jaipur/layout.jsx
// SERVER COMPONENT — all SEO metadata lives here


// ═══════════════════════════════════════════════════════════
// PAGE METADATA
// ═══════════════════════════════════════════════════════════
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),

  title: "Best Anchor in Jaipur | Anchor Yash Soni — 4.9★ Rated Wedding & Event Host",

  description:
    "Searching for the best anchor in Jaipur? Anchor Yash Soni — 4.9★, 1100+ events, 10,000+ crowd. Wedding, Sangeet, Haldi, Corporate & NRI events across Kukas, Ajmer Road, Sitapura JECC & all Jaipur zones.",

  keywords: [
    "best anchor in jaipur",
    "anchor in jaipur",
    "anchors in jaipur",
    "anchor jaipur",
    "best wedding anchor in jaipur",
    "anchor yash soni",
    "anchor yash",
    "wedding anchor jaipur",
    "sangeet anchor jaipur",
    "haldi anchor jaipur",
    "mehendi anchor jaipur",
    "corporate anchor jaipur",
    "anchor for birthday party jaipur",
    "farmhouse wedding anchor jaipur",
    "nri wedding anchor jaipur",
    "destination wedding anchor jaipur",
    "anchor near me jaipur",
    "anchor in rajasthan",
    "best anchor rajasthan",
    "event host jaipur",
    "wedding emcee jaipur",
    "anchor for events jaipur",
    "anchor kukas jaipur",
    "anchor ajmer road jaipur",
    "anchor sitapura jaipur",
    "anchor mansarovar jaipur",
  ],

  alternates: {
    canonical: "https://yashsoni.in/best-anchor-in-jaipur",
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
    url: "https://yashsoni.in/best-anchor-in-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Best Anchor in Jaipur | Anchor Yash Soni — 4.9★ Rated",
    description:
      "1100+ events. 4.9★ across 200+ reviews. Jaipur's most trusted anchor for weddings, Sangeets, corporate galas & VIP events.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Best Anchor in Jaipur on stage",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Anchor in Jaipur | Anchor Yash Soni",
    description:
      "4.9★ rated. 1100+ events. Jaipur's most commanding anchor for weddings, Sangeets & corporate events.",
    images: ["/og-image.jpg"],
  },
};

// ═══════════════════════════════════════════════════════════
// JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://yashsoni.in/#business",
  name: "Anchor Yash Soni",
  alternateName: [
    "Best Anchor in Jaipur",
    "Anchor Yash",
    "Yash Soni Anchor Jaipur",
  ],
  description:
    "Anchor Yash Soni is the best anchor in Jaipur with 1100+ events hosted. 4.9★ rated across 200+ verified reviews. Specialist in weddings, Sangeet, Haldi, Mehendi, corporate events, NRI destination weddings, and birthday galas. Serving Kukas, Amer Road, Ajmer Road, Bhankrota, Mansarovar, Vaishali Nagar, Sitapura JECC, and all major venues in Jaipur, Rajasthan.",
  url: "https://yashsoni.in",
  telephone: "+917737877978",
  email: "info@yashsoni.in",
  priceRange: "₹₹₹₹",
  image: "https://yashsoni.in/og-image.jpg",
  founder: {
    "@type": "Person",
    name: "Yash Soni",
    jobTitle: "Premium Event Anchor & Emcee",
    knowsLanguage: ["Hindi", "English", "Rajasthani"],
  },
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://yashsoni.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Best Anchor in Jaipur",
      item: "https://yashsoni.in/best-anchor-in-jaipur",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Best Anchor in Jaipur | Anchor Yash Soni",
  url: "https://yashsoni.in/best-anchor-in-jaipur",
  description:
    "Complete guide to the best anchor in Jaipur — Anchor Yash Soni. 1100+ events, 4.9★ rating, serving all Jaipur zones including Kukas, Amer Road, Ajmer Road, Sitapura JECC, Mansarovar.",
  breadcrumb: breadcrumbSchema,
  mainEntity: {
    "@id": "https://yashsoni.in/#business",
  },
};

// ═══════════════════════════════════════════════════════════
// LAYOUT
// ═══════════════════════════════════════════════════════════
export default function BestAnchorJaipurLayout({ children }) {
  return (
    <>
      {/* Geo tags injected here for this specific page */}
      <head>
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jaipur, Rajasthan, India" />
        <meta name="geo.position" content="26.9124;75.7873" />
        <meta name="ICBM" content="26.9124, 75.7873" />

        {/* Inline JSON-LD — crawled immediately, no JS dependency */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema),
          }}
        />
      </head>
      {children}
    </>
  );
}
