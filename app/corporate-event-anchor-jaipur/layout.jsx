// app/corporate-event-anchor-jaipur/layout.jsx
// SERVER COMPONENT — metadata only

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/corporate-event-anchor-jaipur",
  name: "Corporate Event Anchor Jaipur — Anchor Yash Soni",
  description:
    "Anchor Yash Soni is Jaipur's top corporate event anchor. 4.9★ rated. Award nights, product launches, conferences, summits, and gala dinners at JECC Sitapura, JLN Marg, Birla Auditorium, and Tonk Road. Sharp, unscripted, brand-aligned hosting for national brands.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Corporate Event Anchor & Emcee",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/corporate-event-anchor-jaipur",
  serviceType: "Corporate Event Hosting",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Corporate Event Services Jaipur",
    itemListElement: [
      { "@type": "Offer", name: "Award Night Anchor Jaipur" },
      { "@type": "Offer", name: "Conference & Summit Host Jaipur" },
      { "@type": "Offer", name: "Product Launch Anchor Jaipur" },
      { "@type": "Offer", name: "Gala Dinner Host Jaipur" },
      { "@type": "Offer", name: "Corporate Anchor JECC Sitapura" },
      { "@type": "Offer", name: "Dealer Meet Host Jaipur" },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Best Anchor in Jaipur", item: "https://yashsoni.in/best-anchor-in-jaipur" },
    { "@type": "ListItem", position: 3, name: "Corporate Anchor Jaipur", item: "https://yashsoni.in/corporate-event-anchor-jaipur" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),

  title: "Best Corporate Event Anchor in Jaipur | Anchor Yash Soni — Award Nights & Summits",

  description:
    "Top corporate event anchor in Jaipur — Anchor Yash Soni. 4.9★ rated. Award nights, conferences, product launches & gala dinners at JECC Sitapura, JLN Marg & Birla Auditorium. Book now.",

  keywords: [
    "corporate event anchor jaipur",
    "best corporate anchor jaipur",
    "corporate anchor jaipur",
    "award night anchor jaipur",
    "corporate emcee jaipur",
    "anchor jecc sitapura",
    "corporate anchor jecc jaipur",
    "award show anchor jaipur",
    "product launch anchor jaipur",
    "business summit anchor jaipur",
    "conference host jaipur",
    "corporate anchor rajasthan",
    "anchor jln marg jaipur",
    "gala dinner host jaipur",
    "anchor tonk road jaipur",
    "corporate event host jaipur",
    "anchor yash corporate jaipur",
    "corporate anchor birla auditorium",
    "business event emcee jaipur",
    "anchor in jaipur corporate",
  ],

  alternates: {
    canonical: "https://yashsoni.in/corporate-event-anchor-jaipur",
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
    url: "https://yashsoni.in/corporate-event-anchor-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Best Corporate Event Anchor in Jaipur | Anchor Yash Soni — 4.9★",
    description:
      "Award nights, conferences & galas at JECC Sitapura, JLN Marg & Birla Auditorium. 4.9★ rated corporate anchor in Jaipur.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Corporate Event Anchor Jaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Corporate Event Anchor in Jaipur | Anchor Yash Soni",
    description: "4.9★. Award nights, summits & gala dinners at JECC Sitapura, Jaipur.",
    images: ["/og-image.jpg"],
  },

  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};

export default function CorporateAnchorLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
