import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import './styles/App.css';

function App () {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <Skills />
      </main>
    </div>
  );
}

export default App;
