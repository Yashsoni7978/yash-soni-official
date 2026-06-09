"use client";

import Link from "next/link";
import {
  Instagram, Youtube, Facebook, Mail, Phone,
  MessageCircle, ExternalLink, Mic2, Twitter
} from "lucide-react";

// --- 1. LUXURY TEXTURE ASSETS ---
const GoldTextureText = ({ children, className }) => (
  <span
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{
      backgroundImage: "url('/gold-texture.webp')",
      backgroundColor: "#D4AF37",
    }}
  >
    {children}
  </span>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-24 pb-10 relative overflow-hidden">

      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* --- MAIN GRID --- */}
        <div className="grid md:grid-cols-4 gap-12 mb-20">

          {/* COL 1: BRANDING & SOCIALS */}
          <div className="md:col-span-1 space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <Mic2 className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="text-3xl font-display font-black text-white tracking-widest uppercase">
                Anchor <GoldTextureText>Yash</GoldTextureText>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Rajasthan's premium event anchor and luxury event manager. Elevating weddings and corporate summits with unmatched energy and flawless execution.
            </p>

            <div className="flex gap-4">
              <SocialIcon href="https://instagram.com/anchor_yash_official" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
              <SocialIcon href="https://www.youtube.com/@anchor_yash" icon={<Youtube className="w-5 h-5" />} label="YouTube" />
              <SocialIcon href="https://facebook.com" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
              <SocialIcon href="https://x.com/anchoryashsoni" icon={<Twitter className="w-5 h-5" />} label="X (Twitter)" />
            </div>
          </div>

          {/* COL 2: INSTANT ACTIONS (WhatsApp/Call) */}
          <div>
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-8">Direct Access</h4>
            <div className="flex flex-col gap-4">
              <ContactButton
                href="https://wa.me/917737877978"
                icon={<MessageCircle className="w-5 h-5" />}
                label="WhatsApp Direct"
                subLabel="Fastest Response"
                color="hover:border-[#25D366] hover:text-[#25D366]"
              />
              <ContactButton
                href="tel:+917737877978"
                icon={<Phone className="w-5 h-5" />}
                label="Call The Studio"
                subLabel="+91 77378 77978"
                color="hover:border-[#D4AF37] hover:text-[#D4AF37]"
              />
              <ContactButton
                href="mailto:info@yashsoni.in"
                icon={<Mail className="w-5 h-5" />}
                label="Email Inquiry"
                subLabel="contact us"
                color="hover:border-white hover:text-white"
              />
            </div>
          </div>

          {/* COL 3: VERIFIED PROFILES */}
          <div>
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-8">Verified On</h4>
            <ul className="space-y-4">
              <ProfileLink href="https://www.wedmegood.com/profile/anchor-yash-25628297" text="WedMeGood" />
              <ProfileLink href="https://www.weddingwire.in/wedding-entertainment/anchor-yash--e487166" text="WeddingWire" />
              <ProfileLink href="https://starclinch.com" text="StarClinch" />
              <ProfileLink href="https://www.shaadidukaan.com/profile/yash-2" text="ShaadiDukaan" />
              <ProfileLink href="https://www.justdial.com/Jaipur/Anchor-Yash-St-Wilfred-College-Mansarovar/0141PX141-X141-240423192409-I1E8_BZDET" text="Justdial" />
              <ProfileLink href="https://share.google/pMZGzEGOhXnJpLq5g" text="Google Reviews" highlight />
            </ul>
          </div>

          {/* COL 4: NAVIGATION */}
          <div>
            <h4 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-8">Explore</h4>
            <ul className="space-y-3">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/about" text="About Yash" />
              <FooterLink href="/portfolio" text="The Showreel" />
              <FooterLink href="/wedding-anchor-jaipur" text="Wedding Anchoring" />
              <FooterLink href="/corporate-event-anchor-jaipur" text="Corporate Events" />
              <FooterLink href="/event-management-jaipur" text="Event Management" />
              <FooterLink href="/event-designing" text="3D Event Designing" />
              <FooterLink href="/best-anchor-in-jaipur" text="Best Anchor Jaipur" />
              <FooterLink href="/anchor-for-birthday-party-jaipur" text="Birthday & Party Anchor" />
              <FooterLink href="/anchor-in-rajasthan" text="Event Destinations" />
              <FooterLink href="/contact" text="Contact Me" />
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR: SINGLE LINE */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-gray-500 uppercase tracking-widest">
          <p>© {currentYear} Anchor Yash Soni · Jaipur, Rajasthan · Available Globally</p>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Press &amp; Booking</Link>
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
    className={`flex items-center gap-4 bg-[#0a0a0a] border border-white/5 p-4 rounded-2xl transition-all duration-300 group ${color} shadow-lg`}
  >
    <div className="text-gray-400 group-hover:text-current transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-white font-bold text-sm group-hover:text-current leading-none mb-1 transition-colors">{label}</p>
      <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold group-hover:text-current/70">{subLabel}</p>
    </div>
  </a>
);

// --- FIXED PROFILE LINK ---
// Removed the blocky background, adjusted flexbox, and added elegant text-based styling.
const ProfileLink = ({ href, text, highlight }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-sm transition-all duration-300 group ${highlight
          ? 'text-[#D4AF37] font-bold tracking-wide'
          : 'text-gray-400 font-light hover:text-[#D4AF37]'
        }`}
    >
      <span className={`relative ${highlight
          ? 'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[#D4AF37]/50'
          : ''
        }`}>
        {text}
      </span>
      <ExternalLink className={`w-3.5 h-3.5 transition-all ${highlight
          ? 'opacity-100 text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1'
          : 'opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#D4AF37]'
        }`} />
    </a>
  </li>
);

const FooterLink = ({ href, text }) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-[#D4AF37] text-sm font-light transition-colors flex items-center gap-3 group">
      <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#D4AF37] transition-colors"></span>
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
    className="w-12 h-12 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 shadow-lg"
  >
    {icon}
  </a>
);
