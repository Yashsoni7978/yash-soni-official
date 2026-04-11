// app/event-designing/layout.jsx
// SERVER COMPONENT — metadata only
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/event-designing",
  name: "Luxury Event Designing & Decor Jaipur — Anchor Yash Soni",
  description:
    "Bespoke luxury event designing in Jaipur. 3D spatial visualization, cinematic lighting, royal moodboarding, and floral architecture for palace weddings at Rambagh, Fairmont, and Leela. Creative direction from concept to final execution.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Luxury Event Designer & Creative Director",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/event-designing",
  serviceType: "Luxury Event Design & Decor",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event Design Services Jaipur",
    itemListElement: [
      { "@type": "Offer", name: "3D Wedding Visualization Jaipur" },
      { "@type": "Offer", name: "Royal Wedding Decor Jaipur" },
      { "@type": "Offer", name: "Palace Wedding Design Rajasthan" },
      { "@type": "Offer", name: "Wedding Moodboard Jaipur" },
      { "@type": "Offer", name: "Cinematic Lighting Design Jaipur" },
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
    { "@type": "ListItem", position: 1, name: "Home",               item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Wedding Planner",    item: "https://yashsoni.in/wedding-planning-jaipur" },
    { "@type": "ListItem", position: 3, name: "Event Designing",    item: "https://yashsoni.in/event-designing" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Luxury Event Designing & Decor Jaipur | 3D Visualization | Anchor Yash Soni",
  description:
    "Bespoke luxury event designing in Jaipur — Anchor Yash Soni. 3D visualization, royal moodboarding, cinematic lighting & palace wedding decor at Rambagh, Fairmont & Leela. Creative direction from concept to execution.",
  keywords: [
    "luxury event designer jaipur",
    "event designing jaipur",
    "wedding decor jaipur",
    "3d wedding visualization jaipur",
    "royal wedding decor jaipur",
    "palace wedding design jaipur",
    "wedding moodboard jaipur",
    "wedding designer jaipur",
    "luxury wedding decor rajasthan",
    "event designing rajasthan",
    "wedding stage design jaipur",
    "floral design wedding jaipur",
    "cinematic lighting wedding jaipur",
    "bespoke wedding design jaipur",
    "mandap design jaipur",
    "anchor yash event designing",
    "royal wedding designer jaipur",
    "rambagh palace wedding design",
    "fairmont wedding design jaipur",
    "wedding design concept jaipur",
  ],
  alternates: {
    canonical: "https://yashsoni.in/event-designing",
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
    url: "https://yashsoni.in/event-designing",
    siteName: "Anchor Yash Soni",
    title: "Luxury Event Designing Jaipur | 3D Visualization | Anchor Yash Soni",
    description:
      "3D visualization, royal moodboarding & palace wedding decor at Rambagh, Fairmont & Leela Jaipur. Bespoke creative direction from concept to execution.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Event Designing Jaipur — Anchor Yash Soni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Event Designing Jaipur | Anchor Yash Soni",
    description: "3D visualization, royal moodboarding & palace wedding decor. Rambagh, Fairmont & Leela specialist.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};
export default function EventDesigningLayout({ children }) {
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