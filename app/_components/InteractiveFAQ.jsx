"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQItem({ faq, question, q, answer, a, id, colorClass = "text-[#B5952F]" }) {
  const [isOpen, setIsOpen] = useState(false);
  const displayQ = question || q || (faq && faq.q);
  const displayA = answer || a || (faq && faq.a);
  const faqId = id || Math.random().toString(36).substr(2, 9);
  
  return (
    <div className="border-b border-[#1A1A1A]/10 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faqId}`}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="font-['The_Seasons'] text-2xl md:text-3xl text-[#1A1A1A] pr-4">{displayQ}</h3>
        <span className={`text-2xl ${colorClass}`}>{isOpen ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id={`faq-answer-${faqId}`}
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="overflow-hidden"
          >
            <p className="font-sans text-gray-600 font-light leading-relaxed mt-4">{displayA}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
