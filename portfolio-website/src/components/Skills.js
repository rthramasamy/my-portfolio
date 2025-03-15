import React from 'react';

const Skills = () => {
    const skills = [
        'Python',
        'R',
        'SQL',
        'Machine Learning',
        'Data Visualization',
        'Statistical Analysis',
        'Deep Learning',
        'Big Data Technologies'
    ];

    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;