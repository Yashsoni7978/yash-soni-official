// app/event-management-jaipur/layout.jsx
// SERVER COMPONENT — metadata only

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/event-management-jaipur",
  name: "Premium Event Management Jaipur — Anchor Yash Soni",
  description:
    "Luxury event management in Jaipur. Destination weddings, corporate galas, high-profile events. Full execution at JECC Sitapura, Fairmont, Rambagh Palace, and Leela Palace. Shadow management, VIP hospitality, artist management, and crisis mitigation.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Premium Event Manager & Executive Producer",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/event-management-jaipur",
  serviceType: "Luxury Event Management",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event Management Services Jaipur",
    itemListElement: [
      { "@type": "Offer", name: "Destination Wedding Management Jaipur" },
      { "@type": "Offer", name: "Corporate Gala Management Jaipur" },
      { "@type": "Offer", name: "Event Management JECC Sitapura" },
      { "@type": "Offer", name: "VIP Hospitality Management Jaipur" },
      { "@type": "Offer", name: "Shadow Management Services Jaipur" },
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
    { "@type": "ListItem", position: 1, name: "Home",              item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Best Anchor Jaipur",item: "https://yashsoni.in/best-anchor-in-jaipur" },
    { "@type": "ListItem", position: 3, name: "Event Management",  item: "https://yashsoni.in/event-management-jaipur" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),

  title: "Premium Event Management in Jaipur | Luxury Weddings & Corporate Galas | Anchor Yash Soni",

  description:
    "Premium event management in Jaipur — Anchor Yash Soni. Destination weddings, corporate galas & high-profile events at JECC Sitapura, Fairmont, Rambagh & Leela. Shadow management, VIP hospitality & artist management.",

  keywords: [
    "event management jaipur",
    "luxury event management jaipur",
    "premium event management jaipur",
    "destination wedding management jaipur",
    "corporate event management jaipur",
    "event management jecc sitapura",
    "event management rajasthan",
    "wedding management jaipur",
    "corporate gala management jaipur",
    "event planner jaipur",
    "luxury event planner jaipur",
    "vip event management jaipur",
    "shadow management jaipur",
    "event management fairmont jaipur",
    "event management rambagh palace",
    "artist management jaipur",
    "high profile event management jaipur",
    "anchor yash event management",
    "event management company jaipur",
    "event organizer jaipur",
  ],

  alternates: {
    canonical: "https://yashsoni.in/event-management-jaipur",
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
    url: "https://yashsoni.in/event-management-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Premium Event Management Jaipur | Anchor Yash Soni — Luxury Weddings & Corporate Galas",
    description:
      "Destination weddings, corporate galas & high-profile events at JECC Sitapura, Fairmont & Rambagh Palace. Shadow management & VIP hospitality.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Event Management Jaipur — Anchor Yash Soni",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Premium Event Management Jaipur | Anchor Yash Soni",
    description: "4.9★. Destination weddings, corporate galas & VIP events at JECC Sitapura, Fairmont & Rambagh.",
    images: ["/og-image.jpg"],
  },

  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};

export default function EventManagementLayout({ children }) {
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
