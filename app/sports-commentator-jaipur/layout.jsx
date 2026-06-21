// app/sports-commentator-jaipur/layout.jsx
import { buildServiceSchema } from "../../lib/schema/serviceSchema";

// SERVER COMPONENT — metadata only
const serviceSchema = buildServiceSchema({
  pageUrl: "https://yashsoni.in/sports-commentator-jaipur",
  name: "Sports Commentator & Anchor Jaipur — Yash Soni",
  description: "High-octane sports commentator and anchor in Jaipur. Live play-by-play commentary, marathon hosting, cricket leagues, and corporate sports events.",
  serviceType: "Sports Commentary and Event Hosting",
  providerJobTitle: "Sports Commentator, Host & Anchor",
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sports Anchor Services Jaipur",
    itemListElement: [
      { "@type": "Offer", name: "Cricket League Commentator Jaipur" },
      { "@type": "Offer", name: "Marathon Host Jaipur" },
      { "@type": "Offer", name: "Corporate Sports Day Anchor" },
      { "@type": "Offer", name: "Fitness Festival Host" },
      { "@type": "Offer", name: "Esports Tournament Shoutcaster" },
    ],
  },
});
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Best Anchor in Jaipur", item: "https://yashsoni.in/anchor-in-jaipur" },
    { "@type": "ListItem", position: 3, name: "Sports Commentator Jaipur", item: "https://yashsoni.in/sports-commentator-jaipur" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Sports Commentator, Host & Anchor in Jaipur | Yash Soni",
  description:
    "Top sports commentator and anchor in Jaipur. Live play-by-play commentary, marathon hosting, cricket leagues, and corporate sports events. 4.9★ rated.",
  keywords: [
    "sports commentator jaipur",
    "sports anchor jaipur",
    "cricket commentator jaipur",
    "marathon host jaipur",
    "corporate sports anchor jaipur",
    "sports event host jaipur",
    "fitness event anchor jaipur",
    "esports shoutcaster jaipur",
    "anchor for cricket league jaipur",
    "best sports anchor in jaipur",
    "live commentator jaipur",
    "bilingual sports commentator",
    "jaipur marathon anchor",
    "anchor sms stadium jaipur",
  ],
  alternates: {
    canonical: "https://yashsoni.in/sports-commentator-jaipur",
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
    url: "https://yashsoni.in/sports-commentator-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Sports Commentator, Host & Anchor in Jaipur | Yash Soni",
    description:
      "High-octane sports commentator and anchor in Jaipur. Live play-by-play commentary, marathon hosting, and cricket leagues.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Sports Commentator Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sports Commentator & Anchor in Jaipur | Yash Soni",
    description: "Jaipur's top sports commentator. Live play-by-play, marathons, and cricket leagues.",
    images: ["/og-image.webp"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};
export default function SportsCommentatorLayout({ children }) {
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
