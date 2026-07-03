import React from 'react';
import '../styles/Projects.css';
import jammmingImg from '../assets/jammming.png';
import sereneOasisImg from '../assets/serene-oasis.png';
import dailyFlowImg from '../assets/daily-flow-tracker.png';


const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: 'Jammming',
            description: 'A dynamic React playlist builder designed to simulate search functions, track selection, and custom playlist curation using local mock data and state management.',
            tags: ['React', 'JavaScript', 'CSS3'],
            netlifyUrl: 'https://jammming-portfolio.netlify.app/',
            githubUrl: 'https://github.com/MayaKirken/Jammming'
        },
        {
            id: 2, 
            title: 'Serene Oasis',
            description: 'A luxurious, fully responsive landing page for a wellness spa, showcasing elegant layout structures, smooth navigation, and a modern aesthetic.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
            netlifyUrl: 'https://serene-oasis.netlify.app/',
            githubUrl: 'https://github.com/MayaKirken/serene-oasis'
        },
        {
            id: 3,
            title: 'Daily Tracker',
            description: 'An interactive single-page tracking utility built to help users organize daily goals, manage tasks, and visualize personal productivity workflows.',
            tags: ['React', 'JavaScript', 'State Management', 'HTML5', 'CSS3'],
            netlifyUrl: 'https://daily-flow-tracker.netlify.app/',
            githubUrl: 'https://github.com/MayaKirken/daily-flow-tracker'
        }
    ];

    const getImage = (id) => {
        if (id === 1) return jammmingImg;
        if (id === 2) return sereneOasisImg;
        return dailyFlowImg;
    };

    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="projects-subtitle">A collection of responsive web applications built with clean architecture and practical design.</p>

                <div className="projects-grid">
                    {projectData.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image-wrapper">
                                <img src={getImage(project.id)} alt={`${project.title} screenshot`} className="project-image" />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span className="tag" key={index}>{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.netlifyUrl} target="_blank" rel="noreferrer" className="btn btn-primary">View Site</a>
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">View Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;