// app/team-building-host/layout.jsx
// SERVER COMPONENT — metadata only
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/team-building-host",
  name: "Corporate Team Building Host Jaipur — Anchor Yash Soni",
  description:
    "Anchor Yash Soni is Jaipur's 4.9★ rated corporate team building host. Employee engagement, drum circles, scavenger hunts, blindfold challenges, corporate tournaments, and Fun Friday sessions for 50–1,000+ employees. Serving companies across Jaipur and Rajasthan.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Corporate Team Building Host & Employee Engagement Specialist",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/team-building-host",
  serviceType: "Corporate Team Building & Employee Engagement",
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
    { "@type": "ListItem", position: 3, name: "Team Building Host Jaipur", item: "https://yashsoni.in/team-building-host" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Corporate Team Building Host in Jaipur | Anchor Yash Soni — Employee Engagement",
  description:
    "4.9★ rated corporate team building host in Jaipur — Anchor Yash Soni. Employee engagement, drum circles, scavenger hunts, and corporate offsites for 50–1,000+ employees. Book now.",
  keywords: [
    "team building host jaipur",
    "corporate team building jaipur",
    "employee engagement host jaipur",
    "corporate offsite host jaipur",
    "team building anchor rajasthan",
    "drum circle facilitator jaipur",
    "corporate games anchor jaipur",
    "team building activities jaipur",
    "anchor yash team building",
    "corporate engagement specialist jaipur",
    "fun friday host jaipur",
    "scavenger hunt host jaipur",
    "corporate team bonding jaipur",
    "employee engagement anchor india",
    "team building host rajasthan",
    "corporate ice breaker host jaipur",
    "annual day host jaipur",
    "corporate tournament host jaipur",
    "virtual team building host india",
    "team building anchor jaipur",
  ],
  alternates: {
    canonical: "https://yashsoni.in/team-building-host",
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
    url: "https://yashsoni.in/team-building-host",
    siteName: "Anchor Yash Soni",
    title: "Corporate Team Building Host Jaipur | Anchor Yash Soni — 4.9★",
    description:
      "4.9★ rated. Employee engagement, drum circles & scavenger hunts for 50–1,000+ employees. Jaipur's trusted team building host.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Corporate Team Building Host Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Team Building Host Jaipur | Anchor Yash Soni",
    description: "4.9★. Employee engagement & team bonding for 50–1,000+ employees.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};
export default function TeamBuildingLayout({ children }) {
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