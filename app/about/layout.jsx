// app/about/layout.jsx
// SERVER COMPONENT — all SEO metadata lives here
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://yashsoni.in/#person",
  name: "Yash Soni",
  givenName: "Yash",
  familyName: "Soni",
  jobTitle: "Premium Event Anchor & Emcee",
  description:
    "Anchor Yash Soni is one of Jaipur's most reviewed event anchors with 4.9★ across 200+ verified reviews and 1100+ events hosted across India. Specialist in luxury weddings, Sangeet, Haldi, Mehendi, corporate award nights, and NRI destination weddings across Rajasthan and India.",
  url: "https://yashsoni.in",
  image: "https://yashsoni.in/intro-portrait-top.webp",
  telephone: "+917737877978",
  email: "info [at] yashsoni [dot] in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302012",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Anchor Yash Soni",
    url: "https://yashsoni.in",
  },
  knowsLanguage: ["Hindi", "English", "Rajasthani"],
  hasOccupation: {
    "@type": "Occupation",
    name: "Event Anchor & Emcee",
    occupationLocation: {
      "@type": "City",
      name: "Jaipur",
    },
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      currency: "INR",
    },
  },
  sameAs: [
    "https://www.instagram.com/anchor_yash_official",
    "https://www.youtube.com/@anchor_yash",
    "https://www.wedmegood.com/profile/anchor-yash-25628297",
    "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166",
  ],
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "About Anchor Yash Soni", item: "https://yashsoni.in/about" },
  ],
};
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "About Anchor Yash Soni | 4.9★ Rated Anchor in Jaipur — 1100+ Events",
  description:
    "Meet Anchor Yash Soni — Jaipur's 4.9★ rated event anchor with 1100+ events hosted. Premium wedding emcee, Sangeet host, corporate anchor & NRI event specialist across Rajasthan and India.",
  keywords: [
    "about anchor yash soni",
    "anchor yash soni jaipur",
    "anchor yash",
    "best anchor in jaipur",
    "anchor in jaipur",
    "professional emcee jaipur",
    "wedding emcee jaipur",
    "premium event anchor rajasthan",
    "anchor for wedding jaipur",
    "sangeet anchor jaipur",
    "corporate anchor jaipur",
    "event host jaipur",
    "anchor yash biography",
    "top anchor jaipur",
    "luxury event host jaipur",
    "anchor rajasthan",
    "award winning anchor jaipur",
    "bilingual anchor jaipur",
    "nri wedding anchor jaipur",
    "unscripted anchor jaipur",
  ],
  alternates: {
    canonical: "https://yashsoni.in/about",
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
    type: "profile",
    locale: "en_IN",
    url: "https://yashsoni.in/about",
    siteName: "Anchor Yash Soni",
    title: "About Anchor Yash Soni | 4.9★ Rated Anchor in Jaipur",
    description:
      "1100+ events. 4.9★ across 200+ reviews. Meet Jaipur's most trusted anchor — the story, the philosophy, the craft.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — About Page",
      },
    ],
    firstName: "Yash",
    lastName: "Soni",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Anchor Yash Soni | Best Anchor in Jaipur",
    description: "4.9★. 1100+ events. The story behind Jaipur's most trusted event anchor.",
    images: ["/og-image.webp"],
  },
};
export default function AboutLayout({ children }) {
  return <>{children}</>;
}
