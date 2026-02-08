import React, { useState } from 'react';

const ProjectCard = ({ title, category, date, location, description, highlights, pdfUrl, onOpen }) => (
    <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
        border: '1px solid #eee',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative'
    }} className="project-card-hover">
        <div style={{ height: '6px', backgroundColor: category.includes('Mandiri') ? 'var(--bumn-gold)' : 'var(--bumn-blue)' }}></div>
        <div style={{ padding: '2rem', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    color: category.includes('Mandiri') ? 'var(--bumn-dark-blue)' : 'var(--bumn-blue)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    backgroundColor: category.includes('Mandiri') ? 'var(--bumn-gold)' : 'rgba(0, 80, 157, 0.05)',
                    padding: '4px 10px',
                    borderRadius: '4px'
                }}>{category}</span>
                <span style={{ fontSize: '0.8rem', color: '#888', fontWeight: '500' }}>{date}</span>
            </div>

            <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '0.75rem',
                color: 'var(--bumn-dark-blue)',
                lineHeight: '1.4',
                fontWeight: '800'
            }}>{title}</h3>

            <div style={{ fontSize: '0.85rem', color: 'var(--bumn-blue)', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>📍</span> {location}
            </div>

            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.7', marginBottom: '1.5rem' }}>{description}</p>

            {highlights && (
                <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem', letterSpacing: '1px' }}>Fokus Kajian / Topik:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {highlights.map((h, idx) => (
                            <span key={idx} style={{
                                fontSize: '0.75rem',
                                color: '#444',
                                backgroundColor: '#f5f5f5',
                                padding: '4px 10px',
                                borderRadius: '100px',
                                border: '1px solid #eee'
                            }}>{h}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>

        <div style={{
            padding: '1.25rem 2rem',
            borderTop: '1px solid #f0f0f0',
            backgroundColor: '#fcfcfc',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem'
        }}>
            <button
                onClick={() => onOpen(title, highlights, location, description)}
                style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: '#666',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                }}>
                Info Detail
            </button>

            {pdfUrl && (
                <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        fontSize: '0.85rem',
                        fontWeight: '800',
                        color: 'white',
                        backgroundColor: '#d63031', // PDF Red
                        padding: '8px 16px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 2px 4px rgba(214, 48, 49, 0.2)'
                    }}>
                    <span>📄</span> Lihat PDF
                </a>
            )}
        </div>
    </div>
);

const Projects = () => {
    const [modalData, setModalData] = useState(null);

    const openModal = (title, highlights, location, description) => {
        setModalData({ title, highlights, location, description });
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalData(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="section" style={{ backgroundColor: 'var(--bumn-gray-light)' }}>
            <style>{`
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2.5rem;
                }
                .project-card-hover:hover {
                    transform: translateY(-8px);
                    box-shadow: var(--shadow-card-hover);
                }
                .interest-badge {
                    background: white;
                    border: 2px solid var(--bumn-blue);
                    color: var(--bumn-dark-blue);
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    transition: all 0.2s ease;
                }
                .interest-badge:hover {
                    background: var(--bumn-blue);
                    color: white;
                }
                .folder-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--bumn-dark-blue);
                    color: white;
                    padding: 8px 16px;
                    border-radius: 4px 20px 20px 4px;
                    font-weight: 800;
                    font-size: 0.9rem;
                    margin-bottom: 2rem;
                    box-shadow: 4px 4px 0 var(--bumn-gold);
                }
                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    .interest-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 5rem auto' }}>
                    <div style={{
                        display: 'inline-block',
                        backgroundColor: 'var(--bumn-gold)',
                        color: 'var(--bumn-dark-blue)',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        fontWeight: '800',
                        marginBottom: '1rem'
                    }}>📌 PORTOFOLIO PUBLIKASI & RISET</div>
                    <h2 className="section-title" style={{ marginTop: '0.5rem' }}>🏛️ Research & Publication Portfolio</h2>
                    <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.8', marginTop: '1.5rem' }}>
                        Halaman ini berisi kumpulan karya ilmiah, penelitian mandiri, serta proyek riset kolaboratif yang
                        pernah saya kerjakan selama studi di bidang Perencanaan Wilayah dan Kota. Seluruh penelitian
                        berfokus pada isu strategis seperti transformasi ruang, perencanaan kota, pengembangan kawasan,
                        serta penerapan konsep smart city.
                    </p>
                </div>

                {/* Independent Research */}
                <div style={{ marginBottom: '5rem' }}>
                    <div className="folder-tag">📂 FOLDER 1 — PENELITIAN MANDIRI</div>
                    <div className="projects-grid">
                        <ProjectCard
                            category="Penelitian Mandiri"
                            date="2024-2025"
                            location="Kel. Banyurejo, Kab. Sleman"
                            title="Persepsi dan Strategi Adaptasi Petani terhadap Perubahan Fungsi Lahan Pertanian untuk Pembangunan Exit Tol Jogja–Bawen"
                            description="Penelitian ini menganalisis bagaimana persepsi petani terhadap alih fungsi lahan pertanian akibat pembangunan infrastruktur strategis Exit Tol Jogja–Bawen serta dampak sosial-ekonominya."
                            highlights={['Alih fungsi lahan', 'Infrastruktur Strategis', 'Adaptasi Petani', 'Ketahanan Pangan']}
                            pdfUrl="#" // Placeholder PDF
                            onOpen={openModal}
                        />
                    </div>
                </div>

                {/* Collaborative Research */}
                <div style={{ marginBottom: '6rem' }}>
                    <div className="folder-tag">📂 FOLDER 2 — PENELITIAN KELOMPOK / PROYEK KOLABORATIF</div>
                    <div className="projects-grid">
                        <ProjectCard
                            category="Penelitian Kelompok"
                            date="Studio Kota"
                            location="Kota Cirebon"
                            title="Analisis dan Perencanaan Studio Kota Kecamatan Lemahwungkuk"
                            description="Mengkaji aspek tata guna lahan, infrastruktur, dan isu lingkungan perkotaan untuk menghasilkan konsep arahan rancang kota yang berkelanjutan."
                            highlights={['Struktur Ruang', 'Infrastruktur Kota', 'Pelayanan Umum', 'Regenerasi Kawasan']}
                            pdfUrl="#" // Placeholder PDF
                            onOpen={openModal}
                        />
                        <ProjectCard
                            category="Penelitian Kelompok"
                            date="Studio Kawasan"
                            location="Kab. Sleman, DIY"
                            title="Analisis dan Perencanaan Studio Kawasan Kecamatan Minomartani"
                            description="Identifikasi potensi Minomartani sebagai kawasan strategis penyangga kota, menghasilkan strategi peningkatan kualitas permukiman."
                            highlights={['Pengembangan Permukiman', 'Dinamika Lahan', 'Kawasan Penyangga', 'Tata Ruang Baru']}
                            pdfUrl="#" // Placeholder PDF
                            onOpen={openModal}
                        />
                        <ProjectCard
                            category="Penelitian Kelompok"
                            date="Studio Smart City"
                            location="Kota Surakarta (Solo)"
                            title="Analisis dan Perencanaan Studio Smart City Kota Surakarta (Solo)"
                            description="Menganalisis strategi pengembangan kota berbasis teknologi, inovasi layanan publik, serta kesiapan tata kelola pemerintahan digital."
                            highlights={['Smart Governance', 'Smart Mobility', 'Smart Economy', 'Digital Transformation']}
                            pdfUrl="#" // Placeholder PDF
                            onOpen={openModal}
                        />
                    </div>
                </div>

                {/* Research Interests */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '4rem 3rem',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    border: '1px solid #eee'
                }}>
                    <h3 style={{
                        color: 'var(--bumn-dark-blue)',
                        textAlign: 'center',
                        marginBottom: '3rem',
                        fontWeight: '800',
                        fontSize: '1.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem'
                    }}>🔍 Research Interest</h3>

                    <div className="interest-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <div className="interest-badge"><span>🏗️</span> Perencanaan Wilayah dan Kota</div>
                        <div className="interest-badge"><span>🔄</span> Transformasi Ruang & Alih Fungsi Lahan</div>
                        <div className="interest-badge"><span>🗺️</span> Pemetaan GIS & Analisis Spasial</div>
                        <div className="interest-badge"><span>🌿</span> Pengembangan Kawasan Berkelanjutan</div>
                        <div className="interest-badge"><span>🌐</span> Smart City & Perencanaan Berbasis Teknologi</div>
                    </div>
                </div>
            </div>

            {/* Simple Technical Modal */}
            {modalData && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(0, 41, 107, 0.9)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 2000,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '1rem'
                }} onClick={closeModal}>
                    <div style={{
                        backgroundColor: 'white', maxWidth: '800px', width: '100%',
                        borderRadius: '16px', padding: '3rem', position: 'relative',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }} onClick={e => e.stopPropagation()}>
                        <button onClick={closeModal} style={{
                            position: 'absolute', top: '1rem', right: '1rem',
                            background: '#f5f5f5', border: 'none', width: '40px', height: '40px',
                            borderRadius: '50%', fontSize: '1.5rem', cursor: 'pointer'
                        }}>&times;</button>

                        <h3 style={{ fontSize: '1.8rem', color: 'var(--bumn-dark-blue)', marginBottom: '1.5rem', fontWeight: '800' }}>{modalData.title}</h3>
                        <div style={{ color: 'var(--bumn-blue)', fontWeight: '700', marginBottom: '1.5rem' }}>📍 {modalData.location}</div>

                        <p style={{ lineHeight: '1.8', color: '#444', marginBottom: '2rem' }}>{modalData.description}</p>

                        <h4 style={{ fontSize: '0.9rem', color: 'var(--bumn-blue)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '1px' }}>Topik / Fokus Utama:</h4>
                        <ul style={{ paddingLeft: '1.2rem', color: '#555' }}>
                            {modalData.highlights.map((h, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{h}</li>)}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
