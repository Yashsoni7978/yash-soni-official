"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// --- NAVIGATION DATA ---
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Anchoring",
    href: "/services", // Main services page
    dropdown: [
      { name: "Wedding Anchor Jaipur", href: "/wedding-anchor-jaipur" },
      { name: "Corporate Anchor", href: "/corporate-event-anchor-jaipur" },
      { name: "Destination Wedding", href: "/destination-wedding-anchor" },
      { name: "Sangeet Anchor", href: "/sangeet-anchor-jaipur" },
      { name: "Haldi & Mehndi", href: "/haldi-anchor-jaipur" },
      { name: "Team Building Host", href: "/team-building-host" },
      { name: "Mall Activation", href: "/mall-activation-anchor" },
      { name: "General Anchor Jaipur", href: "/anchor-in-jaipur" },
    ],
  },
  {
    name: "Events",
    href: "/event-management-company-jaipur",
    dropdown: [
      { name: "Wedding Planning", href: "/wedding-planning-jaipur" },
      { name: "Event Planning", href: "/event-planning-jaipur" },
      { name: "Event Management", href: "/event-management-company-jaipur" },
      { name: "Event Designing", href: "/event-designing" },
      { name: "Artist Management", href: "/artist-management-jaipur" },
    ],
  },
  {
    name: "Locations",
    href: "#",
    dropdown: [
      { name: "Delhi", href: "/locations/delhi" },
      { name: "Mumbai", href: "/locations/mumbai" },
      { name: "Udaipur", href: "/locations/udaipur" },
      { name: "Jodhpur", href: "/locations/jodhpur" },
      { name: "Jaipur", href: "/locations/jaipur" },
      { name: "Bikaner", href: "/locations/bikaner" },
      { name: "Alwar", href: "/locations/alwar" },
      { name: "Sikar", href: "/locations/sikar" },
      { name: "Khatu", href: "/locations/khatu" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  
  // --- TEMPORARY ALL-PAGES DROPDOWN ---
  {
    name: "Temp",
    href: "#",
    dropdown: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Anchor in Jaipur", href: "/anchor-in-jaipur" },
      { name: "Artist Mgmt", href: "/artist-management-jaipur" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
      { name: "Corporate Anchor", href: "/corporate-event-anchor-jaipur" },
      { name: "Destination Wedding", href: "/destination-wedding-anchor" },
      { name: "Event Designing", href: "/event-designing" },
      { name: "Event Mgmt Company", href: "/event-management-company-jaipur" },
      { name: "Event Planning", href: "/event-planning-jaipur" },
      { name: "Haldi Anchor", href: "/haldi-anchor-jaipur" },
      { name: "Mall Activation", href: "/mall-activation-anchor" },
      { name: "Mehendi Anchor", href: "/mehendi-anchor-jaipur" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Sangeet Anchor", href: "/sangeet-anchor-jaipur" },
      { name: "Services", href: "/services" },
      { name: "Team Building", href: "/team-building-host" },
      { name: "Wedding Anchor", href: "/wedding-anchor-jaipur" },
      { name: "Wedding Planning", href: "/wedding-planning-jaipur" }
    ],
  },
  // -------------------------------------

  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Mobile specific state for expanding submenus
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[9999] transition-all duration-300 border-b ${
          scrolled || isOpen
            ? "bg-black/90 backdrop-blur-md border-white/10 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* 1. SOLID GOLD LOGO (Hard Reload) */}
          <a href="/" onClick={() => setIsOpen(false)} className="relative z-[10002] text-[#D4AF37] font-black tracking-tighter uppercase text-xl md:text-2xl hover:text-white transition-colors duration-300">
             ANCHOR YASH
          </a>

          {/* 2. DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`text-[10px] xl:text-xs font-medium uppercase tracking-widest flex items-center gap-1 transition-colors ${
                    activeDropdown === link.name ? "text-[#D4AF37]" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />}
                </Link>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 bg-black border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden mt-4 p-2"
                    >
                       {/* This wrapper ensures long dropdowns like the 'Temp' one get a scrollbar instead of breaking the page */}
                       <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {link.dropdown.map((sub) => (
                            <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-3 text-[10px] xl:text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-all"
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

            {/* CTA Button Desktop */}
            <Link href="/contact">
              <button className="px-6 py-2 bg-[#D4AF37] text-black text-xs font-black uppercase tracking-widest rounded hover:bg-white transition-all transform hover:scale-105">
                Book Now
              </button>
            </Link>
          </div>

          {/* 3. MOBILE MENU TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-white p-2 z-[10002] relative focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} className="text-[#D4AF37]" /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* 4. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[10000] lg:hidden flex flex-col pt-24 px-6 overflow-y-auto"
          >
             {/* Background Element */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

             <div className="flex flex-col gap-6 relative z-10 pb-20">
               {navLinks.map((link, idx) => (
                 <div key={link.name} className="border-b border-white/5 pb-4 last:border-0">
                   {link.dropdown ? (
                     <div className="flex flex-col">
                       <button 
                         onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                         className="flex items-center justify-between text-xl md:text-2xl font-black text-white uppercase tracking-tight w-full"
                       >
                         {link.name}
                         <ChevronRight 
                           size={20} 
                           className={`text-[#D4AF37] transition-transform duration-300 ${mobileExpanded === link.name ? "rotate-90" : ""}`} 
                         />
                       </button>
                       <AnimatePresence>
                         {mobileExpanded === link.name && (
                           <motion.div 
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: "auto", opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             className="overflow-hidden"
                           >
                             <div className="flex flex-col gap-4 mt-4 pl-4 border-l border-[#D4AF37]/30 ml-1">
                               {link.dropdown.map(sub => (
                                 <Link 
                                   key={sub.name}
                                   href={sub.href}
                                   onClick={() => setIsOpen(false)}
                                   className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest hover:text-[#D4AF37]"
                                 >
                                   {sub.name}
                                 </Link>
                               ))}
                             </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                     </div>
                   ) : (
                     <Link 
                       href={link.href}
                       onClick={() => setIsOpen(false)}
                       className="block text-xl md:text-2xl font-black text-white uppercase tracking-tight hover:text-[#D4AF37] transition-colors"
                     >
                       {link.name}
                     </Link>
                   )}
                 </div>
               ))}

               <div className="mt-8">
                 <Link href="/contact" onClick={() => setIsOpen(false)}>
                   <button className="w-full py-5 bg-[#D4AF37] text-black text-lg font-black uppercase tracking-widest rounded-lg">
                     Book Now
                   </button>
                 </Link>
               </div>
               
               {/* Fixed Social Links */}
               <div className="flex justify-center gap-4 md:gap-6 mt-4 text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                 <a href="https://instagram.com/anchor_yash_official" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Instagram 1</a>
                 <a href="https://instagram.com/best_anchor_in_jaipur" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">Instagram 2</a>
                 <a href="https://www.youtube.com/@Anchor_Yash" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">YouTube</a>
               </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
