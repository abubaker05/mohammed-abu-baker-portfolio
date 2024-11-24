import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
      <header className="App-header">
        {/* Cover Image */}
        <div className="cover-image"></div>
        <h1>Mohammed Abu Baker's Portfolio</h1>
        <p className="tagline">"Turning ideas into impactful digital solutions."</p>
        {/* Navigation Buttons */}
        <nav className="nav-bar">
          <button 
            className={`nav-button ${activeSection === 'about' ? 'active' : ''}`} 
            onClick={() => setActiveSection('about')}>
            About
          </button>
          <button 
            className={`nav-button ${activeSection === 'projects' ? 'active' : ''}`} 
            onClick={() => setActiveSection('projects')}>
            Projects
          </button>
          <button 
            className={`nav-button ${activeSection === 'skills' ? 'active' : ''}`} 
            onClick={() => setActiveSection('skills')}>
            Skills
          </button>
          <button 
            className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`} 
            onClick={() => setActiveSection('contact')}>
            Contact
          </button>
        </nav>
      </header>
      <main className="main-content">
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
