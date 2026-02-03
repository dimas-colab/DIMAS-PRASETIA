import React from 'react';

const Hero = () => {
    return (
        <div style={{
            backgroundColor: 'var(--bumn-blue)',
            backgroundImage: 'linear-gradient(135deg, var(--bumn-dark-blue) 0%, var(--bumn-blue) 100%)',
            color: 'white',
            padding: '4rem 0',
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)', // Modern angled edge often seen in corporate headers
            marginBottom: '3rem'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', minHeight: '300px' }}>
                <div style={{ maxWidth: '700px' }}>
                    <span style={{
                        backgroundColor: 'var(--bumn-gold)',
                        color: 'var(--bumn-dark-blue)',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        display: 'inline-block',
                        marginBottom: '1rem'
                    }}>
                        PROFESIONAL PERENCANA WILAYAH
                    </span>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.2' }}>
                        Membangun Indonesia Melalui<br /> Perencanaan Wilayah Terintegrasi
                    </h1>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#e0e0e0' }}>
                        Spesialisasi dalam Analisis GIS, Pemetaan Tata Guna Lahan, dan Dampak Sosial Perkotaan.
                    </p>
                    <a href="#projects" className="btn-bumn" style={{ backgroundColor: 'white', color: 'var(--bumn-blue)' }}>
                        Lihat Portofolio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
