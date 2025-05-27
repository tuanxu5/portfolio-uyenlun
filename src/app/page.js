// pages/index.js
"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Loading timer
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadingTimer);
    };
  }, []);

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

  // Loading Screen Component

  return (
    <>
      <Head>
        <title>Pham Thi Uyen - Backend Developer Portfolio</title>
        <meta
          name="description"
          content="Backend Developer specializing in Node.js, NestJS, and scalable web applications"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Show loading screen when loading */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
          <div className="w-80 h-2 bg-gray-200/50 rounded-full mx-auto mb-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-300 via-cyan-300 to-green-300 rounded-full transition-all duration-100"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Main content - only show when not loading */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
        >
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md mb-4 overflow-hidden shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                >
                  UynLun
                </motion.div>

                <div className="hidden md:flex items-center space-x-8">
                  <div className="flex space-x-10">
                    {["home", "about", "experience", "skills", "projects", "contact"].map((section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`capitalize transition-colors duration-200 font-medium cursor-pointer text-sm ${
                          activeSection === section ? "text-purple-600" : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {section}
                      </button>
                    ))}
                  </div>

                  <a
                    href="https://cv.uyenlun.com/"
                    target="_blank"
                    className="px-5 py-3.5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 border border-purple-200 text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
                  >
                    Curriculum Vitae
                  </a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-600 hover:text-gray-900 p-2"
                  >
                    {isMobileMenuOpen ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile menu */}
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50  rounded-xl"
                >
                  <div className="px-4 py-6 space-y-4 rounded-2xl">
                    {["home", "about", "experience", "skills", "projects", "contact"].map((section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`block w-full text-left capitalize transition-colors duration-200 font-medium py-2 ${
                          activeSection === section ? "text-purple-600" : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {section}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </nav>

          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  PHAM THI UYEN
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">Backend Developer</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Passionate about building scalable backend systems and RESTful APIs. Experienced in Node.js, NestJS,
                  and microservices architecture.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="px-8 py-3.5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 border border-purple-200 font-medium hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-1 hover:scale-101"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-3.5 bg-gradient-to-r from-white to-gray-50 border border-purple-200 rounded-full text-purple-600 font-medium hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-300 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
                  >
                    Get In Touch
                  </button>
                </div>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mt-10 mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  About Me
                </h2>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Introduction</h3>
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Hello! I&apos;m Uyen, a passionate Backend Developer with a strong foundation in building
                        scalable web applications and robust API systems. My journey in technology began during my
                        studies at FPT Polytechnic College, where I discovered my love for server-side development and
                        database architecture.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        I specialize in Node.js ecosystem, particularly with NestJS and Express.js frameworks. My
                        experience spans across various domains including AI content platforms, e-commerce solutions, HR
                        management systems, and microservices architecture. I&apos;m always eager to learn new
                        technologies and take on challenging projects.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source
                        projects, and staying updated with the latest industry trends. I believe in writing clean,
                        maintainable code and creating solutions that make a real impact.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Backend Development",
                      description:
                        "Expert in Node.js, NestJS, Express.js. Building RESTful APIs, GraphQL endpoints, and microservices architecture.",
                      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                      gradient: "from-purple-300 to-pink-300",
                    },
                    {
                      title: "Database & Architecture",
                      description:
                        "Experienced with MongoDB, MySQL, Redis. Database design, optimization, and data modeling expertise.",
                      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
                      gradient: "from-blue-300 to-cyan-300",
                    },
                    {
                      title: "Integration & DevOps",
                      description:
                        "Payment gateway integration, third-party APIs, Docker containerization, and Git workflows.",
                      icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                      gradient: "from-green-300 to-yellow-300",
                    },
                    {
                      title: "Learning & Growth",
                      description:
                        "Continuously learning new technologies like cloud services (AWS, Google Cloud), advanced database concepts, and modern development practices. Currently exploring AI/ML integration in backend systems.",
                      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                      gradient: "from-indigo-300 to-purple-300",
                    },
                    {
                      title: "Career Aspirations",
                      description:
                        "Aiming to become a Senior Backend Engineer, contributing to large-scale systems and mentoring junior developers. Interested in system architecture, performance optimization, and leading technical teams.",
                      icon: "M13 10V3L4 14h7v7l9-11h-7z",
                      gradient: "from-orange-300 to-red-300",
                    },
                    {
                      title: "Values & Approach",
                      description:
                        "Believes in clean code, thorough testing, and comprehensive documentation. Values collaboration, continuous improvement, and building solutions that solve real-world problems effectively.",
                      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                      gradient: "from-pink-300 to-rose-300",
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
          <section
            id="experience"
            className="py-20 px-4 bg-gradient-to-r from-pink-50/30 via-purple-50/30 via-blue-50/30 to-cyan-50/30"
          >
            <div className="max-w-6xl mx-auto mt-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 via-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent">
                  Experience & Education
                </h2>

                <div className="space-y-8">
                  {/* Work Experience */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full mr-4"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">Work Experience</h3>
                    </div>

                    <div className="border-l-2 border-purple-200 pl-6 ml-1">
                      <div className="mb-8">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Backend Developer (Fresher)</h4>
                            <h5 className="text-lg text-purple-500 mb-2">MST Entertainment</h5>
                            <p className="text-gray-600 text-sm mb-4">Hanoi, Vietnam</p>
                          </div>
                          <div className="text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full text-sm">
                            April 2024 - Present
                          </div>
                        </div>

                        <div className="grid gap-3 mb-4">
                          {[
                            "Developed and optimized RESTful APIs using Express.js and NestJS framework for multiple client projects",
                            "Integrated MongoDB for efficient data storage and management across 4+ production applications",
                            "Implemented scalable microservices architecture with Redis as message broker for inter-service communication",
                            "Collaborated with frontend developers to ensure seamless API integration and optimal data flow",
                            "Maintained comprehensive API documentation and conducted code reviews for team knowledge sharing",
                            "Integrated payment gateways (Stripe, Cryptomus) and implemented secure transaction processing",
                            "Optimized database queries resulting in 40% improvement in application response times",
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 text-sm">{item}</p>
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {[
                            "Node.js",
                            "NestJS",
                            "Express.js",
                            "MongoDB",
                            "Redis",
                            "Socket.IO",
                            "GraphQL",
                            "Stripe",
                            "Cryptomus",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-lg text-xs text-purple-700 border border-purple-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 rounded-full mr-4"></div>
                      <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
                    </div>

                    <div className="border-l-2 border-blue-200 pl-6 ml-1">
                      <div className="mb-6">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">
                              Bachelor&apos;s in Information Technology
                            </h4>
                            <h5 className="text-lg text-blue-500 mb-2">FPT Polytechnic College</h5>
                            <p className="text-gray-600 text-sm mb-4">Hanoi, Vietnam</p>
                          </div>
                          <div className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full text-sm">
                            Aug 2022 - Jan 2025
                          </div>
                        </div>

                        <div className="grid gap-3 mb-4">
                          {[
                            "Graduated with distinction - GPA: 3.56/4.0",
                            "Specialized in Software Engineering and Database Management",
                            "Completed capstone project on Microservices Architecture with Node.js",
                            "Active member of Programming Club and participated in coding competitions",
                            "Relevant coursework: Data Structures & Algorithms, Database Design, Web Development, Software Engineering",
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 text-sm">{item}</p>
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {[
                            "Java",
                            "C#",
                            "Database Design",
                            "Software Engineering",
                            "Web Development",
                            "Data Structures",
                            "Algorithms",
                          ].map((subject) => (
                            <span
                              key={subject}
                              className="px-2 py-1 bg-gradient-to-r from-blue-100 via-cyan-100 to-green-100 rounded-lg text-xs text-blue-700 border border-blue-200"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Skills Section */}
          <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto mt-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-cyan-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
                  Technical Skills
                </h2>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm">
                  <p className="text-gray-600 text-center mb-8 text-lg">Technologies and tools I work with</p>

                  <div className="flex flex-wrap justify-start gap-3">
                    {allSkills.map((skill, index) => (
                      <motion.button
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        // whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3.5 bg-gradient-to-r hover:from-purple-100 hover:via-pink-100 hover:to-blue-100 rounded-full text-sm font-medium hover:text-purple-700 border  border-gray-400 hover:border-purple-300 hover:shadow-lg transition-all duration-250 cursor-pointer"
                      >
                        {skill}
                      </motion.button>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">Always learning and expanding my skill set</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Projects Section */}
          <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto mt-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-purple-300/50 transition-all duration-300 group shadow-sm hover:shadow-md"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-500 transition-colors duration-200">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <span>Team Size: {project.teamSize}</span>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                      {/* <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            // className="px-2 py-1 bg-gradient-to-r from-blue-100 via-cyan-100 to-green-100 rounded-lg text-xs text-blue-700 border border-blue-200"
                            className="px-2 py-1 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-lg text-xs text-purple-700 border border-purple-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div> */}

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-200 rounded-xl text-sm font-medium hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
                        >
                          View Details
                        </button>

                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-white to-gray-50 border border-purple-200 text-purple-600 rounded-xl text-sm font-medium hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:border-purple-300 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1"
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
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
          <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center mt-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-orange-500 via-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Let&apos;s Work Together
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto px-4">
                  I&apos;m always interested in new opportunities and challenging projects. Let&apos;s discuss how we
                  can bring your ideas to life.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {[
                    {
                      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                      title: "Email",
                      content: "thiuyen1132004@gmail.com",
                      href: "mailto:thiuyen1132004@gmail.com",
                      gradient: "from-indigo-300 to-purple-300",
                    },
                    {
                      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                      title: "Phone",
                      content: "+84 346 795 326",
                      href: "tel:+84346795326",
                      gradient: "from-blue-300 to-cyan-300",
                    },
                    {
                      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                      title: "Location",
                      content: "My Dinh, Nam Tu Liem\nHanoi, Vietnam",
                      href: null,
                      gradient: "from-orange-300 to-red-300",
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                          className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 break-all"
                        >
                          {contact.content}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 break-all">
                          {contact.content}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
          {/* Footer */}
          <footer className="py-8 px-4 border-t border-gray-200">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-gray-500">❤️&nbsp;Portfolio UyenLun❤️</p>
            </div>
          </footer>
          {/* Project Detail Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6">
                  {/* Modal Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedProject.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
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
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-gray-600 p-2 cursor-pointer"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg text-sm text-purple-700 border border-purple-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.detailDescription}</p>
                  </div>

                  {/* My Role */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">My Role & Responsibilities</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.myRole}</p>
                  </div>

                  {/* Features */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Technical Challenges</h4>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border border-purple-200 rounded-xl font-medium hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 text-center"
                      >
                        View Live Project
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 bg-gradient-to-r from-white to-gray-50 cursor-pointer border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-500 text-center"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(168, 85, 247, 0.5) rgba(243, 244, 246, 0.5);
        }

        *::-webkit-scrollbar {
          width: 8px;
        }

        *::-webkit-scrollbar-track {
          background: rgba(243, 244, 246, 0.5);
        }

        *::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 4px;
        }

        *::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
      `}</style>
    </>
  );
}
