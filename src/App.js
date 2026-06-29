import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './styles/App.css';

function App () {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
