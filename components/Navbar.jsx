"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Instagram, Phone } from "lucide-react";

// --- GOLD TEXTURE COMPONENT ---
const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ 
      backgroundImage: "url('/gold-texture.png')", 
      backgroundColor: "#D4AF37", 
    }}
  >
    {children}
  </span>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu Toggle
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Desktop Hover State
  const [mobileSubMenu, setMobileSubMenu] = useState(null); // Mobile Accordion State

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- NAVIGATION DATA ---
  const navStructure = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Anchoring", 
      type: "dropdown",
      items: [
        { label: "Wedding Anchor", path: "/wedding-anchor-jaipur" },
        { label: "Corporate Host", path: "/corporate-event-anchor-jaipur" },
        { label: "Mall & Social", path: "/mall-activation-anchor" }
      ]
    },
    { 
      name: "Events", 
      type: "dropdown",
      items: [
        { label: "Event Planning", path: "/event-planning-jaipur" },
        { label: "Event Management", path: "/event-management-company-jaipur" },
        { label: "Event Designing", path: "/event-designing" }
      ]
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 border-b ${
          scrolled 
            ? "bg-black/95 backdrop-blur-md border-white/10 py-4" 
            : "bg-gradient-to-b from-black/80 to-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="z-50 relative group">
            <span className="text-xl md:text-2xl font-display font-bold tracking-tight text-white">
              Anchor <GoldTextureText className="font-black">Yash</GoldTextureText>
            </span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <ul className="hidden lg:flex items-center gap-10">
            {navStructure.map((link) => (
              <li 
                key={link.name} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => link.type === "dropdown" && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.type === "dropdown" ? (
                  <div className="relative cursor-pointer py-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                      {link.name} <ChevronDown className="w-3 h-3 text-[#D4AF37]" />
                    </span>

                    {/* DROPDOWN MENU PANEL */}
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-black border border-neutral-800 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#D4AF37]"></div>
                          <ul className="py-2">
                            {link.items.map((subItem) => (
                              <li key={subItem.label}>
                                <Link 
                                  href={subItem.path}
                                  className="block px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-[#111] transition-all"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link 
                    href={link.path} 
                    className="relative text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                Book Dates
              </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-white z-50 p-2 hover:text-[#D4AF37] transition-colors"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE FULL SCREEN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-black z-[1000] flex flex-col pt-32 px-8 overflow-y-auto"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('/gold-texture.png')] bg-cover mix-blend-overlay pointer-events-none"></div>

            <div className="flex flex-col gap-6 text-left z-10 w-full max-w-md mx-auto">
              {navStructure.map((link, i) => (
                <div key={link.name} className="border-b border-white/10 pb-4">
                  {link.type === "dropdown" ? (
                    <div>
                      <button 
                        onClick={() => setMobileSubMenu(mobileSubMenu === link.name ? null : link.name)}
                        className="flex items-center justify-between w-full text-3xl font-display font-bold text-white hover:text-[#D4AF37] transition-all"
                      >
                        {link.name}
                        <ChevronDown className={`w-6 h-6 transition-transform ${mobileSubMenu === link.name ? "rotate-180 text-[#D4AF37]" : "text-gray-500"}`} />
                      </button>
                      
                      {/* Mobile Accordion */}
                      <AnimatePresence>
                        {mobileSubMenu === link.name && (
                          <motion.ul 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 mt-4 space-y-4 border-l border-[#D4AF37]"
                          >
                            {link.items.map((subItem) => (
                              <li key={subItem.label}>
                                <Link 
                                  href={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className="block text-lg text-gray-400 hover:text-white"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      href={link.path} 
                      onClick={() => setIsOpen(false)}
                      className="block text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 hover:to-[#D4AF37] transition-all"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Footer Info */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-col items-center gap-4 pb-10"
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
