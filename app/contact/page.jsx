"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Instagram, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen pt-32 pb-20">
      
      {/* --- PAGE HEADER --- */}
      <section className="container mx-auto px-4 mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6">
            Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700">Magic</span> Together
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to book Jaipur's most engaging anchor? Fill out the form below or contact me directly. Dates for 2026 are filling fast.
          </p>
        </motion.div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* LEFT: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-amber-500/50 transition-colors">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Call Me</h3>
                  <p className="text-gray-400 mb-2">Available for urgent bookings</p>
                  <a href="tel:+917737877978" className="text-white font-bold hover:text-amber-500 transition-colors text-lg">
                    +91 77378 77978
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-amber-500/50 transition-colors">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Me</h3>
                  <p className="text-gray-400 mb-2">For detailed proposals & scripts</p>
                  <a href="mailto:info@yashsoni.in" className="text-white font-bold hover:text-amber-500 transition-colors text-lg">
                    info@yashsoni.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-amber-500/50 transition-colors">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Location</h3>
                  <p className="text-gray-400 mb-2">Base Location</p>
                  <p className="text-white font-bold text-lg">Jaipur, Rajasthan (Available Pan-India)</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-neutral-800">
              <h4 className="text-gray-400 mb-6 font-medium">Follow My Journey</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/anchor_yash_official" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-neutral-900 rounded-full flex items-center gap-2 text-white hover:bg-amber-600 hover:text-black transition-all">
                  <Instagram className="w-5 h-5" /> Instagram
                </a>
                <a href="https://youtube.com/@anchoryashsoni" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-neutral-900 rounded-full flex items-center gap-2 text-white hover:bg-red-600 hover:text-white transition-all">
                  <Youtube className="w-5 h-5" /> YouTube
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-neutral-900 p-8 md:p-10 rounded-3xl border border-neutral-800 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Quick Enquiry</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Event Type</label>
                    <select className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors text-gray-400">
                      <option>Wedding / Sangeet</option>
                      <option>Corporate Event</option>
                      <option>Mall Activation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Event Date</label>
                    <input type="date" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium ml-1">Message / Details</label>
                  <textarea rows={4} placeholder="Tell me about your event vibe..." className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors"></textarea>
                </div>

                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-lg mt-4">
                  Send Enquiry <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}