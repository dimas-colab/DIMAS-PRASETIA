import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <h3>About Me</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                <div>
                    <p style={{ marginBottom: '1rem' }}>
                        I am a dedicated Urban and Regional Planner with a strong academic foundation in spatial data analysis.
                        My work focuses on understanding the complex interactions between land use, community development, and environmental sustainability.
                    </p>
                    <p>
                        With experience in conducting impact analyses for slum areas in Sleman and publishing research on land-use changes,
                        I bring a data-driven approach to urban planning challenges.
                    </p>
                </div>
                <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Technical Proficiency</h4>
                    <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>GIS & Analysis:</strong> ArcGIS, QGIS, Spatial Analysis</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Design & Modeling:</strong> AutoCAD, SketchUp</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Research:</strong> Regional Impact Assessment, Land-Use Mapping</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
