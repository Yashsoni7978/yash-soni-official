// app/anchor-in-jaisalmer/layout.jsx

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/anchor-in-jaisalmer",
  name: "Anchor in Jaisalmer — Yash Soni",
  description:
    "Professional event anchor in Jaisalmer for desert destination weddings, Sangeet nights and corporate events. Specialist at Suryagarh, Serai Camp, Marriott Jaisalmer and open desert venues. Expert in open-air acoustic management and Sufi night hosting.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Destination Wedding Anchor — Jaisalmer",
  },
  areaServed: [
    { "@type": "City", name: "Jaisalmer" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/anchor-in-jaisalmer",
  serviceType: "Destination Wedding Anchor — Jaisalmer",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Anchor Services Jaisalmer",
    itemListElement: [
      { "@type": "Offer", name: "Wedding Anchor Jaisalmer" },
      { "@type": "Offer", name: "Anchor Suryagarh Jaisalmer" },
      { "@type": "Offer", name: "Desert Wedding Anchor Jaisalmer" },
      { "@type": "Offer", name: "Sangeet Anchor Jaisalmer" },
      { "@type": "Offer", name: "Sufi Night Host Jaisalmer" },
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
    { "@type": "ListItem", position: 3, name: "Anchor in Jaisalmer",  item: "https://yashsoni.in/anchor-in-jaisalmer" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Anchor in Jaisalmer | Desert Wedding Host | Suryagarh & Serai Specialist | Yash Soni",
  description:
    "Looking for an anchor in Jaisalmer? Yash Soni hosts desert destination weddings, Sangeet nights & Sufi evenings at Suryagarh, Serai Camp & Marriott. Open-air acoustic specialist. Book via WhatsApp.",
  keywords: [
    "anchor in jaisalmer",
    "wedding anchor jaisalmer",
    "desert wedding anchor jaisalmer",
    "anchor suryagarh jaisalmer",
    "anchor serai camp jaisalmer",
    "destination wedding anchor jaisalmer",
    "sangeet anchor jaisalmer",
    "sufi night host jaisalmer",
    "anchor marriott jaisalmer",
    "bilingual anchor jaisalmer",
    "nri wedding anchor jaisalmer",
    "emcee jaisalmer",
    "desert camp wedding anchor",
    "anchor for wedding in jaisalmer",
    "golden city wedding anchor",
    "fort wedding anchor jaisalmer",
    "open air anchor jaisalmer",
    "jaisalmer event host",
    "anchor rajasthan desert",
    "yash soni jaisalmer anchor",
  ],
  alternates: { canonical: "https://yashsoni.in/anchor-in-jaisalmer" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website", locale: "en_IN",
    url: "https://yashsoni.in/anchor-in-jaisalmer",
    siteName: "Anchor Yash Soni",
    title: "Anchor in Jaisalmer | Yash Soni — Suryagarh · Serai Camp · Desert Weddings",
    description: "Desert destination wedding anchor in Jaisalmer. Suryagarh, Serai Camp & open desert specialist. Sufi nights, Sangeet & bilingual NRI hosting.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Anchor in Jaisalmer — Yash Soni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchor in Jaisalmer | Yash Soni",
    description: "Desert wedding anchor. Suryagarh, Serai Camp & open desert specialist. 4.9★.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "IN-RJ", "geo.placename": "Jaisalmer, Rajasthan, India",
    "geo.position": "26.9157;70.9083", ICBM: "26.9157, 70.9083",
  },
};

export default function JaisalmerAnchorLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
