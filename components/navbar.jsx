"use client"

import { useState, useEffect } from "react";
import Link from "next/link"; // Changed from react-router-dom
import { usePathname } from "next/navigation"; // Changed from useLocation
import { Menu, X, Instagram, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// UPDATED LINKS TO MATCH YOUR NEW FOLDERS
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { 
    name: "Services", 
    path: "#",
    submenu: [
      { name: "Wedding Anchoring", path: "/wedding-anchor-jaipur" },
      { name: "Sangeet Host", path: "/sangeet-anchor-jaipur" },
      { name: "Event Management", path: "/event-management-company-jaipur" },
      { name: "Event Designing", path: "/event-designing" },
    ]
  },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  
  const pathname = usePathname(); // Next.js hook for current URL

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  const isActive = (path) => {
    if (path === "#") return false;
    return pathname === path;
  };

  const isSubmenuActive = (submenu) => {
    return submenu.some(item => pathname === item.path);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-800 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-display font-bold">
              <span className="text-amber-500">Anchor</span>
              <span className="text-white ml-2">Yash</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <button
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center gap-1",
                      isSubmenuActive(link.submenu)
                        ? "text-amber-500 bg-amber-500/10"
                        : "text-gray-300 hover:text-white hover:bg-neutral-800"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={link.path}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg block",
                      isActive(link.path)
                        ? "text-amber-500 bg-amber-500/10"
                        : "text-gray-300 hover:text-white hover:bg-neutral-800"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
                
                {/* Dropdown */}
                {link.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-xl shadow-xl py-2 min-w-[200px]">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            isActive(subItem.path)
                              ? "text-amber-500 bg-amber-500/10"
                              : "text-gray-400 hover:text-white hover:bg-neutral-800"
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://instagram.com/anchor_yash_official"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-700 text-white hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Link href="/contact">
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-6 rounded-lg text-sm transition-all">
                Book Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-20 bg-neutral-950/98 backdrop-blur-xl transition-all duration-500 z-40",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="p-8">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === link.name ? null : link.name)}
                      className={cn(
                        "w-full px-4 py-4 text-lg font-medium transition-all duration-300 rounded-lg border-b border-neutral-800 flex items-center justify-between",
                        isSubmenuActive(link.submenu)
                          ? "text-amber-500 bg-amber-500/10"
                          : "text-white hover:bg-neutral-900"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "w-5 h-5 transition-transform",
                        openSubmenu === link.name && "rotate-180"
                      )} />
                    </button>
                    {openSubmenu === link.name && (
                      <div className="pl-4 py-2 space-y-1 bg-neutral-900/50">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            className={cn(
                              "block px-4 py-3 text-base transition-colors rounded-lg",
                              isActive(subItem.path)
                                ? "text-amber-500 bg-amber-500/10"
                                : "text-gray-400 hover:text-white hover:bg-neutral-800"
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.path}
                    className={cn(
                      "px-4 py-4 text-lg font-medium transition-all duration-300 rounded-lg border-b border-neutral-800 block",
                      isActive(link.path)
                        ? "text-amber-500 bg-amber-500/10"
                        : "text-white hover:bg-neutral-900"
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="flex gap-3 mt-6">
               <Link href="/contact" className="w-full">
                <button className="w-full bg-amber-500 text-black font-bold py-4 rounded-lg">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};