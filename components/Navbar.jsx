"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

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
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-neutral-950/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-display font-bold">
          <span className="text-amber-500">Anchor</span>
          <span className="text-white ml-2">Yash</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.path} className="text-sm font-medium text-gray-300 hover:text-amber-500 transition-colors uppercase tracking-wider">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="px-6 py-2 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-black transition-all font-bold text-sm flex items-center gap-2">
              <Phone className="w-4 h-4" /> Book Now
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50">
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* MOBILE MENU OVERLAY */}
        <div className={`fixed inset-0 bg-black/95 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-bold text-white hover:text-amber-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}