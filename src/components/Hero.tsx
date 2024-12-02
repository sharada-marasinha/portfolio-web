import React from 'react';
import ThreeScene from './ThreeScene';

const Hero: React.FC = () => {
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
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 cosmic-title">
              Full Stack Developer & Software Engineer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 hero-description">
            Crafting innovative digital solutions with a passion for clean code and 
            cutting-edge technologies. Specializing in full-stack development and 
            creative problem-solving.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-6">
            <button className="cosmic-button primary">
              <span className="button-content">View Projects</span>
              <div className="button-glowing-bg"></div>
            </button>
            <button className="cosmic-button secondary">
              <span className="button-content">Contact Me</span>
              <div className="button-glowing-bg"></div>
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            {[
              { icon: '🌐', link: 'https://github.com/yourusername', label: 'GitHub' },
              { icon: '💼', link: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
              { icon: '📧', link: 'mailto:your.email@example.com', label: 'Email' }
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
