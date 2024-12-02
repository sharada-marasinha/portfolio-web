import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Associate Software Engineer",
      company: "Emerging Tech Solutions",
      period: "May 2024 - Present",
      description: [
        "Developing innovative software solutions",
        "Implementing cutting-edge technologies",
        "Collaborating with cross-functional teams"
      ],
      technologies: ["React", "TypeScript", "Node.js", "AWS"]
    },
    {
      title: "Assistant Lecturer",
      company: "Software Engineering Institute",
      period: "Jan 2024 - Present",
      description: [
        "Instructing advanced software development courses",
        "Developing comprehensive curriculum for emerging technologies",
        "Mentoring students in application development techniques"
      ],
      technologies: ["Java", "Spring Boot", "React", "Angular"]
    },
    {
      title: "Training Software Engineer",
      company: "Lex-Code X (ICET)",
      period: "Oct 2023 - Dec 2023",
      description: [
        "Led development of enterprise-grade e-commerce platform",
        "Managed agile development processes and team collaboration",
        "Implemented best practices in software design and architecture"
      ],
      technologies: ["Spring Boot", "Angular", "Agile Methodologies"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section 
      id="experience" 
      className="relative py-20 bg-black text-white overflow-hidden"
    >
      {/* Starry Background */}
      <div className="absolute inset-0 bg-space-gradient opacity-30 pointer-events-none" />
      <div className="constellation absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Professional Trajectory
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 transition-all duration-300 hover:bg-gray-800/70 hover:border-blue-500"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300 text-base">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 font-mono">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 text-gray-300 mb-4">
                {exp.description.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start before:content-['▹'] before:text-blue-500 before:mr-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Cosmic Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>
    </section>
  );
};

export default Experience;
