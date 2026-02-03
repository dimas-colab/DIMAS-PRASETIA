import React from 'react';

const About = () => {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <h2 className="section-title">Profil Profesional</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
                    <div>
                        <h3 style={{ color: 'var(--bumn-dark-blue)', marginBottom: '1rem' }}>Latar Belakang</h3>
                        <p style={{ marginBottom: '1.5rem', color: '#444' }}>
                            Sebagai lulusan <strong>Perencanaan Wilayah dan Kota</strong>, saya memiliki dedikasi penuh terhadap pengembangan wilayah yang berkelanjutan dan terstruktur. Fokus utama saya adalah menjembatani data spasial teknis dengan kebijakan perencanaan yang dapat diimplementasikan.
                        </p>
                        <p style={{ marginBottom: '1.5rem', color: '#444' }}>
                            Pengalaman saya mencakup analisis dampak lingkungan permukiman, pemetaan digital, hingga penyusunan dokumen perencanaan formal. Saya percaya bahwa perencanaan yang baik dimulai dari data yang akurat.
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: 'var(--bumn-gray-light)',
                        padding: '2rem',
                        borderRadius: '8px',
                        borderLeft: '4px solid var(--bumn-gold)'
                    }}>
                        <h4 style={{ color: 'var(--bumn-dark-blue)', marginBottom: '1.5rem' }}>Kompetensi Teknis</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <strong style={{ display: 'block', color: 'var(--bumn-blue)', fontSize: '0.9rem' }}>SPATIAL ANALYSIS</strong>
                                <span style={{ fontSize: '0.95rem' }}>ArcGIS, QGIS, Global Mapper</span>
                            </div>
                            <div>
                                <strong style={{ display: 'block', color: 'var(--bumn-blue)', fontSize: '0.9rem' }}>DESIGN & MODELING</strong>
                                <span style={{ fontSize: '0.95rem' }}>AutoCAD, SketchUp, Adobe Illustrator</span>
                            </div>
                            <div>
                                <strong style={{ display: 'block', color: 'var(--bumn-blue)', fontSize: '0.9rem' }}>PLANNING DOCUMENTS</strong>
                                <span style={{ fontSize: '0.95rem' }}>RTRW, RDTR, KLHS Analysis</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
