import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  category: string;
  description: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skills: Skill[] = [
    // Frontend
    { 
      name: 'React', 
      icon: '⚛️', 
      category: 'Frontend',
      description: 'Building interactive and dynamic user interfaces with modern React ecosystem'
    },
    { 
      name: 'TypeScript', 
      icon: '📘', 
      category: 'Frontend',
      description: 'Leveraging strong typing for robust and scalable web applications'
    },
    { 
      name: 'Three.js', 
      icon: '🎮', 
      category: 'Frontend',
      description: 'Creating immersive 3D web experiences and interactive visualizations'
    },
    { 
      name: 'Next.js', 
      icon: '⚡', 
      category: 'Frontend',
      description: 'Server-side rendering and static site generation for optimal performance'
    },
    { 
      name: 'Tailwind CSS', 
      icon: '🎨', 
      category: 'Frontend',
      description: 'Rapid UI development with utility-first CSS framework'
    },

    // Backend
    { 
      name: 'Node.js', 
      icon: '🟢', 
      category: 'Backend',
      description: 'Scalable server-side applications with JavaScript runtime'
    },
    { 
      name: 'Python', 
      icon: '🐍', 
      category: 'Backend',
      description: 'Data processing, machine learning, and backend development'
    },
    { 
      name: 'Spring Boot', 
      icon: '🍃', 
      category: 'Backend',
      description: 'Enterprise-grade Java applications with microservices architecture'
    },
    { 
      name: 'MongoDB', 
      icon: '💾', 
      category: 'Backend',
      description: 'Flexible NoSQL database for modern, scalable applications'
    },
    { 
      name: 'PostgreSQL', 
      icon: '🐘', 
      category: 'Backend',
      description: 'Powerful, open-source relational database system'
    },

    // DevOps & Tools
    { 
      name: 'Docker', 
      icon: '🐳', 
      category: 'DevOps',
      description: 'Containerization for consistent development and deployment'
    },
    { 
      name: 'AWS', 
      icon: '☁️', 
      category: 'DevOps',
      description: 'Cloud infrastructure and serverless computing solutions'
    },
    { 
      name: 'Git', 
      icon: '📚', 
      category: 'DevOps',
      description: 'Version control and collaborative software development'
    },
    { 
      name: 'CI/CD', 
      icon: '🔄', 
      category: 'DevOps',
      description: 'Continuous Integration and Continuous Deployment pipelines'
    },
    { 
      name: 'Linux', 
      icon: '🐧', 
      category: 'DevOps',
      description: 'Server management and system administration'
    }
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="relative py-20 overflow-hidden bg-black text-white">
      {/* Starry Background */}
      <div className="absolute inset-0 bg-space-gradient opacity-30 pointer-events-none" />
      <div className="constellation absolute inset-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Tech Constellation
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A curated collection of technologies that power innovative digital experiences
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 rounded-full transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills
            .filter(skill => skill.category === activeCategory)
            .map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                className="skill-card group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 hover:bg-gray-800/70 hover:scale-105"
              >
                <div className="text-6xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-3">
                  {skill.description}
                </p>
              </motion.div>
            ))
          }
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>
    </section>
  );
};

export default Skills;
