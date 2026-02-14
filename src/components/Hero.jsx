import React from 'react';

const Hero = () => {
    return (
        <div className="hero-section">
            <style>{`
                .hero-section {
                    position: relative;
                    min-height: 90vh;
                    display: flex;
                    align-items: center;
                    background: linear-gradient(135deg, #001a3d 0%, #00509d 50%, #003d7a 100%);
                    color: white;
                    padding: 6rem 0 12rem 0;
                    clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
                    margin-bottom: -6rem;
                    overflow: hidden;
                    z-index: 10;
                }
                
                .hero-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 20% 50%, rgba(253, 197, 0, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(39, 174, 96, 0.1) 0%, transparent 50%);
                    animation: pulseGlow 8s ease-in-out infinite;
                    z-index: 1;
                }

                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                }

                .hero-glass-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(253, 197, 0, 0.15);
                    backdrop-filter: blur(10px);
                    padding: 10px 24px;
                    border-radius: 50px;
                    border: 2px solid rgba(253, 197, 0, 0.3);
                    font-size: 0.8rem;
                    font-weight: 800;
                    color: #fdc500;
                    margin-bottom: 2.5rem;
                    animation: floatBadge 4s ease-in-out infinite;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                @keyframes floatBadge {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-8px) scale(1.02); }
                }

                .hero-title-main {
                    font-size: clamp(2.5rem, 6vw, 5rem);
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 2rem;
                    letter-spacing: -2px;
                    animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                    color: #ffffff;
                    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                }

                .title-gradient-text {
                    display: block;
                    background: linear-gradient(90deg, 
                        #fdc500 0%, 
                        #ffed4e 25%, 
                        #ffd700 50%, 
                        #ffed4e 75%, 
                        #fdc500 100%
                    );
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-size: 300% 100%;
                    animation: gradientFlow 4s ease-in-out infinite;
                    filter: drop-shadow(0 4px 12px rgba(253, 197, 0, 0.6));
                    font-weight: 900;
                    margin-top: 0.5rem;
                }

                @keyframes gradientFlow {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                .hero-desc-pro {
                    font-size: clamp(1rem, 2vw, 1.2rem);
                    line-height: 1.8;
                    color: rgba(255, 255, 255, 0.92);
                    max-width: 750px;
                    margin-bottom: 3.5rem;
                    animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s backwards;
                    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                    font-weight: 400;
                }

                .hero-desc-pro strong {
                    color: #fdc500;
                    font-weight: 700;
                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .cta-btns {
                    display: flex;
                    gap: 1.5rem;
                    animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
                    flex-wrap: wrap;
                }

                .floating-shape {
                    position: absolute;
                    background: rgba(253, 197, 0, 0.08);
                    border-radius: 50%;
                    filter: blur(60px);
                    z-index: 1;
                    pointer-events: none;
                    animation: floatShape 20s ease-in-out infinite;
                }

                @keyframes floatShape {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -30px) scale(1.1); }
                    66% { transform: translate(-30px, 30px) scale(0.9); }
                }

                @media (max-width: 768px) {
                    .hero-section {
                        padding: 5rem 0 7rem 0;
                        text-align: center;
                        clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
                    }
                    
                    .hero-title-main {
                        font-size: clamp(1.4rem, 7vw, 2.2rem);
                        letter-spacing: -0.5px;
                        line-height: 1.2;
                    }
                    
                    .hero-desc-pro {
                        font-size: clamp(0.85rem, 3.2vw, 1rem);
                        margin-left: auto;
                        margin-right: auto;
                        max-width: 90%;
                    }
                    
                    .cta-btns {
                        flex-direction: column;
                        align-items: center;
                        gap: 1rem;
                    }
                    
                    .hero-glass-badge {
                        font-size: 0.75rem;
                        padding: 6px 16px;
                    }
                }

                @media (min-width: 769px) and (max-width: 1024px) {
                    .hero-title-main {
                        font-size: clamp(2.25rem, 4.5vw, 3rem);
                    }
                    
                    .hero-desc-pro {
                        font-size: clamp(1rem, 2vw, 1.1rem);
                        max-width: 600px;
                    }
                }

                @media (min-width: 1025px) {
                    .hero-title-main {
                        font-size: 3.5rem;
                    }
                    
                    .hero-desc-pro {
                        font-size: 1.15rem;
                    }
                }
            `}</style>

            <div className="floating-shape" style={{ width: '400px', height: '400px', top: '-10%', left: '-5%' }}></div>
            <div className="floating-shape" style={{ width: '300px', height: '300px', bottom: '10%', right: '5%', background: 'rgba(253, 197, 0, 0.05)' }}></div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-glass-badge">
                        <span>🚀</span> PROFESSIONAL PORTFOLIO • URBAN PLANNER
                    </div>

                    <h1 className="hero-title-main">
                        S1 Perencanaan <br />
                        <span className="title-gradient-text">Wilayah & Kota</span>
                    </h1>

                    <p className="hero-desc-pro">
                        Urban Planner (S1 PWK) dengan kemampuan dalam penyusunan dokumen perencanaan dan akademik seperti <strong>laporan analisis</strong>, <strong>laporan praktik</strong>, <strong>makalah ilmiah</strong>, serta <strong>naskah akademik</strong>. Berpengalaman dalam <strong>pemetaan dan analisis tata ruang</strong> menggunakan ArcGIS dan QGIS, serta <strong>visualisasi desain</strong> menggunakan SketchUp dan AutoCAD. Terbiasa melakukan <strong>presentasi dan public speaking</strong>, termasuk pengalaman sebagai host live TikTok & Shopee. Menguasai tools desain dan editing seperti Canva dan CorelDRAW untuk mendukung komunikasi data secara profesional.
                    </p>

                    <div className="cta-btns">
                        <a href="#projects" className="btn-bumn" style={{
                            backgroundColor: 'var(--bumn-gold)',
                            color: 'var(--bumn-dark-blue)',
                            fontSize: '1rem',
                            fontWeight: '800',
                            padding: '16px 40px',
                            borderRadius: '50px',
                            boxShadow: '0 8px 25px rgba(253, 197, 0, 0.4)'
                        }}>
                            Eksplorasi Proyek
                        </a>
                        <a href="#contact" className="btn-bumn" style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '2px solid rgba(255,255,255,0.4)',
                            fontSize: '1rem',
                            padding: '14px 38px',
                            borderRadius: '50px',
                            backdropFilter: 'blur(5px)'
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
