import React from 'react';

const Hero = () => {
    return (
        <div style={{
            position: 'relative',
            backgroundColor: 'var(--bumn-blue)',
            backgroundImage: 'linear-gradient(135deg, var(--bumn-dark-blue) 0%, var(--bumn-blue) 100%)',
            color: 'white',
            padding: 'var(--hero-padding, 6rem 0 8rem 0)',
            clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
            marginBottom: '4rem',
            overflow: 'hidden'
        }} className="hero-section">
            <style>{`
                .hero-section {
                    --hero-padding: 6rem 0 8rem 0;
                }
                .hero-title {
                    font-size: 3.5rem;
                }
                .hero-subtitle {
                    font-size: 1.25rem;
                }
                @media (max-width: 768px) {
                    .hero-section {
                        --hero-padding: 4rem 0 6rem 0;
                        text-align: center;
                    }
                    .hero-title {
                        font-size: 2.25rem !important;
                    }
                    .hero-subtitle {
                        font-size: 1.1rem !important;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .hero-cta-container {
                        justify-content: center;
                        flex-direction: column;
                    }
                    .hero-badge {
                        margin-bottom: 1rem !important;
                    }
                }
            `}</style>
            <div className="container fade-in" style={{ display: 'flex', alignItems: 'center', minHeight: '400px', position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <span className="hero-badge" style={{
                        backgroundColor: 'var(--bumn-gold)',
                        color: 'var(--bumn-dark-blue)',
                        padding: '6px 16px',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        fontWeight: '800',
                        display: 'inline-block',
                        marginBottom: '1.5rem',
                        letterSpacing: '1px',
                        boxShadow: '0 2px 8px rgba(253, 197, 0, 0.3)'
                    }}>
                        OFFICIAL PORTFOLIO • URBAN PLANNER
                    </span>
                    <h1 className="hero-title" style={{
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        letterSpacing: '-1px'
                    }}>
                        Membangun Indonesia Melalui<br />
                        <span style={{ color: 'var(--bumn-gold)' }}>Perencanaan Wilayah Terintegrasi</span>
                    </h1>
                    <p className="hero-subtitle" style={{
                        marginBottom: '2.5rem',
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '600px',
                        lineHeight: '1.6'
                    }}>
                        Spesialisasi dalam Analisis GIS, Pemetaan Tata Guna Lahan, dan
                        Penyusunan Dokumen Perencanaan Strategis untuk Pembangunan Berkelanjutan.
                    </p>
                    <div className="hero-cta-container" style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#projects" className="btn-bumn" style={{
                            backgroundColor: 'var(--bumn-gold)',
                            color: 'var(--bumn-dark-blue)',
                            fontSize: '1rem',
                            padding: '14px 32px'
                        }}>
                            Eksplorasi Proyek
                        </a>
                        <a href="#contact" className="btn-bumn" style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '2px solid white',
                            fontSize: '1rem',
                            padding: '12px 30px'
                        }}>
                            Hubungi Saya
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
