import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Shrink navbar on scroll
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 px-4 md:px-8 bg-bg-dark/85 backdrop-blur-md border-b border-white/5 shadow-lg' 
            : 'py-6 px-6 md:px-12 bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 text-left cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-primary to-accent-tertiary flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-105 transition-transform duration-300">
              CD
            </div>
            <div>
              <span className="font-display font-bold text-white tracking-wide block leading-none">Chiyamala Devi</span>
              <span className="text-[10px] text-accent-secondary tracking-widest uppercase">Portfolio</span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 glassmorphism rounded-full px-2 py-1.5 border border-white/10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  activeSection === link.id 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="relative overflow-hidden group px-5 py-2 rounded-xl text-xs font-semibold tracking-wide text-white border border-accent-tertiary/30 cursor-pointer hover:border-accent-tertiary transition-all duration-300 flex items-center gap-2"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-primary to-accent-tertiary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-45 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Side Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-80 z-50 bg-bg-dark border-l border-white/10 p-8 flex flex-col justify-between"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-tertiary flex items-center justify-center font-bold text-white">
                      CD
                    </div>
                    <span className="font-display font-bold text-white text-sm">Chiyamala Devi</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, idx) => (
                    <motion.button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`text-left text-lg font-semibold py-2 border-b border-white/5 ${
                        activeSection === link.id ? 'text-accent-secondary' : 'text-slate-400'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Socials & Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-accent-primary/25 border border-white/10 hover:border-accent-primary/50 text-slate-400 hover:text-white transition-all duration-300">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-accent-primary/25 border border-white/10 hover:border-accent-primary/50 text-slate-400 hover:text-white transition-all duration-300">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${portfolioData.personalInfo.email}`} className="p-3 rounded-xl bg-white/5 hover:bg-accent-primary/25 border border-white/10 hover:border-accent-primary/50 text-slate-400 hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <div className="text-xs text-slate-500 font-light">
                  &copy; {new Date().getFullYear()} Chiyamala Devi C. All rights reserved.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
