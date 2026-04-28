"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQItem({ faq, colorClass }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#1A1A1A]/10 py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left">
        <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] pr-4">{faq.q}</h3>
        <span className={`text-2xl ${colorClass}`}>{isOpen ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="overflow-hidden"
          >
            <p className="font-sans text-gray-600 font-light leading-relaxed mt-4">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
