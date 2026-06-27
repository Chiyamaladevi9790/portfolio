import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, BookOpen, GraduationCap, Award, CheckCircle, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import heroImg from '../assets/hero/chiyamala-hero.jpg';

export default function AboutOrbitSection() {
  const sectionRef = useRef(null);
  
  // Track scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scroll transforms for orbit rings and avatar
  const rotateOuter = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const rotateInner = useTransform(scrollYProgress, [0, 1], [360, 0]);
  const scaleAvatar = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.95, 1.05, 1.05, 0.95]);
  const ringGlowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);

  const { 
    name, 
    college, 
    cgpa, 
    educationPeriod, 
    department, 
    location,
    aboutDetail1, 
    aboutDetail2, 
    aboutDetail3 
  } = portfolioData.personalInfo;

  const identityChips = [
    "B.Tech IT",
    "Aspiring ServiceNow Developer",
    "Java Developer",
    "Web Developer",
    "Cloud Learner",
    "Problem Solver"
  ];

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="relative min-h-screen py-24 overflow-hidden border-y border-white/5 bg-bg-dark/40"
    >
      
      {/* Decorative background lights */}
      <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent-primary/10 glow-blur pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent-tertiary/5 glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-accent-tertiary mb-3 block font-display">
            // About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 font-display">
            My Digital Identity
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-accent-primary to-accent-tertiary rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Orbit / Avatar System */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center justify-center py-6">
            <div className="relative w-72 h-72 sm:w-85 sm:h-85 flex items-center justify-center">
              
              {/* Outer Orbit Ring (rotates with scroll) */}
              <motion.div 
                style={{ rotate: rotateOuter }}
                className="absolute inset-0 rounded-full border border-dashed border-white/10"
              />

              {/* Inner Orbit Ring (rotates reverse with scroll) */}
              <motion.div 
                style={{ rotate: rotateInner }}
                className="absolute inset-6 rounded-full border border-accent-tertiary/20"
              >
                {/* Node on inner ring */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-accent-tertiary shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 rounded-full bg-accent-primary shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
              </motion.div>

              {/* Glowing Background Radial */}
              <motion.div 
                style={{ opacity: ringGlowOpacity }}
                className="absolute inset-12 rounded-full bg-accent-primary/5 shadow-[0_0_50px_rgba(99,102,241,0.2)] transition-opacity duration-300 pointer-events-none"
              />

              {/* Core Avatar Frame */}
              <motion.div 
                style={{ scale: scaleAvatar }}
                className="absolute inset-14 rounded-full overflow-hidden border-2 border-white/15 p-2 bg-gradient-to-br from-indigo-950 to-bg-dark shadow-[0_0_30px_rgba(99,102,241,0.3)]"
              >
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src={heroImg}
                    alt="Chiyamala Devi C Portrait"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Floating badges on Orbit Rings */}
              <motion.div 
                className="absolute -right-4 top-1/4 glassmorphism border border-emerald-500/30 px-3 py-1.5 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.15)] flex items-center gap-1.5"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-semibold text-emerald-400 tracking-wide uppercase">Open to Opportunities</span>
              </motion.div>

              <motion.div 
                className="absolute -left-4 bottom-1/4 glassmorphism border border-accent-secondary/30 px-3 py-1.5 rounded-xl shadow-[0_0_15px_rgba(96,165,250,0.15)] flex items-center gap-1.5"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              >
                <Award className="w-3.5 h-3.5 text-accent-secondary" />
                <span className="text-[10px] font-semibold text-slate-200">CGPA 8.48 / 10</span>
              </motion.div>

            </div>

            {/* Quick Stats Grid under Avatar */}
            <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-sm">
              <div className="glassmorphism p-4 rounded-2xl border border-white/5 text-center flex flex-col items-center">
                <GraduationCap className="w-5 h-5 text-accent-secondary mb-2" />
                <span className="text-xs text-slate-500 block">IT Student</span>
                <span className="text-[10px] text-slate-300 font-semibold mt-1">2023 - 2027</span>
              </div>
              <div className="glassmorphism p-4 rounded-2xl border border-white/5 text-center flex flex-col items-center">
                <MapPin className="w-5 h-5 text-accent-tertiary mb-2" />
                <span className="text-xs text-slate-500 block">Location</span>
                <span className="text-[10px] text-slate-300 font-semibold mt-1">Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content blocks */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Intro Content Card */}
            <motion.div
              className="glassmorphism p-8 rounded-3xl border border-white/10 hover:border-white/15 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-accent-tertiary" />
                <span className="text-xs font-semibold text-accent-tertiary uppercase tracking-wider">Mission Statement</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-display">
                Building practical digital solutions with consistency, curiosity, and purpose.
              </h3>
              <div className="space-y-4 text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                <p>{aboutDetail1}</p>
                <p>{aboutDetail2}</p>
                <p>{aboutDetail3}</p>
              </div>
            </motion.div>

            {/* Core Identity Pills Card */}
            <motion.div
              className="glassmorphism p-8 rounded-3xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-xs font-semibold text-accent-secondary uppercase tracking-wider block mb-4">// Career Focus Areas</span>
              <div className="flex flex-wrap gap-2.5">
                {identityChips.map((chip, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-accent-primary/10 border border-accent-primary/20 rounded-xl text-slate-200 text-xs sm:text-sm font-medium hover:bg-accent-primary/25 hover:border-accent-primary/40 transition-colors duration-300"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Academic Highlights Details */}
            <motion.div
              className="glassmorphism p-8 rounded-3xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-xs font-semibold text-accent-tertiary uppercase tracking-wider block mb-6">// Academic Base</span>
              <div className="space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 font-display">{college}</h4>
                  <p className="text-xs sm:text-sm text-slate-400">{department} | B.Tech</p>
                </div>
                
                <div className="h-[1px] bg-white/5 w-full" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-500 block">Department GPA</span>
                      <span className="text-sm font-semibold text-slate-200 mt-1 block">8.48 Cumulative CGPA</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-tertiary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-500 block">Current Focus</span>
                      <span className="text-sm font-semibold text-slate-200 mt-1 block">ServiceNow Admin & App Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
