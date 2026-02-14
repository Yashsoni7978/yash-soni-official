"use client";

import { useState } from "react";
import { 
  Phone, Mail, MapPin, Send, MessageCircle, 
  Instagram, Youtube, Facebook, ArrowRight, 
  CheckCircle2, HelpCircle, ChevronDown, Calendar 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. LUXURY TEXTURE ASSETS ---
const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ 
      backgroundImage: "url('/gold-texture.png')", 
      backgroundColor: "#FFD700", 
    }}
  >
    {children}
  </span>
);

const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left group"
      >
        <span className="text-gray-300 group-hover:text-[#FFD700] transition-colors font-medium">{q}</span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 pb-4 leading-relaxed">{a}</p>
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
    type: "Wedding",
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
    <div className="bg-black text-white min-h-screen selection:bg-[#FFD700] selection:text-black font-sans pt-32 pb-20">
      
      {/* --- AVAILABILITY TICKER --- */}
      <div className="fixed top-20 left-0 w-full bg-[#FFD700] text-black text-[10px] md:text-xs font-bold uppercase tracking-widest py-2 z-20 overflow-hidden">
         <div className="whitespace-nowrap animate-marquee">
            Now Booking Dates for Winter 2025 & 2026 • Limited Slots Available • Contact Directly for Urgent Bookings • 
            Now Booking Dates for Winter 2025 & 2026 • Limited Slots Available • Contact Directly for Urgent Bookings •
         </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <p className="text-[#FFD700] text-xs uppercase tracking-[0.3em] mb-4 font-bold flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-[#FFD700]"></span> Let's Create Magic <span className="w-8 h-[1px] bg-[#FFD700]"></span>
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
            <div className="bg-[#111] border border-neutral-800 p-8 rounded-2xl space-y-6">
               <h3 className="text-xl font-bold text-white mb-6">Quick Connect</h3>
               <a href="tel:+917737877978" className="flex items-center gap-4 group">
                 <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-neutral-800 text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-colors">
                   <Phone className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-gray-500 text-xs uppercase tracking-widest">Call Me</p>
                   <p className="text-lg font-bold text-white group-hover:text-[#FFD700] transition-colors">+91 77378 77978</p>
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
                   <li key={i} className="flex gap-3 text-gray-400 text-sm">
                     <CheckCircle2 className="w-5 h-5 text-[#FFD700] shrink-0" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Mini FAQ */}
            <div>
               <h3 className="text-xl font-bold text-white mb-4">Common Questions</h3>
               <div className="divide-y divide-neutral-800">
                 <FAQItem q="Do you travel outside Jaipur?" a="Yes! I travel globally. Travel & stay are arranged by the client." />
                 <FAQItem q="Can we meet before booking?" a="Absolutely. We can schedule a Zoom call or a coffee meet in Jaipur." />
                 <FAQItem q="What is the booking process?" a="50% advance to block the date, remaining balance on the event day." />
               </div>
            </div>

          </div>

          {/* --- RIGHT SIDE: THE HUMANIZED FORM --- */}
          <div className="lg:col-span-7">
            <div className="bg-[#111] border border-neutral-800 p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-2xl font-display font-bold">Fast Inquiry Form</h3>
                   <span className="flex items-center gap-2 text-[#25D366] text-xs font-bold uppercase tracking-widest bg-[#25D366]/10 px-3 py-1 rounded-full">
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
                        className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:border-[#FFD700] focus:outline-none transition-colors placeholder:text-neutral-700"
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
                          className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:border-[#FFD700] focus:outline-none transition-colors appearance-none"
                          onChange={handleInputChange}
                        />
                        <Calendar className="absolute right-4 top-4 text-neutral-600 w-5 h-5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Event Type</label>
                       <select 
                         name="type"
                         className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:border-[#FFD700] focus:outline-none transition-colors appearance-none cursor-pointer"
                         onChange={handleInputChange}
                       >
                         <option>Wedding / Reception</option>
                         <option>Sangeet / Cocktail</option>
                         <option>Corporate Event</option>
                         <option>Birthday / Anniversary</option>
                         <option>Other</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">City / Venue</label>
                      <input 
                        type="text" 
                        name="location"
                        required
                        placeholder="e.g. Fairmont Jaipur"
                        className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:border-[#FFD700] focus:outline-none transition-colors placeholder:text-neutral-700"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Any specific requirements? (Optional)</label>
                    <textarea 
                      name="message"
                      rows={3}
                      placeholder="Tell me a bit about the vibe you want..."
                      className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:border-[#FFD700] focus:outline-none transition-colors placeholder:text-neutral-700 resize-none"
                      onChange={handleInputChange}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#FFD700] text-black font-bold text-lg p-5 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] transform hover:scale-[1.02]"
                  >
                    Start Conversation <Send className="w-5 h-5" />
                  </button>
                  
                  <p className="text-center text-xs text-gray-600 mt-4">
                    *Clicking this will open WhatsApp with your details pre-filled. No spam, ever.
                  </p>

                </form>
              </div>
            </div>
          </div>

        </div>
        
        {/* --- SOCIAL PROOF STRIP --- */}
        <div className="mt-24 pt-12 border-t border-neutral-900 text-center">
           <p className="text-neutral-600 text-xs font-bold uppercase tracking-[0.2em] mb-8">Verified & Trusted On</p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {["WedMeGood", "WeddingWire", "Google Reviews", "StarClinch", "Justdial"].map((brand, i) => (
                <span key={i} className="text-xl md:text-2xl font-black text-white">{brand}</span>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
