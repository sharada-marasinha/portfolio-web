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
      title: "Assistant Lecturer",
      company: "iCET, Colombo",
      period: "Mar 2024 - Present",
      description: [
        "Trained 1000+ students in Java, HTML/CSS, and JavaScript programming",
        "Guided 15+ full-stack projects using Spring Boot, Angular, and React technologies",
        "Supervised 30+ final-year projects with 95% scoring distinction grades",
        "Led large-scale systems (WeCare, EVO-PLANE) with Kafka, OAuth, and SendGrid integration"
      ],
      technologies: ["Java", "Spring Boot", "Angular", "React", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Associate Software Engineer",
      company: "Eco X-pert Group, New Zealand (Remote)",
      period: "Mar 2024 – Mar 2025",
      description: [
        "Developed and maintained 5+ web applications, reducing bug rate by 30% post-QA testing",
        "Improved CI/CD deployment time by 45% by optimizing Git workflows and build pipelines",
        "Boosted API performance by 25% by refactoring REST endpoints and implementing caching strategies",
        "Collaborated with international teams using Agile methodologies and modern DevOps practices"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "CI/CD", "Git", "REST APIs"]
    },
    {
      title: "Intern Software Engineer",
      company: "Tech Z Solution – Ratnapura, Sri Lanka",
      period: "Jan 2022 – Jun 2022",
      description: [
        "Collaborated on 3 major modules, reducing delivery time by 20% through efficient team communication",
        "Participated in Agile stand-ups and collaborative debugging sessions with development teams",
        "Helped increase bug fix rate by 35% by automating local test cases and using Git effectively",
        "Gained hands-on experience in software development lifecycle and version control systems"
      ],
      technologies: ["Java", "Git", "Agile Methodologies", "Unit Testing", "Debugging"]
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
