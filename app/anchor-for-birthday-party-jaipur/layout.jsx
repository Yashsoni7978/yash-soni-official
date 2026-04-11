// app/anchor-for-birthday-party-jaipur/layout.jsx
// SERVER COMPONENT — metadata + all schemas
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yashsoni.in/anchor-for-birthday-party-jaipur",
  name: "Anchor for Birthday Party Jaipur — Yash Soni",
  description:
    "Professional birthday party anchor in Jaipur. Milestone birthdays, kids parties, surprise events, and celebrity galas. Bilingual Hindi/English host with custom scripts, crowd games, and zero filler.",
  provider: {
    "@type": "Person",
    name: "Yash Soni",
    url: "https://yashsoni.in",
    telephone: "+917737877978",
    jobTitle: "Professional Birthday Party Anchor & Event Host",
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  url: "https://yashsoni.in/anchor-for-birthday-party-jaipur",
  serviceType: "Birthday Party Anchor & Host",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Birthday Anchoring Services Jaipur",
    itemListElement: [
      { "@type": "Offer", name: "Milestone Birthday Anchor Jaipur" },
      { "@type": "Offer", name: "Kids Birthday Party Host Jaipur" },
      { "@type": "Offer", name: "Surprise Birthday Event Anchor Jaipur" },
      { "@type": "Offer", name: "Celebrity Birthday Gala Host Jaipur" },
      { "@type": "Offer", name: "Anniversary Celebration Anchor Jaipur" },
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
    { "@type": "ListItem", position: 2, name: "Anchor in Jaipur", item: "https://yashsoni.in/anchor-in-jaipur" },
    { "@type": "ListItem", position: 3, name: "Birthday Party Anchor Jaipur", item: "https://yashsoni.in/anchor-for-birthday-party-jaipur" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Anchor for Birthday Party in Jaipur | Professional Birthday Host | Yash Soni",
  description:
    "Looking for an anchor for birthday party in Jaipur? Yash Soni hosts milestone birthdays, kids parties, surprise events & celebrity galas — custom scripts, bilingual Hindi/English. Book via WhatsApp.",
  keywords: [
    "anchor for birthday party jaipur",
    "birthday party anchor jaipur",
    "birthday party host jaipur",
    "birthday anchor jaipur",
    "birthday party emcee jaipur",
    "anchor for birthday in jaipur",
    "milestone birthday anchor jaipur",
    "kids birthday party anchor jaipur",
    "surprise birthday anchor jaipur",
    "birthday event anchor jaipur",
    "anchor for 50th birthday jaipur",
    "anchor for 25th birthday jaipur",
    "birthday gala anchor jaipur",
    "birthday anchor rajasthan",
    "professional birthday host jaipur",
    "anchor for anniversary jaipur",
    "anniversary celebration anchor jaipur",
    "yash soni birthday anchor",
    "anchor for birthday party near me",
    "anchor for private party jaipur",
  ],
  alternates: { canonical: "https://yashsoni.in/anchor-for-birthday-party-jaipur" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website", locale: "en_IN",
    url: "https://yashsoni.in/anchor-for-birthday-party-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Anchor for Birthday Party Jaipur | Yash Soni",
    description: "Custom scripted, bilingual birthday party anchor in Jaipur. Milestone birthdays, kids parties, surprise events & celebrity galas.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Birthday Party Anchor Jaipur — Yash Soni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birthday Party Anchor Jaipur | Yash Soni",
    description: "Custom scripted. Bilingual. 1100+ events. Professional birthday party anchor in Jaipur.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "IN-RJ", "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873", ICBM: "26.9124, 75.7873",
  },
};
export default function BirthdayAnchorLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}