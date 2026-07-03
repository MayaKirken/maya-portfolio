import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './styles/App.css';

function App () {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
