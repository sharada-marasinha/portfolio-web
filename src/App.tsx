import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpaceScene from './components/SpaceScene';
import AstronautCursor from './components/AstronautCursor';
import ColonizationShip from './components/ColonizationShip';

function App() {
  return (
    <div className="relative min-h-screen">
      <AstronautCursor />
      <ColonizationShip />
      <SpaceScene />
      <div className="nebula-bg" />
      <div className="relative z-10">
        <div className="meteor" style={{ top: '10%', left: '20%' }} />
        <div className="meteor" style={{ top: '30%', left: '70%', animationDelay: '1s' }} />
        <div className="meteor" style={{ top: '60%', left: '40%', animationDelay: '2s' }} />
        <Navbar />
        <Hero />
        <div className="space-card mx-4 md:mx-8 my-8 p-8">
          <About />
        </div>
        <div className="relative">
          <div className="constellation absolute top-0 left-0 w-full h-full" />
          <Experience />
        </div>
        <div className="space-card mx-4 md:mx-8 my-8 p-8">
          <Skills />
        </div>
        <div className="relative">
          <Education />
        </div>
        <div className="space-card mx-4 md:mx-8 my-8 p-8">
          <Projects />
        </div>
        <div className="relative">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
