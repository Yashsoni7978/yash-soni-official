// app/anchor-in-jodhpur/layout.jsx

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/anchor-in-jodhpur",
  name: "Anchor in Jodhpur — Yash Soni",
  description:
    "Professional event anchor in Jodhpur for palace destination weddings at Umaid Bhawan Palace, Mehrangarh Fort, RAAS Jodhpur and Ajit Bhawan. Bilingual Hindi/English host for NRI families and heritage wedding specialists.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Destination Wedding Anchor — Jodhpur",
  },
  areaServed: [
    { "@type": "City", name: "Jodhpur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/anchor-in-jodhpur",
  serviceType: "Destination Wedding Anchor — Jodhpur",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchor Services Jodhpur",
    itemListElement: [
      { "@type": "Offer", name: "Wedding Anchor Jodhpur" },
      { "@type": "Offer", name: "Anchor Umaid Bhawan Palace" },
      { "@type": "Offer", name: "Anchor Mehrangarh Fort Jodhpur" },
      { "@type": "Offer", name: "Sangeet Anchor Jodhpur" },
      { "@type": "Offer", name: "NRI Wedding Anchor Jodhpur" },
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
    { "@type": "ListItem", position: 1, name: "Home",                 item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "Anchor in Rajasthan",  item: "https://yashsoni.in/anchor-in-rajasthan" },
    { "@type": "ListItem", position: 3, name: "Anchor in Jodhpur",    item: "https://yashsoni.in/anchor-in-jodhpur" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Anchor in Jodhpur | Umaid Bhawan Palace & Mehrangarh Fort Wedding Host | Yash Soni",
  description:
    "Looking for an anchor in Jodhpur? Yash Soni hosts destination weddings at Umaid Bhawan Palace, Mehrangarh Fort, RAAS Jodhpur & Ajit Bhawan. Bilingual NRI specialist. Book via WhatsApp.",
  keywords: [
    "anchor in jodhpur",
    "wedding anchor jodhpur",
    "event anchor jodhpur",
    "anchor umaid bhawan palace",
    "anchor mehrangarh fort jodhpur",
    "destination wedding anchor jodhpur",
    "anchor raas jodhpur",
    "anchor ajit bhawan jodhpur",
    "sangeet anchor jodhpur",
    "bilingual anchor jodhpur",
    "nri wedding anchor jodhpur",
    "emcee jodhpur",
    "wedding host jodhpur",
    "anchor for wedding in jodhpur",
    "heritage wedding anchor jodhpur",
    "blue city wedding anchor",
    "fort wedding anchor jodhpur",
    "palace wedding anchor jodhpur",
    "corporate anchor jodhpur",
    "yash soni jodhpur anchor",
  ],
  alternates: { canonical: "https://yashsoni.in/anchor-in-jodhpur" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website", locale: "en_IN",
    url: "https://yashsoni.in/anchor-in-jodhpur",
    siteName: "Anchor Yash Soni",
    title: "Anchor in Jodhpur | Yash Soni — Umaid Bhawan · Mehrangarh Fort · RAAS",
    description: "Destination wedding anchor in Jodhpur. Umaid Bhawan Palace, Mehrangarh Fort & RAAS Jodhpur specialist. Bilingual NRI host.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Anchor in Jodhpur — Yash Soni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchor in Jodhpur | Yash Soni",
    description: "Umaid Bhawan Palace & Mehrangarh Fort wedding anchor. 4.9★ destination specialist.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "IN-RJ", "geo.placename": "Jodhpur, Rajasthan, India",
    "geo.position": "26.2389;73.0243", ICBM: "26.2389, 73.0243",
  },
};

export default function JodhpurAnchorLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
