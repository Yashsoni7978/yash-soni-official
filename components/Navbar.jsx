"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// --- 1. PURE IMAGE TEXTURE COMPONENT ---
const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ backgroundImage: "url('/gold-texture.png')" }}
  >
    {children}
  </span>
);

// --- 2. EXACT ROUTE DATA ---
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Anchoring",
    href: "#", // <-- Changed to "#" so it acts purely as a dropdown trigger
    dropdown: [
      { name: "Wedding Anchor", href: "/wedding-anchor-jaipur" },
      { name: "Sangeet Anchor", href: "/sangeet-anchor-jaipur" },
      { name: "Haldi Anchor", href: "/haldi-anchor-jaipur" },
      { name: "Mehendi Anchor", href: "/mehendi-anchor-jaipur" },
      { name: "Corporate Anchor", href: "/corporate-event-anchor-jaipur" },
      { name: "Destination Wedding", href: "/destination-wedding-anchor" },
      { name: "Team Building Host", href: "/team-building-host" },
      { name: "Celebrity & Public Events", href: "/celebrity-public-events-host" },
      { name: "Premium Anchor Jaipur", href: "/anchor-in-jaipur" },
    ],
  },
  {
    name: "Management",
    href: "/event-management-jaipur",
    dropdown: [
      { name: "Luxury Wedding Planning", href: "/wedding-planning-jaipur" },
      { name: "Event Planning", href: "/event-planning-jaipur" },
      { name: "Event Management", href: "/event-management-jaipur" },
      { name: "Event Designing", href: "/event-designing" },
      { name: "Artist Management", href: "/artist-management-jaipur" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
      {/* --- DESKTOP & MOBILE EDGE-TO-EDGE NAVBAR --- */}
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
          scrolled || isOpen
            ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.8)] py-3"
            : "bg-[#050505]/70 backdrop-blur-lg border-white/5 py-4"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
            
          {/* BRAND LOGO */}
          <Link href="/" onClick={() => setIsOpen(false)} className="relative z-[101] flex items-center group shrink-0">
            <span className="text-xl font-display font-black tracking-[0.2em] uppercase group-hover:scale-105 transition-transform duration-500">
              <GoldTextureText>ANCHOR YASH</GoldTextureText>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Condition: If href is "#", render a button instead of a Link to prevent routing errors */}
                {link.href === "#" ? (
                  <button
                    className={`text-[12px] font-bold uppercase tracking-widest flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeDropdown === link.name 
                        ? "bg-[#161616] text-white border border-white/10 shadow-inner" 
                        : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180 text-[#D4AF37]" : ""}`} 
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-[12px] font-bold uppercase tracking-widest flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeDropdown === link.name 
                        ? "bg-[#161616] text-white border border-white/10 shadow-inner" 
                        : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180 text-[#D4AF37]" : ""}`} 
                      />
                    )}
                  </Link>
                )}

                {/* Desktop Hover Dropdown (Rounded Boxes) */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-5"
                    >
                        <div className="w-64 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.9)] rounded-[2rem] p-3">
                          <div className="max-h-[60vh] overflow-y-auto custom-scrollbar pr-1 flex flex-col gap-1">
                            {link.dropdown.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className="block px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#D4AF37] hover:bg-white/5 rounded-2xl transition-all"
                                >
                                  {sub.name}
                                </Link>
                            ))}
                          </div>
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: CTA & MOBILE TOGGLE */}
          <div className="flex items-center gap-4 shrink-0 relative z-[101]">
            <Link href="/contact" className="hidden xl:block">
              <button className="px-6 py-2.5 bg-[#D4AF37] text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Inquire Now
              </button>
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="xl:hidden text-white p-2 focus:outline-none hover:text-[#D4AF37] transition-colors bg-white/5 rounded-full border border-white/10"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* --- MOBILE FULL-SCREEN TAKEOVER MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#050505] z-[99] xl:hidden flex flex-col pt-32 px-6 overflow-y-auto"
          >
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

             <div className="flex flex-col gap-6 relative z-10 pb-32 max-w-lg mx-auto w-full">
               {navLinks.map((link) => (
                 <div key={link.name} className="border-b border-white/10 pb-5 last:border-0">
                   
                   {/* Mobile already handles dropdowns purely as buttons, so it won't route anywhere! */}
                   {link.dropdown ? (
                     <div className="flex flex-col">
                       <button 
                         onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                         className="flex items-center justify-between text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter w-full hover:text-[#D4AF37] transition-colors"
                       >
                         {link.name}
                         <ChevronRight 
                           size={28} 
                           className={`text-white transition-transform duration-300 ${mobileExpanded === link.name ? "rotate-90" : ""}`} 
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
                             <div className="flex flex-col gap-5 mt-6 pl-4 border-l-2 border-white/20 ml-2">
                               {link.dropdown.map(sub => (
                                 <Link 
                                   key={sub.name}
                                   href={sub.href}
                                   onClick={() => setIsOpen(false)}
                                   className="text-[13px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#D4AF37] transition-colors"
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
                       className="block text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter hover:text-[#D4AF37] transition-colors"
                     >
                       {link.name}
                     </Link>
                   )}
                 </div>
               ))}

               <div className="mt-12">
                 <Link href="/contact" onClick={() => setIsOpen(false)}>
                   <button className="w-full py-4 bg-[#D4AF37] text-black text-sm font-black uppercase tracking-widest rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:bg-white transition-colors">
                     Inquire Now
                   </button>
                 </Link>
               </div>
               
               <div className="mt-8 flex flex-col items-center justify-center gap-2 text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">
                 <a href="tel:+917737877978" className="hover:text-white transition-colors">Direct: +91 77378 77978</a>
                 <a href="mailto:yashsoni7978@gmail.com" className="hover:text-white transition-colors">yashsoni7978@gmail.com</a>
               </div>

             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
