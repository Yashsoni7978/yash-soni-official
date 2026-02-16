// @ts-nocheck
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

// GLOBAL METADATA CONFIGURATION
export const metadata = {
  metadataBase: new URL('https://yashsoni.in'),
  title: {
    default: "Anchor Yash Soni | Premium Event Host & Wedding Emcee",
    template: "%s | Anchor Yash Soni"
  },
  description: "Jaipur's premier award-winning anchor for luxury weddings, corporate summits, and international events. 5+ years of unscripted energy.",
  keywords: [
    "Anchor Yash Soni", 
    "Best Anchor in Jaipur", 
    "Wedding Emcee India", 
    "Corporate Event Host", 
    "Sangeet Anchor Jaipur",
    "Haldi Games Host"
  ],
  authors: [{ name: "Yash Soni" }],
  creator: "Yash Soni",
  icons: {
    icon: "/favicon.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yashsoni.in",
    siteName: "Anchor Yash Soni",
    images: [{
      url: "/service-wedding.webp",
      width: 1200,
      height: 630,
      alt: "Anchor Yash Soni Live on Stage",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchor Yash Soni | Premium Event Host",
    description: "Elevating events with wit, warmth, and unmatched energy.",
    images: ["/service-wedding.webp"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased relative">
        
        {/* LOCAL BUSINESS SCHEMA (Direct SEO Signal) */}
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Anchor Yash Soni",
              "image": "https://yashsoni.in/service-wedding.webp",
              "@id": "https://yashsoni.in",
              "url": "https://yashsoni.in",
              "telephone": "+917737877978",
              "priceRange": "$$$",
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
              "sameAs": [
                "https://www.instagram.com/anchor_yash_official",
                "https://www.instagram.com/best_anchor_jaipur",
                "https://www.youtube.com/@anchor_yash",
              
              ]
            }
          `}
        </Script>

        {/* 1. FIXED NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-[10000]">
          <Navbar />
        </header>

        {/* 2. MAIN CONTENT WRAPPER */}
        <main id="main-content" className="min-h-screen relative z-0 pt-20 md:pt-24 lg:pt-28">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
