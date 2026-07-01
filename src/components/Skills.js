import React from 'react';
import '../styles/Skills.css';

function Skills() {
    const technicalSkills = [
        'JavaScript (ES6+)', 'React', 'HTML5 & CSS3', 'Flexbox & CSS Grid', 'Git & GitHub', 'Netlify Deployment'
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <h2 className="section-title">Technical Toolkit</h2>
                <p className="skills-subtitle">The languages, frameworks, and tools I use to bring single-page logic to life.</p>

                <div className="skills-grid">
                    {technicalSkills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <span className="skill-badge"></span>
                            <p>{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;