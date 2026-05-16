"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// --- PURE IMAGE TEXTURE COMPONENT ---
const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ backgroundImage: "url('/gold-texture.webp')", backgroundColor: "#D4AF37" }}
  >
    {children}
  </span>
);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Anchoring",
    href: "#", 
    dropdown: [
      { name: "Wedding Anchor", href: "/wedding-anchor-jaipur" },
      { name: "Sangeet Anchor", href: "/sangeet-anchor-jaipur" },
      { name: "Corporate Anchor", href: "/corporate-event-anchor-jaipur" },
      { name: "Best Anchor in Jaipur", href: "/best-anchor-in-jaipur" },
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

export default function ManagementNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
          scrolled || isOpen
            ? "bg-[#fcf8f8]/95 backdrop-blur-xl border-[#d4af37]/30 shadow-md py-3"
            : "bg-[#fcf8f8] border-[#d4af37]/20 py-4"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
            
          <Link href="/" onClick={() => setIsOpen(false)} className="relative z-[101] flex items-center group shrink-0">
            <span className="text-xl md:text-2xl font-display font-black tracking-[0.1em] uppercase text-black transition-transform duration-500 flex items-center gap-2">
              TEAM <GoldTextureText>YASH SONI</GoldTextureText>
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href === "#" ? (
                  <button
                    className={`text-[12px] font-sans font-bold uppercase tracking-widest flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeDropdown === link.name 
                        ? "bg-[#d4af37]/10 text-black border border-[#d4af37]/20 shadow-inner" 
                        : "text-gray-700 hover:text-black hover:bg-black/5 border border-transparent"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180 text-[#d4af37]" : ""}`} 
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-[12px] font-sans font-bold uppercase tracking-widest flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeDropdown === link.name 
                        ? "bg-[#d4af37]/10 text-black border border-[#d4af37]/20 shadow-inner" 
                        : "text-gray-700 hover:text-black hover:bg-black/5 border border-transparent"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180 text-[#d4af37]" : ""}`} 
                      />
                    )}
                  </Link>
                )}

                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-5"
                    >
                        <div className="w-64 bg-white/95 backdrop-blur-2xl border border-[#d4af37]/20 shadow-[0_30px_60px_rgba(0,0,0,0.1)] rounded-[2rem] p-3">
                          <div className="max-h-[60vh] overflow-y-auto custom-scrollbar pr-1 flex flex-col gap-1">
                            {link.dropdown.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className="block px-4 py-3 text-[11px] font-sans font-bold uppercase tracking-widest text-gray-600 hover:text-[#d4af37] hover:bg-black/5 rounded-2xl transition-all"
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

          <div className="flex items-center gap-4 shrink-0 relative z-[101]">
            <Link href="/contact" className="hidden xl:block">
              <button className="px-6 py-2.5 border-2 border-[#d4af37] text-[#d4af37] text-xs font-sans font-black uppercase tracking-widest rounded-full hover:bg-[#d4af37] hover:text-white transition-colors duration-300">
                Enquire
              </button>
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="xl:hidden text-black p-2 focus:outline-none hover:text-[#d4af37] transition-colors bg-black/5 rounded-full border border-black/10"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#fcf8f8] z-[99] xl:hidden flex flex-col pt-32 px-6 overflow-y-auto"
          >
             <div className="flex flex-col gap-6 relative z-10 pb-32 max-w-lg mx-auto w-full">
               {navLinks.map((link) => (
                 <div key={link.name} className="border-b border-[#d4af37]/20 pb-5 last:border-0">
                   {link.dropdown ? (
                     <div className="flex flex-col">
                       <button 
                         onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                         className="flex items-center justify-between text-3xl md:text-4xl font-display font-black text-black uppercase tracking-tighter w-full hover:text-[#d4af37] transition-colors"
                       >
                         {link.name}
                         <ChevronRight 
                           size={28} 
                           className={`text-black transition-transform duration-300 ${mobileExpanded === link.name ? "rotate-90" : ""}`} 
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
                             <div className="flex flex-col gap-5 mt-6 pl-4 border-l-2 border-[#d4af37]/30 ml-2">
                               {link.dropdown.map(sub => (
                                 <Link 
                                   key={sub.name}
                                   href={sub.href}
                                   onClick={() => setIsOpen(false)}
                                   className="text-[13px] font-sans font-bold text-gray-600 uppercase tracking-widest hover:text-[#d4af37] transition-colors"
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
                       className="block text-3xl md:text-4xl font-display font-black text-black uppercase tracking-tighter hover:text-[#d4af37] transition-colors"
                     >
                       {link.name}
                     </Link>
                   )}
                 </div>
               ))}

               <div className="mt-12">
                 <Link href="/contact" onClick={() => setIsOpen(false)}>
                   <button className="w-full py-4 border-2 border-[#d4af37] text-[#d4af37] text-sm font-sans font-black uppercase tracking-widest rounded-2xl hover:bg-[#d4af37] hover:text-white transition-colors">
                     Enquire
                   </button>
                 </Link>
               </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
