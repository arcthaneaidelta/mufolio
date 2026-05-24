export const siteConfig = {
  name: "Muwahhid Abbas",
  title: "Muwahhid Abbas — Technical Solutions Engineer",
  description: "Technical Solutions Engineer | AI Systems Builder | SaaS Architect. Building enterprise-grade software, AI-powered platforms, and scalable automation systems.",
  url: "https://muwahhidabbas.com",
};

export const heroData = {
  name: "Muwahhid Abbas",
  roles: [
    "Technical Solutions Engineer",
    "AI Systems Builder", 
    "SaaS Architect",
  ],
  tagline: "Engineering enterprise-grade software, AI-powered platforms, and scalable automation systems that drive real business outcomes.",
};

export const aboutData = {
  headline: "Building the future of enterprise software",
  bio: [
    "I'm a Computer Science undergraduate at Bahria University Lahore with a deep focus on building AI-powered SaaS platforms, workflow automation systems, and enterprise-grade software solutions.",
    "My engineering philosophy centers on creating products that are technically excellent, scalable by design, and immediately valuable to the businesses they serve.",
    "From architecting RAG systems and AI agents to building full-stack CRM platforms and automation engines, I bring a product-minded engineering approach to every challenge.",
  ],
  highlights: [
    { label: "Education", value: "CS @ Bahria University Lahore" },
    { label: "Focus", value: "AI Systems & Enterprise Software" },
    { label: "Approach", value: "Product-Minded Engineering" },
    { label: "Leadership", value: "Technical Team Lead" },
  ],
};

export const experienceData = [
  {
    company: "Arcthane AI",
    role: "AI Engineer & SaaS Developer",
    period: "2024 — Present",
    description: "Leading development of AI-powered SaaS platforms. Building intelligent automation systems using LLMs, RAG architectures, and custom AI agents. Architecting scalable backend systems and deploying production-ready AI solutions.",
    achievements: [
      "Architected and shipped multiple AI-powered SaaS products",
      "Built RAG systems processing thousands of documents",
      "Developed custom AI agent frameworks for workflow automation",
      "Led technical architecture decisions for production deployments",
    ],
  },
  {
    company: "Techman Solutions",
    role: "Full-Stack Engineer",
    period: "2023 — 2024",
    description: "Delivered enterprise software solutions for diverse clients. Built full-stack applications with modern frameworks, implemented complex business logic, and managed client-facing engineering relationships.",
    achievements: [
      "Delivered 5+ client projects with enterprise-grade quality",
      "Built scalable full-stack applications with React & Node.js",
      "Managed client relationships and technical requirements",
      "Implemented complex automation and workflow systems",
    ],
  },
  {
    company: "Nixxe Solutions",
    role: "Software Engineer",
    period: "2023",
    description: "Developed technical solutions for business process automation. Worked on product architecture, backend systems, and client-facing features. Gained foundational experience in enterprise software development.",
    achievements: [
      "Built business process automation tools",
      "Contributed to product architecture and system design",
      "Developed RESTful APIs and backend services",
      "Collaborated on cross-functional engineering teams",
    ],
  },
];

export const skillsData = [
  // Frontend
  { name: "Websites & Web Apps", category: "frontend", proficiency: 0.95 },
  { name: "Next.js", category: "frontend", proficiency: 0.95 },
  { name: "React", category: "frontend", proficiency: 0.95 },
  { name: "TypeScript", category: "frontend", proficiency: 0.9 },
  { name: "JavaScript", category: "frontend", proficiency: 0.95 },
  { name: "TailwindCSS", category: "frontend", proficiency: 0.9 },
  { name: "Flutter Apps", category: "frontend", proficiency: 0.85 },
  { name: "Three.js", category: "frontend", proficiency: 0.75 },
  { name: "React Three Fiber", category: "frontend", proficiency: 0.7 },
  { name: "Framer Motion", category: "frontend", proficiency: 0.85 },
  { name: "GSAP", category: "frontend", proficiency: 0.8 },
  // Backend
  { name: "Python & Django", category: "backend", proficiency: 0.9 },
  { name: "Node.js", category: "backend", proficiency: 0.9 },
  { name: "Express.js", category: "backend", proficiency: 0.85 },
  { name: "PostgreSQL", category: "backend", proficiency: 0.8 },
  { name: "MongoDB", category: "backend", proficiency: 0.8 },
  { name: "Supabase", category: "backend", proficiency: 0.85 },
  { name: "Firebase", category: "backend", proficiency: 0.8 },
  { name: "REST APIs", category: "backend", proficiency: 0.9 },
  // AI/ML
  { name: "AI Agents", category: "ai", proficiency: 0.85 },
  { name: "RAG Systems", category: "ai", proficiency: 0.85 },
  { name: "LangChain", category: "ai", proficiency: 0.8 },
  { name: "OpenAI APIs", category: "ai", proficiency: 0.9 },
  { name: "Python", category: "ai", proficiency: 0.85 },
  // Tools & Architecture
  { name: "Figma (UI/UX)", category: "tools", proficiency: 0.88 },
  { name: "Git/GitHub", category: "tools", proficiency: 0.9 },
  { name: "SaaS Architecture", category: "tools", proficiency: 0.85 },
  { name: "Workflow Automation", category: "tools", proficiency: 0.85 },
  { name: "Cloud Deployment", category: "tools", proficiency: 0.8 },
];

export const projectsData = [
  {
    title: "Demand Letter Generator Web System",
    description: "A fully responsive web application for generating professional demand letters using AI-powered processing. Features template upload, CSV data, AI chat assistant, history dashboard, and real-time status tracking.",
    tech: ["Flask", "SQLite", "HTML5", "CSS3", "JavaScript", "AOS", "Font Awesome"],
    category: "AI-Powered Document Generation",
    link: "https://github.com/arcthaneaidelta/Docx-generation-with-database",
  },
  {
    title: "Sam Solar Backend (Ultravox Voice AI)",
    description: "Example Jambonz application that connects to Ultravox Realtime API, demonstrating Voice‑AI scenarios like weather agents, call transfer, and server/client tools integration.",
    tech: ["Node.js", "Express", "Ultravox", "Jambonz", "WebSockets"],
    category: "Voice AI Platform",
    link: "https://github.com/arcthaneaidelta/Sam-Solar-Backend",
  },
  {
    title: "AI Agency Profitability & Financial Intelligence Dashboard",
    description: "AI‑driven workflow aggregating ad, sales, and time‑tracking data, calculating profitability metrics and delivering executive summaries via Google Gemini AI to Slack.",
    tech: ["n8n", "Google Gemini AI", "Slack", "Google Sheets", "Facebook Ads API", "Google Ads API", "Stripe", "Shopify", "Clockify"],
    category: "AI Financial Analytics",
    link: "https://github.com/arcthaneaidelta/AI-Agency-Profitability-Financial-Intelligence-Dashboard",
  },
  {
    title: "AI Invoicing Automation",
    description: "Automation workflow that monitors Google Drive for invoice PDFs, extracts data via AI, logs to Google Sheets, and sends Telegram billing notifications.",
    tech: ["n8n", "Anthropic Claude AI", "Google Drive", "Google Sheets", "Telegram Bot API"],
    category: "AI Invoice Processing",
    link: "https://github.com/arcthaneaidelta/Ai-Invoicing-Automation",
  },
];

export const contactData = {
  email: "muwahhid.abbas786@gmail.com",
  github: "https://github.com/arcthaneaidelta",
  linkedin: "https://www.linkedin.com/in/muwahhid-abbas-b2536b2aa",
  location: "Lahore, Pakistan",
  cta: "Let's build something extraordinary",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
    { label: "Freelance", href: "#freelance" },
  { label: "Contact", href: "#contact" },
];
