export const portfolioData = {
  personalInfo: {
    name: "Chiyamala Devi C",
    title: "Aspiring ServiceNow Developer",
    subtitles: [
      "Aspiring ServiceNow Developer",
      "IT Student @ KRCE",
      "Java & Web Developer",
      "Cloud & AI Learner"
    ],
    headline: "Building practical digital solutions with code, curiosity, and consistency.",
    location: "Jayankondam, Tamil Nadu, India",
    email: "chiyamaladevi9790@gmail.com",
    phone: "7305236533",
    linkedin: "https://www.linkedin.com/in/chiyamaladevi-chandrasekaran",
    github: "https://github.com/Chiyamaladevi9790/",
    resumeUrl: "/resume.pdf",
    college: "K. Ramakrishnan College of Engineering",
    cgpa: "8.48",
    educationPeriod: "2023 – 2027",
    department: "B.Tech Information Technology",
    aboutSummary: `I'm an Information Technology student passionate about ServiceNow, Java, web development, cloud fundamentals, and building practical applications that solve real problems. I enjoy learning by creating projects, exploring new technologies, and growing into a strong software professional.`,
    aboutDetail1: `I’m Chiyamala Devi, an Information Technology student currently building my path in software development through projects, certifications, and hands-on learning. My interests span ServiceNow, Java, web development, cloud fundamentals, and problem-solving.`,
    aboutDetail2: `I enjoy taking concepts from the classroom and turning them into practical digital solutions—whether that means building web applications, working on academic projects, or exploring enterprise platforms and cloud technologies.`,
    aboutDetail3: `My goal is to grow into a developer who can contribute to real business solutions, user-focused products, and scalable systems with both technical strength and a mindset for continuous learning.`
  },
  skills: [
    {
      category: "Programming",
      description: "Core coding languages and backend logic development.",
      items: [
        { name: "Java", level: "Advanced", icon: "Code2" },
        { name: "JavaScript", level: "Intermediate", icon: "Code2" },
        { name: "SQL", level: "Intermediate", icon: "Database" },
        { name: "OOP Fundamentals", level: "Advanced", icon: "Cpu" }
      ]
    },
    {
      category: "Web Development",
      description: "Building responsive, modern, and interactive front-ends.",
      items: [
        { name: "HTML5 / CSS3", level: "Advanced", icon: "Layout" },
        { name: "React.js", level: "Intermediate", icon: "Atom" },
        { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
        { name: "Responsive UI", level: "Advanced", icon: "Smartphone" }
      ]
    },
    {
      category: "Platform & Cloud",
      description: "ServiceNow administration and cloud platform fundamentals.",
      items: [
        { name: "ServiceNow", level: "Intermediate (CSA)", icon: "Workflow" },
        { name: "Microsoft Azure", level: "Intermediate (AZ-900)", icon: "Cloud" },
        { name: "AWS Cloud Basics", level: "Basic", icon: "CloudLightning" },
        { name: "REST APIs", level: "Intermediate", icon: "Link" }
      ]
    },
    {
      category: "Tools & Collaboration",
      description: "Industry-standard development workflows and teamwork.",
      items: [
        { name: "Git / GitHub", level: "Advanced", icon: "GitBranch" },
        { name: "Teamwork", level: "Advanced", icon: "Users" },
        { name: "Communication", level: "Advanced", icon: "MessageSquare" },
        { name: "Problem Solving", level: "Advanced", icon: "Brain" }
      ]
    }
  ],
  projects: [
    {
      id: "eduadapt",
      title: "EduAdapt — Adaptive Learning Platform",
      category: "MERN Stack Application",
      description: "A full-stack MERN-based adaptive learning platform designed to personalize educational experiences through progress tracking, quiz-driven workflows, and smart course recommendations.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      features: [
        "Personalized learning dashboard and progress analytics.",
        "Interactive quiz system that adapts difficulty dynamically.",
        "Secure user authentication (JWT) and modular course architecture."
      ],
      github: "https://github.com/Chiyamaladevi9790/",
      demo: "#",
      accent: "cyan"
    },
    {
      id: "busbooking",
      title: "Bus Ticket Booking System",
      category: "Web Development",
      description: "A web-based bus ticket booking application featuring real-time seat availability visualization, secure booking flows, and an intuitive ticket management interface.",
      techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      features: [
        "Interactive real-time seat selection layout.",
        "Secure transaction flow and automated booking confirmations.",
        "Admin portal for managing schedules, buses, and user tickets."
      ],
      github: "https://github.com/Chiyamaladevi9790/",
      demo: "#",
      accent: "blue"
    },
    {
      id: "budgetcalc",
      title: "Budget Calculator",
      category: "Java Desktop Application",
      description: "A desktop-based financial planning and budget management application using Java Swing. Allows users to record, monitor, and visualize income and expenses.",
      techStack: ["Java", "Java Swing", "AWT", "File I/O"],
      features: [
        "Robust income and expense tracking with categorized reports.",
        "Interactive, lightweight desktop interface built with Swing.",
        "Local data persistence and month-over-month financial analysis."
      ],
      github: "https://github.com/Chiyamaladevi9790/",
      demo: "#",
      accent: "purple"
    }
  ],
  experience: [
    {
      role: "Web Development Intern",
      company: "Skillcraft Technology",
      period: "1 Month Internship",
      description: "Completed a web development internship focused on front-end engineering and design. Developed modern responsive web applications and collaborated on user interface design and coding workflows.",
      highlights: [
        "Built responsive web pages using HTML5, CSS3, and JavaScript.",
        "Learned collaborative software development workflows and Git best practices.",
        "Optimized web layout performance for mobile devices and high-definition screens."
      ],
      pdfUrl: "/certifications/intern-web.pdf"
    },
    {
      role: "AI Intern",
      company: "Skillintern Bangalore",
      period: "1 Month Internship",
      description: "Completed a hands-on AI internship covering core machine learning concepts, Python implementation, data preprocessing, and exploratory data analysis (EDA) workflows.",
      highlights: [
        "Implemented basic machine learning models using Python and popular data science libraries.",
        "Gained practical exposure to data cleansing, exploratory analysis, and feature engineering.",
        "Explored GenAI fundamentals, LLM prompting strategies, and enterprise AI applications."
      ],
      pdfUrl: "/certifications/intern-ai.pdf"
    }
  ],
  certifications: [
    {
      title: "ServiceNow Certified System Administrator",
      issuer: "ServiceNow",
      category: "ServiceNow",
      pdfUrl: "/certifications/csa.pdf",
      verifyLink: "https://nowlearning.servicenow.com/",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30"
    },
    {
      title: "Welcome to ServiceNow",
      issuer: "ServiceNow",
      category: "ServiceNow",
      pdfUrl: "https://nowlearning.servicenow.com/",
      verifyLink: "https://nowlearning.servicenow.com/",
      color: "from-emerald-500/20 to-green-500/10 border-emerald-500/30"
    },
    {
      title: "NPTEL Java Programming",
      issuer: "NPTEL / SWAYAM",
      category: "Java",
      pdfUrl: "/certifications/cert-java.pdf",
      verifyLink: "https://nptel.ac.in/",
      color: "from-amber-500/20 to-orange-500/10 border-amber-500/30"
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      category: "Cloud",
      pdfUrl: "/certifications/cert-azure.pdf",
      verifyLink: "https://learn.microsoft.com/",
      color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30"
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      category: "Cloud",
      pdfUrl: "/certifications/cert-aws.pdf",
      verifyLink: "https://aws.amazon.com/training/",
      color: "from-orange-500/20 to-yellow-500/10 border-orange-500/30"
    },
    {
      title: "Generative AI Certification",
      issuer: "Google / Cognitive Class",
      category: "AI",
      pdfUrl: "/certifications/cert-genai.pdf",
      verifyLink: "https://cognitiveclass.ai/",
      color: "from-pink-500/20 to-rose-500/10 border-pink-500/30"
    },
    {
      title: "Sawit AI Learnathon",
      issuer: "Sawit AI",
      category: "AI",
      pdfUrl: "/certifications/cert-ai.pdf",
      verifyLink: "#",
      color: "from-violet-500/20 to-fuchsia-500/10 border-violet-500/30"
    },
    {
      title: "MongoDB Certification",
      issuer: "MongoDB Academy",
      category: "Database",
      pdfUrl: "https://learn.mongodb.com/",
      verifyLink: "https://learn.mongodb.com/",
      color: "from-green-500/20 to-emerald-500/10 border-green-500/30"
    }
  ],
  education: {
    degree: "B.Tech Information Technology",
    college: "K. Ramakrishnan College of Engineering",
    location: "Tiruchirappalli, Tamil Nadu",
    period: "2023 – 2027",
    cgpa: "8.48",
    highlights: [
      "Consistent Academic Performance: CGPA of 8.48",
      "Special Interest in ServiceNow Development & Cloud Computing",
      "Active participant in technical presentations and hackathons",
      "2nd Prize in State/College level Project Showcase / Technical Workshop"
    ]
  }
};
