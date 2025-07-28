import React from 'react';
import ThreeScene from './ThreeScene';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <ThreeScene />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Animated Name */}
          <div className="glitch-wrapper mb-4">
            <h1 className="glitch-text" data-text="Sharada Marasinha">
              Sharada Marasinha
            </h1>
          </div>

          {/* Animated Title */}
          <div className="cosmic-title-wrapper mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-blue-400 cosmic-title">
              Full Stack Developer | Assistant Lecturer | Kingston University
            </h2>
            <h3 className="text-lg md:text-xl text-gray-300 mt-2">
              BSc (Hons) Computer Science (Software Engineering)
            </h3>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 hero-description">
            Skilled Software Engineer and Assistant Lecturer with 3+ years of experience in full-stack development
            and academic mentoring. Proficient in Java, Spring Boot, Angular, and JavaFX. Delivered 15+ real-world
            projects, guided 1000+ students, and contributed to international software teams using Agile and CI/CD practices.
          </p>

          {/* Location and Contact */}
          <div className="text-gray-400 mb-8">
            <p>📍 Colombo, Sri Lanka | 📱 +94 77 9911 825 | 📧 sharadamarasinha@gmail.com</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="cosmic-button primary"
            >
              <span className="button-content">View Projects</span>
              <div className="button-glowing-bg"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="cosmic-button secondary"
            >
              <span className="button-content">Contact Me</span>
              <div className="button-glowing-bg"></div>
            </button>
          </div>

          {/* Terminal Hint */}
          <div className="text-green-400 text-sm mb-8 animate-pulse">
            💡 Check out the floating terminal button to explore my profile interactively!
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: '🐙', link: 'https://github.com/sharada-marasinha', label: 'GitHub' },
              { icon: '💼', link: 'https://www.linkedin.com/in/sharada-marasinha', label: 'LinkedIn' },
              { icon: '📚', link: 'https://www.w3schools.com/users/sharada', label: 'W3Schools' },
              { icon: '🏆', link: 'https://www.hackerrank.com/sharada', label: 'HackerRank' },
              { icon: '❓', link: 'https://stackoverflow.com/users/sharada', label: 'Stack Overflow' },
              { icon: '📰', link: 'https://daily.dev/@sharada', label: 'Daily.dev' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label={social.label}
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="cosmic-shapes">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="cosmic-shape"
            style={{
              '--delay': `${i * 2}s`,
              '--size': `${100 + i * 50}px`
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <div className="scroll-text">Scroll to Explore</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
