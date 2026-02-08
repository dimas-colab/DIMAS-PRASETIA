import React from 'react';

const Hero = () => {
    return (
        <div className="hero-section">
            <style>{`
                .hero-section {
                    position: relative;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    background: linear-gradient(-45deg, #002b5c, #00509d, #27ae60, #fdc500);
                    background-size: 400% 400%;
                    animation: meshGradient 15s ease infinite;
                    color: white;
                    padding: 4rem 0 10rem 0;
                    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
                    margin-bottom: -5rem;
                    overflow: hidden;
                    z-index: 10;
                }
                
                @keyframes meshGradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 850px;
                }

                .hero-glass-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    padding: 8px 20px;
                    border-radius: 50px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: #fff;
                    margin-bottom: 2rem;
                    animation: floatBadge 3s ease-in-out infinite;
                }

                @keyframes floatBadge {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }

                .hero-title-main {
                    font-size: clamp(2.5rem, 6vw, 4.5rem);
                    font-weight: 900;
                    line-height: 1.05;
                    margin-bottom: 1.5rem;
                    letter-spacing: -2px;
                    animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1);
                }

                .title-gradient-text {
                    display: block;
                    background: linear-gradient(to right, #fdc500, #fff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    filter: drop-shadow(0 0 15px rgba(253, 197, 0, 0.3));
                }

                .hero-desc-pro {
                    font-size: clamp(1rem, 2vw, 1.25rem);
                    line-height: 1.6;
                    color: rgba(255, 255, 255, 0.85);
                    max-width: 650px;
                    margin-bottom: 3rem;
                    animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .cta-btns {
                    display: flex;
                    gap: 1.5rem;
                    animation: fadeInUp 1.4s cubic-bezier(0.2, 0.8, 0.2, 1);
                }

                .floating-shape {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 50%;
                    filter: blur(40px);
                    z-index: 1;
                    pointer-events: none;
                }

                @media (max-width: 768px) {
                    .hero-section {
                        padding: 6rem 0 8rem 0;
                        text-align: center;
                        clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
                    }
                    .cta-btns {
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-desc-pro {
                        margin-left: auto;
                        margin-right: auto;
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
