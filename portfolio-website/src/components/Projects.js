import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One, highlighting its features and technologies used.',
        link: 'https://github.com/user/project-one'
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two, highlighting its features and technologies used.',
        link: 'https://github.com/user/project-two'
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three, highlighting its features and technologies used.',
        link: 'https://github.com/user/project-three'
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;