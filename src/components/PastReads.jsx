import React from 'react';

const PastReads = () => {
    const reads = [
        {
            title: "Dasar-Dasar Perencanaan Wilayah",
            author: "Bappenas",
            link: "https://penerbit.lipi.go.id/",
            category: "Buku"
        },
        {
            title: "Analisis Spasial Komprehensif dengan ArcGIS",
            author: "Esri Indonesia",
            link: "https://www.esri.com/id-id/home",
            category: "Jurnal/Artikel"
        },
        {
            title: "Konsep Smart City untuk Masa Depan Pembangunan",
            author: "Urban Planning Review",
            link: "https://www.urbanplanning.com",
            category: "Publikasi"
        }
    ];

    return (
        <section id="past-reads" className="section" style={{ backgroundColor: 'var(--bumn-gray-light)' }}>
            <div className="container">
                <h2 className="section-title">Past Reads</h2>
                <p style={{ color: '#555', marginBottom: '2rem', maxWidth: '800px', lineHeight: '1.6' }}>
                    Kumpulan literatur dan referensi yang menjadi basis pengetahuan saya dalam bidang Perencanaan Wilayah dan Kota serta Teknologi Geospasial.
                </p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    {reads.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '1.25rem 2rem',
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                border: '1px solid #eee',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = 'translateX(10px)';
                                e.currentTarget.style.borderColor = 'var(--bumn-blue)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = 'translateX(0)';
                                e.currentTarget.style.borderColor = '#eee';
                            }}
                        >
                            <div>
                                <h4 style={{ color: 'var(--bumn-dark-blue)', margin: 0, fontWeight: '700' }}>{item.title}</h4>
                                <span style={{ color: '#888', fontSize: '0.85rem' }}>{item.author} — {item.category}</span>
                            </div>
                            <span style={{ color: 'var(--bumn-blue)', fontWeight: 'bold' }}>Baca →</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastReads;
