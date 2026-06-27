import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  const { email, phone, location, linkedin, github, resumeUrl } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      label: "Email Me",
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40"
    },
    {
      label: "Call Me",
      value: phone,
      href: `tel:${phone}`,
      icon: Phone,
      color: "text-blue-400 border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40"
    },
    {
      label: "Location",
      value: location,
      href: "#",
      icon: MapPin,
      color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/40"
    }
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-bg-dark/40 border-y border-white/5">
      
      {/* Background glowing gradients */}
      <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent-primary/5 glow-blur pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-accent-tertiary/5 glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Meaningful"
          subtitle="I am always open to internships, learning opportunities, collaborative projects, and engineering roles where I can contribute and grow. Reach out directly or fill the form!"
        />

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Contact Information
              </h3>
              <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
                Feel free to connect with me. I will do my best to respond within 24 hours.
              </p>
              
              {/* Detailed Stat Info Cards */}
              <div className="space-y-4 pt-4">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={idx}
                      href={info.href}
                      className={`flex items-center space-x-4 p-4 rounded-2xl border transition-all duration-300 ${info.color} block cursor-pointer group`}
                    >
                      <div className="p-3 rounded-xl bg-bg-dark border border-white/10 text-slate-300 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                          {info.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 block truncate mt-0.5">
                          {info.value}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions / Resume Download */}
            <div className="glassmorphism p-6 rounded-3xl border border-white/5 space-y-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">// Resource Links</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={resumeUrl}
                  download
                  className="flex items-center justify-center gap-2 p-3 bg-accent-primary/20 border border-accent-primary/30 hover:border-accent-primary/60 text-white rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-accent-secondary" />
                  Download Resume
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-white/5 border border-white/10 hover:border-white/20 text-slate-200 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  Connect LinkedIn
                </a>
              </div>
              
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-black/40 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white rounded-xl text-xs font-semibold tracking-wide transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" />
                Explore my GitHub Profile
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glassmorphism p-8 sm:p-10 rounded-3xl border border-white/10 h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-950/60 border border-white/10 focus:border-accent-tertiary focus:ring-1 focus:ring-accent-tertiary rounded-2xl p-4 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="johndoe@example.com"
                        className="w-full bg-slate-950/60 border border-white/10 focus:border-accent-tertiary focus:ring-1 focus:ring-accent-tertiary rounded-2xl p-4 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        placeholder="Hello Chiyamala, I would love to connect about a potential role or project..."
                        className="w-full bg-slate-950/60 border border-white/10 focus:border-accent-tertiary focus:ring-1 focus:ring-accent-tertiary rounded-2xl p-4 text-sm text-white placeholder-slate-600 outline-none transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-accent-primary to-accent-tertiary rounded-2xl text-sm font-semibold tracking-wide text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Transmitting data...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    className="text-center py-12 flex flex-col items-center justify-center space-y-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] mb-4">
                      <CheckCircle className="w-8 h-8 animate-bounce" />
                    </div>
                    <h4 className="text-xl font-bold text-white font-display">
                      Transmission Success!
                    </h4>
                    <p className="text-slate-400 font-light text-sm max-w-sm leading-relaxed">
                      Thank you for reaching out, your message was sent successfully. I will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-xs font-semibold tracking-wide text-slate-300 transition-all duration-300 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
