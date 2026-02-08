import React from 'react';

const SkillBadge = ({ title, items }) => (
    <div style={{
        backgroundColor: 'white',
        padding: '1.25rem',
        borderRadius: '8px',
        boxShadow: 'var(--shadow-small)',
        border: '1px solid #eee',
        borderTop: '3px solid var(--bumn-blue)'
    }}>
        <strong style={{ display: 'block', color: 'var(--bumn-blue)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.5px' }}>{title}</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {items.map((item, idx) => (
                <span key={idx} style={{
                    fontSize: '0.85rem',
                    backgroundColor: 'var(--bumn-gray-light)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    color: 'var(--bumn-text-dark)',
                    fontWeight: '500'
                }}>
                    {item}
                </span>
            ))}
        </div>
    </div>
);

const TimelineItem = ({ year, title, subtitle, description, highlights }) => (
    <div className="timeline-container" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', position: 'relative' }}>
        <div className="timeline-year" style={{ fontWeight: '800', color: 'var(--bumn-blue)', fontSize: '1rem', textAlign: 'right', paddingTop: '0.2rem' }}>
            {year}
        </div>
        <div style={{
            flex: '0 0 2px',
            backgroundColor: 'var(--bumn-gold)',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: '0.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'var(--bumn-blue)',
                border: '3px solid white'
            }}></div>
        </div>
        <div style={{ flex: 1, paddingBottom: '1rem' }}>
            <h4 style={{ color: 'var(--bumn-dark-blue)', marginBottom: '0.25rem', fontSize: '1.1rem' }}>{title}</h4>
            <div style={{ color: 'var(--bumn-blue)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{subtitle}</div>
            {description && <p style={{ color: '#444', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0.5rem' }}>{description}</p>}
            {highlights && (
                <ul style={{ paddingLeft: '1.2rem', margin: 0, color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {highlights.map((h, i) => <li key={i} style={{ marginBottom: '0.25rem' }}>{h}</li>)}
                </ul>
            )}
        </div>
    </div>
);

const About = () => {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'white' }}>
            <style>{`
                .about-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
                    gap: 4rem;
                    align-items: start;
                }
                .section-header-bumn {
                    color: var(--bumn-dark-blue);
                    margin-bottom: 2.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 1.4rem;
                    font-weight: 800;
                    letter-spacing: 0.5px;
                    border-bottom: 2px solid var(--bumn-gold);
                    padding-bottom: 0.5rem;
                    width: fit-content;
                }
                .about-sticky-sidebar {
                    position: sticky;
                    top: 120px;
                }
                @media (max-width: 992px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    .about-sticky-sidebar {
                        position: static;
                    }
                }
                .timeline-year {
                    flex: 0 0 110px;
                }
                @media (max-width: 480px) {
                    .timeline-year {
                        flex: 0 0 75px !important;
                        font-size: 0.75rem !important;
                        text-align: left !important;
                        margin-bottom: 0.5rem;
                        padding-left: 20px;
                    }
                    .timeline-container {
                        gap: 0.5rem !important;
                        flex-direction: column;
                        margin-bottom: 2.5rem !important;
                    }
                }
            `}</style>
            <div className="container">
                <h2 className="section-title">Profil & Rekam Jejak</h2>

                <div className="about-grid">
                    <div>
                        {/* ✅ WORK EXPERIENCE SECTION */}
                        <div className="section-header-bumn">
                            ✅ WORK EXPERIENCE / PENGALAMAN KERJA
                        </div>

                        <div style={{ marginTop: '1rem' }}>
                            <TimelineItem
                                year="2021 – Sekrg"
                                title="Admin Produksi & Operator Produksi"
                                subtitle="CV Rina Gori | Yogyakarta"
                                description="Perusahaan penyedia bahan baku utama pembuatan gudeg (nangka muda)."
                                highlights={[
                                    "Mengelola administrasi produksi dan pencatatan stok bahan baku.",
                                    "Mengoperasikan proses produksi sesuai standar kualitas dan target harian.",
                                    "Melakukan kontrol kualitas bahan mentah sebelum distribusi.",
                                    "Berkoordinasi dengan tim untuk memastikan proses produksi berjalan tepat waktu."
                                ]}
                            />
                            <TimelineItem
                                year="Feb – Sep 2024"
                                title="Admin Marketplace, Kurir, dan Sales (Rangkap)"
                                subtitle="Herbal Berkah Group | Yogyakarta"
                                description="UMKM bidang jamu tradisional yang dipasarkan melalui marketplace online dan distribusi offline."
                                highlights={[
                                    "Mengelola penjualan online melalui marketplace (input produk, update stok, dan order).",
                                    "Menangani komunikasi pelanggan, follow-up pesanan, dan pelayanan konsumen.",
                                    "Melakukan pengiriman produk langsung ke pelanggan serta distribusi ke mitra offline.",
                                    "Membantu pemasaran produk secara langsung melalui strategi sales lapangan."
                                ]}
                            />
                            <TimelineItem
                                year="Nov '24 – Jul '25"
                                title="Kurir & Sales Lapangan"
                                subtitle="Chaitea Teh Tarik | Yogyakarta"
                                description="UMKM pengembangan teh tarik Indonesia dengan distribusi ke lebih dari 200 warung di Yogyakarta."
                                highlights={[
                                    "Mengelola distribusi produk ke jaringan warung dan mitra usaha.",
                                    "Menjalankan strategi sales langsung untuk memperluas pasar dan menjaga relasi pelanggan.",
                                    "Memastikan pengiriman tepat waktu serta menjaga kualitas produk selama pengantaran.",
                                    "Membantu peningkatan penjualan melalui pendekatan promosi dan komunikasi langsung."
                                ]}
                            />
                            <TimelineItem
                                year="2023 – 2024"
                                title="Tim Kreatif (Desain Grafis & Administrasi)"
                                subtitle="Saestu Printing | Yogyakarta"
                                description="Perusahaan jasa printing (poster, baju, dan kebutuhan cetak online/offline)."
                                highlights={[
                                    "Mendesain kebutuhan visual seperti poster, banner, dan desain cetak lainnya.",
                                    "Membantu administrasi pesanan dan pengelolaan data pelanggan.",
                                    "Berkoordinasi dengan tim produksi untuk memastikan hasil cetak sesuai desain.",
                                    "Mendukung pelayanan pelanggan online maupun offline terkait permintaan desain."
                                ]}
                            />
                        </div>

                        {/* 🎓 EDUCATION SECTION */}
                        <div className="section-header-bumn" style={{ marginTop: '4rem' }}>
                            🎓 EDUCATION / RIWAYAT PENDIDIKAN
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <TimelineItem
                                year="2019 – 2025"
                                title="Universitas AMIKOM Yogyakarta"
                                subtitle="S1 Perencanaan Wilayah dan Kota (PWK)"
                                description="Lulus tahun 2025 (mengalami cuti akademik selama ±1,5 tahun karena kondisi kesehatan)."
                            />
                            <TimelineItem
                                year="2016 – 2019"
                                title="SMK Negeri 1 Seyegan"
                                subtitle="Teknik Konstruksi Batu dan Beton"
                            />
                            <TimelineItem
                                year="2013 – 2016"
                                title="MTs Negeri 1 Seyegan"
                            />
                            <TimelineItem
                                year="2007 – 2013"
                                title="SD Negeri 1 Margoagung"
                            />
                        </div>
                    </div>

                    <div className="about-sticky-sidebar" style={{
                        backgroundColor: 'var(--bumn-gray-light)',
                        padding: '2.5rem',
                        borderRadius: '12px',
                        border: '1px solid #e0e0e0',
                    }}>
                        <h4 style={{ color: 'var(--bumn-dark-blue)', marginBottom: '1.5rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '2px solid var(--bumn-gold)', paddingBottom: '0.5rem', display: 'inline-block' }}>
                            Kompetensi Teknis
                        </h4>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <SkillBadge
                                title="Spatial Analysis"
                                items={['ArcMap / ArcGIS Pro', 'QGIS', 'Global Mapper', 'Google Earth Eng.']}
                            />
                            <SkillBadge
                                title="Design & Modeling"
                                items={['AutoCAD', 'SketchUp', 'Adobe Illustrator', 'Photoshop']}
                            />
                            <SkillBadge
                                title="Planning Skills"
                                items={['RTRW / RDTR', 'KLHS Analysis', 'Social Impact Assessment']}
                            />
                            <SkillBadge
                                title="Data Management"
                                items={['PostgreSQL/PostGIS', 'Tableau', 'Excel Advanced']}
                            />
                        </div>

                        <div style={{ marginTop: '2.5rem', padding: '1rem', backgroundColor: 'var(--bumn-blue)', borderRadius: '8px', color: 'white', textAlign: 'center' }}>
                            <div style={{ fontSize: '0.8rem', opacity: 0.9, marginBottom: '0.25rem' }}>Status Profesional</div>
                            <div style={{ fontWeight: '700' }}>Siap untuk Kolaborasi</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
