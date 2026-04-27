"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? "border-[#D4AF37] bg-[#D4AF37]/5" : "border-white/10 hover:border-white/20"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none" aria-expanded={open}>
        <span className={`font-semibold text-base md:text-lg pr-4 transition-colors leading-snug ${open ? "text-[#D4AF37]" : "text-zinc-200"}`}>{q}</span>
        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${open ? "bg-[#D4AF37] border-[#D4AF37] text-black" : "border-white/30 text-white"}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-5 pb-5 md:px-6 md:pb-6 text-zinc-400 text-sm leading-relaxed border-t border-[#D4AF37]/20 pt-4">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection = ({ faqs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
      {faqs.map((faq, i) => (
        <ScrollReveal key={i} delay={i * 0.03}>
          <FAQItem q={faq.q} a={faq.a} />
        </ScrollReveal>
      ))}
    </div>
  );
};
