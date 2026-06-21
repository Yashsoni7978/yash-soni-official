import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import HeaderController from "../components/HeaderController";
import FooterController from "../components/FooterController";
import FloatingContact from "../components/FloatingContact";
import StarsBackground from "../components/StarsBackground";

import {
  Playfair_Display,
  Cormorant_Garamond,
  Cinzel,
  Montserrat,
} from "next/font/google";

// ── FONTS ──────────────────────────────────────────────────────────────────
// Reduced from 6 fonts to 4 actually-used fonts (Great_Vibes and Spectral
// were unmapped in globals.css font-display classes — confirmed unused).
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

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "700"],
});

// ── GLOBAL SEO METADATA ────────────────────────────────────────────────────
// NOTE: Per-page canonical is declared in each page.tsx/jsx.
// The layout-level canonical covers the homepage fallback.
export const metadata: Metadata = {
  metadataBase: new URL("https://yashsoni.in"),
  title: {
    default: "Best Anchor in Jaipur | Anchor Yash Soni",
    template: "%s | Anchor Yash Soni",
  },
  description:
    "Looking for the best anchor in Jaipur? Anchor Yash Soni has hosted 700+ shows — from palace weddings in Kukas & Amer Road to farmhouse Sangeets on Ajmer Road and corporate galas at JECC Sitapura. Jaipur's most trusted event host.",
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
  alternates: {
    canonical: "https://yashsoni.in",
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
    url: "https://yashsoni.in",
    siteName: "Anchor Yash Soni",
    title: "Best Anchor in Jaipur | Anchor Yash Soni",
    description:
      "700+ shows. 10,000+ crowd commanded. Jaipur's most trusted anchor for weddings, Sangeets, corporate galas & VIP events.",
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
      "700+ shows. Jaipur's most commanding anchor for weddings, corporate events & Sangeets.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Anchor Yash Soni — Best Anchor in Jaipur",
      },
    ],
  },
  icons: {
    // Use app/icon.png — Next.js auto-generates all favicon sizes from it.
    // Do NOT manually specify .webp favicons: not supported by all browsers.
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    // ⚠️ ACTION REQUIRED: Replace YOUR_GSC_TOKEN_HERE with the real token from
    // Google Search Console → Settings → Ownership Verification → HTML tag
    // It looks like: google: "aBcD1234eFgH5678iJkL"
    google: "YOUR_GSC_TOKEN_HERE",
  },
};

// ── GLOBAL JSON-LD SCHEMAS ─────────────────────────────────────────────────
// Only schemas that apply to EVERY page belong here.
// Page-specific schemas (BreadcrumbList, FAQPage, etc.) live in each page file.

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://yashsoni.in/#business",
  name: "Anchor Yash Soni",
  alternateName: ["Best Anchor in Jaipur", "Anchor Yash", "Yash Soni Anchor"],
  description:
    "Anchor Yash Soni is the best anchor in Jaipur with 700+ shows hosted across Rajasthan and India. Specialist in luxury weddings, Sangeet ceremonies, corporate award nights, Haldi, Mehendi, and VIP events. Bilingual Hindi/English host serving Kukas, Amer Road, Ajmer Road, Sitapura JECC, Mansarovar and all major event venues in Jaipur.",
  url: "https://yashsoni.in",
  telephone: "+917737877978",
  // FIXED: Real email — obfuscated form does not parse in schema.org
  email: "info@yashsoni.in",
  priceRange: "₹₹₹₹",
  image: "https://yashsoni.in/og-image.webp",
  founder: {
    "@type": "Person",
    name: "Yash Soni",
    jobTitle: "Premium Event Anchor & Emcee",
    knowsLanguage: ["Hindi", "English", "Rajasthani"],
    knowsAbout: [
      "Luxury Wedding Planning",
      "Corporate Event Management",
      "Stage Presence",
      "Public Speaking",
      "Cultural Traditions of Rajasthan",
      "Bilingual Hosting",
    ],
    award: "700+ Shows Hosted Milestone",
    memberOf: {
      "@type": "Organization",
      name: "Wedding Planners Association of Rajasthan",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jhotwara",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302012",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.9124,
    longitude: 75.7873,
  },
  areaServed: [
    { "@type": "City", name: "Jaipur" },
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: [
    "Wedding Anchor",
    "Sangeet Host",
    "Corporate Event Anchor",
    "Birthday Party Anchor",
    "Haldi Games Host",
    "Mehendi Anchor",
    "Farmhouse Wedding Host",
    "VIP Event Emcee",
    "Destination Wedding Anchor",
    "Award Night Host",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.instagram.com/anchor_yash_official",
    "https://www.instagram.com/best_anchor_jaipur",
    "https://www.youtube.com/@anchor_yash",
    "https://www.wedmegood.com/profile/anchor-yash-25628297",
    "https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yash Soni",
  jobTitle: "Premium Event Anchor & Emcee",
  description:
    "Best anchor in Jaipur with 700+ shows hosted. Expert in luxury weddings, Sangeet ceremonies, corporate events, and destination weddings across Rajasthan.",
  url: "https://yashsoni.in",
  image: "https://yashsoni.in/og-image.webp",
  telephone: "+917737877978",
  email: "info@yashsoni.in",
  knowsAbout: [
    "Luxury Wedding Planning",
    "Corporate Event Management",
    "Stage Presence",
    "Public Speaking",
    "Cultural Traditions of Rajasthan",
    "Bilingual Hosting",
  ],
  knowsLanguage: ["Hindi", "English", "Rajasthani"],
  award: "Best Anchor in Jaipur 4.9 Star Rating",
  worksFor: {
    "@type": "Organization",
    name: "Anchor Yash Soni",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/anchor_yash_official",
    "https://www.youtube.com/@anchor_yash",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://yashsoni.in/#website",
  name: "Anchor Yash Soni",
  url: "https://yashsoni.in",
  description: "Official website of Anchor Yash Soni — Best Anchor in Jaipur",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://yashsoni.in/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// ── ROOT LAYOUT ────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`scroll-smooth ${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${montserrat.variable}`}
    >
      <head>
        {/* Geo meta — not part of Next.js metadata API, placed here directly */}
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jaipur, Rajasthan, India" />
        <meta name="geo.position" content="26.9124;75.7873" />
        <meta name="ICBM" content="26.9124, 75.7873" />
        <meta name="theme-color" content="#020202" />

        {/* Global JSON-LD — ProfessionalService + Person + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-transparent text-white antialiased relative">
        <StarsBackground speed={0.8} />

        {/* Skip-to-content link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-[#D4AF37] focus:text-black focus:font-bold focus:rounded-full"
        >
          Skip to main content
        </a>

        {/* layout.tsx wraps HeaderController in <header> — Navbar must NOT
            also wrap itself in <header> to avoid nested landmark elements */}
        <header className="fixed top-0 left-0 w-full z-[10000]" role="banner">
          <HeaderController />
        </header>

        <main
          id="main-content"
          className="min-h-screen relative z-0 pt-20 md:pt-24 lg:pt-28"
          role="main"
        >
          {children}
        </main>

        <FooterController />
        <FloatingContact />

        {/* Facebook Pixel — FIXED: noscript now in <body>, not <head> */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID || ""}');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* noscript fallback — FIXED: now in <body>, not <head> */}
        {process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}

        <GoogleAnalytics gaId="G-JYPPJ3TDHB" />
      </body>
    </html>
  );
}
