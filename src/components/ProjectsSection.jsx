import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Shield, Sparkles, CheckCircle2, Ticket, BarChart3, Database } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

// 1. EduAdapt Interactive Mockup
const EduAdaptMockup = () => {
  const [activeCourse, setActiveCourse] = useState(0);
  const courses = [
    { name: 'Data Structures', progress: 75, quiz: '8.5/10' },
    { name: 'Java OOP Basics', progress: 90, quiz: '9.2/10' },
    { name: 'React Development', progress: 45, quiz: '7.8/10' }
  ];

  return (
    <div className="w-full h-full bg-slate-950 p-4 font-mono text-[10px] text-slate-300 flex flex-col justify-between">
      <div className="border-b border-white/10 pb-2 mb-2 flex items-center justify-between">
        <span className="text-[9px] font-bold text-cyan-400 flex items-center gap-1">
          <Shield className="w-3 h-3 text-cyan-400 animate-pulse" /> EduAdapt Dashboard
        </span>
        <span className="text-[8px] bg-cyan-950 border border-cyan-800 text-cyan-400 px-1.5 py-0.5 rounded">Adaptive System Active</span>
      </div>
      
      {/* Course List */}
      <div className="space-y-2 flex-1 justify-center flex flex-col">
        {courses.map((course, idx) => (
          <div 
            key={idx} 
            onClick={() => setActiveCourse(idx)}
            className={`p-2 rounded border transition-all cursor-pointer ${
              activeCourse === idx 
                ? 'bg-cyan-950/40 border-cyan-500/50 text-white shadow-[0_0_10px_rgba(34,211,238,0.1)]' 
                : 'bg-white/5 border-white/5 hover:bg-white/10'
            }`}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold truncate">{course.name}</span>
              <span className="text-cyan-400 font-bold">{course.progress}%</span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-slate-900 h-1.5 rounded overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full transition-all duration-500" 
                style={{ width: `${course.progress}%` }} 
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 pt-2 border-t border-white/5 flex justify-between items-center text-[8px] text-slate-500">
        <span>Active User: student_dev</span>
        <span className="text-cyan-400 font-bold">Avg Score: {courses[activeCourse].quiz}</span>
      </div>
    </div>
  );
};

// 2. Bus Booking Interactive Mockup
const BusBookingMockup = () => {
  const [selectedSeats, setSelectedSeats] = useState([2, 5, 12]);
  
  const toggleSeat = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const totalSeats = 16;
  const reservedSeats = [3, 7, 8, 14];

  return (
    <div className="w-full h-full bg-slate-950 p-4 font-mono text-[10px] text-slate-300 flex flex-col justify-between">
      <div className="border-b border-white/10 pb-2 mb-2 flex items-center justify-between">
        <span className="text-[9px] font-bold text-blue-400 flex items-center gap-1">
          <Ticket className="w-3 h-3 text-blue-400" /> TicketBooking Terminal
        </span>
        <span className="text-[8px] text-blue-400">Route: TRICHY - MAS</span>
      </div>

      {/* Seat Layout grid */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-2 w-fit">
          {Array.from({ length: totalSeats }).map((_, idx) => {
            const seatNumber = idx + 1;
            const isReserved = reservedSeats.includes(seatNumber);
            const isSelected = selectedSeats.includes(seatNumber);
            
            let seatColor = 'bg-slate-900 border-white/15 hover:border-white/30 hover:bg-slate-800';
            if (isReserved) seatColor = 'bg-rose-950/40 border-rose-800/40 text-rose-500 cursor-not-allowed';
            if (isSelected) seatColor = 'bg-blue-600 border-blue-400 text-white shadow-[0_0_8px_rgba(59,130,246,0.5)]';

            return (
              <button
                key={seatNumber}
                disabled={isReserved}
                onClick={() => toggleSeat(seatNumber)}
                className={`w-6 h-6 rounded border text-[8px] font-bold flex items-center justify-center transition-all ${seatColor}`}
              >
                {seatNumber}
              </button>
            );
          })}
        </div>
      </div>

      {/* Seat Legend / Total */}
      <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[8px]">
        <div className="flex gap-2 text-slate-500">
          <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-800 inline-block"></span> Avail</span>
          <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block"></span> Selected</span>
        </div>
        <span className="text-white font-bold">Seats: {selectedSeats.length} | Price: ₹{selectedSeats.length * 450}</span>
      </div>
    </div>
  );
};

// 3. Budget Calculator Interactive Mockup
const BudgetCalcMockup = () => {
  const [transactions, setTransactions] = useState([
    { type: 'income', name: 'Freelance IT', amount: 5000 },
    { type: 'expense', name: 'Server Hosting', amount: 850 },
    { type: 'expense', name: 'Online Certs', amount: 1500 }
  ]);
  const [filter, setFilter] = useState('all');

  const addDemoExpense = () => {
    const expenses = [
      { name: 'API Services', amount: 450 },
      { name: 'Software Tools', amount: 600 },
      { name: 'Cloud Subs', amount: 1200 }
    ];
    const randomExp = expenses[Math.floor(Math.random() * expenses.length)];
    setTransactions([{ type: 'expense', name: randomExp.name, amount: randomExp.amount }, ...transactions]);
  };

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const netSavings = totalIncome - totalExpense;

  const filteredTransactions = transactions.filter(t => {
    if (filter === 'all') return true;
    return t.type === filter;
  });

  return (
    <div className="w-full h-full bg-slate-950 p-4 font-mono text-[10px] text-slate-300 flex flex-col justify-between">
      <div className="border-b border-white/10 pb-2 mb-2 flex items-center justify-between">
        <span className="text-[9px] font-bold text-purple-400 flex items-center gap-1">
          <BarChart3 className="w-3 h-3 text-purple-400" /> BudgetCalc Swing.jar
        </span>
        <button 
          onClick={addDemoExpense}
          className="text-[8px] bg-purple-950 border border-purple-800 text-purple-400 px-1.5 py-0.5 rounded cursor-pointer hover:bg-purple-900 transition-colors"
        >
          + Add Expense
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-1.5 mb-2 text-center text-[7.5px]">
        <div className="bg-emerald-950/20 border border-emerald-900/30 p-1 rounded">
          <span className="text-slate-500 block">INCOME</span>
          <span className="text-emerald-400 font-bold">₹{totalIncome}</span>
        </div>
        <div className="bg-rose-950/20 border border-rose-900/30 p-1 rounded">
          <span className="text-slate-500 block">SPENT</span>
          <span className="text-rose-400 font-bold">₹{totalExpense}</span>
        </div>
        <div className="bg-purple-950/20 border border-purple-900/30 p-1 rounded">
          <span className="text-slate-500 block">NET SAVINGS</span>
          <span className="text-purple-400 font-bold">₹{netSavings}</span>
        </div>
      </div>

      {/* Transaction list */}
      <div className="flex-1 space-y-1 overflow-y-auto max-h-24 pr-1">
        {filteredTransactions.slice(0, 4).map((t, idx) => (
          <div key={idx} className="flex justify-between items-center bg-white/5 p-1 rounded border border-white/5">
            <span className="truncate">{t.name}</span>
            <span className={t.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}>
              {t.type === 'income' ? '+' : '-'}₹{t.amount}
            </span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mt-2 pt-2 border-t border-white/5 flex gap-2 justify-center text-[8px]">
        <button onClick={() => setFilter('all')} className={`px-1.5 py-0.5 rounded cursor-pointer ${filter === 'all' ? 'bg-purple-900 text-white' : 'text-slate-500'}`}>ALL</button>
        <button onClick={() => setFilter('income')} className={`px-1.5 py-0.5 rounded cursor-pointer ${filter === 'income' ? 'bg-purple-900 text-white' : 'text-slate-500'}`}>INCOME</button>
        <button onClick={() => setFilter('expense')} className={`px-1.5 py-0.5 rounded cursor-pointer ${filter === 'expense' ? 'bg-purple-900 text-white' : 'text-slate-500'}`}>SPENT</button>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  const projects = portfolioData.projects;

  const getAccentColor = (accent) => {
    switch (accent) {
      case "cyan":
        return {
          glow: "bg-cyan-500/10 shadow-cyan-500/5 hover:border-cyan-500/30",
          text: "text-cyan-400",
          pill: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
        };
      case "blue":
        return {
          glow: "bg-blue-500/10 shadow-blue-500/5 hover:border-blue-500/30",
          text: "text-blue-400",
          pill: "bg-blue-500/10 text-blue-400 border-blue-500/20"
        };
      case "purple":
        return {
          glow: "bg-purple-500/10 shadow-purple-500/5 hover:border-purple-500/30",
          text: "text-purple-400",
          pill: "bg-purple-500/10 text-purple-400 border-purple-500/20"
        };
      default:
        return {
          glow: "bg-accent-primary/10 shadow-accent-primary/5 hover:border-accent-primary/30",
          text: "text-accent-secondary",
          pill: "bg-accent-primary/10 text-accent-secondary border-accent-primary/20"
        };
    }
  };

  const getMockup = (projectId) => {
    switch (projectId) {
      case "eduadapt":
        return <EduAdaptMockup />;
      case "busbooking":
        return <BusBookingMockup />;
      case "budgetcalc":
        return <BudgetCalcMockup />;
      default:
        return (
          <div className="w-full h-full bg-slate-950 p-4 font-mono text-[10px] text-slate-500 flex items-center justify-center">
            [No Preview Available]
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-bg-dark/40 border-y border-white/5">
      
      {/* Background Gradients */}
      <div className="absolute top-[40%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-accent-primary/5 glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <SectionHeading
          eyebrow="My Operations"
          title="Featured Projects"
          subtitle="A showcase of digital systems and desktop software applications built to solve problems while exploring full-stack engineering, databases, and programming fundamentals."
        />

        {/* Projects Cards Container */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((proj, idx) => {
            const colors = getAccentColor(proj.accent);
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={proj.id}
                className="glassmorphism rounded-3xl border border-white/5 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:border-white/15 hover:shadow-[0_0_50px_rgba(99,102,241,0.15)] transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                
                {/* Left/Right Column: Interactive App terminal Mockup */}
                <div className={`lg:col-span-5 h-64 lg:h-auto border-b lg:border-b-0 ${
                  isEven ? 'lg:border-r lg:order-1' : 'lg:border-l lg:order-2'
                } border-white/5 p-6 bg-black/40 flex flex-col justify-between`}>
                  
                  {/* Top Bar simulating visual code window */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block" />
                      <span className="text-[10px] text-slate-500 font-mono ml-2">sandbox-env_v1.0.2</span>
                    </div>
                    <span className="text-[10px] text-slate-600 font-mono font-medium">LIVE DEMO PANEL</span>
                  </div>

                  {/* Terminal mockup display */}
                  <div className="flex-1 rounded-2xl overflow-hidden border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.4)] relative">
                    {getMockup(proj.id)}
                  </div>
                  
                  <span className="text-[9px] text-slate-600 font-mono mt-3 text-center block">
                    * Click elements inside this sandbox area to interact.
                  </span>
                </div>

                {/* Left/Right Column: Project Information */}
                <div className={`lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div>
                    {/* Project Category */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-[0.2em] font-display ${colors.text}`}>
                        {proj.category}
                      </span>
                      <span className="text-slate-500 text-xs font-mono">0{idx + 1}.</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-tertiary transition-all duration-300">
                      {proj.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    {/* Highlights Bullets */}
                    <div className="space-y-3 mb-8">
                      {proj.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-1 ${colors.text}`} />
                          <span className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack & CTAs */}
                  <div className="border-t border-white/5 pt-6 space-y-6">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2">
                      {proj.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border ${colors.pill}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-4">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 rounded-xl text-xs font-semibold tracking-wide text-slate-200 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4" />
                        Source Code
                      </a>
                      <a
                        href={proj.demo}
                        className="px-5 py-2.5 bg-transparent border border-accent-tertiary/20 hover:border-accent-tertiary/50 hover:bg-accent-tertiary/5 rounded-xl text-xs font-semibold tracking-wide text-accent-tertiary transition-all duration-300 flex items-center gap-2 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
