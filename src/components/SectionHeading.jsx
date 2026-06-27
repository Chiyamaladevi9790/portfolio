import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const isLeft = align === "left";
  
  return (
    <motion.div
      className={`mb-16 flex flex-col ${isLeft ? 'items-start text-left' : 'items-center text-center'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && (
        <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-accent-tertiary mb-3 display-font">
          // {eyebrow}
        </span>
      )}
      
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 font-display">
        {title}
      </h2>
      
      {/* Glow Line Indicator */}
      <div className={`h-[2px] w-24 bg-gradient-to-r from-accent-primary via-accent-tertiary to-transparent rounded-full mb-6 ${isLeft ? 'mr-auto' : 'mx-auto'}`} />

      {subtitle && (
        <p className="max-w-2xl text-sm md:text-base text-slate-400 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
