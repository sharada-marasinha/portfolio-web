import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  category: string;
  description: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const skills: Skill[] = [
    // Programming Languages
    {
      name: 'Java',
      icon: '☕',
      category: 'Languages',
      description: 'Enterprise-grade applications with Spring Boot and JavaFX expertise'
    },
    {
      name: 'Python',
      icon: '🐍',
      category: 'Languages',
      description: 'Data processing, machine learning, and backend development'
    },
    {
      name: 'C#.NET',
      icon: '🔷',
      category: 'Languages',
      description: 'Microsoft ecosystem applications with ASP.NET and Entity Framework'
    },
    {
      name: 'JavaScript',
      icon: '�',
      category: 'Languages',
      description: 'Modern ES6+ features for dynamic web applications'
    },
    {
      name: 'TypeScript',
      icon: '📘',
      category: 'Languages',
      description: 'Type-safe JavaScript for large-scale applications'
    },

    // Frameworks & Libraries
    {
      name: 'Spring Boot',
      icon: '🍃',
      category: 'Frameworks',
      description: 'Microservices architecture and enterprise Java applications'
    },
    {
      name: 'Angular',
      icon: '🅰️',
      category: 'Frameworks',
      description: 'Full-featured frontend framework for complex web applications'
    },
    {
      name: 'React.js',
      icon: '⚛️',
      category: 'Frameworks',
      description: 'Component-based UI development with modern React ecosystem'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      category: 'Frameworks',
      description: 'Server-side JavaScript runtime for scalable applications'
    },
    {
      name: 'Express.js',
      icon: '�',
      category: 'Frameworks',
      description: 'Minimal and flexible Node.js web application framework'
    },
    {
      name: 'ASP.NET',
      icon: '�',
      category: 'Frameworks',
      description: 'Microsoft web framework for robust enterprise applications'
    },
    {
      name: 'Next.js',
      icon: '⚡',
      category: 'Frameworks',
      description: 'Full-stack React framework with SSR and static generation'
    },

    // Tools & Technologies
    {
      name: 'IntelliJ IDEA',
      icon: '�',
      category: 'Tools',
      description: 'Professional IDE for Java and enterprise development'
    },
    {
      name: 'VS Code',
      icon: '�',
      category: 'Tools',
      description: 'Versatile code editor for modern web development'
    },
    {
      name: 'Git',
      icon: '📚',
      category: 'Tools',
      description: 'Version control and collaborative software development'
    },
    {
      name: 'Docker',
      icon: '🐳',
      category: 'Tools',
      description: 'Containerization for consistent development and deployment'
    },
    {
      name: 'Postman',
      icon: '📮',
      category: 'Tools',
      description: 'API development and testing platform'
    },
    {
      name: 'Maven',
      icon: '📦',
      category: 'Tools',
      description: 'Java project management and build automation'
    },

    // Cloud & DevOps
    {
      name: 'AWS',
      icon: '☁️',
      category: 'Cloud',
      description: 'EC2, S3, and cloud infrastructure management'
    },
    {
      name: 'CI/CD',
      icon: '🔄',
      category: 'Cloud',
      description: 'Continuous Integration and Continuous Deployment pipelines'
    },
    {
      name: 'Jenkins',
      icon: '🏗️',
      category: 'Cloud',
      description: 'Automation server for building, testing, and deploying'
    },
    {
      name: 'REST APIs',
      icon: '�',
      category: 'Cloud',
      description: 'RESTful web services design and implementation'
    },

    // Databases
    {
      name: 'MySQL',
      icon: '🐬',
      category: 'Databases',
      description: 'Relational database management and optimization'
    },
    {
      name: 'PostgreSQL',
      icon: '�',
      category: 'Databases',
      description: 'Advanced SQL features and database administration'
    },
    {
      name: 'MongoDB',
      icon: '💾',
      category: 'Databases',
      description: 'NoSQL document database for flexible data modeling'
    },

    // AI & Advanced
    {
      name: 'TensorFlow.js',
      icon: '🧠',
      category: 'AI',
      description: 'Machine learning in JavaScript for web applications'
    },
    {
      name: 'OpenAI API',
      icon: '🤖',
      category: 'AI',
      description: 'AI-powered applications and chatbot development'
    },
    {
      name: 'Google AI Studio',
      icon: '🔬',
      category: 'AI',
      description: 'AI model development and experimentation platform'
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
