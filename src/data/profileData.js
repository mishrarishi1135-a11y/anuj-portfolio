export const profileData = {
  name: "Anuj Mishra",
  title: "B.Tech Electronics & Communication Engineering Student",
  institution: "Sant Longowal Institute of Engineering and Technology (SLIET), Sangrur, Punjab",
  tagline: "Engineering student exploring the intersection of computer science, software development, data, and artificial intelligence.",
  bio: "I am a highly motivated B.Tech Electronics & Communication Engineering student at SLIET, Sangrur. Driven by a deep curiosity for technology, I actively bridge the gap between hardware fundamentals and software systems. My passion lies in software development, data analysis, machine learning, and AI, with a dedicated goal of continuously learning and building practical, real-world projects that solve complex problems.",
  
  // Highlight items for About card
  aboutCards: [
    { title: "Engineering Student", desc: "ECE at SLIET Sangrur" },
    { title: "Technology Enthusiast", desc: "Passionate about software & systems" },
    { title: "Problem Solver", desc: "Algorithmic thinking and design" },
    { title: "Continuous Learner", desc: "Constantly picking up new frameworks & concepts" }
  ],

  // Skills section categorized
  skills: {
    programming: [
      { name: "C", level: "Intermediate" },
      { name: "Java", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" }
    ],
    webDevelopment: [
      { name: "HTML & CSS", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Spring Boot", level: "Intermediate" },
      { name: "Spring AI", level: "Intermediate" },
      { name: "Responsive Web Design", level: "Advanced" }
    ],
    dataAndAI: [
      { name: "Python", level: "Advanced" },
      { name: "Data Analysis", level: "Intermediate" },
      { name: "Machine Learning", level: "Intermediate" },
      { name: "Artificial Intelligence", level: "Intermediate" }
    ],
    productivityTools: [
      { name: "VS Code", level: "Advanced" },
      { name: "IntelliJ IDEA", level: "Advanced" },
      { name: "Cursor", level: "Advanced" },
      { name: "Antigravity IDE", level: "Advanced" },
      { name: "Claude / ChatGPT / Codex", level: "Advanced" },
      { name: "Git & GitHub", level: "Advanced" }
    ]
  },

  // Education history
  education: [
    {
      degree: "B.Tech in Electronics & Communication Engineering",
      institution: "Sant Longowal Institute of Engineering and Technology (SLIET)",
      location: "Sangrur, Punjab",
      period: "2025",
      grade: "Current CGPA: 9.7",
      details: "Exploring digital systems design, semiconductors, and applying engineering fundamentals to software, data, and intelligent systems. Maintained high academic standing while actively coding."
    },
    {
      degree: "Class 12 (Senior Secondary)",
      institution: "Ratan Chand Khatri Saraswati Vidya Mandir Inter College",
      location: "India",
      period: "Passed in 2024",
      grade: "Percentage: 93.8%",
      details: "Focused on Physics, Chemistry, and Mathematics (PCM). Developed a strong analytical foundation and computational mindset."
    },
    {
      degree: "Class 10 (Secondary)",
      institution: "Ratan Chand Khatri Saraswati Vidya Mandir Inter College",
      location: "India",
      period: "Passed in 2022",
      grade: "Percentage: 92.6%",
      details: "Broad academic curriculum with exceptional performance in science and mathematics subjects."
    }
  ],

  // Visual indicators of learning path (for Learning Journey section)
  learningJourney: [
    { category: "Programming", progress: 90, color: "#3b82f6" },
    { category: "Web Development (Frontend & Backend)", progress: 85, color: "#06b6d4" },
    { category: "AI & Machine Learning", progress: 75, color: "#8b5cf6" },
    { category: "Data Science", progress: 70, color: "#10b981" },
    { category: "Agentic AI & LLMs", progress: 65, color: "#f59e0b" },
    { category: "Software Development", progress: 80, color: "#ec4899" }
  ],

  // Grid list of areas exploring
  exploring: [
    {
      title: "Software Development",
      description: "Building practical, scalable software architectures, backend APIs in Spring Boot, and responsive user interfaces.",
      iconName: "Code"
    },
    {
      title: "Artificial Intelligence",
      description: "Deepening knowledge of intelligent systems, Large Language Models (LLMs), Agentic workflows, and prompt engineering.",
      iconName: "Brain"
    },
    {
      title: "Data & Analysis",
      description: "Exploring data analytics, visual plotting, data-driven optimization, and predictive modeling using Python libraries.",
      iconName: "BarChart3"
    },
    {
      title: "Semiconductors & Digital Design",
      description: "Applying digital systems design concepts, hardware fundamentals, and analytical problem-solving to tech challenges.",
      iconName: "Cpu"
    }
  ],

  // Currently learning items
  currentlyLearning: [
    "Advanced Programming (Java & Python)",
    "Data Structures & Algorithms (DSA)",
    "Full-Stack Web Dev (React + Spring Boot + Spring AI)",
    "Databases (PostgreSQL, MongoDB)",
    "Agentic AI Workflows",
    "Digital Circuit Design & FPGA Fundamentals",
    "Software Architecture Patterns"
  ],

  // Key visual achievements/highlights
  highlights: [
    { value: "9.7", suffix: " CGPA", label: "B.Tech (ECE) Current Standing" },
    { value: "93.8", suffix: "%", label: "Class 12 Boards Performance" },
    { value: "92.6", suffix: "%", label: "Class 10 Boards Performance" },
    { value: "10+", suffix: "", label: "Engineering & Tech Skills Mastered" }
  ],

  // Contact points
  contact: {
    email: "anujmishra@example.com", // Placeholder to be replaced by actual mail
    github: "https://github.com",      // Placeholder
    linkedin: "https://linkedin.com",  // Placeholder
    adminPassword: "admin123"          // Default admin password for local CRUD dashboard
  }
};
