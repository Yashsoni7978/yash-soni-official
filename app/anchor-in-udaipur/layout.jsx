// app/anchor-in-udaipur/layout.jsx
// SERVER COMPONENT — metadata + schema only

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/anchor-in-udaipur",
  name: "Anchor in Udaipur — Yash Soni",
  description:
    "Professional event anchor in Udaipur for palace destination weddings, Sangeet ceremonies, and corporate events. Specialist at Taj Lake Palace, Oberoi Udaivilas, Leela Palace Udaipur, and RAAS. Bilingual Hindi/English host for NRI and international families.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Destination Wedding Anchor — Udaipur",
  },
  areaServed: [
    { "@type": "City", name: "Udaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/anchor-in-udaipur",
  serviceType: "Destination Wedding Anchor — Udaipur",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchor Services Udaipur",
    itemListElement: [
      { "@type": "Offer", name: "Wedding Anchor Udaipur" },
      { "@type": "Offer", name: "Sangeet Host Udaipur" },
      { "@type": "Offer", name: "Anchor Taj Lake Palace Udaipur" },
      { "@type": "Offer", name: "Anchor Oberoi Udaivilas" },
      { "@type": "Offer", name: "NRI Wedding Anchor Udaipur" },
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
    { "@type": "ListItem", position: 1, name: "Home",                  item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Anchor in Rajasthan",   item: "https://yashsoni.in/anchor-in-rajasthan" },
    { "@type": "ListItem", position: 3, name: "Anchor in Udaipur",     item: "https://yashsoni.in/anchor-in-udaipur" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Anchor in Udaipur | Destination Wedding Host | Taj Lake Palace & Oberoi | Yash Soni",
  description:
    "Looking for an anchor in Udaipur? Yash Soni hosts destination weddings, Sangeet ceremonies and corporate events at Taj Lake Palace, Oberoi Udaivilas, Leela & RAAS. Bilingual NRI specialist. Book via WhatsApp.",
  keywords: [
    "anchor in udaipur",
    "wedding anchor udaipur",
    "event anchor udaipur",
    "destination wedding anchor udaipur",
    "anchor taj lake palace udaipur",
    "anchor oberoi udaivilas",
    "anchor leela palace udaipur",
    "anchor raas udaipur",
    "sangeet anchor udaipur",
    "bilingual anchor udaipur",
    "nri wedding anchor udaipur",
    "emcee udaipur",
    "wedding host udaipur",
    "anchor for wedding in udaipur",
    "destination anchor udaipur rajasthan",
    "lake palace wedding anchor",
    "heritage wedding anchor udaipur",
    "anchor udaipur lake city",
    "corporate anchor udaipur",
    "yash soni udaipur anchor",
  ],
  alternates: { canonical: "https://yashsoni.in/anchor-in-udaipur" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website", locale: "en_IN",
    url: "https://yashsoni.in/anchor-in-udaipur",
    siteName: "Anchor Yash Soni",
    title: "Anchor in Udaipur | Yash Soni — Taj Lake Palace · Oberoi Udaivilas · Leela",
    description: "Destination wedding anchor in Udaipur. Taj Lake Palace, Oberoi Udaivilas, Leela & RAAS. Bilingual NRI specialist.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Anchor in Udaipur — Yash Soni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchor in Udaipur | Yash Soni",
    description: "Destination wedding anchor in Udaipur. Taj Lake Palace, Oberoi Udaivilas & Leela Palace specialist.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "IN-RJ", "geo.placename": "Udaipur, Rajasthan, India",
    "geo.position": "24.5854;73.7125", ICBM: "24.5854, 73.7125",
  },
};

export default function UdaipurAnchorLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
