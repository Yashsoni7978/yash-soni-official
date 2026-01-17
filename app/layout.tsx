// @ts-nocheck
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Anchor Yash Soni | Premium Event Host",
  description: "India's leading wedding and corporate anchor based in Jaipur. Hosting weddings, sangeets, and corporate summits with elegance and energy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        {/* Navbar sits on top of everything */}
        <Navbar />
        
        {/* The main content area where your pages load */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer sits at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
