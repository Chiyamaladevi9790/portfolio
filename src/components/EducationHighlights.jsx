import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationHighlights() {
  const { degree, college, location, period, cgpa, highlights } = portfolioData.education;

  const stats = [
    {
      label: "Cumulative Score",
      value: `${cgpa} CGPA`,
      description: "Consistent academic performer",
      icon: GraduationCap,
      color: "text-accent-secondary bg-blue-500/10 border-blue-500/20"
    },
    {
      label: "Academic Location",
      value: "KRCE, Trichy",
      description: "B.Tech Information Technology",
      icon: BookOpen,
      color: "text-accent-tertiary bg-cyan-500/10 border-cyan-500/20"
    },
    {
      label: "Academic Period",
      value: period,
      description: "Undergraduate IT student",
      icon: Calendar,
      color: "text-accent-primary bg-indigo-500/10 border-indigo-500/20"
    },
    {
      label: "Project Presentation",
      value: "2nd Prize Winner",
      description: "State level technical symposium",
      icon: Award,
      color: "text-pink-400 bg-pink-500/10 border-pink-500/20"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-bg-dark/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Stat strip grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={idx}
                className="glassmorphism p-6 rounded-3xl border border-white/5 flex flex-col justify-between group hover:border-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className={`p-2 rounded-xl border ${stat.color} transition-colors duration-300`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-white font-display block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 font-light block leading-normal">
                    {stat.description}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Details and Bullet summary below stats */}
        <motion.div 
          className="mt-12 glassmorphism p-8 rounded-3xl border border-white/5 bg-gradient-to-r from-accent-primary/5 via-transparent to-transparent flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <span className="text-xs font-semibold text-accent-tertiary uppercase tracking-wider block mb-2">// Institution Info</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-1">{college}</h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light">{degree} | {location}</p>
          </div>
          
          <div className="h-[1px] lg:h-12 w-full lg:w-[1px] bg-white/10" />
          
          <div className="flex-1 space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Key Highlights:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-tertiary mt-2 shrink-0 animate-pulse" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
