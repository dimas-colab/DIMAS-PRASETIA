import React, { useState } from 'react';

const MappingResults = () => {
    const [selectedMap, setSelectedMap] = useState(null);

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
        <section id="mapping" className="section" style={{
            backgroundColor: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <style>{`
                .map-card {
                    background: rgba(255, 255, 255, 0.8);
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    border: 1px solid rgba(0, 80, 157, 0.1);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    cursor: pointer;
                    position: relative;
                }
                .map-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0, 80, 157, 0.15);
                    border-color: var(--bumn-blue);
                }
                .map-image-wrap {
                    width: 100%;
                    height: 350px;
                    overflow: hidden;
                    position: relative;
                }
                .map-image-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }
                .map-card:hover img {
                    transform: scale(1.1);
                }
                .map-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0, 43, 92, 0.8), transparent);
                    display: flex;
                    align-items: flex-end;
                    padding: 2rem;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .map-card:hover .map-overlay {
                    opacity: 1;
                }
                .map-zoom-icon {
                    background: var(--bumn-gold);
                    color: var(--bumn-dark-blue);
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0.5);
                    opacity: 0;
                    transition: all 0.3s ease;
                }
                .map-card:hover .map-zoom-icon {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
                .lightbox-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 26, 61, 0.95);
                    z-index: 2000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    backdrop-filter: blur(10px);
                    animation: fadeIn 0.3s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .lightbox-content {
                    max-width: 90%;
                    max-height: 90vh;
                    position: relative;
                }
                .lightbox-image {
                    width: 100%;
                    height: auto;
                    border-radius: 12px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                }
                .close-lightbox {
                    position: absolute;
                    top: -40px;
                    right: -40px;
                    background: white;
                    color: black;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    font-size: 1.5rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>

            <div className="container">
                <div style={{ position: 'relative', marginBottom: '4rem' }}>
                    <h2 className="section-title">Hasil Pemetaan</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--bumn-gold)', marginTop: '-1.5rem', marginBottom: '2rem' }}></div>
                    <p style={{ color: '#555', maxWidth: '800px', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        Visualisasi analisis geospasial tematik yang mengintegrasikan data lapangan dan citra satelit untuk solusi perencanaan wilayah yang tepat sasaran.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '3rem'
                }}>
                    {maps.map((map, idx) => (
                        <div key={idx} className="map-card" onClick={() => setSelectedMap(map)}>
                            <div className="map-image-wrap">
                                <img src={map.image} alt={map.title} />
                                <div className="map-overlay">
                                    <h3 style={{ color: 'white', margin: 0, fontWeight: '800', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{map.title}</h3>
                                </div>
                                <div className="map-zoom-icon">🔍</div>
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                    <span style={{ background: 'var(--bumn-blue)', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '800' }}>GIS ANALYSIS</span>
                                    <span style={{ color: '#888', fontSize: '0.8rem', fontWeight: '600' }}>Spatial Planning</span>
                                </div>
                                <h3 style={{ color: 'var(--bumn-dark-blue)', marginBottom: '1rem', fontWeight: '800', lineHeight: '1.3' }}>{map.title}</h3>
                                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>{map.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedMap && (
                <div className="lightbox-overlay" onClick={() => setSelectedMap(null)}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="close-lightbox" onClick={() => setSelectedMap(null)}>&times;</button>
                        <img src={selectedMap.image} alt={selectedMap.title} className="lightbox-image" />
                        <div style={{ color: 'white', marginTop: '1.5rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>{selectedMap.title}</h3>
                            <p style={{ opacity: 0.8 }}>{selectedMap.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MappingResults;
