"use client";
import { motion } from "framer-motion";

const revealUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

export const ScrollReveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={revealUp}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);
