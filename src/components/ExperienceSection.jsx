import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, FileCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function ExperienceSection({ onViewCertificate }) {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="relative py-24 overflow-hidden bg-bg-dark/20">
      
      {/* Background glow blob */}
      <div className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent-primary/5 glow-blur pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        <SectionHeading
          eyebrow="My Journey"
          title="Experience & Internships"
          subtitle="A chronological look at my practical learning stages in machine learning and front-end development through structured corporate internship opportunities."
        />

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 py-4 space-y-12">
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              
              {/* Glowing Dot Node */}
              <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-6 h-6 rounded-full bg-bg-dark border-2 border-accent-tertiary flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.5)] z-10 group">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-tertiary group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Card Details */}
              <div className="glow-card glassmorphism p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-white/15 transition-all duration-300">
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  {/* Role & Company */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-accent-secondary mt-1 block">
                      {exp.company}
                    </span>
                  </div>

                  {/* Period Badge */}
                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-xl w-fit">
                    <Calendar className="w-3.5 h-3.5 text-accent-tertiary" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-3 mb-6">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Key Contributions:</span>
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-tertiary mt-2 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View Certificate CTA */}
                {exp.pdfUrl && (
                  <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-mono">Issued by {exp.company}</span>
                    <button
                      onClick={() => onViewCertificate(exp.pdfUrl)}
                      className="px-4 py-2 bg-accent-primary/10 hover:bg-accent-primary/20 border border-accent-primary/30 hover:border-accent-primary rounded-xl text-xs font-semibold tracking-wide text-accent-secondary transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <FileCheck className="w-3.5 h-3.5" />
                      View Certificate PDF
                    </button>
                  </div>
                )}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
