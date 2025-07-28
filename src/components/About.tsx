import React from 'react';
import profileImage from '../assets/images/pro_pic.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-space-gradient opacity-0" />
      <div className="constellation absolute inset-0" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-card p-8 backdrop-blur-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Profile Image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              {/* About Text */}
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed animate-slide-up">
                  Skilled Software Engineer and Assistant Lecturer with 3+ years of experience in full-stack
                  development and academic mentoring. Proficient in Java, Spring Boot, Angular, and JavaFX.
                  Delivered 15+ real-world projects, guided 1000+ students, and contributed to international
                  software teams using Agile and CI/CD practices.
                </p>
                <p className="text-lg leading-relaxed animate-slide-up-delay">
                  Currently serving as an Assistant Lecturer at iCET, Colombo, while pursuing my BSc (Hons)
                  Computer Science (Software Engineering) at Kingston University. My expertise in problem-solving,
                  collaboration, and trend analysis makes me a valuable asset to any team.
                </p>
                <p className="text-lg leading-relaxed animate-slide-up-delay">
                  I have supervised 85+ developers on large-scale projects like WeCare System and EVO-PLANE,
                  integrating cutting-edge technologies like Apache Kafka, OAuth authentication, and SendGrid APIs.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {[
                    'Java', 'Spring Boot', 'Angular', 'React.js', 'Node.js', 'Express.js',
                    'TypeScript', 'Python', 'C#.NET', 'Three.js', 'AWS', 'Docker'
                  ].map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-space-card hover:bg-space-card-hover transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { label: 'Projects Delivered', value: '15+' },
                { label: 'Students Trained', value: '1000+' },
                { label: 'Experience', value: '3+ Years' },
                { label: 'Technologies', value: '15+' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 space-card hover:transform hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl font-bold cosmic-text mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 orbit-element opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>
      <div className="absolute bottom-20 right-10 w-16 h-16 orbit-element opacity-20" style={{ animationDelay: '-5s' }}>
        <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>
    </section>
  );
};

export default About;
