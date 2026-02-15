"use client";

import { useState } from "react";
import { 
  Phone, Mail, MapPin, Send, MessageCircle, 
  Instagram, Youtube, Facebook, ArrowRight, 
  CheckCircle2, HelpCircle, ChevronDown, Calendar, Minus, Plus 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

// --- 2. FAQ COMPONENT ---
const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`group rounded-2xl border transition-all duration-300 mb-4 ${
        isOpen 
          ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.1)]" 
          : "border-white/10 bg-transparent hover:border-white/20" 
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <span className={`font-semibold text-[15px] pr-4 transition-colors ${
          isOpen ? "text-[#D4AF37]" : "text-zinc-200 group-hover:text-white"
        }`}>
          {q}
        </span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
          isOpen ? "bg-[#D4AF37] text-black" : "bg-transparent border border-white/30 text-white group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]"
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 mt-2">
              <div className="pt-4">{a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    type: "Wedding / Reception",
    location: "",
    message: ""
  });

  // --- WHATSAPP LOGIC ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Inquiry from Website*%0A%0A👤 Name: ${formData.name}%0A📅 Date: ${formData.date}%0A🎤 Event: ${formData.type}%0A📍 Venue: ${formData.location}%0A📝 Note: ${formData.message}`;
    window.open(`https://wa.me/917737877978?text=${text}`, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans pt-32 pb-20">
      
      {/* --- AVAILABILITY TICKER --- */}
      <div className="fixed top-20 left-0 w-full bg-[#D4AF37] text-black text-[10px] md:text-xs font-bold uppercase tracking-widest py-2 z-20 overflow-hidden shadow-lg">
         <div className="whitespace-nowrap animate-marquee">
           Now Booking Dates for Winter 2025 & 2026 • Limited Slots Available • Contact Directly for Urgent Bookings • 
           Now Booking Dates for Winter 2025 & 2026 • Limited Slots Available • Contact Directly for Urgent Bookings •
         </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4 font-bold flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-[#D4AF37]"></span> Let's Create Magic <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            Ready to <GoldTextureText>Elevate</GoldTextureText> <br className="hidden md:block"/> Your Event?
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            You've planned the decor, the food, and the guest list. Now, let's secure the *voice* that will tie it all together.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto">
          
          {/* --- LEFT SIDE: CONTEXT & TRUST --- */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Direct Contact Options */}
            <div className="bg-[#111] border border-neutral-800 p-8 rounded-2xl space-y-6 hover:border-[#D4AF37]/50 transition-colors duration-500">
               <h3 className="text-xl font-bold text-white mb-6">Quick Connect</h3>
               <a href="tel:+917737877978" className="flex items-center gap-4 group">
                 <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-neutral-800 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                   <Phone className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-gray-500 text-xs uppercase tracking-widest">Call Me</p>
                   <p className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">+91 77378 77978</p>
                 </div>
               </a>
               <a href="mailto:info@yashsoni.in" className="flex items-center gap-4 group">
                 <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-neutral-800 text-white group-hover:bg-white group-hover:text-black transition-colors">
                   <Mail className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-gray-500 text-xs uppercase tracking-widest">Email Me</p>
                   <p className="text-lg font-bold text-white group-hover:text-white transition-colors">info@yashsoni.in</p>
                 </div>
               </a>
            </div>

            {/* Why Book Now? */}
            <div>
               <h3 className="text-xl font-bold text-white mb-6">Why Secure Your Date Early?</h3>
               <ul className="space-y-4">
                 {[
                   "I only host one event per day to ensure 100% energy.",
                   "Dates for Nov-Feb (Wedding Season) fill up 6 months in advance.",
                   "Early booking locks in current pricing before seasonal hikes."
                 ].map((item, i) => (
                   <li key={i} className="flex gap-3 text-gray-400 text-sm font-light leading-relaxed">
                     <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Pre-Booking FAQ */}
            <div>
               <h3 className="text-xl font-bold text-white mb-4">Before You Book</h3>
               <div className="mt-6">
                 <FAQItem q="Do you travel outside Jaipur?" a="Yes! 'Have Mic, Will Travel'. I frequently host destination weddings globally. Travel & stay are typically arranged by the client." />
                 <FAQItem q="Can we meet before booking?" a="Absolutely. A strong connection is key. We can schedule a Zoom call or meet for coffee in Jaipur to discuss your vision." />
                 <FAQItem q="What are your payment terms?" a="A 50% advance secures and blocks your date. The remaining balance is cleared on the day of the event prior to the stage time." />
                 <FAQItem q="Do you take last-minute bookings?" a="If the date is open, yes. However, a minimum of 48 hours' notice is required to properly curate games, scripts, and understand your crowd." />
               </div>
            </div>

          </div>

          {/* --- RIGHT SIDE: THE HUMANIZED FORM --- */}
          <div className="lg:col-span-7">
            <div className="bg-[#111] border border-neutral-800 p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl hover:border-[#D4AF37]/30 transition-colors duration-500">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-2xl font-display font-bold">Fast Inquiry Form</h3>
                   <span className="flex items-center gap-2 text-[#25D366] text-[10px] md:text-xs font-bold uppercase tracking-widest bg-[#25D366]/10 px-3 py-1 rounded-full border border-[#25D366]/20">
                     <MessageCircle className="w-4 h-4" /> WhatsApp Enabled
                   </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">What should we call you?</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors placeholder:text-neutral-700"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Event Date</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          name="date"
                          required
                          className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors appearance-none"
                          onChange={handleInputChange}
                        />
                        <Calendar className="absolute right-4 top-4 text-neutral-600 w-5 h-5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Event Type</label>
                       <div className="relative">
                         <select 
                           name="type"
                           className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors appearance-none cursor-pointer"
                           onChange={handleInputChange}
                         >
                           <option>Wedding / Reception</option>
                           <option>Sangeet / Haldi</option>
                           <option>Corporate Gala / Summit</option>
                           <option>Birthday / Anniversary</option>
                           <option>Fashion Show / Ramp</option>
                           <option>Other</option>
                         </select>
                         <ChevronDown className="absolute right-4 top-4 text-neutral-600 w-5 h-5 pointer-events-none" />
                       </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">City / Venue</label>
                      <input 
                        type="text" 
                        name="location"
                        required
                        placeholder="e.g. Fairmont Jaipur"
                        className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors placeholder:text-neutral-700"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Any specific requirements? (Optional)</label>
                    <textarea 
                      name="message"
                      rows={4}
                      placeholder="Tell me a bit about the vibe you want... e.g. 'We want high energy couple games!' or 'It's a formal awards night.'"
                      className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors placeholder:text-neutral-700 resize-none"
                      onChange={handleInputChange}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#D4AF37] text-black font-bold text-lg p-5 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] transform hover:scale-[1.02]"
                  >
                    Start Conversation <Send className="w-5 h-5" />
                  </button>
                  
                  <p className="text-center text-[10px] text-gray-600 mt-4 uppercase tracking-widest">
                    *Clicking this will open WhatsApp with your details pre-filled.
                  </p>

                </form>
              </div>
            </div>
          </div>

        </div>
        
        {/* --- SOCIAL PROOF STRIP --- */}
        <div className="mt-32 pt-16 border-t border-neutral-900 text-center">
           <p className="text-neutral-600 text-xs font-bold uppercase tracking-[0.3em] mb-10">Verified & Trusted On</p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              {["WedMeGood", "WeddingWire", "Google Reviews", "StarClinch", "Justdial"].map((brand, i) => (
                <span key={i} className="text-xl md:text-3xl font-black text-white hover:text-[#D4AF37] transition-colors">{brand}</span>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
