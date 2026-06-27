import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText } from 'lucide-react';
import Lenis from 'lenis';

// Import Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutOrbitSection from './components/AboutOrbitSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import EducationHighlights from './components/EducationHighlights';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GlowBackground from './components/GlowBackground';

export default function App() {
  const [activePdfUrl, setActivePdfUrl] = useState(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const openCertificateModal = (pdfUrl) => {
    setActivePdfUrl(pdfUrl);
    // Disable body scroll when modal is active
    document.body.style.overflow = 'hidden';
  };

  const closeCertificateModal = () => {
    setActivePdfUrl(null);
    // Enable body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="relative min-h-screen text-white bg-bg-dark font-sans selection:bg-accent-primary selection:text-white">
      {/* Background Gradients and Orbits */}
      <GlowBackground />

      {/* Navigation bar */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Me / Orbit Section */}
        <AboutOrbitSection />

        {/* Skills & Focus areas */}
        <SkillsSection />

        {/* Featured Projects */}
        <ProjectsSection />

        {/* Internship Experience */}
        <ExperienceSection onViewCertificate={openCertificateModal} />

        {/* Professional Certifications */}
        <CertificationsSection onViewCertificate={openCertificateModal} />

        {/* Academic highlights strip */}
        <EducationHighlights />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Lightbox / Certificate PDF Viewer Modal */}
      <AnimatePresence>
        {activePdfUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCertificateModal}
            />

            {/* Modal Content Frame */}
            <motion.div
              className="relative w-full max-w-5xl h-[85vh] bg-slate-950/90 border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(99,102,241,0.3)] z-10"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
            >
              
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-6 bg-slate-900/50 border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-accent-tertiary" />
                  <span className="font-display font-semibold text-sm sm:text-base text-white tracking-wide">
                    Credential PDF Viewer
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <a
                    href={activePdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Open in New Tab</span>
                  </a>
                  <a
                    href={activePdfUrl}
                    download
                    className="p-2 rounded-xl bg-accent-primary/20 border border-accent-primary/30 hover:border-accent-primary text-white transition-colors duration-300 flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    onClick={closeCertificateModal}
                    className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF Document Display Viewport */}
              <div className="flex-1 bg-slate-900 relative">
                <iframe
                  src={activePdfUrl}
                  className="w-full h-full border-none"
                  title="Certificate Document Viewer"
                />
              </div>

              {/* Modal Footer warning */}
              <div className="p-3 bg-slate-950 text-center text-[9px] sm:text-xs text-slate-500 font-mono border-t border-white/5">
                Powered by native browser PDF viewer. Click outside or use top-right X to exit.
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
