// @ts-nocheck
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Anchor Yash Soni | Premium Event Host Jaipur",
  description: "India's leading wedding and corporate anchor based in Jaipur. Hosting weddings, sangeets, and corporate summits with elegance and energy.",
  metadataBase: new URL('https://yashsoni.in'), // Your actual domain
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased relative">
        
        {/* GEO-LOCATION SCHEMA (Crucial for Local SEO) */}
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Anchor Yash Soni",
              "image": "https://yashsoni.in/anchor-portrait.webp",
              "url": "https://yashsoni.in",
              "telephone": "+917737877978",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jhotwara",
                "addressLocality": "Jaipur",
                "addressRegion": "RJ",
                "postalCode": "302012",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.9124,
                "longitude": 75.7873
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "23:00"
              },
              "priceRange": "$$$"
            }
          `}
        </Script>

        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        <main className="min-h-screen relative z-0">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
