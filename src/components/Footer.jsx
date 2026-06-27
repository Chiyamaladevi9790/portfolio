import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { name, github, linkedin, email } = portfolioData.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="relative bg-bg-dark border-t border-white/5 py-12 overflow-hidden">
      
      {/* Decorative gradient strip */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left Side: Brand Name & Copyright */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent-primary to-accent-tertiary flex items-center justify-center font-bold text-white text-[10px]">
              CD
            </div>
            <span className="font-display font-bold text-white text-sm">{name}</span>
          </div>
          <p className="text-xs text-slate-500 font-light">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>

        {/* Center: Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-xs text-slate-400 hover:text-white transition-colors duration-300 font-medium cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Side: Social links & Scroll To Top */}
        <div className="flex items-center space-x-6">
          {/* Socials */}
          <div className="flex items-center space-x-4">
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href={`mailto:${email}`}
              className="text-slate-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="h-6 w-[1px] bg-white/10" />

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>

      {/* Tech tag line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-white/5 text-center text-[10px] text-slate-600 font-mono">
        Built with React + Vite • Tailwind CSS • Framer Motion • Lucide React
      </div>

    </footer>
  );
}
