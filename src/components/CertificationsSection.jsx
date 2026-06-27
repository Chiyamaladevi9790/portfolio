import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Eye, CheckCircle2, Cpu, Database, BookOpen, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function CertificationsSection({ onViewCertificate }) {
  const certifications = portfolioData.certifications;
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'ServiceNow', 'Java', 'Cloud', 'AI', 'Database'];

  const filteredCerts = selectedFilter === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedFilter);

  const getIssuerBadge = (issuer) => {
    switch (issuer) {
      case "ServiceNow":
        return (
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300">
            <Cpu className="w-6 h-6" />
          </div>
        );
      case "Microsoft":
        return (
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
            <Layers className="w-6 h-6" />
          </div>
        );
      case "Amazon Web Services":
        return (
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform duration-300">
            <Cpu className="w-6 h-6" />
          </div>
        );
      case "NPTEL / SWAYAM":
        return (
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300">
            <BookOpen className="w-6 h-6" />
          </div>
        );
      case "Google / Cognitive Class":
      case "Sawit AI":
        return (
          <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 group-hover:scale-110 transition-transform duration-300">
            <Award className="w-6 h-6" />
          </div>
        );
      case "MongoDB Academy":
        return (
          <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform duration-300">
            <Database className="w-6 h-6" />
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-2xl bg-slate-500/10 border border-slate-500/30 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform duration-300">
            <Award className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <section id="certifications" className="relative py-24 overflow-hidden bg-bg-dark/40 border-t border-white/5">
      
      {/* Background glow blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent-tertiary/5 glow-blur pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent-primary/10 glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <SectionHeading
          eyebrow="My Verification"
          title="Professional Certifications"
          subtitle="Learning milestones and platform credentials validating skills in ServiceNow administration, Java OOP, database design, and cloud solutions."
        />

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-accent-primary border-accent-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Certification Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={idx}
              className={`glow-card glassmorphism p-6 rounded-3xl border flex flex-col justify-between group hover:scale-[1.02] bg-gradient-to-br ${cert.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              layoutId={`cert-${idx}`}
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between mb-6">
                  {getIssuerBadge(cert.issuer)}
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-slate-400">
                    {cert.category}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug font-display group-hover:text-accent-secondary transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-slate-500 font-medium mb-4">
                  Issuer: {cert.issuer}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between">
                {/* Check badge */}
                <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>

                <div className="flex items-center space-x-2">
                  {cert.pdfUrl && (
                    <button
                      onClick={() => onViewCertificate(cert.pdfUrl)}
                      className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer"
                      title="View Certificate PDF"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                  {cert.verifyLink && (
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors duration-300"
                      title="Verify Credential"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
