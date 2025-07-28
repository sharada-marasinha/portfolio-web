import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "WeCare System (WE-Care)",
      technologies: ["Spring Boot", "Angular", "SendGrid", "WhatsApp SDK", "Apache Kafka", "OAuth"],
      description: "Supervised 85+ developers to build a comprehensive health management platform with real-time notifications and secure authentication.",
      features: [
        "Health management dashboard",
        "Real-time notifications via SendGrid",
        "WhatsApp SDK integration",
        "Apache Kafka for event streaming",
        "OAuth authentication system",
        "Scalable microservices architecture"
      ],
      githubLink: "https://github.com/sharada-marasinha/wecare-system"
    },
    {
      title: "Event Management System (EVO-Plane)",
      technologies: ["Spring Boot", "Angular", "SendGrid", "Social Login APIs", "MySQL"],
      description: "Led 48+ developers in creating a comprehensive event planning system with third-party API integrations and social authentication.",
      features: [
        "Event planning and management",
        "Social media login integration",
        "Email notification system",
        "Real-time event updates",
        "Multi-user collaboration",
        "Resource management"
      ],
      githubLink: "https://github.com/sharada-marasinha/evo-plane"
    },
    {
      title: "QuBeM – Social Media Platform",
      technologies: ["Spring Boot", "React", "MySQL", "JWT", "REST API"],
      description: "Developed a full-featured social media application with secure user authentication, posting, and commenting functionality.",
      features: [
        "User registration and authentication",
        "Secure JWT token management",
        "Post creation and sharing",
        "Real-time commenting system",
        "User profile management",
        "Scalable REST API backend"
      ],
      githubLink: "https://github.com/sharada-marasinha/qubem-social"
    },
    {
      title: "Wedding Management System (Dream Day)",
      technologies: ["C#.NET", "ASP.NET", "SQL Server", "JWT", "Entity Framework"],
      description: "Created a comprehensive C# .NET web application for wedding logistics management with secure authentication and database migrations.",
      features: [
        "Wedding event planning",
        "Vendor management system",
        "Guest list management",
        "Budget tracking",
        "Secure JWT authentication",
        "Database migration support"
      ],
      githubLink: "https://github.com/sharada-marasinha/dream-day"
    },
    {
      title: "Exam-Q Platform",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "WebSocket"],
      description: "Real-time question generation and tracking platform tested by 50+ users during internal evaluations with live feedback.",
      features: [
        "Real-time question generation",
        "Live exam tracking",
        "Instant feedback system",
        "User performance analytics",
        "WebSocket real-time communication",
        "Scalable exam management"
      ],
      githubLink: "https://github.com/sharada-marasinha/exam-q-platform"
    },
    {
      title: "Portfolio Website (This Site)",
      technologies: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Vite", "Framer Motion"],
      description: "Interactive 3D portfolio website with terminal integration, space theme, and modern animations built with cutting-edge web technologies.",
      features: [
        "Interactive 3D animations",
        "Terminal-based exploration",
        "Responsive space theme",
        "Performance optimized",
        "Modern UI/UX design",
        "Cross-browser compatibility"
      ],
      githubLink: "https://github.com/sharada-marasinha/portfolio-web"
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-opacity-10 bg-white backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-cosmic h-full flex flex-col"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-400 glitch-text-small">{project.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-900/40 text-blue-300 rounded-full text-xs border border-blue-500/30 hover:border-blue-400 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">{project.description}</p>

              {project.features && (
                <ul className="space-y-1 mb-4 max-h-32 overflow-y-auto">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start text-sm">
                      <span className="mr-2 text-blue-500 mt-1">◈</span>
                      <span className="flex-1">{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 4 && (
                    <li className="text-gray-500 text-xs">...and more features</li>
                  )}
                </ul>
              )}

              <div className="mt-auto">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button-small inline-flex items-center"
                  >
                    <span className="mr-2">🐙</span>
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
