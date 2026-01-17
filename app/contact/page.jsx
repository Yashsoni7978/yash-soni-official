"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Instagram, Youtube, Facebook, ArrowRight } from "lucide-react";

// --- 1. LUXURY TEXTURE ASSETS ---
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    type: "Wedding",
    location: "",
  });

  // --- WHATSAPP LOGIC ---
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the message
    const message = `*New Event Inquiry*%0A%0AName: ${formData.name}%0ADate: ${formData.date}%0AEvent Type: ${formData.type}%0ALocation: ${formData.location}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/917737877978?text=${message}`, '_blank');
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans pt-32 pb-20">
      
      {/* --- AVAILABILITY TICKER --- */}
      <div className="fixed top-20 left-0 w-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest py-2 z-20 overflow-hidden">
         <div className="whitespace-nowrap animate-marquee">
            Now Booking Dates for Winter 2025 & 2026 • Limited Slots Available • Contact Directly for Urgent Bookings • 
            Now Booking Dates for Winter 2025 & 2026 • Limited Slots Available • Contact Directly for Urgent Bookings •
         </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-[0.3em] mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6">
            Secure Your <GoldTextureText>Date</GoldTextureText>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
            You plan the event. I'll plan the memories. <br />
            Fill the form below to start the conversation directly on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          
          {/* --- LEFT SIDE: DIRECT CONTACT CARDS --- */}
          <div className="space-y-6">
            
            {/* CALL CARD */}
            <a href="tel:+917737877978" className="block group">
              <div className="bg-[#111] border border-neutral-800 p-8 rounded-2xl hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border border-neutral-800 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Call Directly</p>
                    <p className="text-2xl font-display font-bold text-white">+91 77378 77978</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-[#D4AF37] transform group-hover:translate-x-2 transition-all" />
              </div>
            </a>

            {/* EMAIL CARD */}
            <a href="mailto:info@yashsoni.in" className="block group">
              <div className="bg-[#111] border border-neutral-800 p-8 rounded-2xl hover:border-white transition-all duration-300 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border border-neutral-800 text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Send Email</p>
                    <p className="text-2xl font-display font-bold text-white">info@yashsoni.in</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-white transform group-hover:translate-x-2 transition-all" />
              </div>
            </a>

            {/* LOCATION CARD */}
            <div className="bg-[#111] border border-neutral-800 p-8 rounded-2xl">
              <div className="flex items-center gap-6 mb-6">
                 <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border border-neutral-800 text-gray-400">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Base Location</p>
                    <p className="text-2xl font-display font-bold text-white">Jaipur, Rajasthan</p>
                 </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 pl-20">
                Available for destination weddings in Udaipur, Jodhpur, Goa, and International locations.
              </p>
              <div className="pl-20 flex gap-4">
                 <SocialBtn icon={<Instagram className="w-5 h-5" />} href="https://instagram.com/anchor_yash_official" />
                 <SocialBtn icon={<Youtube className="w-5 h-5" />} href="https://youtube.com/@anchoryashsoni" />
                 <SocialBtn icon={<Facebook className="w-5 h-5" />} href="#" />
              </div>
            </div>

          </div>

          {/* --- RIGHT SIDE: THE WHATSAPP FORM --- */}
          <div className="bg-[#111] border border-neutral-800 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-[#25D366]" /> Fast Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rahul Verma"
                  className="w-full bg-black border border-neutral-800 rounded-lg p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Date & Type Row */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Event Date</label>
                  <input 
                    type="date" 
                    required
                    className="w-full bg-black border border-neutral-800 rounded-lg p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                   <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Event Type</label>
                   <select 
                     className="w-full bg-black border border-neutral-800 rounded-lg p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors appearance-none"
                     onChange={(e) => setFormData({...formData, type: e.target.value})}
                   >
                     <option>Wedding</option>
                     <option>Sangeet</option>
                     <option>Corporate</option>
                     <option>Birthday</option>
                     <option>Other</option>
                   </select>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">City / Venue</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Fairmont Jaipur"
                  className="w-full bg-black border border-neutral-800 rounded-lg p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-[#25D366] text-black font-bold text-lg p-5 rounded-lg hover:bg-[#1faa53] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(37,211,102,0.2)]"
              >
                Send via WhatsApp <Send className="w-5 h-5" />
              </button>
              
              <p className="text-center text-xs text-gray-600 mt-4">
                *This will open WhatsApp with your details pre-filled.
              </p>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper for Social Buttons
const SocialBtn = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neutral-800 transition-all"
  >
    {icon}
  </a>
);
