"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Anchoring",
    href: "/anchoring",
    dropdown: [
      { name: "All Services", href: "/anchoring" },
      { name: "Wedding Anchor", href: "/wedding-anchor-jaipur" },
      { name: "Corporate Host", href: "/corporate-event-anchor-jaipur" },
      { name: "Lifestyle & Concerts", href: "/celebrity-anchor-jaipur" },
      { name: "Team Building", href: "/team-building-host-jaipur" },
    ],
  },
  {
    name: "Events",
    href: "#",
    dropdown: [
      { name: "Wedding Planning", href: "/wedding-planning-jaipur" },
      { name: "Event Management", href: "/event-management-company-jaipur" },
      { name: "Event Designing", href: "/event-designing" },
      { name: "Artist Management", href: "/artist-management-jaipur" },
      { name: "Jaipur Special", href: "/anchor-in-jaipur" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect for transparency and visibility
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[10000] transition-all duration-500 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-4" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="group">
          <div className="flex flex-col">
            <span className="text-2xl font-display font-black tracking-tighter text-white group-hover:text-[#D4AF37] transition-colors leading-none uppercase">
              Yash Soni
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">
              Digital Empire
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors flex items-center gap-1.5 ${
                  activeDropdown === link.name ? "text-[#D4AF37]" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name} {link.dropdown && <ChevronDown size={10} className="opacity-50" />}
              </Link>

              {/* DROPDOWN MENU */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-[-20px] mt-4 w-64 bg-[#0a0a0a] border border-white/10 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  >
                    <div className="space-y-4">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-[#D4AF37] transition-all border-l border-transparent hover:border-[#D4AF37] pl-4"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* CTA BUTTON */}
          <Link href="/contact">
            <button className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all rounded-none">
              Initiate
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU (Full Screen Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-black z-[10001] flex flex-col p-10 lg:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
               <span className="font-black tracking-tighter text-2xl uppercase">Yash Soni</span>
               <X onClick={() => setIsOpen(false)} className="cursor-pointer text-[#D4AF37]" />
            </div>

            <div className="space-y-10">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-4">
                  <Link
                    href={link.href}
                    onClick={() => !link.dropdown && setIsOpen(false)}
                    className="text-4xl font-display font-black uppercase tracking-tighter text-white hover:text-[#D4AF37]"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="grid grid-cols-1 gap-4 ml-2 border-l border-white/10 pl-6">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-white/10">
               <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-4">Direct Link</p>
               <a href="tel:+917737877978" className="text-xl font-bold">+91 77378 77978</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
