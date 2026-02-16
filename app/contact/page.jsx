"use client";

import { useState } from "react";
import { 
  Phone, Mail, MapPin, Send, MessageCircle, 
  Instagram, CheckCircle2, ChevronDown, Calendar, Crown, Diamond 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. LUXURY TEXTURE ASSETS ---
const GoldTextureText = ({ children, className }) => (
  <span 
    className={`bg-clip-text text-transparent bg-cover bg-center ${className || ""}`}
    style={{ backgroundImage: "url('/gold-texture.png')", backgroundColor: "#D4AF37" }}
  >
    {children}
  </span>
);

const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="text-gray-300 group-hover:text-[#D4AF37] transition-colors font-medium text-[15px]">{q}</span>
        <ChevronDown className={`w-4 h-4 text-[#D4AF37] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-400 pb-5 leading-relaxed font-light">{a}</p>
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
    type: "Wedding Planning",
    location: "",
    message: ""
  });

  // --- WHATSAPP LOGIC ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Inquiry from YashSoni.in*%0A%0A👤 Name: ${formData.name}%0A📅 Date: ${formData.date}%0A🎤 Event: ${formData.type}%0A📍 Venue: ${formData.location}%0A📝 Note: ${formData.message}`;
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
    <div className="bg-[#050505] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans pt-32 pb-20 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-[#050505] to-[#050505] opacity-60 pointer-events-none"></div>

      {/* --- AVAILABILITY TICKER --- */}
      <div className="fixed top-20 left-0 w-full bg-gradient-to-r from-[#D4AF37] to-[#b48f25] text-black text-[10px] md:text-xs font-black uppercase tracking-[0.2em] py-2 z-20 overflow-hidden shadow-lg border-y border-[#D4AF37]">
         <div className="whitespace-nowrap animate-marquee flex items-center">
            Now Booking Dates for Winter 2025 & 2026 <Diamond className="w-3 h-3 mx-4 inline" /> 
            Limited Slots Available <Diamond className="w-3 h-3 mx-4 inline" /> 
            Contact Directly for Urgent Bookings <Diamond className="w-3 h-3 mx-4 inline" />
            Now Booking Dates for Winter 2025 & 2026 <Diamond className="w-3 h-3 mx-4 inline" /> 
            Limited Slots Available <Diamond className="w-3 h-3 mx-4 inline" /> 
            Contact Directly for Urgent Bookings <Diamond className="w-3 h-3 mx-4 inline" />
         </div>
      </div>

      <div className="container mx-auto px-4 mt-16 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <div className="inline-flex items-center gap-3 border border-[#D4AF37]/50 px-6 py-2 rounded-full bg-black/50 backdrop-blur-xl mb-8 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
               <Crown className="w-4 h-4 text-[#D4AF37]" />
               <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold">
                 Initiate The Dialogue
               </span>
             </div>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-[0.9] uppercase tracking-tighter drop-shadow-2xl">
               Let's <GoldTextureText>Connect.</GoldTextureText>
             </h1>
             <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
               You've curated the vision. Now, let's secure the team that will execute it flawlessly.
             </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto">
          
          {/* --- LEFT SIDE: CONTEXT & TRUST --- */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Direct Contact Options */}
            <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl space-y-8 shadow-xl">
               <h3 className="text-2xl font-display font-bold text-white mb-2">Direct Access.</h3>
               <p className="text-gray-400 font-light text-sm mb-6">Skip the wait. Reach out directly for immediate assistance regarding dates and premium consulting.</p>
               
               <a href="tel:+917737877978" className="flex items-center gap-5 group">
                 <div className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center border border-white/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-500 shadow-md">
                   <Phone className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">VIP Line</p>
                   <p className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">+91 77378 77978</p>
                 </div>
               </a>
               
               <a href="mailto:info@yashsoni.in" className="flex items-center gap-5 group">
                 <div className="w-14 h-14 bg-[#111] rounded-2xl flex items-center justify-center border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors duration-500 shadow-md">
                   <Mail className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Business Inquiries</p>
                   <p className="text-lg font-bold text-white group-hover:text-white transition-colors">info@yashsoni.in</p>
                 </div>
               </a>
            </div>

            {/* Why Book Now? */}
            <div>
               <h3 className="text-xl font-display font-bold text-white mb-6">The Agency Standard</h3>
               <ul className="space-y-4">
                 {[
                   "We execute only one premier event per day.",
                   "Peak season dates (Nov-Feb) lock 6-8 months prior.",
                   "Zero hidden markups. Absolute transparent pricing."
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4 items-start text-gray-300 text-sm font-light">
                     <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Mini FAQ */}
            <div className="pt-4">
               <h3 className="text-xl font-display font-bold text-white mb-6">Common Inquiries</h3>
               <div className="border-t border-white/10">
                 <FAQItem q="Do you execute destination weddings outside Jaipur?" a="Yes. While our headquarters are in Jaipur, our logistical frameworks allow us to execute flawless destination weddings globally, including Goa and Dubai." />
                 <FAQItem q="Can we schedule an in-person meeting?" a="Absolutely. For high-tier planning, we can schedule a consultation at our Jaipur office or via Zoom." />
                 <FAQItem q="What is the process to lock a date?" a="A 50% retainer is required to officially block the calendar date for our planning or anchoring services." />
               </div>
            </div>

          </div>

          {/* --- RIGHT SIDE: THE HUMANIZED WHATSAPP FORM --- */}
          <div className="lg:col-span-7">
            <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.05)]">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
                   <h3 className="text-3xl font-display font-bold text-white">Request a Proposal</h3>
                   <span className="flex items-center gap-2 text-[#25D366] text-xs font-bold uppercase tracking-widest bg-[#25D366]/10 px-4 py-2 rounded-full w-fit border border-[#25D366]/20">
                     <MessageCircle className="w-4 h-4" /> WhatsApp Enabled
                   </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-2">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Yash Soni"
                        className="w-full bg-[#111] border border-white/5 rounded-2xl p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors placeholder:text-neutral-700"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-2">Event Date</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          name="date"
                          required
                          className="w-full bg-[#111] border border-white/5 rounded-2xl p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors appearance-none"
                          onChange={handleInputChange}
                        />
                        <Calendar className="absolute right-4 top-4 text-[#D4AF37] w-5 h-5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-2">Service Required</label>
                       <select 
                         name="type"
                         className="w-full bg-[#111] border border-white/5 rounded-2xl p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors appearance-none cursor-pointer"
                         onChange={handleInputChange}
                         value={formData.type}
                       >
                         <option>Luxury Wedding Planning</option>
                         <option>Wedding Anchoring</option>
                         <option>Event Designing & 3D</option>
                         <option>Corporate Gala Management</option>
                         <option>Artist Booking</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-2">City / Venue</label>
                      <input 
                        type="text" 
                        name="location"
                        required
                        placeholder="e.g. Fairmont Jaipur"
                        className="w-full bg-[#111] border border-white/5 rounded-2xl p-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors placeholder:text-neutral-700"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-2">Event Details (Optional)</label>
                    <textarea 
                      name="message"
                      rows={4}
                      placeholder="Tell us about your vision, guest count, and specific requirements..."
                      className="w-full bg-[#111] border border-white/5 rounded-3xl p-5 text-white focus:border-[#D4AF37] focus:outline-none transition-colors placeholder:text-neutral-700 resize-none"
                      onChange={handleInputChange}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#D4AF37] text-black font-black uppercase tracking-widest text-sm p-6 rounded-2xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.2)] transform hover:scale-[1.02]"
                  >
                    Send to WhatsApp <Send className="w-4 h-4" />
                  </button>
                  
                  <p className="text-center text-[10px] text-gray-600 mt-4 uppercase tracking-widest font-bold">
                    *This will open WhatsApp with your details pre-filled.
                  </p>

                </form>
              </div>
            </div>
          </div>

        </div>
        
        {/* --- SOCIAL PROOF STRIP --- */}
        <div className="mt-32 pt-16 border-t border-white/5 text-center">
           <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Verified & Trusted On</p>
           <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {["WedMeGood", "WeddingWire", "Google Reviews", "StarClinch", "Justdial"].map((brand, i) => (
                <span key={i} className="text-xl md:text-3xl font-display font-black text-white">{brand}</span>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
