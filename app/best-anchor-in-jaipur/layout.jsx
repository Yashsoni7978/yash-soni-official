// app/best-anchor-in-jaipur/layout.jsx
// SERVER COMPONENT
// RULE: This file ONLY exports metadata + a simple layout wrapper.
// NO <head> tags. NO <script> tags. NO dangerouslySetInnerHTML.
// Schemas go in page.jsx (client component body). Geo signals go in metadata.other.
export const metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: "Best Anchor in Jaipur | Anchor Yash Soni — 4.9★ Rated Wedding & Event Host",
  description:
    "Searching for the best anchor in Jaipur? Anchor Yash Soni — 4.9★, 1100+ events, 10,000+ crowd. Wedding, Sangeet, Haldi, Corporate & NRI events across Kukas, Ajmer Road, Sitapura JECC & all Jaipur zones.",
  keywords: [
    "best anchor in jaipur",
    "anchor in jaipur",
    "anchors in jaipur",
    "anchor jaipur",
    "best wedding anchor in jaipur",
    "anchor yash soni",
    "anchor yash",
    "wedding anchor jaipur",
    "sangeet anchor jaipur",
    "haldi anchor jaipur",
    "mehendi anchor jaipur",
    "corporate anchor jaipur",
    "anchor for birthday party jaipur",
    "farmhouse wedding anchor jaipur",
    "nri wedding anchor jaipur",
    "destination wedding anchor jaipur",
    "anchor near me jaipur",
    "anchor in rajasthan",
    "best anchor rajasthan",
    "event host jaipur",
    "wedding emcee jaipur",
    "anchor for events jaipur",
    "anchor kukas jaipur",
    "anchor ajmer road jaipur",
    "anchor sitapura jaipur",
    "anchor mansarovar jaipur",
  ],
  alternates: {
    canonical: "https://yashsoni.in/best-anchor-in-jaipur",
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
    url: "https://yashsoni.in/best-anchor-in-jaipur",
    siteName: "Anchor Yash Soni",
    title: "Best Anchor in Jaipur | Anchor Yash Soni — 4.9★ Rated",
    description:
      "1100+ events. 4.9★ across 200+ reviews. Jaipur's most trusted anchor for weddings, Sangeets, corporate galas & VIP events.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Best Anchor in Jaipur on stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Anchor in Jaipur | Anchor Yash Soni",
    description:
      "4.9★ rated. 1100+ events. Jaipur's most commanding anchor for weddings, Sangeets & corporate events.",
    images: ["/og-image.webp"],
  },
  // Geo signals — Next.js renders these as <meta> tags correctly
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    ICBM: "26.9124, 75.7873",
  },
};
// Layout: just pass children through. Nothing else.
export default function BestAnchorJaipurLayout({ children }) {
  return <>{children}</>;
}
