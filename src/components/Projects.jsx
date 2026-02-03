import React, { useState } from 'react';

const ProjectCard = ({ title, category, date, description, images, onOpen }) => (
    <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
        border: '1px solid #eee',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column'
    }}>
        <div style={{ height: '8px', backgroundColor: 'var(--bumn-blue)' }}></div>
        <div style={{ padding: '1.5rem', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--bumn-blue)',
                    textTransform: 'uppercase'
                }}>{category}</span>
                <span style={{ fontSize: '0.8rem', color: '#999' }}>{date}</span>
            </div>
            <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: 'var(--bumn-text-dark)',
                lineHeight: '1.4'
            }}>{title}</h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>{description}</p>
        </div>
        <div style={{
            padding: '1rem 1.5rem',
            borderTop: '1px solid #f0f0f0',
            backgroundColor: '#f9f9f9'
        }}>
            <button
                onClick={() => onOpen(images, title)}
                style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: 'var(--bumn-blue)',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer'
                }}>
                Selengkapnya &rarr;
            </button>
        </div>
    </div>
);

const Projects = () => {
    const [modalImages, setModalImages] = useState(null);
    const [modalTitle, setModalTitle] = useState('');

    const openModal = (imgs, title) => {
        if (imgs && imgs.length > 0) {
            setModalImages(imgs);
            setModalTitle(title);
        }
    };

    const closeModal = () => {
        setModalImages(null);
        setModalTitle('');
    };

    return (
        <section id="projects" className="section container">
            <h2 className="section-title">Publikasi & Proyek Terkini</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                <ProjectCard
                    title="Analisis Dampak Kawasan Kumuh di Sleman"
                    category="Studi Kasus"
                    date="Oktober 2024"
                    description="Studi komprehensif mengenai dampak sosio-spasial program perbaikan kawasan kumuh menggunakan pemetaan GIS dan survei lapangan."
                />
                <ProjectCard
                    title="Prespektif dan strategi petani terhadap perubahan fungsi lahan pertanian untuk pembangunan exit tol jogja-bawen kalurahan banyurejo kepanewon tempel"
                    category="Jurnal Nasional"
                    date="Agustus 2024"
                    description="Penelitian yang menganalisis dampak pembangunan infrastruktur jalan tol terhadap perubahan orientasi dan fungsi lahan pertanian di wilayah Banyurejo."
                />
                <ProjectCard
                    title="Dukungan Perencanaan Tata Ruang (RTRW/RDTR)"
                    category="Proyek Pemerintah"
                    date="Juni 2024"
                    description="Pendampingan teknis dalam penyusunan peta tematik akurasi tinggi untuk dokumen perencanaan daerah."
                />
                <ProjectCard
                    title="Pemetaan Zonasi Rawan Bencana"
                    category="Analisis GIS"
                    date="Maret 2024"
                    description="Identifikasi zona rawan bencana banjir menggunakan analisis overlay dan data topografi untuk mitigasi risiko."
                    images={["/assets/projects/peta-banjir.jpg", "/assets/projects/peta-banjir-gamping.png"]}
                    onOpen={openModal}
                />
            </div>

            {/* Modal for viewing images */}
            {modalImages && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                    padding: '2rem'
                }} onClick={closeModal}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '1rem',
                        borderRadius: '8px',
                        maxWidth: '90%',
                        maxHeight: '90%',
                        overflowY: 'auto',
                        position: 'relative'
                    }} onClick={e => e.stopPropagation()}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '1rem',
                            borderBottom: '1px solid #eee',
                            paddingBottom: '0.5rem',
                            position: 'sticky',
                            top: 0,
                            backgroundColor: 'white',
                            zIndex: 1
                        }}>
                            <h4 style={{ margin: 0, color: 'var(--bumn-blue)' }}>{modalTitle}</h4>
                            <button onClick={closeModal} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1 }}>&times;</button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {modalImages.map((img, index) => (
                                <div key={index}>
                                    <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem' }}>Dokumen {index + 1}</p>
                                    <img src={img} alt={`${modalTitle} - ${index}`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
