// @ts-nocheck
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased relative">
        
        {/* GEO-LOCATION SCHEMA (Kept same as your provided code) */}
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Anchor Yash Soni",
              "url": "https://yashsoni.in",
              "telephone": "+917737877978",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jaipur",
                "addressCountry": "IN"
              },
              "priceRange": "$$$"
            }
          `}
        </Script>

        {/* 1. FIXED NAVBAR WRAPPER */}
        {/* z-[10000] ensures it is ALWAYS on top. Fixed height avoids breaking. */}
        <header className="fixed top-0 left-0 w-full z-[10000]">
          <Navbar />
        </header>

        {/* 2. THE MAIN CONTENT WRAPPER */}
        {/* pt-20 (80px) or pt-24 (96px) ensures content starts AFTER the navbar. */}
        {/* relative z-0 prevents content from fighting the navbar for priority. */}
        <main className="min-h-screen relative z-0 pt-20 md:pt-24 lg:pt-28">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
