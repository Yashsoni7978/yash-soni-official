import type { Metadata } from "next";
import PageClient from "./PageClient";

// ── STRUCTURED DATA ────────────────────────────────────────────────────────
// Numbers sourced from lib/schema/serviceSchema.js defaults:
// ratingValue: "4.9", reviewCount: "40"
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yash Soni",
  jobTitle: "Premium Event Anchor & Emcee",
  description:
    "Best anchor in Jaipur with 700+ events hosted. Expert in luxury weddings, Sangeet ceremonies, corporate events, and destination weddings across Rajasthan. Bilingual Hindi/English, 4.9★ rated.",
  url: "https://yashsoni.in/about",
  image: "https://yashsoni.in/og-image.webp",
  telephone: "+917737877978",
  email: "info@yashsoni.in",
  knowsLanguage: ["Hindi", "English", "Rajasthani", "Marwari"],
  knowsAbout: [
    "Luxury Wedding Anchoring",
    "Corporate Event Hosting",
    "Sangeet Ceremony Hosting",
    "Destination Wedding Anchoring",
    "Crowd Psychology",
    "Bilingual Event Hosting",
    "Cultural Traditions of Rajasthan",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jhotwara",
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
  award: "4.9 Star Rating across 40+ verified client reviews",
  sameAs: [
    "https://www.instagram.com/anchor_yash_official",
    "https://www.youtube.com/@anchor_yash",
    "https://www.linkedin.com/in/anchoryashsoni",
    "https://www.wedmegood.com/profile/anchor-yash-25628297",
    "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166",
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://yashsoni.in/about",
  url: "https://yashsoni.in/about",
  name: "About Anchor Yash Soni — Professional Event Anchor & Emcee, Jaipur",
  description:
    "The story, philosophy, and credentials of Anchor Yash Soni — Jaipur's 4.9★ rated premium event anchor with 700+ events hosted across Rajasthan and India.",
  mainEntity: {
    "@type": "Person",
    "@id": "https://yashsoni.in/#person",
    name: "Yash Soni",
    jobTitle: "Premium Event Anchor & Emcee",
    url: "https://yashsoni.in",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yashsoni.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Yash Soni",
        item: "https://yashsoni.in/about",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://yashsoni.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Yash Soni",
      item: "https://yashsoni.in/about",
    },
  ],
};

// ── METADATA ───────────────────────────────────────────────────────────────
// Distinct from homepage: profile-type OG, unique title keyword "story"
// to avoid title duplication in Google's index.
export const metadata: Metadata = {
  title: "About Anchor Yash Soni | 4.9★ Event Anchor — 700+ Events, Jaipur",
  description:
    "Meet Yash Soni — Jaipur's 4.9★ rated premium event anchor. 700+ events hosted unscripted across Rajasthan. His story, philosophy, approach, and what makes him Jaipur's most trusted anchor.",
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
    title: "About Anchor Yash Soni | Premium Event Anchor — Jaipur",
    description:
      "700+ events. 4.9★ across 40+ reviews. The story, philosophy, and craft behind Jaipur's most trusted event anchor.",
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
    description:
      "4.9★. 700+ events. The story behind Jaipur's most trusted event anchor — 4 years, zero paper scripts.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
  },
};

// ── PAGE ───────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageClient />
    </>
  );
}
