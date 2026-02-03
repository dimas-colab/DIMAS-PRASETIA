import React from 'react';

const ProjectCard = ({ title, category, description }) => (
    <div style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '2rem',
        borderRadius: '4px',
        border: '1px solid rgba(255,255,255,0.05)'
    }}>
        <span style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--accent-blue)',
            display: 'block',
            marginBottom: '0.5rem'
        }}>{category}</span>
        <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{title}</h4>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{description}</p>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h3>Selected Research & Projects</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <ProjectCard
                    title="Slum Area Impact Analysis"
                    category="Social Impact Assessment"
                    description="A comprehensive study conducted in Sleman, Yogyakarta, analyzing the socio-spatial impacts of slum upgradation programs using GIS mapping and field surveys."
                />
                <ProjectCard
                    title="Land-Use Change Dynamics"
                    category="Academic Publication"
                    description="Published research in a national journal examining temporal land-use shifts over a decade, utilizing remote sensing data and predictive modeling."
                />
                <ProjectCard
                    title="Regional Spatial Planning Support"
                    category="Urban Planning"
                    description="Assisted in drafting spatial plans (RTRW/RDTR) by processing geospatial data and creating high-accuracy thematic maps for government review."
                />
            </div>
        </section>
    );
};

export default Projects;
