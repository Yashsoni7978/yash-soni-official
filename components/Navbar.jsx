"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, Mail, MapPin, Send, CheckCircle, Loader2, 
  Instagram, Youtube, Facebook, ArrowRight, Calendar, 
  FileText, Mic2, ChevronDown 
} from "lucide-react";

// --- LUXURY TEXTURE ASSET ---
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
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  // --- FORM SUBMISSION LOGIC ---
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);
    // ⚠️ IMPORTANT: GO TO web3forms.com TO GET YOUR FREE ACCESS KEY
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans pt-32">
      
      {/* --- 1. AVAILABILITY TICKER (UPDATED 2026-27) --- */}
      <div className="fixed top-20 left-0 w-full bg-[#D4AF37] text-black text-[10px] md:text-xs font-bold uppercase tracking-widest py-3 z-30 overflow-hidden border-y border-white/20 shadow-lg">
         <div className="whitespace-nowrap animate-marquee flex gap-10">
            <span>Now Booking Dates for Wedding Season 2026-27 • Limited Prime Dates Available • Contact Directly for Urgent Bookings</span>
            <span>•</span>
            <span>Now Booking Dates for Wedding Season 2026-27 • Limited Prime Dates Available • Contact Directly for Urgent Bookings</span>
            <span>•</span>
         </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pb-20">
        
        {/* --- 2. HEADER SECTION --- */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-gray-500 text-xs uppercase tracking-[0.4em] mb-6">The Final Step</p>
            <h1 className="text-5xl md:text-8xl font-display font-black mb-8 leading-tight">
              Secure Your <GoldTextureText>Legacy</GoldTextureText>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Your event deserves a voice that commands attention. <br className="hidden md:block" />
              Fill the form below to lock in your date before the calendar fills up.
            </p>
          </motion.div>
        </div>

        {/* --- 3. MAIN GRID (CONTACT CARDS + FORM) --- */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 max-w-7xl mx-auto mb-32">
          
          {/* LEFT SIDE: DIRECT CONTACT CARDS (Col Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* CALL CARD */}
            <a href="tel:+917737877978" className="block group">
              <div className="bg-[#0a0a0a] border border-neutral-800 p-8 rounded-2xl hover:border-[#D4AF37] hover:bg-[#111] transition-all duration-500 flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border border-neutral-800 text-[#D4AF37] group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Urgent Inquiry?</p>
                    <p className="text-2xl font-display font-bold text-white group-hover:text-[#D4AF37] transition-colors">+91 77378 77978</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-[#D4AF37] transform group-hover:translate-x-2 transition-all" />
              </div>
            </a>

            {/* EMAIL CARD */}
            <a href="mailto:info@yashsoni.in" className="block group">
              <div className="bg-[#0a0a0a] border border-neutral-800 p-8 rounded-2xl hover:border-white hover:bg-[#111] transition-all duration-500 flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border border-neutral-800 text-white group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Detailed Proposal</p>
                    <p className="text-2xl font-display font-bold text-white">info@yashsoni.in</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-white transform group-hover:translate-x-2 transition-all" />
              </div>
            </a>

            {/* LOCATION CARD */}
            <div className="bg-[#0a0a0a] border border-neutral-800 p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-6 mb-8">
                 <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center border border-neutral-800 text-gray-500">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Base Location</p>
                    <p className="text-2xl font-display font-bold text-white">Jaipur, Rajasthan</p>
                 </div>
              </div>
              <div className="border-t border-neutral-900 pt-6">
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Available for destination weddings globally. <br />
                  <span className="text-[#D4AF37]">Frequent Travel:</span> Udaipur, Jodhpur, Goa, Dubai.
                </p>
                <div className="flex gap-4">
                   <SocialBtn icon={<Instagram className="w-5 h-5" />} href="https://instagram.com/anchor_yash_official" />
                   <SocialBtn icon={<Youtube className="w-5 h-5" />} href="https://youtube.com/@anchoryashsoni" />
                   <SocialBtn icon={<Facebook className="w-5 h-5" />} href="#" />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: THE "SUBMIT & DONE" FORM (Col Span 7) */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-neutral-800 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-[#25D366] mb-8 border border-green-500/20">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-display font-bold text-white mb-4">Inquiry Received</h3>
                <p className="text-gray-400 max-w-md mx-auto text-lg">
                  Thank you. I have received your details on my system. I will review your date and contact you shortly.
                </p>
                <button onClick={() => setStatus("idle")} className="mt-10 px-8 py-3 border border-neutral-800 rounded-full text-white text-sm hover:bg-neutral-800 transition-all">
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
                
                <div className="mb-10">
                  <h3 className="text-3xl font-display font-bold mb-2 flex items-center gap-3">
                    <span className="w-1 h-8 bg-[#D4AF37]"></span> Event Details
                  </h3>
                  <p className="text-gray-500 text-sm">Fill this form. It sends a direct notification to my team.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  
                  {/* Name & Phone */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-3">Your Name</label>
                      <input type="text" name="name" required placeholder="e.g. Rahul Verma" className="w-full bg-[#050505] border border-neutral-800 rounded-xl p-4 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all placeholder:text-neutral-800" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-3">Mobile Number</label>
                      <input type="tel" name="phone" required placeholder="+91 98765 43210" className="w-full bg-[#050505] border border-neutral-800 rounded-xl p-4 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all placeholder:text-neutral-800" />
                    </div>
                  </div>

                  {/* Date & Type */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-3">Event Date</label>
                      <input type="date" name="date" required className="w-full bg-[#050505] border border-neutral-800 rounded-xl p-4 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all [color-scheme:dark]" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-3">Event Type</label>
                      <select name="type" className="w-full bg-[#050505] border border-neutral-800 rounded-xl p-4 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all appearance-none cursor-pointer">
                        <option>Wedding (2 Days)</option>
                        <option>Sangeet Only</option>
                        <option>Reception Only</option>
                        <option>Corporate Event</option>
                        <option>Mall Activation</option>
                        <option>Private Party</option>
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-3">City / Venue Name</label>
                    <input type="text" name="location" required placeholder="e.g. Fairmont Jaipur" className="w-full bg-[#050505] border border-neutral-800 rounded-xl p-4 text-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all placeholder:text-neutral-800" />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-[#D4AF37] text-black font-display font-bold text-xl p-5 rounded-xl hover:bg-white hover:scale-[1.01] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.2)] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    {status === "submitting" ? <Loader2 className="animate-spin w-6 h-6" /> : "Submit Inquiry"}
                  </button>
                  
                  <p className="text-center text-xs text-neutral-600 mt-4">
                    *Your details are kept private. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* --- 4. NEW SECTION: THE BOOKING TIMELINE --- */}
        <section className="border-t border-neutral-900 pt-20 pb-10">
           <div className="text-center mb-16">
              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-4">The Process</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold">How It Works</h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Step 1 */}
              <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-neutral-900 hover:border-[#D4AF37] transition-colors group">
                 <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center text-white mb-6 text-2xl font-bold group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">01</div>
                 <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Calendar className="w-4 h-4 text-[#D4AF37]" /> Availability Check</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">Fill the form above. My team checks the calendar for your specific dates and confirms availability within 6 hours.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-neutral-900 hover:border-[#D4AF37] transition-colors group">
                 <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center text-white mb-6 text-2xl font-bold group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">02</div>
                 <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><FileText className="w-4 h-4 text-[#D4AF37]" /> Proposal & Quote</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">We discuss your event scope. I send a customized commercial proposal tailored to your specific needs.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-neutral-900 hover:border-[#D4AF37] transition-colors group">
                 <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center text-white mb-6 text-2xl font-bold group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">03</div>
                 <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Mic2 className="w-4 h-4 text-[#D4AF37]" /> The Show</h3>
                 <p className="text-gray-500 text-sm leading-relaxed">Advance is paid to lock the date. We begin scripting and planning the flow. I arrive early on the event day to rock the stage.</p>
              </div>
           </div>
        </section>

        {/* --- 5. NEW SECTION: CONCIERGE FAQ --- */}
        <section className="pt-20">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-10 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                 <FAQItem question="Do you travel outside Jaipur?" answer="Yes. While Jaipur is home, I actively host in Udaipur, Jodhpur, Goa, and Delhi. Travel and Accommodation are provided by the client." />
                 <FAQItem question="What are your payment terms?" answer="To lock a date, a 50% advance is required. The remaining balance is due 24 hours before the event starts. No exceptions." />
                 <FAQItem question="Do you handle the DJ and Sound?" answer="I work closely with the DJ and Sound Engineer to ensure cues are perfect, but I do not provide the equipment. I can recommend trusted vendors if needed." />
              </div>
           </div>
        </section>

      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

const SocialBtn = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border border-neutral-800 bg-[#0a0a0a] flex items-center justify-center text-gray-400 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all"
  >
    {icon}
  </a>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-800 bg-[#0a0a0a] rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left hover:bg-neutral-900 transition-colors"
      >
        <span className="font-bold text-white text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#D4AF37] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="p-6 pt-0 text-gray-400 leading-relaxed text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};