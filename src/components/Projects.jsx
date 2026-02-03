import React from 'react';

const ProjectCard = ({ title, category, date, description }) => (
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
            <a href="#" style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--bumn-blue)' }}>Selengkapnya &rarr;</a>
        </div>
    </div>
);

const Projects = () => {
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
                />
            </div>
        </section>
    );
};

export default Projects;
