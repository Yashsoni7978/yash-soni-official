// app/contact/layout.jsx
// SERVER COMPONENT — metadata only
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://yashsoni.in/#business",
  name: "Anchor Yash Soni",
  description:
    "Premium event anchor and emcee in Jaipur. Wedding anchoring, Sangeet hosting, Haldi hosting, corporate events, destination weddings, and team building. 4.9★ rated across 200+ verified reviews.",
  url: "https://yashsoni.in",
  telephone: "+917737877978",
  email: "info [at] yashsoni [dot] in",
  image: "https://yashsoni.in/og-image.webp",
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, UPI",
  address: {
    "@type": "PostalAddress",
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
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
};
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Contact Anchor Yash Soni", item: "https://yashsoni.in/contact" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Contact Anchor Yash Soni | Book Event Anchor in Jaipur | +91 77378 77978",
  description:
    "Book Anchor Yash Soni for weddings, Sangeet, corporate events & destination weddings in Jaipur. Call +91 77378 77978 or WhatsApp directly. Peak season dates book 6–8 months in advance.",
  keywords: [
    "contact anchor yash soni",
    "book anchor jaipur",
    "hire anchor jaipur",
    "book event anchor jaipur",
    "contact yash soni jaipur",
    "anchor yash soni phone number",
    "book wedding anchor jaipur",
    "hire sangeet anchor jaipur",
    "book corporate anchor jaipur",
    "event anchor inquiry jaipur",
    "anchor booking jaipur",
    "yash soni contact",
    "anchor jaipur booking",
    "anchor yash contact number",
  ],
  alternates: {
    canonical: "https://yashsoni.in/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yashsoni.in/contact",
    siteName: "Anchor Yash Soni",
    title: "Contact Anchor Yash Soni | Book Event Anchor in Jaipur",
    description:
      "Book Jaipur's 4.9★ event anchor. WhatsApp directly or call +91 77378 77978. Peak season books 6–8 months in advance.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Contact Anchor Yash Soni — Book Event Anchor in Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Anchor Yash Soni | Book Event Anchor in Jaipur",
    description: "4.9★. WhatsApp directly or call +91 77378 77978.",
    images: ["/og-image.webp"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};
export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
