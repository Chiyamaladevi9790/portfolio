import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ArrowRight, MessageSquare, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import heroImg from '../assets/hero/chiyamala-hero.jpg';

// Animated cycling title roles
const ROLES = [
  { label: "Software Developer",           color: "from-indigo-400 to-cyan-400" },
  { label: "Full Stack Developer",          color: "from-cyan-400 to-teal-400" },
  { label: "ServiceNow System Administrator", color: "from-emerald-400 to-indigo-400" },
  { label: "Java & Web Developer",          color: "from-amber-400 to-orange-400" },
  { label: "Cloud Solutions Learner",       color: "from-pink-400 to-fuchsia-400" },
];

export default function HeroSection() {
  const { name, aboutSummary, resumeUrl, github, linkedin } = portfolioData.personalInfo;

  const [roleIndex, setRoleIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  // Auto-cycle every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setRoleIndex(prev => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setDirection(1);
    setRoleIndex(prev => (prev + 1) % ROLES.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setRoleIndex(prev => (prev - 1 + ROLES.length) % ROLES.length);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

  const chipTags = [
    "ServiceNow CSA",
    "Java Programming",
    "Web Development",
    "Azure Fundamentals",
    "Problem Solving",
    "GitHub Projects"
  ];

  // Slide animation variants
  const roleVariants = {
    enter: (dir) => ({
      y: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      y: dir > 0 ? -30 : 30,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden">

      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">

        {/* ─── Left Column: Text ─── */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glassmorphism border border-accent-tertiary/20 text-accent-tertiary text-xs font-semibold w-fit mb-6"
            variants={itemVariants}
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span className="tracking-wide">Welcome to my Digital Space</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4 font-display leading-tight"
            variants={itemVariants}
          >
            I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary via-accent-tertiary to-pink-500">
              {name}
            </span>
          </motion.h1>

          {/* ── Animated Cycling Role Title ── */}
          <motion.div
            className="flex items-center gap-3 mb-6 h-10"
            variants={itemVariants}
          >
            {/* Prev button */}
            <button
              onClick={goPrev}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-200 cursor-pointer shrink-0"
              aria-label="Previous role"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {/* Sliding text */}
            <div className="relative overflow-hidden h-10 flex items-center flex-1 min-w-0">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.h2
                  key={roleIndex}
                  custom={direction}
                  variants={roleVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className={`text-lg sm:text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r ${ROLES[roleIndex].color} whitespace-nowrap absolute`}
                >
                  {ROLES[roleIndex].label}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Next button */}
            <button
              onClick={goNext}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-200 cursor-pointer shrink-0"
              aria-label="Next role"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1 shrink-0">
              {ROLES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > roleIndex ? 1 : -1); setRoleIndex(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === roleIndex ? 'bg-accent-tertiary scale-125' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* About summary */}
          <motion.p
            className="text-slate-400 font-light text-base sm:text-lg mb-8 leading-relaxed max-w-xl"
            variants={itemVariants}
          >
            {aboutSummary}
          </motion.p>

          {/* Chip tags */}
          <motion.div className="flex flex-wrap gap-2 mb-8 max-w-lg" variants={itemVariants}>
            {chipTags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 hover:border-accent-tertiary/30 rounded-lg text-slate-300 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-wrap items-center gap-4 mb-8" variants={itemVariants}>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 bg-gradient-to-r from-accent-primary to-accent-tertiary rounded-xl text-sm font-semibold tracking-wide text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.55)] transition-all duration-300 flex items-center gap-2 cursor-pointer group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <a
              href={resumeUrl}
              download
              className="px-6 py-3.5 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-xl text-sm font-semibold tracking-wide text-slate-200 transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3.5 bg-transparent border border-accent-tertiary/20 hover:border-accent-tertiary/50 hover:bg-accent-tertiary/5 rounded-xl text-sm font-semibold tracking-wide text-accent-tertiary transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex items-center space-x-4 border-t border-white/5 pt-6 w-fit"
            variants={itemVariants}
          >
            <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">Connect:</span>
            <a href={linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn Profile">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href={github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors duration-300" aria-label="GitHub Profile">
              <GithubIcon className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* ─── Right Column: Circular Portrait + Orbit Rings ─── */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0">

          {/* Glowing halo behind */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-accent-primary/10 glow-blur -z-10" />

          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex justify-center items-center">

            {/* Outer dashed orbit ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-spin-slow" />

            {/* Middle orbit ring */}
            <div className="absolute inset-4 rounded-full border border-double border-accent-tertiary/20 animate-spin-slow-reverse" />

            {/* Inner ambient ring */}
            <div className="absolute inset-8 rounded-full border border-white/5 bg-accent-primary/5 shadow-[inset_0_0_25px_rgba(99,102,241,0.15)]" />

            {/* Orbiting tech node: Java */}
            <motion.div
              className="absolute w-9 h-9 rounded-xl bg-indigo-950 border border-indigo-500/40 flex items-center justify-center -top-2 left-1/2 -translate-x-1/2 shadow-[0_0_18px_rgba(99,102,241,0.5)] z-20"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] font-bold text-accent-secondary">Java</span>
            </motion.div>

            {/* Orbiting tech node: SN (ServiceNow) */}
            <motion.div
              className="absolute w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center -bottom-2 left-1/2 -translate-x-1/2 shadow-[0_0_18px_rgba(16,185,129,0.5)] z-20"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <span className="text-[10px] font-bold text-emerald-400">SN</span>
            </motion.div>

            {/* Orbiting tech node: Web */}
            <motion.div
              className="absolute w-9 h-9 rounded-xl bg-pink-950 border border-pink-500/40 flex items-center justify-center -right-2 top-1/2 -translate-y-1/2 shadow-[0_0_18px_rgba(236,72,153,0.5)] z-20"
              animate={{ x: [0, 7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="text-[10px] font-bold text-pink-400">Web</span>
            </motion.div>

            {/* Orbiting tech node: Cloud */}
            <motion.div
              className="absolute w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center -left-2 top-1/2 -translate-y-1/2 shadow-[0_0_18px_rgba(34,211,238,0.5)] z-20"
              animate={{ x: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            >
              <span className="text-[10px] font-bold text-cyan-400">Cloud</span>
            </motion.div>

            {/* ── Circular Portrait Frame ── */}
            <motion.div
              className="absolute inset-10 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_40px_rgba(99,102,241,0.35),0_0_80px_rgba(99,102,241,0.15)] group"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              whileHover={{ scale: 1.04 }}
            >
              {/* Gradient overlay (bottom) */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/30 via-transparent to-transparent z-10 pointer-events-none rounded-full" />

              {/* Profile photo */}
              <img
                src={heroImg}
                alt="Chiyamala Devi C"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 rounded-full"
              />
            </motion.div>

          </div>

          {/* Role badge floating below image */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 glassmorphism border border-accent-primary/30 px-4 py-2 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.2)] flex items-center gap-2 z-30 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`text-[10px] font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r ${ROLES[roleIndex].color}`}
              >
                {ROLES[roleIndex].label}
              </motion.span>
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
