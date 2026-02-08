import React from 'react';

const MappingResults = () => {
    const maps = [
        {
            title: "Analisis Daerah Rawan Banjir - Gamping",
            image: "/assets/projects/peta-banjir-gamping.png",
            description: "Pemetaan spasial untuk identifikasi zona rawan genangan di wilayah Gamping menggunakan analisis overlay multi-parameter."
        },
        {
            title: "Pemetaan Kerentanan Banjir Makro",
            image: "/assets/projects/peta-banjir.jpg",
            description: "Visualisasi data geospasial untuk mendukung perencanaan mitigasi bencana tingkat kabupaten/kota."
        }
    ];

    return (
        <section id="mapping" className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <h2 className="section-title">Hasil Pemetaan</h2>
                <p style={{ color: '#555', marginBottom: '3rem', maxWidth: '800px', lineHeight: '1.6' }}>
                    Kumpulan hasil analisis geospasial dan pemetaan tematik yang disusun menggunakan perangkat lunak GIS (ArcGIS, QGIS) untuk mendukung pengambilan keputusan berbasis data spasial.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {maps.map((map, idx) => (
                        <div key={idx} style={{
                            backgroundColor: '#f9f9f9',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            border: '1px solid #eee'
                        }}>
                            <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                                <img
                                    src={map.image}
                                    alt={map.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ color: 'var(--bumn-blue)', marginBottom: '0.75rem', fontWeight: '700' }}>{map.title}</h3>
                                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>{map.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MappingResults;
