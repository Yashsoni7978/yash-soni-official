import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// 1. IMPORT NAVBAR AND FOOTER
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anchor Yash Soni | Best Wedding & Corporate Anchor in Jaipur",
  description: "Book Yash Soni, Jaipur's most engaging event anchor for Weddings, Sangeet, Haldi, and Corporate Events. 5+ Years Exp, 1100+ Events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${jakarta.variable} font-sans bg-neutral-950 text-white antialiased selection:bg-amber-500 selection:text-black`}>
        
        {/* 2. PLACEMENT IS CRITICAL */}
        
        {/* Navbar goes ABOVE children */}
        <Navbar />
        
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer goes BELOW children */}
        <Footer />
        
      </body>
    </html>
  );
}