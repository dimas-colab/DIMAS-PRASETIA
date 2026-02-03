import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ maxWidth: '600px' }}>
            <h3>Get in Touch</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                I am available for professional opportunities in Urban Planning, GIS Analysis, and Regional Development consulting.
            </p>
            <a href="mailto:contact@example.com" className="btn-primary">Contact via Email</a>
        </section>
    );
};

export default Contact;
