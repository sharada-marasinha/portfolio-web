import React from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, icon: '⚛️', category: 'Frontend' },
    { name: 'TypeScript', level: 85, icon: '📘', category: 'Frontend' },
    { name: 'Three.js', level: 80, icon: '🎮', category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, icon: '🎨', category: 'Frontend' },
    { name: 'Next.js', level: 85, icon: '⚡', category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', level: 85, icon: '🟢', category: 'Backend' },
    { name: 'Spring Boot', level: 80, icon: '🍃', category: 'Backend' },
    { name: 'Python', level: 85, icon: '🐍', category: 'Backend' },
    { name: 'MongoDB', level: 80, icon: '🍃', category: 'Backend' },
    { name: 'PostgreSQL', level: 75, icon: '🐘', category: 'Backend' },

    // Tools & Others
    { name: 'Git', level: 90, icon: '📚', category: 'Tools' },
    { name: 'Docker', level: 75, icon: '🐳', category: 'Tools' },
    { name: 'AWS', level: 70, icon: '☁️', category: 'Tools' },
    { name: 'Linux', level: 85, icon: '🐧', category: 'Tools' },
    { name: 'CI/CD', level: 75, icon: '🔄', category: 'Tools' }
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-space-gradient opacity-30" />
      <div className="constellation absolute inset-0" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-card p-8 backdrop-blur-lg">
            {categories.map((category, categoryIndex) => (
              <div key={category} className="mb-12 last:mb-0">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="skill-card group"
                        style={{
                          animationDelay: `${(categoryIndex * 5 + skillIndex) * 100}ms`
                        }}
                      >
                        <div className="skill-content">
                          <div className="skill-icon">{skill.icon}</div>
                          <div className="skill-info">
                            <h4 className="skill-name">{skill.name}</h4>
                            <div className="skill-bar-container">
                              <div 
                                className="skill-bar"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                          <div className="skill-level">{skill.level}%</div>
                        </div>
                        
                        {/* Hover Effect */}
                        <div className="skill-hover-content">
                          <span className="text-lg font-bold">{skill.name}</span>
                          <div className="mt-2 text-sm opacity-80">
                            Proficiency: {skill.level}%
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 orbit-element opacity-20">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>
        <div className="absolute bottom-20 right-10 w-16 h-16 orbit-element opacity-20" style={{ animationDelay: '-5s' }}>
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
