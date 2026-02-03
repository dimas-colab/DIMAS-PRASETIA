import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section container" style={{ paddingBottom: '5rem' }}>
            <h2 className="section-title">Hubungi Saya</h2>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-card)',
                padding: '2rem',
                maxWidth: '600px',
                border: '1px solid #eee'
            }}>
                <p style={{ marginBottom: '2rem', color: '#555', lineHeight: '1.6' }}>
                    Saya terbuka untuk peluang profesional, kolaborasi riset, maupun konsultasi terkait Perencanaan Wilayah dan GIS. Silakan hubungi melalui saluran di bawah ini:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '40px', height: '40px', backgroundColor: '#25D366', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>WA</div>
                        <div>
                            <div style={{ fontSize: '0.8rem', color: '#999', fontWeight: '600', textTransform: 'uppercase' }}>WhatsApp</div>
                            <a href="https://wa.me/6289525959477" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--bumn-blue)', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none' }}>
                                0895-2595-9477
                            </a>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--bumn-blue)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>@</div>
                        <div>
                            <div style={{ fontSize: '0.8rem', color: '#999', fontWeight: '600', textTransform: 'uppercase' }}>Email (Gmail)</div>
                            <a href="mailto:Dimaseka.amikom@gmail.com" style={{ color: 'var(--bumn-blue)', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none' }}>
                                Dimaseka.amikom@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
