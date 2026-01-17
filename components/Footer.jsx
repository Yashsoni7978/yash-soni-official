"use client";

import Link from "next/link";
import { 
  Instagram, Youtube, Facebook, Mail, Phone, MapPin, 
  MessageCircle, ExternalLink, Star 
} from "lucide-react";

// --- 1. GOLD TEXTURE COMPONENT ---
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-900 pt-24 pb-10">
      <div className="container mx-auto px-4">
        
        {/* --- MAIN GRID --- */}
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          
          {/* COL 1: BRANDING & SOCIALS */}
          <div className="md:col-span-1 space-y-8">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-display font-bold text-white">
                Anchor <GoldTextureText>Yash</GoldTextureText>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Jaipur's premium event host. Elevating weddings, corporate summits, and luxury events with wit and elegance.
            </p>
            
            <div className="flex gap-4">
              <SocialIcon href="https://instagram.com/anchor_yash_official" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
              <SocialIcon href="https://www.youtube.com/@Anchor_Yash" icon={<Youtube className="w-5 h-5" />} label="YouTube" />
              <SocialIcon href="https://facebook.com" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
            </div>
          </div>

          {/* COL 2: INSTANT ACTIONS (WhatsApp/Call) */}
          <div>
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-8">Book Instantly</h4>
            <div className="flex flex-col gap-4">
              <ContactButton 
                href="https://wa.me/917737877978" 
                icon={<MessageCircle className="w-5 h-5" />} 
                label="Chat on WhatsApp" 
                subLabel="Fastest Response"
                color="hover:bg-[#25D366] hover:text-white"
              />
              <ContactButton 
                href="tel:+917737877978" 
                icon={<Phone className="w-5 h-5" />} 
                label="Call Directly" 
                subLabel="+91 77378 77978"
                color="hover:bg-[#D4AF37] hover:text-black"
              />
              <ContactButton 
                href="mailto:info@yashsoni.in" 
                icon={<Mail className="w-5 h-5" />} 
                label="Email Inquiry" 
                subLabel="info@yashsoni.in"
                color="hover:bg-white hover:text-black"
              />
            </div>
          </div>

          {/* COL 3: VERIFIED PROFILES (The "Trust" Stack) */}
          <div>
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-8">Verified On</h4>
            <ul className="space-y-2">
              <ProfileLink href="https://www.wedmegood.com/profile/Anchor-Yash-Soni-2555694" text="WedMeGood" />
              <ProfileLink href="#" text="WeddingBazaar" />
              <ProfileLink href="#" text="DreamWeddings" />
              <ProfileLink href="#" text="StarClinch" />
              <ProfileLink href="#" text="ShaadiDukaan" />
              <ProfileLink href="#" text="Justdial" />
              <ProfileLink href="#" text="Sulekha" />
              <ProfileLink href="https://share.google/pMZGzEGOhXnJpLq5g" text="Google Reviews" highlight />
            </ul>
          </div>

          {/* COL 4: NAVIGATION */}
          <div>
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-8">Explore</h4>
            <ul className="space-y-3">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/about" text="About Yash" />
              <FooterLink href="/portfolio" text="Portfolio" />
              <FooterLink href="/wedding-anchor-jaipur" text="Wedding Services" />
              <FooterLink href="/corporate-event-anchor-jaipur" text="Corporate Events" />
              <FooterLink href="/blog" text="Event Blog" />
              <FooterLink href="/contact" text="Contact Me" />
            </ul>
          </div>

        </div>

        {/* --- BOTTOM: MASSIVE WATERMARK & COPYRIGHT --- */}
        <div className="border-t border-neutral-900 pt-12 flex flex-col md:flex-row justify-between items-end gap-8">
          
          <div className="text-gray-600 text-xs space-y-2">
            <p>© {currentYear} Anchor Yash Soni.</p>
            <p>Jaipur, Rajasthan • Available Globally</p>
            <div className="flex gap-4 mt-2">
               <Link href="/privacy" className="hover:text-[#D4AF37]">Privacy Policy</Link>
               <Link href="/terms" className="hover:text-[#D4AF37]">Terms</Link>
            </div>
          </div>

          {/* MASSIVE TEXT */}
          <div className="hidden md:block">
            <span className="text-[5rem] lg:text-[8rem] font-display font-black leading-none text-[#111] select-none tracking-tighter hover:text-[#161616] transition-colors cursor-default">
              YASH SONI
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}

// --- HELPER COMPONENTS ---

const ContactButton = ({ href, icon, label, subLabel, color }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`flex items-center gap-4 bg-[#111] border border-neutral-800 p-4 rounded-xl transition-all group ${color}`}
  >
    <div className="text-gray-400 group-hover:text-current transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-white font-bold text-sm group-hover:text-current leading-none mb-1">{label}</p>
      <p className="text-gray-500 text-xs group-hover:text-current/70">{subLabel}</p>
    </div>
  </a>
);

const ProfileLink = ({ href, text, highlight }) => (
  <li>
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center justify-between text-sm py-2 px-3 rounded-lg border border-transparent hover:border-neutral-800 hover:bg-[#111] transition-all group ${highlight ? 'text-white font-bold bg-[#111] border-neutral-800' : 'text-gray-400'}`}
    >
      <span className="group-hover:text-[#D4AF37] transition-colors">{text}</span>
      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#D4AF37] transition-opacity" />
    </a>
  </li>
);

const FooterLink = ({ href, text }) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors flex items-center gap-2 group">
      <span className="w-1 h-1 rounded-full bg-neutral-800 group-hover:bg-[#D4AF37] transition-colors"></span>
      {text}
    </Link>
  </li>
);

const SocialIcon = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
  >
    {icon}
  </a>
);
