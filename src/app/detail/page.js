"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [typedText, setTypedText] = useState("");

  const allSkills = [
    "JavaScript",
    "PHP",
    "HTML5",
    "CSS3",
    "NestJS",
    "Express.js",
    "Laravel",
    "NextJS",
    "MongoDB",
    "MySQL",
    "MS SQL Server",
    "Redis",
    "Git",
    "GitHub",
    "Docker",
    "Socket.IO",
    "GraphQL",
    "Figma",
    "Stripe",
    "Cryptomus",
    "Node.js",
    "TypeScript",
    "RESTful APIs",
    "Microservices",
    "Linux",
    "Nginx",
    "Postman",
    "JWT",
    "OAuth",
  ];

  const projects = [
    {
      title: "Pixelvox AI Content Creation Platform",
      description:
        "Designed and implemented robust backend services supporting AI content generation functionalities. Developed reusable service modules and maintained comprehensive internal API documentation.",
      techStack: ["NextJS", "ShadcnUI", "MongoDB", "Web2"],
      teamSize: 3,
      link: "https://pixelvox.1ai.one",
      detailDescription:
        "A comprehensive AI-powered content creation platform that enables users to generate high-quality content using advanced machine learning models. The platform supports multiple content types including text, images, and multimedia content.",
      features: [
        "AI-powered content generation with multiple models",
        "Real-time collaboration features",
        "Advanced content management system",
        "User authentication and authorization",
        "Content analytics and reporting",
        "API rate limiting and usage tracking",
      ],
      challenges: [
        "Optimizing AI model response times",
        "Implementing efficient caching strategies",
        "Managing high concurrent user requests",
        "Ensuring content quality and consistency",
      ],
      myRole:
        "Backend Developer - Designed and implemented the core API architecture, integrated AI services, and optimized database performance.",
    },
    {
      title: "TopClick Web Service",
      description:
        "Developed RESTful APIs for authentication, order tracking, and analytics modules. Integrated payment gateways and implemented scalable data handling solutions.",
      techStack: ["Node.js", "Redis", "MongoDB", "Socket.IO", "Cryptomus", "Stripe"],
      teamSize: 6,
      link: "https://topclick.vn",
      detailDescription:
        "A comprehensive e-commerce platform providing advanced order management, real-time analytics, and secure payment processing. The platform handles thousands of transactions daily with high reliability.",
      features: [
        "Advanced order tracking system",
        "Real-time analytics dashboard",
        "Multi-payment gateway integration",
        "Inventory management system",
        "Customer support chat system",
        "Automated email notifications",
      ],
      challenges: [
        "Handling high-volume transactions",
        "Ensuring payment security compliance",
        "Real-time data synchronization",
        "Scalable microservices architecture",
      ],
      myRole:
        "Backend Developer - Led the API development, implemented payment integrations, and designed the analytics system architecture.",
    },
    {
      title: "Human Resource Management Web Application",
      description:
        "Built GraphQL APIs for complex data relationships and implemented role-based access control (RBAC) for enterprise-level HR management.",
      techStack: ["NestJS", "MongoDB", "GraphQL", "NextJS", "ShadcnUI"],
      teamSize: 3,
      link: null,
      detailDescription:
        "An enterprise-grade HR management system designed to streamline employee management, payroll processing, and performance tracking. The system supports complex organizational hierarchies and workflow approvals.",
      features: [
        "Employee lifecycle management",
        "Advanced role-based access control",
        "Payroll processing and tax calculations",
        "Performance evaluation system",
        "Leave management and approval workflows",
        "Document management and e-signatures",
      ],
      challenges: [
        "Complex data relationships modeling",
        "Implementing flexible RBAC system",
        "Ensuring data privacy compliance",
        "Optimizing GraphQL query performance",
      ],
      myRole:
        "Full-stack Developer - Designed the GraphQL schema, implemented RBAC system, and developed core HR modules.",
    },
    {
      title: "KeywordTool (Microservice Architecture)",
      description:
        "Designed scalable backend services using microservice architecture with Redis as message broker for asynchronous inter-service communication.",
      techStack: ["NestJS", "Redis", "MongoDB", "Socket.IO", "Stripe"],
      teamSize: 6,
      link: null,
      detailDescription:
        "A sophisticated SEO keyword research tool built with microservices architecture. The platform provides comprehensive keyword analysis, competitor research, and ranking tracking capabilities.",
      features: [
        "Advanced keyword research algorithms",
        "Competitor analysis and tracking",
        "Search volume and trend analysis",
        "SERP position monitoring",
        "Automated reporting system",
        "API for third-party integrations",
      ],
      challenges: [
        "Designing scalable microservices",
        "Implementing efficient data processing",
        "Managing inter-service communication",
        "Handling large datasets efficiently",
      ],
      myRole:
        "Backend Architect - Designed the microservices architecture, implemented message queuing systems, and optimized data processing pipelines.",
    },
  ];

  // Loading effect
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadingTimer);
    };
  }, []);

  // Typing effect
  useEffect(() => {
    if (!isLoading) {
      const text = "Backend Developer";
      let i = 0;
      const typeTimer = setInterval(() => {
        if (i < text.length) {
          setTypedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typeTimer);
        }
      }, 100);
      return () => clearInterval(typeTimer);
    }
  }, [isLoading]);

  // Scroll handling
  useEffect(() => {
    if (!isLoading) {
      const handleScroll = () => {
        const sections = ["home", "about", "experience", "skills", "projects", "contact"];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isLoading]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Loading Screen Component
  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-2 bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 via-cyan-400 via-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
            UYEN PHAM
          </h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-white/80 font-light tracking-wide"
          >
            Backend Developer
          </motion.p>
        </motion.div>

        <div className="flex justify-center space-x-2 mb-6">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{ width: `${loadingProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/60 text-sm font-mono"
        >
          Loading amazing things... {Math.round(loadingProgress)}%
        </motion.p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Loading Screen */}
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/25 backdrop-blur-md border-b border-white/20 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
              Uyen Pham
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                {["home", "about", "experience", "skills", "projects", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors duration-200 font-medium ${
                      activeSection === section ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download CV
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            >
              <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white/90 backdrop-blur-md rounded-2xl mx-4 mb-4 overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {["home", "about", "experience", "skills", "projects", "contact"].map((section, index) => (
                    <motion.button
                      key={section}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(section)}
                      className={`block w-full text-left capitalize transition-colors duration-200 font-medium py-2 ${
                        activeSection === section ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                      }`}
                    >
                      {section}
                    </motion.button>
                  ))}
                  <motion.a
                    href="/cv.pdf"
                    download
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full py-3 text-center font-medium mt-4"
                  >
                    Download CV
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: isLoading ? 3.5 : 0 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isLoading ? 4 : 0.5 }}
              className="text-purple-600 font-medium text-sm sm:text-base mb-4 tracking-wide uppercase"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-cyan-500 via-green-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                backgroundSize: "400% 400%",
                animation: "gradient 15s ease infinite",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              PHAM THI UYEN
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isLoading ? 4.5 : 1 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 font-light"
            >
              {typedText}
              <span className="animate-pulse">|</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isLoading ? 5 : 1.5 }}
              className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Passionate about building scalable backend systems and RESTful APIs. Experienced in Node.js, NestJS, and
              microservices architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isLoading ? 5.5 : 2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 rounded-full font-medium hover:bg-white/30 transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: isLoading ? 6 : 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
        >
          <div className="flex flex-col items-center">
            <p className="text-sm mb-2 font-mono">Scroll down</p>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-gray-300 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Introduction</h3>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Hello! I'm Uyen, a passionate Backend Developer with a strong foundation in building scalable web
                    applications and robust API systems. My journey in technology began during my studies at FPT
                    Polytechnic College, where I discovered my love for server-side development and database
                    architecture.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I specialize in Node.js ecosystem, particularly with NestJS and Express.js frameworks. My experience
                    spans across various domains including AI content platforms, e-commerce solutions, HR management
                    systems, and microservices architecture.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                    staying updated with the latest industry trends. I believe in writing clean, maintainable code and
                    creating solutions that make a real impact.
                  </p>
                </motion.div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  {[
                    { number: "1+", label: "Years Experience", color: "purple" },
                    { number: "10+", label: "Projects Completed", color: "pink" },
                    { number: "5+", label: "Technologies Mastered", color: "blue" },
                    { number: "100%", label: "Client Satisfaction", color: "cyan" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-sm text-center cursor-pointer hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`text-3xl font-bold text-${stat.color}-500 mb-1`}>{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Backend Development",
                  description:
                    "Expert in Node.js, NestJS, Express.js. Building RESTful APIs, GraphQL endpoints, and microservices architecture.",
                  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "Database & Architecture",
                  description:
                    "Experienced with MongoDB, MySQL, Redis. Database design, optimization, and data modeling expertise.",
                  icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Integration & DevOps",
                  description:
                    "Payment gateway integration, third-party APIs, Docker containerization, and Git workflows.",
                  icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                  gradient: "from-green-500 to-yellow-500",
                },
              ].map((competency, index) => (
                <motion.div
                  key={competency.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${competency.gradient} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={competency.icon} />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{competency.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{competency.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 via-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent">
              Experience & Education
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400 transform md:-translate-x-1/2"></div>

              {/* Work Experience */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12 flex items-center"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-purple-600 font-medium text-sm mb-2">April 2024 - Present</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Backend Developer (Fresher)</h3>
                    <h4 className="text-lg text-purple-500 mb-4">MST Entertainment</h4>

                    <div className="space-y-2 mb-4">
                      {[
                        "Developed RESTful APIs using Express.js and NestJS",
                        "Implemented scalable microservices architecture",
                        "Integrated payment gateways (Stripe, Cryptomus)",
                        "Optimized database queries (40% improvement)",
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-gray-600">{item}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {["Node.js", "NestJS", "MongoDB", "Redis"].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-12 flex items-center md:flex-row-reverse"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="ml-12 md:ml-0 md:w-5/12 md:pl-8">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-blue-600 font-medium text-sm mb-2">Aug 2022 - Jan 2025</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Bachelor's in Information Technology</h3>
                    <h4 className="text-lg text-blue-500 mb-4">FPT Polytechnic College</h4>

                    <div className="space-y-2 mb-4">
                      {[
                        "Graduated with distinction - GPA: 3.56/4.0",
                        "Specialized in Software Engineering",
                        "Capstone project on Microservices Architecture",
                        "Dean's List - Fall 2024",
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-gray-600">{item}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {["Java", "C#", "Database Design", "Algorithms"].map((subject) => (
                        <span key={subject} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-cyan-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm"
            >
              <p className="text-gray-600 text-center mb-8 text-lg">Technologies and tools I work with</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {allSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-white to-gray-50 hover:from-purple-100 hover:via-pink-100 hover:to-blue-100 rounded-xl p-3 text-center border border-gray-200 hover:border-purple-300 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-sm font-medium text-gray-700 group-hover:text-purple-700 transition-colors duration-200">
                      {skill}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <p className="text-gray-500 text-sm font-mono">Always learning and expanding my skill set</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-r from-blue-50/50 to-green-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-purple-300/50 transition-all duration-300 group shadow-sm hover:shadow-xl cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-500 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span>Team Size: {project.teamSize}</span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded text-xs text-purple-700 border border-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Details
                    </motion.button>

                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white/50 backdrop-blur-sm border border-purple-200 text-purple-600 rounded-xl text-sm font-medium hover:bg-white/70 hover:border-purple-300 transition-all duration-300"
                      >
                        <span>Live Demo</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-orange-500 via-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto px-4">
              I'm always interested in new opportunities and challenging projects. Let's discuss how we can bring your
              ideas to life.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  title: "Email",
                  content: "thiuyen1132004@gmail.com",
                  href: "mailto:thiuyen1132004@gmail.com",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  title: "Phone",
                  content: "+84 346 795 326",
                  href: "tel:+84346795326",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  title: "Location",
                  content: "My Dinh, Nam Tu Liem\nHanoi, Vietnam",
                  href: null,
                  gradient: "from-green-500 to-yellow-500",
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={contact.icon} />
                    </svg>
                  </div>
                  <h3 className="text-gray-800 font-semibold mb-2">{contact.title}</h3>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-purple-500 hover:text-purple-600 transition-colors duration-200 break-all"
                    >
                      {contact.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 whitespace-pre-line">{contact.content}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://uyenlun.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Visit My Portfolio
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200/50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 font-mono"
          >
            © 2025 Pham Thi Uyen. Built with Next.js and ❤️
          </motion.p>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedProject.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
                      <span>Team Size: {selectedProject.teamSize}</span>
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 underline"
                        >
                          Visit Live Site →
                        </a>
                      )}
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm text-purple-700 border border-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Project Overview</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.detailDescription}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">My Role & Responsibilities</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.myRole}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Technical Challenges</h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{challenge}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  {selectedProject.link && (
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-xl font-medium text-center shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Live Project
                    </motion.a>
                  )}
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-all duration-300"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: typeof window !== "undefined" && window.scrollY > 300 ? 1 : 0,
          scale: typeof window !== "undefined" && window.scrollY > 300 ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </motion.button>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        html {
          scroll-behavior: smooth;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(168, 85, 247, 0.5) rgba(243, 244, 246, 0.5);
        }

        *::-webkit-scrollbar {
          width: 6px;
        }

        *::-webkit-scrollbar-track {
          background: rgba(243, 244, 246, 0.5);
        }

        *::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 3px;
        }

        *::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #db2777);
        }
      `}</style>
    </div>
  );
}
