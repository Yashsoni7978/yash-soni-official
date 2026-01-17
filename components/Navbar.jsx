"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Instagram, Phone } from "lucide-react";

// Reuse the Gold Texture logic for the Logo
const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className}`}
    style={{ 
      backgroundImage: "url('/gold-texture.png')", 
      backgroundColor: "#D4AF37", 
    }}
  >
    {children}
  </span>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" }, // Assuming you might add IDs later
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? "bg-black/80 backdrop-blur-md border-white/10 py-4" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* LOGO (User liked this, kept mostly same but ensured Gold Texture) */}
          <Link href="/" className="z-50 relative group">
            <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-white">
              Anchor <GoldTextureText className="font-black">Yash</GoldTextureText>
            </span>
          </Link>

          {/* DESKTOP MENU (The "Editorial" Look) */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.path} 
                  className="relative text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  {link.name}
                  {/* Subtle Gold Underline on Hover */}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                Book Dates
              </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE (Gold) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white z-50 p-2 hover:text-[#D4AF37] transition-colors"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE FULL SCREEN MENU (The "Curtain" Reveal) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} // Bezier curve for luxury feel
            className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center"
          >
            {/* Background Texture for Mobile Menu */}
            <div className="absolute inset-0 opacity-10 bg-[url('/gold-texture.png')] bg-cover mix-blend-overlay pointer-events-none"></div>

            <div className="flex flex-col gap-8 text-center z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                >
                  <Link 
                    href={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 hover:to-[#D4AF37] transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Info */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.6 }}
              className="absolute bottom-10 flex flex-col items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-[#D4AF37]/50"></div>
              <div className="flex gap-6 text-gray-400">
                <a href="https://instagram.com/anchor_yash_official" target="_blank" className="hover:text-[#D4AF37]"><Instagram className="w-6 h-6" /></a>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37]"><Phone className="w-6 h-6" /></Link>
              </div>
              <p className="text-[#D4AF37] text-xs uppercase tracking-widest">Jaipur's Premium Host</p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}