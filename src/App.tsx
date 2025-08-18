import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Globe, Smartphone, Brain, Terminal } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && true) || (savedTheme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    // { name: 'Projects', id: 'projects' },
    // { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const skills = [
    { name: 'C++', icon: Code },
    { name: 'Python', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'React', icon: Globe }, 
    { name: 'Node.js', icon: Terminal },
    { name: 'AWS', icon: Database },
    { name: 'Machine Learning', icon: Brain },
    { name: 'Git', icon: Github } 
  ];

  const projects = [
    {
      title: 'FusionAll',
      description: 'Built a collaborative learning platform using Firebase and React.js, featuring real-time chat, group discussions, file sharing, and a blogging system to enhance peer-to-peer learning.',
      tech: ['Firebase', 'React.js','Node.js'],
      live: 'https://fusionall.vercel.app',
      image: '/f.png'
    },
    {
      title: 'Cultural India',
      description: 'Designed an interactive website showcasing Indian heritage and culture, featuring a festival/heritage map and immersive virtual tours of monuments, using Unity, Blender, Metashape, and C#.',
      tech: ['Unity', 'Blender', 'Metashape', 'C#'],
      live: 'https://Visioneers.vercel.app',
      image: '/v.png'
    },
    {
      title: 'Event Management Platform',
      description: 'Developed a web and mobile platform for university fest/event management using ASP.NET Core and AWS tools, enabling seamless event registration, QR-based attendance tracking, real-time communication, and efficient archival of past events.',
      tech: ['ASP.NET Core', 'AWS'],
      live: 'https://evntset-web.vercel.app',
      image: '/e.png'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 
            ? 'bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl shadow-2xl dark:shadow-gray-800/50 border-b border-white/30 dark:border-gray-700/30' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
                Jay Patel
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/30 dark:hover:bg-gray-800/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 font-medium backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:border-white/40 dark:hover:border-gray-600/40"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 hover:scale-110 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:border-white/40 dark:hover:border-gray-600/40"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 hover:scale-110 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:border-white/40 dark:hover:border-gray-600/40"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full bg-white/10 dark:bg-gray-800/10 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300 hover:scale-110 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:border-white/40 dark:hover:border-gray-600/40"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/15 dark:bg-gray-900/15 backdrop-blur-xl border-t border-white/30 dark:border-gray-700/30 shadow-2xl dark:shadow-gray-800/50">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block px-3 py-2 text-left w-full bg-white/5 dark:bg-gray-800/5 hover:bg-white/25 dark:hover:bg-gray-800/25 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-xl border border-white/10 dark:border-gray-700/10 hover:border-white/30 dark:hover:border-gray-600/30"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="hero" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 opacity-50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Jay Patel
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-600 dark:text-gray-300">
                Computer Science Engineer | Developer
              </h2>
              <p className="text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Third-year Computer Science student at Charotar University of Science and Technology (CHARUSAT)
                with experience in full-stack development, machine learning, and mobile app development.
                Passionate about creating innovative solutions and contributing to open-source projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white rounded-full font-semibold hover:shadow-2xl hover:from-blue-700/90 hover:to-purple-700/90 transform hover:scale-110 transition-all duration-300 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:border-white/40 dark:hover:border-gray-600/40"
                  >
                    View My Work
                  </button>
                <button onClick={() => window.open("/Resume.pdf", "_blank")} className="px-8 py-4 bg-white/10 dark:bg-gray-800/10 border border-blue-600/50 dark:border-blue-400/50 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600/20 hover:text-blue-700 dark:hover:bg-blue-400/20 dark:hover:text-blue-300 hover:shadow-xl transition-all duration-300 flex items-center gap-2 backdrop-blur-xl hover:scale-110 hover:border-blue-600/70 dark:hover:border-blue-400/70">
                  <Download size={18} />
                  See Resume
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a third-year Computer Engineering student at CHARUSAT with a passion for creating 
                  innovative technology solutions. My experience spans full-stack development, machine learning, 
                  and mobile application development, with hands-on experience in modern frameworks and tools.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  With a strong foundation in programming languages like Python, JavaScript, and Dart, I've 
                  worked on diverse projects ranging from web applications to AI-powered solutions. I'm always 
                  eager to learn new technologies and contribute to meaningful projects that solve real-world problems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 dark:bg-gray-700/10 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20 dark:border-gray-600/20 hover:bg-white/20 dark:hover:bg-gray-700/20 hover:border-white/40 dark:hover:border-gray-600/40 transition-all duration-300 hover:scale-105">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Developer</span>
                  </div>
                  <div className="bg-white/10 dark:bg-gray-700/10 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20 dark:border-gray-600/20 hover:bg-white/20 dark:hover:bg-gray-700/20 hover:border-white/40 dark:hover:border-gray-600/40 transition-all duration-300 hover:scale-105">
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">ML Enthusiast</span>
                  </div>
                  <div className="bg-white/10 dark:bg-gray-700/10 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20 dark:border-gray-600/20 hover:bg-white/20 dark:hover:bg-gray-700/20 hover:border-white/40 dark:hover:border-gray-600/40 transition-all duration-300 hover:scale-105">
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">Problem Solver</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl p-8 shadow-2xl">
                  <img 
                    src="https://avatars.githubusercontent.com/u/161121916?v=4"
                    alt="Profile"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white/10 dark:bg-gray-800/10 p-6 rounded-2xl backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:border-white/40 dark:hover:border-gray-600/40 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/10 dark:bg-gray-700/10 rounded-2xl backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-700/20 hover:border-white/40 dark:hover:border-gray-600/40 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-600/20 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-600/30 dark:border-blue-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 px-4 py-2 bg-white/10 dark:bg-gray-800/10 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:border-white/40 dark:hover:border-gray-600/40"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 px-4 py-2 bg-white/10 dark:bg-gray-800/10 rounded-full text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:border-white/40 dark:hover:border-gray-600/40"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        {/* <section id="experience" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience & Education
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              
              <div className="space-y-12">
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right pr-8">
                    <div className="bg-white/10 dark:bg-gray-800/10 p-6 rounded-2xl backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:border-white/40 dark:hover:border-gray-600/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <h3 className="text-xl font-bold mb-2">Frontend Developer Intern</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Tech Innovations Ltd.</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">June 2024 - August 2024</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Developed responsive web applications using React.js and worked on mobile app development 
                        using Flutter. Collaborated with the design team to implement UI/UX improvements.
                      </p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white/30 dark:border-gray-900/30 backdrop-blur-sm"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="w-5/12"></div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white/30 dark:border-gray-900/30 backdrop-blur-sm"></div>
                  </div>
                  <div className="w-5/12 pl-8">
                    <div className="bg-white/10 dark:bg-gray-800/10 p-6 rounded-2xl backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:border-white/40 dark:hover:border-gray-600/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <h3 className="text-xl font-bold mb-2">B.Tech Computer Engineering</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">Charotar University of Science and Technology (CHARUSAT)</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">2022 - Present</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Currently in third year with CGPA 8.7/10. Active member of the coding club 
                        and participated in multiple hackathons including Smart India Hackathon.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right pr-8">
                    <div className="bg-white/10 dark:bg-gray-800/10 p-6 rounded-2xl backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:border-white/40 dark:hover:border-gray-600/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                      <h3 className="text-xl font-bold mb-2">Freelance Web Developer</h3>
                      <p className="text-green-600 dark:text-green-400 font-semibold mb-2">Self-Employed</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">2023 - Present</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Built responsive websites for local businesses and startups. 
                        Specialized in React, Node.js, and modern web technologies.
                      </p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white/30 dark:border-gray-900/30 backdrop-blur-sm"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="mailto:jay.patel@charusat.edu.in"
                className="flex items-center space-x-4 bg-white/10 dark:bg-gray-800/10 px-8 py-4 rounded-2xl backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:border-white/40 dark:hover:border-gray-600/40 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">pateljay091105@gmail.com</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/jay-patel-548160283/"
                className="flex items-center space-x-4 bg-white/10 dark:bg-gray-800/10 px-8 py-4 rounded-2xl backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:border-white/40 dark:hover:border-gray-600/40 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-300">Jay Patel</p>
                </div>
              </a>
              
              <a
                href="https://github.com/Jay9115"
                className="flex items-center space-x-4 bg-white/10 dark:bg-gray-800/10 px-8 py-4 rounded-2xl backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:border-white/40 dark:hover:border-gray-600/40 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-8 h-8 text-gray-900 dark:text-white" />
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-300">github.com/Jay9115</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 dark:bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2025 Jay Patel. Built with React and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;