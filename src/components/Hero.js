import React from 'react';
import '../styles/Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <p className="hero-intro">Hi, my name is</p>
                <h1 className="hero-title">Maya Kirkendoll.</h1>
                <h2 className="hero-subtitle">Building systems with operational logic.</h2>
                <p className="hero-description">
                I am a Front-End Web Engineer specializing in creating clean, dynamic single-page layouts. With a heavy background in high-volume operations, I build web applications that are structurally stable, highly efficient, and user-focused.
                </p>
                <div className="hero-btn-container">
                <a href="#projects" className="hero-btn">View My Work</a>
                </div>
            </div>
        </div>
    );
}

export default Hero;