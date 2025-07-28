import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThreeScene from './components/ThreeScene';
import TerminalToggle from './components/TerminalToggle';
import Loader from './components/Loader';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="relative min-h-screen performance-optimize">
      {/* Background 3D Scene */}
      <div className="fixed inset-0 z-0">
        <ThreeScene />
      </div>

      {/* Background Effects */}
      <div className="nebula-bg" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Meteor Effects */}
        <div className="meteor" style={{ top: '10%', left: '20%' }} />
        <div className="meteor" style={{ top: '30%', left: '70%', animationDelay: '1s' }} />
        <div className="meteor" style={{ top: '60%', left: '40%', animationDelay: '2s' }} />

        {/* Navigation */}
        <Navbar />

        {/* Hero Section - Above the fold */}
        <div className="above-fold">
          <Hero />
        </div>

        {/* Lazy loaded components */}
        <Suspense fallback={<Loader />}>
          <div className="space-card mx-4 md:mx-8 my-8 p-8 lazy-content">
            <About />
          </div>

          <div className="relative lazy-content">
            <div className="constellation absolute top-0 left-0 w-full h-full" />
            <Experience />
          </div>

          <div className="space-card mx-4 md:mx-8 my-8 p-8 lazy-content">
            <Skills />
          </div>

          <div className="relative lazy-content">
            <Education />
          </div>

          <div className="space-card mx-4 md:mx-8 my-8 p-8 lazy-content">
            <Projects />
          </div>

          <div className="relative lazy-content">
            <Contact />
          </div>

          <Footer />
        </Suspense>
      </div>

      {/* Floating Terminal Toggle */}
      <TerminalToggle />
    </div>
  );
}

export default App;
