import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function SkillsSection() {
  const categories = portfolioData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Programming":
        return "from-amber-500/20 to-orange-600/10 border-orange-500/20 text-orange-400";
      case "Web Development":
        return "from-cyan-500/20 to-blue-600/10 border-cyan-500/20 text-cyan-400";
      case "Platform & Cloud":
        return "from-indigo-500/20 to-purple-600/10 border-indigo-500/20 text-indigo-400";
      case "Tools & Collaboration":
        return "from-emerald-500/20 to-teal-600/10 border-emerald-500/20 text-emerald-400";
      default:
        return "from-accent-primary/20 to-accent-tertiary/10 border-accent-primary/20 text-accent-tertiary";
    }
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-bg-dark/20">
      
      {/* Background glow node */}
      <div className="absolute top-[30%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-accent-tertiary/5 glow-blur pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <SectionHeading
          eyebrow="My Capabilities"
          title="Skills & Focus Areas"
          subtitle="A comprehensive mix of programming logic, responsive web development, enterprise cloud services (ServiceNow / Azure), and key interpersonal strengths."
        />

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((cat, catIdx) => {
            const colorClasses = getCategoryColor(cat.category);
            
            return (
              <motion.div
                key={catIdx}
                className={`glow-card glassmorphism p-8 rounded-3xl border border-white/5 bg-gradient-to-br hover:scale-[1.01]`}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                {/* Card Title & Icon */}
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">{cat.category}</h3>
                    <p className="text-xs text-slate-400 mt-1 font-light">{cat.description}</p>
                  </div>
                  <span className={`px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-white/5 rounded-lg border border-white/10`}>
                    CAT 0{catIdx + 1}
                  </span>
                </div>

                {/* Skills List in Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {cat.items.map((skill, skillIdx) => {
                    // Resolve Lucide Icon dynamically
                    const IconComponent = Icons[skill.icon] || Icons.Code2;
                    
                    return (
                      <div 
                        key={skillIdx}
                        className="flex items-center space-x-3 p-3.5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-xl bg-bg-dark border border-white/10 text-slate-300 group-hover:text-accent-tertiary group-hover:border-accent-tertiary/40 transition-colors duration-300">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-semibold text-slate-200 block truncate group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium block">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic Skill Showcase strip (Extra Visual Polish) */}
        <motion.div 
          className="mt-16 glassmorphism p-6 rounded-2xl border border-white/5 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">// Highlight Stack:</span>
          {["ServiceNow CSA", "Java 17", "React.js", "Tailwind CSS", "MySQL", "Azure Cloud"].map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-semibold px-3.5 py-1.5 bg-accent-primary/10 border border-accent-primary/20 text-accent-secondary rounded-lg"
            >
              {tag}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
