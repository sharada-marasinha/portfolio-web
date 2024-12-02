import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Online Exam Management System",
      technologies: ["React", "Express.js"],
      description: "Comprehensive online exam management system with admin features for question management and student paper organization. Students can take exams and receive immediate results via email.",
      features: [
        "Add and manage questions",
        "Organize student papers using categories",
        "User-friendly front-end interface",
        "Immediate mark viewing",
        "Email notifications for results"
      ]
    },
    {
      title: "Student Management System",
      technologies: ["Spring Boot", "MySQL", "JavaScript", "HTML", "CSS"],
      description: "Web-based Student Information Management System using Spring Boot, Lombok, Spring Data, and Fetch API.",
      links: {
        frontend: "GitHub Repository Front-End",
        backend: "GitHub Repository Backend"
      }
    },
    {
      title: "Clothify Store POS System",
      technologies: ["Hibernate", "JavaFX", "Jfoenix", "MySQL", "Maven", "Java"],
      description: "POS system with comprehensive features including user, product, inventory, supplier management, and report generation.",
      githubLink: "GitHub Repository"
    },
    {
      title: "Real-Time Weather Web Application",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      description: "Weather application providing current and forecasted weather, historical data, and interactive maps.",
      features: [
        "Current and forecasted weather",
        "Historical data",
        "Interactive maps",
        "User customization"
      ],
      githubLink: "GitHub Repository"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0a192f] to-[#020617] relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 text-white cosmic-title">
          Featured Projects
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full glow-line"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-opacity-10 bg-white backdrop-blur-lg rounded-xl p-8 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-cosmic"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400 glitch-text-small">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:border-blue-400 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              {project.features && (
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <span className="mr-2 text-blue-500">◈</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="flex gap-4 mt-auto">
                {project.links && (
                  <div className="flex gap-4">
                    {Object.entries(project.links).map(([key, value]) => (
                      <a
                        key={key}
                        href="#"
                        className="cosmic-button-small"
                      >
                        {value}
                      </a>
                    ))}
                  </div>
                )}
                {project.githubLink && (
                  <a
                    href="#"
                    className="cosmic-button-small"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
