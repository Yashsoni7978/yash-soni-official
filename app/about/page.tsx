import type { Metadata } from "next";
import PageClient from "./PageClient";

// ── STRUCTURED DATA ────────────────────────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yash Soni",
  jobTitle: "Event Anchor & Emcee",
  description:
    "Best anchor in Jaipur with 1100+ events hosted. Expert in luxury weddings, Sangeet ceremonies, corporate events, and destination weddings across Rajasthan.",
  url: "https://yashsoni.in",
  image: "https://yashsoni.in/og-image.webp",
  telephone: "+917737877978",
  email: "info@yashsoni.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  sameAs: [
    "https://instagram.com/anchor_yash_official",
    "https://youtube.com/@anchor_yash",
    "https://linkedin.com/in/anchoryashsoni",
    "https://www.wedmegood.com/profile/Anchor-Yash-Soni-2555694",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://yashsoni.in" },
    { "@type": "ListItem", position: 2, name: "About Yash Soni", item: "https://yashsoni.in/about" },
  ],
};

// ── METADATA ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About Yash Soni | Professional Anchor & Emcee — 1100+ Events Jaipur",
  description:
    "Meet Yash Soni — Jaipur's 4.9★ rated event anchor with 1100+ events hosted. His story, philosophy, and what makes him the most trusted anchor in Rajasthan.",
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
    title: "About Yash Soni | Professional Anchor & Emcee — Jaipur",
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
    description:
      "4.9★. 1100+ events. The story behind Jaipur's most trusted event anchor.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageClient />
    </>
  );
}
