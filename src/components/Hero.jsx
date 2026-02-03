import React from 'react';

const Hero = () => {
    return (
        <section className="section hero">
            <h1>Advancing Sustainable Urban Development through Spatial Analysis</h1>
            <p>
                Bachelor of Urban and Regional Planning based in Indonesia.
                Specializing in GIS-driven spatial analysis, land-use change mapping, and regional impact assessment.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <a href="#projects" className="btn-primary">View Research Work</a>
                <a href="#contact" className="btn-primary" style={{ backgroundColor: 'transparent', border: '1px solid var(--text-secondary)' }}>Get in Touch</a>
            </div>
        </section>
    );
};

export default Hero;
