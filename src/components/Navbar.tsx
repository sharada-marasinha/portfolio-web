import React, { useState, useEffect } from "react";
import { DarkThemeToggle } from "flowbite-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'nav-scrolled backdrop-blur-lg bg-[#0a192f]/80' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cosmic-logo">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text hover:from-purple-500 hover:to-blue-400 transition-all duration-300">
              SM
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link relative px-3 py-2 text-sm font-medium transition-colors duration-300
                    ${activeSection === item.id 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-blue-400'
                    }`}
                >
                  {item.label}
                  <span className="nav-link-effect"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <DarkThemeToggle className="cosmic-button-small" />
            
            {/* Mobile Menu Button */}
            <button className="mobile-menu-button md:hidden">
              <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-gray-300"></span>
                <span className="block w-8 h-0.5 bg-gray-300"></span>
                <span className="block w-8 h-0.5 bg-gray-300"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="mobile-menu hidden px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block px-3 py-2 text-base font-medium rounded-md w-full text-left
                ${activeSection === item.id 
                  ? 'text-blue-400 bg-blue-900/20' 
                  : 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/10'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
