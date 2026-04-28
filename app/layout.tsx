import { GoogleAnalytics } from "@next/third-parties/google";

// @ts-nocheck
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import FloatingContact from "../components/FloatingContact";

import { Playfair_Display, Cormorant_Garamond, Cinzel, Great_Vibes, Montserrat, Spectral } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "700", "900"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "700"],
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  display: "swap",
  weight: ["300", "400", "700"],
});


// ═══════════════════════════════════════════════════════════
// GLOBAL SEO METADATA — SERVER COMPONENT
// ═══════════════════════════════════════════════════════════
export const metadata = {
  metadataBase: new URL('https://yashsoni.in'),
  title: {
    default: "Best Anchor in Jaipur | Anchor Yash Soni — Wedding, Corporate & Event Host",
    template: "%s | Yash Soni"
  },
  description: "Looking for the best anchor in Jaipur? Anchor Yash Soni has hosted 1100+ events — from palace weddings in Kukas & Amer Road to farmhouse Sangeets on Ajmer Road and corporate galas at JECC Sitapura. Jaipur's most trusted event host.",
  keywords: [
    "best anchor in jaipur",
    "best wedding anchor in jaipur",
    "anchor in jaipur",
    "anchors in jaipur",
    "anchor jaipur",
    "anchor yash soni",
    "anchor yash",
    "wedding anchor jaipur",
    "sangeet anchor jaipur",
    "corporate anchor jaipur",
    "anchor for birthday party jaipur",
    "farmhouse wedding anchor jaipur",
    "anchor in rajasthan",
    "event host jaipur",
    "wedding emcee jaipur",
    "anchor for events jaipur",
    "NRI wedding anchor jaipur",
    "destination wedding anchor rajasthan",
    "haldi anchor jaipur",
    "mehendi anchor jaipur",
  ],
  authors: [{ name: "Yash Soni", url: "https://yashsoni.in" }],
  creator: "Yash Soni",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yashsoni.in",
    siteName: "Anchor Yash Soni",
    title: "Best Anchor in Jaipur | Anchor Yash Soni",
    description: "1100+ events. 10,000+ crowd commanded. Jaipur's most trusted anchor for weddings, Sangeets, corporate galas & VIP events.",
    images: [{
      url: "/og-image.webp",
      width: 1200,
      height: 630,
      alt: "Anchor Yash Soni — Best Anchor in Jaipur on stage",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Anchor in Jaipur | Anchor Yash Soni",
    description: "1100+ events. Jaipur's most commanding anchor for weddings, corporate events & Sangeets.",
    images: ["/og-image.webp"],
  },
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  verification: {
    google: "yashsoniaudit",
  }
};

// ═══════════════════════════════════════════════════════════
// JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://yashsoni.in/#business",
  "name": "Anchor Yash Soni",
  "alternateName": ["Best Anchor in Jaipur", "Anchor Yash", "Yash Soni Anchor"],
  "description": "Anchor Yash Soni is the best anchor in Jaipur with 1100+ events hosted across Rajasthan and India. Specialist in luxury weddings, Sangeet ceremonies, corporate award nights, Haldi, Mehendi, and VIP events. Bilingual Hindi/English host serving Kukas, Amer Road, Ajmer Road, Sitapura JECC, Mansarovar and all major event venues in Jaipur.",
  "url": "https://yashsoni.in",
  "telephone": "+917737877978",
  "email": "info [at] yashsoni [dot] in",
  "priceRange": "₹₹₹₹",
  "image": "https://yashsoni.in/og-image.webp",
  "founder": {
    "@type": "Person",
    "name": "Yash Soni",
    "jobTitle": "Premium Event Anchor & Emcee",
    "knowsLanguage": ["Hindi", "English", "Rajasthani"],
    "knowsAbout": ["Luxury Wedding Planning", "Corporate Event Management", "Stage Presence", "Public Speaking", "Cultural Traditions of Rajasthan", "Bilingual Hosting"],
    "award": "1100+ Events Hosted Milestone",
    "memberOf": {
      "@type": "Organization",
      "name": "Wedding Planners Association of Rajasthan"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jhotwara",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "302012",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 26.9124,
    "longitude": 75.7873
  },
  "areaServed": [
    { "@type": "City", "name": "Jaipur" },
    { "@type": "AdministrativeArea", "name": "Rajasthan" },
    { "@type": "Country", "name": "India" }
  ],
  "serviceType": [
    "Wedding Anchor", "Sangeet Host", "Corporate Event Anchor", "Birthday Party Anchor", "Haldi Games Host", "Mehendi Anchor", "Farmhouse Wedding Host", "VIP Event Emcee", "Destination Wedding Anchor", "Award Night Host"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5"
  },
  "sameAs": [
    "https://www.instagram.com/anchor_yash_official",
    "https://www.instagram.com/best_anchor_jaipur",
    "https://www.youtube.com/@anchor_yash",
    "https://www.wedmegood.com/profile/anchor-yash-25628297",
    "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166"
  ]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Yash Soni",
  "jobTitle": "Premium Event Anchor & Emcee",
  "description": "Best anchor in Jaipur with 1100+ events hosted. Expert in luxury weddings, Sangeet ceremonies, corporate events, and destination weddings across Rajasthan.",
  "url": "https://yashsoni.in",
  "image": "https://yashsoni.in/og-image.webp",
  "telephone": "+917737877978",
  "knowsAbout": ["Luxury Wedding Planning", "Corporate Event Management", "Stage Presence", "Public Speaking", "Cultural Traditions of Rajasthan", "Bilingual Hosting"],
  "knowsLanguage": ["Hindi", "English", "Rajasthani"],
  "award": "Best Anchor in Jaipur 4.9 Star Rating",
  "worksFor": {
    "@type": "Organization",
    "name": "Anchor Yash Soni"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.instagram.com/anchor_yash_official",
    "https://www.youtube.com/@anchor_yash"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://yashsoni.in"
    }
  ]
};

// ═══════════════════════════════════════════════════════════
// ROOT LAYOUT
// ═══════════════════════════════════════════════════════════
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`scroll-smooth ${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${greatVibes.variable} ${montserrat.variable} ${spectral.variable}`}>
      <head>
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jaipur, Rajasthan, India" />
        <meta name="geo.position" content="26.9124;75.7873" />
        <meta name="ICBM" content="26.9124, 75.7873" />
        <meta name="theme-color" content="#020202" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="bg-black text-white antialiased relative">
        <header className="fixed top-0 left-0 w-full z-[10000]">
          <Navbar />
        </header>
        <main id="main-content" className="min-h-screen relative z-0 pt-20 md:pt-24 lg:pt-28">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <GoogleAnalytics gaId="G-JYPPJ3TDHB" />
      </body>
    </html>
  );
}
