import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import LearningJourney from './components/LearningJourney';
import Exploring from './components/Exploring';
import CurrentlyLearning from './components/CurrentlyLearning';
import Highlights from './components/Highlights';
import Projects from './components/Projects';
import AdminDashboard from './components/AdminDashboard';
import Contact from './components/Contact';
import Footer from './components/Footer';

import defaultProjects from './data/defaultProjects.json';

function App() {
  const [projects, setProjects] = useState([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Initialize projects list from localStorage or default seed data
  useEffect(() => {
    const stored = localStorage.getItem('anuj_portfolio_projects_v2');
    if (stored) {
      try {
        setProjects(JSON.parse(stored));
      } catch (err) {
        console.error('Error loading stored projects, resetting to defaults.', err);
        setProjects(defaultProjects);
        localStorage.setItem('anuj_portfolio_projects_v2', JSON.stringify(defaultProjects));
      }
    } else {
      setProjects(defaultProjects);
      localStorage.setItem('anuj_portfolio_projects_v2', JSON.stringify(defaultProjects));
    }
  }, []);

  const handleUpdateProjects = (updatedList) => {
    setProjects(updatedList);
    localStorage.setItem('anuj_portfolio_projects_v2', JSON.stringify(updatedList));
  };

  const handleResetProjects = () => {
    if (window.confirm('Reset catalog to the default seed projects? This will discard your custom changes.')) {
      setProjects(defaultProjects);
      localStorage.setItem('anuj_portfolio_projects_v2', JSON.stringify(defaultProjects));
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Floating Background Effects */}
      <div className="glow-orb glow-orb-3"></div>

      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <LearningJourney />
        <Exploring />
        <CurrentlyLearning />
        <Highlights />
        <Projects projects={projects} />
        <Contact />
      </main>

      <Footer />

      {/* Admin Panel Modal Overlay */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        projects={projects}
        onUpdateProjects={handleUpdateProjects}
        onResetProjects={handleResetProjects}
      />
    </div>
  );
}

export default App;
